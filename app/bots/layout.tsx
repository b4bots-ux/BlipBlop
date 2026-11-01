import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Bots — Workflow, Support & Trading Bots Compared",
  description:
    "The automation bots worth knowing — Zapier, Make, n8n, Manychat, Intercom, Klaviyo, 3Commas — what each one does and who it is for. Counted in the B4Bots index.",
  alternates: { canonical: "/bots" },
};

export default function BotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
