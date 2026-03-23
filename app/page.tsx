"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  label: string;
  base: number;
  decimals?: number;
  description: string;
  volatility?: number;
};

function formatNumber(value: number, decimals = 0) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function LiveTickerNumber({
  base,
  decimals = 0,
  volatility = 1,
}: {
  base: number;
  decimals?: number;
  volatility?: number;
}) {
  const [value, setValue] = useState(base);
  const directionRef = useRef(Math.random() > 0.5 ? 1 : -1);
  const driftRef = useRef((Math.random() - 0.5) * volatility);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (Math.random() < 0.18) directionRef.current *= -1;

        if (Math.random() < 0.22) {
          driftRef.current =
            driftRef.current * 0.6 +
            (Math.random() - 0.5) * volatility * 0.9;
        }

        const noise = (Math.random() - 0.5) * volatility * 0.45;
        const directional = directionRef.current * volatility * 0.22;
        let next = prev + driftRef.current + directional + noise;

        const lowerBound = base - volatility * 18;
        const upperBound = base + volatility * 18;

        if (next < lowerBound) {
          next = lowerBound + Math.random() * volatility * 1.5;
          directionRef.current = 1;
        }

        if (next > upperBound) {
          next = upperBound - Math.random() * volatility * 1.5;
          directionRef.current = -1;
        }

        if (decimals === 0) next = Math.round(next);

        return next;
      });
    }, 900);

    return () => clearInterval(interval);
  }, [base, decimals, volatility]);

  return <span>{formatNumber(value, decimals)}</span>;
}

export default function HomePage() {
  const stats: Stat[] = useMemo(
    () => [
      {
        label: "People",
        base: 8123041277,
        description: "Estimated humans alive",
        volatility: 4,
      },
      {
        label: "Bots",
        base: 4308214687,
        description: "Estimated active bot activity",
        volatility: 7,
      },
      {
        label: "AI Agents",
        base: 12418569,
        description: "Autonomous software agents",
        volatility: 3,
      },
      {
        label: "Bot / Human Ratio",
        base: 0.53,
        decimals: 2,
        description: "Bots relative to humans",
        volatility: 0.0025,
      },
    ],
    []
  );

  return (
    <main className="min-h-screen text-black">
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-14 w-14 rounded-[1.4rem] bg-gradient-to-br from-blue-500 to-emerald-400 shadow-sm sm:h-16 sm:w-16" />
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              B4Bots
            </h1>
          </div>

          <div className="rounded-[2rem] border border-white/50 bg-white/30 p-5 shadow-[0_10px_40px_rgba(21,35,71,0.08)] backdrop-blur-md sm:p-8 md:p-10">
            <div className="max-w-4xl">
              <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
                Bot population, at a glance.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl sm:leading-9">
                Live counters for people, humanoid bots, and digital bots — an
                index that summarizes the balance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/bots"
                  className="inline-flex items-center justify-center rounded-full bg-[#111827] px-8 py-4 text-lg font-medium text-white transition hover:opacity-95"
                >
                  Browse bots
                </a>
                <a
                  href="/submit"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300/80 bg-white/70 px-8 py-4 text-lg font-medium text-neutral-700 transition hover:bg-white"
                >
                  Submit a listing
                </a>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/40 bg-white/38 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md sm:p-7">
              <div className="text-sm font-medium tracking-wide text-neutral-500 sm:text-base">
                Bot Population Index (BPI)
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-[clamp(2.1rem,8.5vw,5rem)] font-semibold leading-none tracking-tight text-[#111827]">
                    68.7 / 100
                  </div>
                  <div className="mt-3 text-xl text-neutral-700 sm:text-4xl">
                    Human-heavy
                  </div>
                </div>

                <div className="shrink-0 text-right text-lg leading-tight text-neutral-500 sm:text-3xl">
                  0–100
                </div>
              </div>

              <div className="mt-8">
                <div className="h-4 w-full rounded-full bg-[#d7dbe4] sm:h-5">
                  <div className="h-4 w-[68.7%] rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 sm:h-5" />
                </div>

                <div className="mt-4 grid grid-cols-3 text-center text-[11px] text-neutral-500 sm:text-2xl">
                  <div>Bot-heavy</div>
                  <div>Balanced</div>
                  <div>Human-heavy</div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] bg-gradient-to-b from-[#d8e0f2]/95 to-[#8e9dc2]/95 p-2 sm:p-4">
              <div className="rounded-[1.6rem] border border-white/35 bg-white/28 p-3 backdrop-blur-md sm:rounded-[2rem] sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-3 sm:mb-6">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-500 sm:text-lg">
                    Live estimate
                  </div>

                  <div className="flex items-center gap-2 text-sm text-neutral-500 sm:text-lg">
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="min-w-0 rounded-[1.35rem] border border-white/30 bg-white/62 px-3 py-4 shadow-[0_6px_18px_rgba(25,40,77,0.05)] sm:rounded-[1.75rem] sm:px-5 sm:py-6"
                    >
                      <div className="text-[0.95rem] text-neutral-500 sm:text-lg">
                        {stat.label}
                      </div>

                      <div className="mt-3 min-w-0 text-[clamp(1.02rem,4.0vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#111827] sm:text-[clamp(1.6rem,4vw,3.1rem)]">
                        <LiveTickerNumber
                          base={stat.base}
                          decimals={stat.decimals ?? 0}
                          volatility={stat.volatility ?? 1}
                        />
                      </div>

                      <div className="mt-3 text-[0.9rem] leading-6 text-neutral-500 sm:mt-4 sm:max-w-[14ch] sm:text-[1.7rem] sm:leading-10">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}