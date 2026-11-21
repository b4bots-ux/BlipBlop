export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #0a1730 0%, #12294f 55%, #243d72 100%)",
        color: "white",
        padding: "64px 72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "#000000",
            color: "white",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          B
        </div>
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>B4Bots</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5 }}>
          Bot Population Index
        </div>
        <div style={{ fontSize: 34, color: "#bcd0f5", lineHeight: 1.3 }}>
          Robots, AI agents &amp; bots — counted.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 14,
          fontSize: 24,
          color: "#dbe7ff",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px 20px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.35)",
          }}
        >
          15 robots
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px 20px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.35)",
          }}
        >
          12 makers
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px 20px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.35)",
          }}
        >
          41 launches
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px 20px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.35)",
          }}
        >
          5 populations
        </div>
      </div>
    </div>
  );
}
