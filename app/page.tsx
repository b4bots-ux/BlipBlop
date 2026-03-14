"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [humans, setHumans] = useState(8123021033);
  const [humanoidBots, setHumanoidBots] = useState(326000083);
  const [digitalBots, setDigitalBots] = useState(4309999841);

  useEffect(() => {
    const interval = setInterval(() => {
      setHumans((prev) => drift(prev, 0, 4, 8123020000, 8123099999));
      setHumanoidBots((prev) => drift(prev, 1, 8, 325980000, 326120000));
      setDigitalBots((prev) => drift(prev, 1, 10, 4309950000, 4310100000));
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  const weightedBots = useMemo(() => {
    return humanoidBots + Math.round(digitalBots * 0.06);
  }, [humanoidBots, digitalBots]);

  const humansPerBot = useMemo(() => {
    return (humans / weightedBots).toFixed(1);
  }, [humans, weightedBots]);

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
              <div className="text-sm text-zinc-600">Bot Population Index</div>
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

            <GlassCard className="p-5">
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
            </GlassCard>
          </div>

          <div className="mt-8">
            <GlassCard className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Live estimate
                </div>

                <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Active
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <StatCard
                  label="People"
                  value={formatNumber(humans)}
                  note="Estimated humans alive"
                />

                <StatCard
                  label="Humanoid Bots"
                  value={formatNumber(humanoidBots)}
                  note="Physical robots with human-like form"
                />

                <StatCard
                  label="Digital Bots"
                  value={formatNumber(digitalBots)}
                  note="Automated software systems and agents"
                />

                <StatCard
                  label="Human–Bot Ratio"
                  value={`${humansPerBot} humans per bot`}
                  note="Weighted mainly toward humanoid bots, with digital bots counting less"
                />
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </main>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/70 bg-[rgba(255,255,255,0.42)] shadow-[0_10px_30px_rgba(130,160,220,0.10)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

function StatCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/70 bg-[rgba(240,246,255,0.52)] p-5 shadow-sm backdrop-blur">
      <div className="text-sm text-zinc-500">{label}</div>
      <div className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
        {value}
      </div>
      <div className="mt-3 text-sm text-zinc-500">{note}</div>
    </div>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function drift(
  current: number,
  minStep: number,
  maxStep: number,
  floor: number,
  ceiling: number
) {
  const direction = Math.random() > 0.5 ? 1 : -1;
  const magnitude =
    Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep;
  const next = current + direction * magnitude;

  if (next < floor) return floor + magnitude;
  if (next > ceiling) return ceiling - magnitude;
  return next;
}