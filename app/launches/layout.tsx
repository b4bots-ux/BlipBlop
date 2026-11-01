import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bot Launches — New Robots, AI Agents & Bots, Dated & Sourced",
  description:
    "Every bot launch that matters, as it lands — new robots, AI agents, and automation bots, curated weekly with dates, sources, and community upvotes. The B4Bots launch feed.",
  alternates: { canonical: "/launches" },
};

export default function LaunchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
