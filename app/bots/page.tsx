"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Bot = {
  name: string;
  description: string;
  href: string;
  icon: ReactNode;
};

const automationBots: Bot[] = [
  {
    name: "Klaviyo",
    description: "Email and SMS automation for online stores",
    href: "https://www.klaviyo.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M4 5h10.5l5.5 4.5-5.5 4.5H4V5z" />
      </svg>
    ),
  },
  {
    name: "Zapier",
    description: "Automate workflows across apps",
    href: "https://zapier.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M13.8 2 5.5 12h5l-1.5 10L18.5 12h-5.1L13.8 2z" />
      </svg>
    ),
  },
  {
    name: "Unibot",
    description: "Trade crypto directly inside Telegram",
    href: "https://unibot.app/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 2.2 14.7 9.3 21.8 12l-7.1 2.7L12 21.8l-2.7-7.1L2.2 12l7.1-2.7L12 2.2zm0 4.1-1.5 4.2L6.3 12l4.2 1.5L12 17.7l1.5-4.2 4.2-1.5-4.2-1.5L12 6.3z" />
      </svg>
    ),
  },
  {
    name: "Slack",
    description: "Team communication and workflow automation",
    href: "https://slack.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M9.6 2a2.1 2.1 0 1 0 0 4.2h2.1V4.1A2.1 2.1 0 0 0 9.6 2Zm0 5.4H4.1a2.1 2.1 0 1 0 0 4.2h5.5a2.1 2.1 0 1 0 0-4.2Zm12.3 4.3a2.1 2.1 0 1 0-4.2 0v2.1h2.1a2.1 2.1 0 1 0 0-4.2h-2.1Zm-5.4 0v5.5a2.1 2.1 0 1 0 4.2 0v-5.5a2.1 2.1 0 1 0-4.2 0ZM14.4 22a2.1 2.1 0 1 0 0-4.2h-2.1v2.1a2.1 2.1 0 0 0 2.1 2.1Zm0-5.4h5.5a2.1 2.1 0 1 0 0-4.2h-5.5a2.1 2.1 0 1 0 0 4.2ZM2 14.4a2.1 2.1 0 1 0 4.2 0v-2.1H4.1a2.1 2.1 0 0 0-2.1 2.1Zm5.4 0V8.9a2.1 2.1 0 1 0-4.2 0v5.5a2.1 2.1 0 1 0 4.2 0Z" />
      </svg>
    ),
  },
  {
    name: "BotFather",
    description: "Telegram’s official tool for creating and managing bots",
    href: "https://telegram.me/BotFather",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M20.7 4.2 3.7 10.8c-1.2.5-1.2 1.1-.2 1.4l4.4 1.4 1.7 5.2c.2.6.1.9.8.9.5 0 .7-.2 1-.5l2.1-2 4.4 3.2c.8.5 1.4.2 1.6-.8l3-14.1c.3-1.2-.4-1.8-1.2-1.3ZM8.7 13.2l9-5.7c.5-.3.9-.1.5.2l-7.4 6.7-.3 3.3-1.8-4.5Z" />
      </svg>
    ),
  },
  {
    name: "AirTrack",
    description: "Track flights with real-time alerts and updates",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="m21 11-7.8-3.1L10.4 2H8.9l1.3 5.9L4 5.4 2.8 6.6l5.1 4.1L2 13l.8 1.4 7.1-.9 2.9 6h1.5l-1.2-6 7.9-1.1V11Z" />
      </svg>
    ),
  },
];

const robotBots: Bot[] = [
  {
    name: "Explore Robots",
    description: "Real-world machines and humanoid robotics",
    href: "/robots",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M9 2h6v2h2.5A2.5 2.5 0 0 1 20 6.5v9A2.5 2.5 0 0 1 17.5 18H15v2h1.5a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2H9v-2H6.5A2.5 2.5 0 0 1 4 15.5v-9A2.5 2.5 0 0 1 6.5 4H9V2Zm8 4h-10a.5.5 0 0 0-.5.5v9c0 .3.2.5.5.5h10c.3 0 .5-.2.5-.5v-9A.5.5 0 0 0 17 6Zm-8 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-6.8 5h7.6a3.8 3.8 0 0 1-7.6 0Z" />
      </svg>
    ),
  },
];

function BotCard({ bot }: { bot: Bot }) {
  const isInternal = bot.href.startsWith("/");

  const content = (
    <div className="flex items-center gap-3 rounded-2xl border border-black/6 bg-white px-4 py-4 shadow-[0_2px_12px_rgba(15,23,42,0.05)] transition hover:shadow-[0_6px_24px_rgba(15,23,42,0.08)]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef7f4] text-[#18222f]">
        {bot.icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[17px] font-semibold tracking-[-0.02em] text-[#1a2230]">
          {bot.name}
        </div>
        <p className="mt-1 text-[13px] leading-5 text-[#667085]">
          {bot.description}
        </p>
      </div>

      <div className="shrink-0">
        <span className="inline-flex items-center justify-center rounded-full bg-[#3b6df6] px-4 py-2 text-sm font-semibold text-white">
          Visit
        </span>
      </div>
    </div>
  );

  if (isInternal) {
    return <Link href={bot.href}>{content}</Link>;
  }

  return (
    <a href={bot.href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

function Section({ title, items }: { title: string; items: Bot[] }) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-[18px] font-semibold tracking-[-0.02em] text-[#2a3441]">
        {title}
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <BotCard key={item.name} bot={item} />
        ))}
      </div>
    </section>
  );
}

export default function BotsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <div className="mx-auto w-full max-w-3xl px-4 pb-10 pt-5 sm:px-6">
        <div className="rounded-[28px] bg-white px-5 pb-8 pt-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:px-6">
          <div className="mb-6">
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#4b5563] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              <span aria-hidden="true">←</span>
              Back
            </Link>

            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-[#1b2430]">
              Bots
            </h1>

            <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#667085]">
              Discover bots, automation tools, and digital agents powering modern
              workflows.
            </p>
          </div>

          <Section title="Automation Tools" items={automationBots} />
          <Section title="Physical Robots" items={robotBots} />
        </div>
      </div>
    </main>
  );
}