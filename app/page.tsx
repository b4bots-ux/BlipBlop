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

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        const change =
          directionRef.current *
          (Math.random() * volatility + volatility * 0.2);

        if (Math.random() < 0.2) {
          directionRef.current *= -1;
        }

        return decimals === 0
          ? Math.round(prev + change)
          : prev + change;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [volatility, decimals]);

  return <span>{formatNumber(value, decimals)}</span>;
}

export default function HomePage() {
  const stats: Stat[] = useMemo(
    () => [
      {
        label: "People",
        base: 8123041277,
        description: "Estimated humans alive",
        volatility: 3,
      },
      {
        label: "Bots",
        base: 4308214687,
        description: "Estimated active bot activity",
        volatility: 5,
      },
      {
        label: "AI Agents",
        base: 12418569,
        description: "Autonomous software agents",
        volatility: 2,
      },
      {
        label: "Bot / Human Ratio",
        base: 0.53,
        decimals: 2,
        description: "Bots relative to humans",
        volatility: 0.002,
      },
    ],
    []
  );

  return (
    <main className="min-h-screen text-black">
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">

          <h1 className="mb-8 text-3xl font-semibold">B4Bots</h1>

          {/* BPI */}
          <div className="rounded-2xl bg-white/40 p-5 backdrop-blur mb-8">
            <div className="text-sm text-neutral-500">
              Bot Population Index
            </div>

            <div className="mt-3 text-3xl font-semibold">
              68.7 / 100
            </div>

            <div className="mt-2 text-neutral-600">
              Human-heavy
            </div>
          </div>

          {/* LIVE STATS */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/70 p-4"
              >
                <div className="text-sm text-neutral-500">
                  {stat.label}
                </div>

                <div className="mt-2 text-[clamp(1.4rem,5.5vw,2.5rem)] font-semibold leading-tight">
                  <LiveTickerNumber
                    base={stat.base}
                    decimals={stat.decimals ?? 0}
                    volatility={stat.volatility ?? 1}
                  />
                </div>

                <div className="mt-2 text-sm text-neutral-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}