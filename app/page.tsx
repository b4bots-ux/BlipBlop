"use client";

import { useEffect, useMemo, useState } from "react";

type Rates = {
  peoplePerSecond: number;
  humanoidPerSecond: number;
  digitalPerSecond: number;
};

type Baseline = {
  startMs: number;
  people: number;
  humanoid: number;
  digital: number;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function formatInt(n: number) {
  return Math.floor(n).toLocaleString();
}

function format1(n: number) {
  return (Math.round(n * 10) / 10).toFixed(1);
}

export default function Page() {
  // --- Demo baselines (edit these later if you want) ---
  const baseline: Baseline = useMemo(
    () => ({
      startMs: Date.now(),
      people: 8_137_000_000,
      humanoid: 326_000_000,
      digital: 5_600_000_000,
    }),
    []
  );

  const rates: Rates = useMemo(
    () => ({
      // totally demo numbers — tune later
      peoplePerSecond: 2.2,
      humanoidPerSecond: 0.35,
      digitalPerSecond: 5.5,
    }),
    []
  );

  // Prevent hydration mismatch: render stable values on server, start ticking on client.
  const [nowMs, setNowMs] = useState<number>(0);

  useEffect(() => {
    let raf = 0;

    const tick = () => {
      setNowMs(Date.now());
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const elapsedSeconds =
    nowMs === 0 ? 0 : Math.max(0, (nowMs - baseline.startMs) / 1000);

  const people = baseline.people + elapsedSeconds * rates.peoplePerSecond;
  const humanoidBots = baseline.humanoid + elapsedSeconds * rates.humanoidPerSecond;
  const digitalBots = baseline.digital + elapsedSeconds * rates.digitalPerSecond;

  const totalBots = humanoidBots + digitalBots;

  // Human–Bot Ratio (humans per bot)
  const humanBotRatio = people / Math.max(1, totalBots);

  // Bot Population Index (0–100): 0 = bot-heavy, 100 = human-heavy
  const bpi = clamp(humanBotRatio * 50, 0, 100);

  const bpiLabel =
    bpi >= 67 ? "Human-heavy" : bpi >= 33 ? "Balanced" : "Bot-heavy";

  const ratioLine =
    humanBotRatio >= 1
      ? `${format1(humanBotRatio)} humans per bot`
      : `${format1(1 / Math.max(0.000001, humanBotRatio))} bots per human`;

  const meterPct = Math.round(bpi);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0f17",
        color: "#e8eefc",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        padding: "28px 18px 60px",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          maxWidth: 980,
          margin: "0 auto 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 14,
              background:
                "linear-gradient(135deg, rgba(99,102,241,1), rgba(34,197,94,1))",
            }}
          />
          <div>
            <div style={{ fontWeight: 700, letterSpacing: 0.3 }}>B4Bots</div>
            <div style={{ opacity: 0.7, fontSize: 12 }}>
              Bot Population Index
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            UI-only demo
          </span>
          <span
            style={{
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            Smooth updates
          </span>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 980, margin: "0 auto 18px" }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.1, margin: "0 0 10px" }}>
          Bot population, at a glance.
        </h1>
        <p style={{ opacity: 0.8, margin: 0, maxWidth: 720 }}>
          Live counters for people, humanoid bots, and digital bots — plus a
          single index that summarizes the balance.
        </p>
      </section>

      {/* Summary row */}
      <section
        style={{
          maxWidth: 980,
          margin: "0 auto 18px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 12,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 12,
          }}
        >
          <div
            style={{
              borderRadius: 16,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ opacity: 0.7, fontSize: 12 }}>Bot Population Index (BPI)</div>
              <div style={{ opacity: 0.7, fontSize: 12 }}>0–100</div>
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <div style={{ fontSize: 26, fontWeight: 800 }}>
                {bpi.toFixed(1)} / 100
              </div>
              <div style={{ opacity: 0.8 }}>{bpiLabel}</div>
            </div>

            {/* Meter */}
            <div
              style={{
                height: 10,
                borderRadius: 999,
                background: "rgba(255,255,255,0.10)",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div
                style={{
                  width: `${meterPct}%`,
                  height: "100%",
                  background:
                    "linear-gradient(90deg, rgba(34,197,94,1), rgba(99,102,241,1))",
                }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, opacity: 0.7 }}>
              <span>Bot-heavy</span>
              <span>Balanced</span>
              <span>Human-heavy</span>
            </div>
          </div>

          <div
            style={{
              borderRadius: 16,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              padding: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div>
              <div style={{ opacity: 0.7, fontSize: 12 }}>Human–Bot Ratio</div>
              <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>
                {ratioLine}
              </div>
            </div>
            <span
              style={{
                fontSize: 12,
                padding: "6px 10px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                whiteSpace: "nowrap",
              }}
            >
              LIVE
            </span>
          </div>
        </div>
      </section>

      {/* Three clocks */}
      <section
        style={{
          maxWidth: 980,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}
      >
        <StatCard
          title="People"
          subtitle="Estimated humans alive"
          value={formatInt(people)}
        />
        <StatCard
          title="Humanoid Bots"
          subtitle="Physical robots with human-like form"
          value={formatInt(humanoidBots)}
        />
        <StatCard
          title="Digital Bots"
          subtitle="Agents, scripts, automated accounts"
          value={formatInt(digitalBots)}
        />
      </section>

      {/* Footer */}
      <footer
        style={{
          maxWidth: 980,
          margin: "26px auto 0",
          opacity: 0.7,
          fontSize: 12,
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <span>© {new Date().getFullYear()} B4Bots</span>
        <span>Built with Next.js</span>
      </footer>
    </main>
  );
}

function StatCard(props: { title: string; subtitle: string; value: string }) {
  return (
    <div
      style={{
        borderRadius: 16,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.10)",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>{props.title}</div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>{props.subtitle}</div>
        </div>
        <span
          style={{
            fontSize: 12,
            padding: "6px 10px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            height: "fit-content",
          }}
        >
          LIVE
        </span>
      </div>

      <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: 0.2 }}>
        {props.value}
      </div>
    </div>
  );
}