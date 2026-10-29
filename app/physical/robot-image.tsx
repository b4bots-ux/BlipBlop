"use client";

import { useState } from "react";

// Robot photo with a graceful fallback: if the image host is unreachable,
// show a clean placeholder panel instead of a broken-image icon.
export default function RobotImage({
  src,
  name,
  company,
  className = "",
}: {
  src: string;
  name: string;
  company: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-white/10 to-white/[0.02] text-center ${className}`}
        role="img"
        aria-label={name}
      >
        <span className="text-5xl font-semibold text-white/25">
          {name.charAt(0)}
        </span>
        <span className="px-4 text-sm font-medium text-white/80">{name}</span>
        <span className="text-xs uppercase tracking-[0.22em] text-white/40">
          {company}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
