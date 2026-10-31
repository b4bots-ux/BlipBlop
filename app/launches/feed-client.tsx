"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";

export type FeedItem = {
  key: string;
  name: string;
  company: string | null;
  category: string;
  tagline: string;
  url: string | null;
  sourceUrl: string | null;
  dateISO: string;
  community: boolean;
  communityCategory: string | null;
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function dateParts(iso: string): { mon: string; day: string; year: string } {
  const [y, m, d] = iso.split("-").map((p) => parseInt(p, 10));
  return {
    mon: MONTHS[(m ?? 1) - 1] ?? "",
    day: String(d ?? 1),
    year: String(y ?? ""),
  };
}

const FILTERS = ["All", "Robot", "Agent", "Bot", "Community"] as const;
type Filter = (typeof FILTERS)[number];

const FILTER_LABELS: Record<Filter, string> = {
  All: "All",
  Robot: "Robots",
  Agent: "Agents",
  Bot: "Bots",
  Community: "Community",
};

const CHIP_STYLES: Record<string, string> = {
  Robot: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  Agent: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  Bot: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  Community: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
};

const VOTER_KEY_STORAGE = "b4bots_voter_key";
const VOTED_STORAGE = "b4bots_voted_items";

function getOrCreateVoterKey(): string {
  try {
    let key = localStorage.getItem(VOTER_KEY_STORAGE);
    if (!key) {
      key =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `v-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
      localStorage.setItem(VOTER_KEY_STORAGE, key);
    }
    return key;
  } catch {
    return "anonymous";
  }
}

function loadVoted(): string[] {
  try {
    const raw = localStorage.getItem(VOTED_STORAGE);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export default function FeedClient({
  items,
  initialCounts,
}: {
  items: FeedItem[];
  initialCounts: Record<string, number>;
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<"new" | "top">("new");
  const [counts, setCounts] = useState<Record<string, number>>(initialCounts);
  const [voted, setVoted] = useState<Set<string>>(new Set());
  const [pending, setPending] = useState<Set<string>>(new Set());

  useEffect(() => {
    setVoted(new Set(loadVoted()));
  }, []);

  const visible = useMemo(() => {
    const filtered =
      filter === "All" ? items : items.filter((i) => i.category === filter);
    const sorted = [...filtered];
    if (sort === "new") {
      sorted.sort((a, b) =>
        a.dateISO < b.dateISO ? 1 : a.dateISO > b.dateISO ? -1 : 0
      );
    } else {
      sorted.sort((a, b) => {
        const diff = (counts[b.key] ?? 0) - (counts[a.key] ?? 0);
        if (diff !== 0) return diff;
        return a.dateISO < b.dateISO ? 1 : a.dateISO > b.dateISO ? -1 : 0;
      });
    }
    return sorted;
  }, [items, filter, sort, counts]);

  async function toggleVote(item: FeedItem) {
    if (pending.has(item.key)) return;
    const voterKey = getOrCreateVoterKey();
    const hasVoted = voted.has(item.key);

    const nextVoted = new Set(voted);
    const nextCounts = { ...counts };
    if (hasVoted) {
      nextVoted.delete(item.key);
      nextCounts[item.key] = Math.max(0, (nextCounts[item.key] ?? 0) - 1);
    } else {
      nextVoted.add(item.key);
      nextCounts[item.key] = (nextCounts[item.key] ?? 0) + 1;
    }
    setVoted(nextVoted);
    setCounts(nextCounts);
    setPending((p) => new Set(p).add(item.key));
    try {
      localStorage.setItem(VOTED_STORAGE, JSON.stringify(Array.from(nextVoted)));
    } catch {
      // storage unavailable; vote still counts server-side for this session
    }

    const { error } = hasVoted
      ? await supabase.rpc("remove_vote", {
          p_item_key: item.key,
          p_voter_key: voterKey,
        })
      : await supabase.rpc("cast_vote", {
          p_item_key: item.key,
          p_voter_key: voterKey,
        });

    if (error) {
      setVoted(voted);
      setCounts(counts);
      try {
        localStorage.setItem(VOTED_STORAGE, JSON.stringify(Array.from(voted)));
      } catch {
        // ignore
      }
    }
    setPending((p) => {
      const next = new Set(p);
      next.delete(item.key);
      return next;
    });
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? "border-white bg-white text-black"
                  : "border-white/15 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>

        <div className="flex gap-2 text-sm">
          <button
            onClick={() => setSort("new")}
            className={`rounded-full px-3 py-2 font-medium transition ${
              sort === "new" ? "bg-white/10 text-white" : "text-white/50 hover:text-white"
            }`}
          >
            Newest
          </button>
          <button
            onClick={() => setSort("top")}
            className={`rounded-full px-3 py-2 font-medium transition ${
              sort === "top" ? "bg-white/10 text-white" : "text-white/50 hover:text-white"
            }`}
          >
            Most upvoted
          </button>
        </div>
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-white/55">Nothing here yet in this category.</p>
      )}

      <div className="mt-8 space-y-4">
        {visible.map((item) => {
          const d = dateParts(item.dateISO);
          const hasVoted = voted.has(item.key);
          const chipStyle =
            CHIP_STYLES[item.category] ?? "border-white/15 bg-white/5 text-white/70";
          return (
            <article
              key={item.key}
              className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07] sm:gap-6 sm:p-6"
            >
              <div className="flex w-14 flex-shrink-0 flex-col items-center pt-1 text-center">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                  {d.mon}
                </span>
                <span className="mt-1 text-2xl font-semibold leading-none">
                  {d.day}
                </span>
                <span className="mt-1 text-xs text-white/40">{d.year}</span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-lg font-semibold text-white">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${chipStyle}`}
                  >
                    {item.category}
                  </span>
                </div>

                <p className="mt-1 text-sm text-white/50">
                  {item.community
                    ? `Community submission${item.communityCategory ? ` · ${item.communityCategory}` : ""}`
                    : item.company}
                </p>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.tagline}
                </p>

                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs text-white/40 underline-offset-2 hover:text-white/70 hover:underline"
                  >
                    Source
                  </a>
                )}
              </div>

              <div className="flex flex-shrink-0 flex-col items-center pt-1">
                <button
                  onClick={() => toggleVote(item)}
                  disabled={pending.has(item.key)}
                  aria-pressed={hasVoted}
                  aria-label={`Upvote ${item.name}`}
                  className={`flex w-14 flex-col items-center rounded-2xl border px-2 py-2 transition disabled:opacity-60 ${
                    hasVoted
                      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                      : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span className="text-sm leading-none">▲</span>
                  <span className="mt-1 text-sm font-semibold leading-none">
                    {counts[item.key] ?? 0}
                  </span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
