"use client";

import { useEffect, useState } from "react";

function drift(current: number, min: number, max: number, step: number) {
  const direction = Math.random() > 0.5 ? 1 : -1;
  let next = current + direction * Math.floor(Math.random() * step);

  if (next > max) next = max;
  if (next < min) next = min;

  return next;
}

export default function Home() {
  const [humans, setHumans] = useState(8123041227);
  const [bots, setBots] = useState(4308214672);
  const [agents, setAgents] = useState(12418553);

  useEffect(() => {
    const interval = setInterval(() => {
      setHumans((prev) => drift(prev, 8123000000, 8123500000, 5));
      setBots((prev) => drift(prev, 4308000000, 4312000000, 9));
      setAgents((prev) => drift(prev, 12300000, 12500000, 3));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const ratio = (bots / humans).toFixed(2);
  const bpiScore = 68.7;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#f2f7ff_18%,#e7f0ff_40%,#dce9ff_58%,#16233f_82%,#060b16_100%)] text-zinc-900">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-8">
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-[18px] bg-[linear-gradient(135deg,#6f8cff_0%,#60b8e8_48%,#2cd39b_100%)] shadow-[0_12px_40px_rgba(74,144,226,0.28)]" />
            <div className="leading-tight">
              <div className="text-2xl font-semibold tracking-tight text-zinc-900">
                B4Bots
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a href="/" className="transition hover:text-zinc-900">
              Home
            </a>
            <a href="/bots" className="transition hover:text-zinc-900">
              Bots
            </a>
            <a
              href="/submit"
              className="rounded-full border border-zinc-300 bg-white/60 px-4 py-2 transition hover:border-zinc-400 hover:text-zinc-900"
            >
              Submit
            </a>
          </nav>
        </header>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-white/60 bg-white/45 p-6 shadow-[0_20px_80px_rgba(130,160,220,0.16)] backdrop-blur md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.95fr]">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
                Bot population, at a glance.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
                Live counters for people, humanoid bots, and digital bots — an
                index that summarizes the balance.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/bots"
                  className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  Browse bots
                </a>
                <a
                  href="/submit"
                  className="rounded-full border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
                >
                  Submit a listing
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/70 bg-[rgba(255,255,255,0.42)] p-5 shadow-[0_10px_30px_rgba(130,160,220,0.10)] backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-zinc-500">
                    Bot Population Index (BPI)
                  </div>

                  <div className="mt-3 flex flex-wrap items-baseline gap-3">
                    <div className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
                      {bpiScore} / 100
                    </div>
                    <div className="text-2xl text-zinc-600">Human-heavy</div>
                  </div>
                </div>

                <div className="text-sm text-zinc-500">0–100</div>
              </div>

              <div className="mt-6 h-4 rounded-full bg-zinc-300/80">
                <div
                  className="h-4 rounded-full bg-[linear-gradient(90deg,#2cd39b_0%,#59b9df_52%,#6f78ff_100%)]"
                  style={{ width: `${bpiScore}%` }}
                />
              </div>

              <div className="mt-3 grid grid-cols-3 text-sm text-zinc-500">
                <div>Bot-heavy</div>
                <div className="text-center">Balanced</div>
                <div className="text-right">Human-heavy</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-white/70 bg-[rgba(255,255,255,0.42)] p-5 shadow-[0_10px_30px_rgba(130,160,220,0.10)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Live estimate
              </div>

              <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Active
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard
                label="People"
                value={humans.toLocaleString()}
                note="Estimated humans alive"
                tone="white"
              />

              <StatCard
                label="Bots"
                value={bots.toLocaleString()}
                note="Estimated active bot activity"
                tone="gray"
              />

              <StatCard
                label="AI Agents"
                value={agents.toLocaleString()}
                note="Autonomous software agents"
                tone="white"
              />

              <StatCard
                label="Bot / Human Ratio"
                value={ratio}
                note="Bots relative to humans"
                tone="gray"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  note,
  tone,
}: {
  label: string;
  value: string;
  note: string;
  tone: "white" | "gray";
}) {
  return (
    <div
      className={`rounded-[1.35rem] border p-5 shadow-sm backdrop-blur transition-all duration-500 ${
        tone === "gray"
          ? "border-white/70 bg-[rgba(240,246,255,0.52)]"
          : "border-white/70 bg-white/70"
      }`}
    >
      <div className="text-xs text-zinc-500 mb-2">{label}</div>
      <div className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
        {value}
      </div>
      <div className="mt-2 text-xs text-zinc-500">{note}</div>
    </div>
  );
}