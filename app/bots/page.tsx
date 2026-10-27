"use client";

// app/bots/page.tsx
import { useMemo, useState } from "react";

type Bot = {
  name: string;
  description: string;
  emoji: string;
  iconBg: string;
  href: string;
};

const automationBots: Bot[] = [
  {
    name: "Klaviyo",
    description:
      "Turn every visitor into a repeat buyer. Send personalized emails and SMS that recover abandoned carts, welcome new customers, and drive repeat purchases — all on autopilot.",
    emoji: "✉️",
    iconBg: "bg-emerald-100",
    href: "https://www.klaviyo.com/",
  },
  {
    name: "Zapier",
    description:
      "Automate your entire business without code. Connect your website, payments, email, CRM, and 8,000+ apps — now with AI agents that can handle multi-step work for you while you focus on growth.",
    emoji: "⚡",
    iconBg: "bg-amber-100",
    href: "https://zapier.com/",
  },
  {
    name: "Make",
    description:
      "Design powerful automations visually. Make connects your apps and services with drag-and-drop scenarios that can branch, filter, and process data — a favorite for teams that outgrow simple triggers.",
    emoji: "🧩",
    iconBg: "bg-indigo-100",
    href: "https://www.make.com/",
  },
  {
    name: "n8n",
    description:
      "The automation platform built for the AI era. Create workflows and AI agents that connect your tools, your data, and large language models — self-host it for free or use the cloud version.",
    emoji: "🔗",
    iconBg: "bg-pink-100",
    href: "https://n8n.io/",
  },
  {
    name: "3Commas",
    description:
      "Automate your crypto trading with rule-based bots. Run grid, DCA, and signal-based strategies that trade around the clock across major exchanges.",
    emoji: "📈",
    iconBg: "bg-blue-100",
    href: "https://3commas.io/",
  },
  {
    name: "Intercom",
    description:
      "Resolve customer questions instantly with Fin, Intercom's AI support agent. It answers from your help center, handles routine tickets end to end, and escalates the tricky ones to your team.",
    emoji: "🎧",
    iconBg: "bg-sky-100",
    href: "https://www.intercom.com/",
  },
  {
    name: "Manychat",
    description:
      "Turn conversations into customers. Manychat automates Instagram, WhatsApp, and Messenger chats — answering questions, capturing leads, and sending offers while you sleep.",
    emoji: "💬",
    iconBg: "bg-teal-100",
    href: "https://manychat.com/",
  },
];

function BotRow({ bot }: { bot: Bot }) {
  return (
    <div className="flex items-center gap-4 px-4 py-4 transition hover:bg-gray-50 sm:px-5">
      <div
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-xl ${bot.iconBg}`}
      >
        {bot.emoji}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-gray-900">{bot.name}</h3>
        <p className="mt-0.5 line-clamp-1 text-sm text-gray-500 sm:line-clamp-none">
          {bot.description}
        </p>
      </div>
      <a
        href={bot.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 inline-flex items-center gap-1 rounded-full border border-gray-200 px-3.5 py-1.5 text-xs font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-100"
      >
        Visit
        <span aria-hidden className="text-[10px]">↗</span>
      </a>
    </div>
  );
}

export default function BotsPage() {
  const [query, setQuery] = useState("");

  const filteredBots = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return automationBots;
    return automationBots.filter(
      (bot) =>
        bot.name.toLowerCase().includes(q) ||
        bot.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="mb-10">
        <a href="/" className="mb-6 inline-flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 shadow-sm" />
          <span className="text-lg font-semibold tracking-tight">B4Bots</span>
        </a>
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-sm text-gray-600 mb-4">
          <span>🤖</span> Bots & Automation
        </div>
        <h1 className="text-5xl font-semibold tracking-tight">Bots</h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          Discover bots, automation tools, and digital agents powering modern workflows.
        </p>
      </div>

      {/* Automation Tools */}
      <div className="mb-12">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Automation Tools</h2>
          <span className="text-sm text-gray-400">
            {filteredBots.length} bot{filteredBots.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="relative mb-6">
          <span
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            🔍
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter bots by name or keyword"
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-100"
          />
        </div>

        <div className="divide-y divide-gray-100 rounded-2xl border border-gray-200">
          {filteredBots.length > 0 ? (
            filteredBots.map((bot) => <BotRow key={bot.name} bot={bot} />)
          ) : (
            <p className="px-5 py-8 text-center text-sm text-gray-400">
              No bots match &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      </div>

      {/* Physical Robots - internal page, styled distinctly from the list above */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">Physical Robots</h2>
        <a
          href="/physical"
          className="group flex items-center gap-5 rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 transition hover:border-gray-300 hover:shadow-md"
        >
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-4xl text-white">
            🤖
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-xl">Explore Robots</h3>
            <p className="mt-1 text-gray-600 leading-snug pr-6">
              Real-world humanoid robots, robot dogs, warehouse bots, and home assistants you can actually buy or deploy today. From research platforms to enterprise solutions that save time, reduce risk, and automate physical work.
            </p>
          </div>
          <span
            aria-hidden
            className="flex-shrink-0 text-2xl text-gray-400 transition group-hover:translate-x-1 group-hover:text-gray-600"
          >
            →
          </span>
        </a>
      </div>
    </div>
  );
}
