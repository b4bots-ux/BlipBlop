// app/bots/page.tsx
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
      "Automate your entire business without code. Connect your website, payments, email, CRM, and thousands of apps so new orders, leads, and updates flow automatically while you focus on growth.",
    emoji: "⚡",
    iconBg: "bg-amber-100",
    href: "https://zapier.com/",
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
    name: "Slack",
    description:
      "Keep your team aligned and productive. Centralize conversations, automate workflows, and get AI-powered summaries so nothing falls through the cracks.",
    emoji: "💬",
    iconBg: "bg-purple-100",
    href: "https://slack.com/",
  },
  {
    name: "Intercom",
    description:
      "Resolve customer questions instantly with an AI support agent. Deflect routine tickets, escalate the tricky ones to your team, and keep every conversation in one inbox.",
    emoji: "🎧",
    iconBg: "bg-sky-100",
    href: "https://www.intercom.com/",
  },
  {
    name: "AirTrack",
    description:
      "Never overpay for flights again. Get real-time price tracking and AI-powered predictions so you know exactly when to book for the lowest fares.",
    emoji: "✈️",
    iconBg: "bg-rose-100",
    href: "https://airtrackbot.com/",
  },
];

function BotCard({ bot }: { bot: Bot }) {
  return (
    <div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-md">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-3xl ${bot.iconBg}`}
      >
        {bot.emoji}
      </div>
      <h3 className="font-semibold text-xl">{bot.name}</h3>
      <p className="mt-2 flex-1 text-gray-600 leading-snug">{bot.description}</p>
      <a
        href={bot.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
      >
        Visit
        <span aria-hidden className="text-xs">↗</span>
      </a>
    </div>
  );
}

export default function BotsPage() {
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
        <h2 className="mb-6 text-2xl font-semibold">Automation Tools</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {automationBots.map((bot) => (
            <BotCard key={bot.name} bot={bot} />
          ))}
        </div>
      </div>

      {/* Physical Robots - internal page, styled distinctly from the external cards above */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">Physical Robots</h2>
        <a
          href="/physical"
          className="group flex items-center gap-5 rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 transition hover:border-gray-300 hover:shadow-md"
        >
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-4xl text-white">
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
