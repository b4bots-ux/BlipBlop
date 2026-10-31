import Link from "next/link";
import { supabase } from "../../lib/supabase";
import FeedClient, { type FeedItem } from "./feed-client";
import SignupForm from "./signup-form";

export const dynamic = "force-dynamic";

type LaunchRow = {
  id: string;
  name: string;
  company: string | null;
  category: string;
  tagline: string;
  url: string | null;
  source_url: string | null;
  launched_on: string;
};

type SubmissionRow = {
  id: string;
  name: string | null;
  website: string | null;
  category: string | null;
  description: string | null;
  created_at: string;
};

function normalizeUrl(raw: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export default async function LaunchesPage() {
  const [launchesRes, submissionsRes, votesRes] = await Promise.all([
    supabase
      .from("launches")
      .select("id, name, company, category, tagline, url, source_url, launched_on")
      .eq("approved", true)
      .order("launched_on", { ascending: false })
      .returns<LaunchRow[]>(),
    supabase
      .from("Bot_submissions")
      .select("id, name, website, category, description, created_at")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .returns<SubmissionRow[]>(),
    supabase.rpc("vote_counts"),
  ]);

  const counts: Record<string, number> = {};
  if (!votesRes.error && Array.isArray(votesRes.data)) {
    for (const row of votesRes.data as { item_key: string; votes: number }[]) {
      counts[row.item_key] = Number(row.votes);
    }
  }

  const items: FeedItem[] = [];

  if (!launchesRes.error && launchesRes.data) {
    for (const l of launchesRes.data) {
      items.push({
        key: `launch:${l.id}`,
        name: l.name,
        company: l.company,
        category: l.category,
        tagline: l.tagline,
        url: normalizeUrl(l.url),
        sourceUrl: normalizeUrl(l.source_url),
        dateISO: l.launched_on,
        community: false,
        communityCategory: null,
      });
    }
  }

  if (!submissionsRes.error && submissionsRes.data) {
    for (const s of submissionsRes.data) {
      if (!s.name) continue;
      items.push({
        key: `submission:${s.id}`,
        name: s.name,
        company: null,
        category: "Community",
        tagline: s.description ?? "",
        url: normalizeUrl(s.website),
        sourceUrl: null,
        dateISO: s.created_at.slice(0, 10),
        community: true,
        communityCategory: s.category,
      });
    }
  }

  items.sort((a, b) => (a.dateISO < b.dateISO ? 1 : a.dateISO > b.dateISO ? -1 : 0));

  const newestMonth = items.length > 0 ? items[0].dateISO.slice(0, 7) : null;
  const thisMonthCount = newestMonth
    ? items.filter((i) => i.dateISO.startsWith(newestMonth)).length
    : 0;

  const loadError = launchesRes.error && items.length === 0;

  return (
    <main className="min-h-screen bg-[#06070a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,140,255,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(0,255,170,0.09),transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
            Launches
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Every bot launch,
            <span className="block text-white/60">as it lands.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            New robots, agents, and bots — curated weekly, dated, and sourced.
            Upvote the ones that matter; the index counts the rest.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/submit"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Submit a launch
            </Link>
            <Link
              href="/physical"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Browse the index
            </Link>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/55">Launches tracked</p>
              <p className="mt-3 text-3xl font-semibold">{items.length}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/55">This month</p>
              <p className="mt-3 text-3xl font-semibold">{thisMonthCount}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        {loadError ? (
          <p className="max-w-xl text-white/60">
            The launch feed is temporarily unavailable. Please check back
            soon — or{" "}
            <Link href="/submit" className="underline">
              submit a launch
            </Link>{" "}
            in the meantime.
          </p>
        ) : (
          <FeedClient items={items} initialCounts={counts} />
        )}

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-xl font-semibold">Know a launch we missed?</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Makers and readers submit launches. Every submission is reviewed
              before it appears here — no exceptions, no pay-to-play.
            </p>
            <Link
              href="/submit"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Submit a launch
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-xl font-semibold">The B4Bots Brief</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              One short email a month: the launches that mattered and how the
              Index moved. The feed above is the source — the Brief is the
              digest.
            </p>
            <div className="mt-5">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
