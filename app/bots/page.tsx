// app/bots/page.tsx
export default function BotsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="mb-10">
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

        <div className="space-y-4">
          {/* Klaviyo */}
          <div className="flex items-center gap-5 rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-sm">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
              ✉️
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl">Klaviyo</h3>
              <p className="mt-1 text-gray-600 leading-snug">
                Turn every visitor into a repeat buyer. Send personalized emails and SMS that recover abandoned carts, welcome new customers, and drive repeat purchases — all on autopilot.
              </p>
            </div>
            <a 
              href="https://www.klaviyo.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition whitespace-nowrap"
            >
              Visit
            </a>
          </div>

          {/* Zapier */}
          <div className="flex items-center gap-5 rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-sm">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-3xl">
              ⚡
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl">Zapier</h3>
              <p className="mt-1 text-gray-600 leading-snug">
                Automate your entire business without code. Connect your website, payments, email, CRM, and thousands of apps so new orders, leads, and updates flow automatically while you focus on growth.
              </p>
            </div>
            <a 
              href="https://zapier.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition whitespace-nowrap"
            >
              Visit
            </a>
          </div>

          {/* Unibot */}
          <div className="flex items-center gap-5 rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-sm">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
              ⭐
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl">Unibot</h3>
              <p className="mt-1 text-gray-600 leading-snug">
                Trade crypto directly inside Telegram — faster and smarter. Place limit orders, copy top traders, and protect against MEV bots without ever leaving your chat app.
              </p>
            </div>
            <a 
              href="https://unibot.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition whitespace-nowrap"
            >
              Visit
            </a>
          </div>

          {/* Slack */}
          <div className="flex items-center gap-5 rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-sm">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
              💬
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl">Slack</h3>
              <p className="mt-1 text-gray-600 leading-snug">
                Keep your team aligned and productive. Centralize conversations, automate workflows, and get AI-powered summaries so nothing falls through the cracks.
              </p>
            </div>
            <a 
              href="https://slack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition whitespace-nowrap"
            >
              Visit
            </a>
          </div>

          {/* BotFather - Now using 🤖 emoji */}
          <div className="flex items-center gap-5 rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-sm">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-3xl">
              🤖
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl">BotFather</h3>
              <p className="mt-1 text-gray-600 leading-snug">
                Create and manage powerful Telegram bots in minutes. Build custom tools, customer support bots, or automated services without writing complex code.
              </p>
            </div>
            <a 
              href="https://core.telegram.org/bots" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition whitespace-nowrap"
            >
              Visit
            </a>
          </div>

          {/* AirTrack */}
          <div className="flex items-center gap-5 rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-sm">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-3xl">
              ✈️
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl">AirTrack</h3>
              <p className="mt-1 text-gray-600 leading-snug">
                Never overpay for flights again. Get real-time price tracking and AI-powered predictions so you know exactly when to book for the lowest fares.
              </p>
            </div>
            <a 
              href="https://airtrackbot.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition whitespace-nowrap"
            >
              Visit
            </a>
          </div>
        </div>
      </div>

      {/* Physical Robots - Bottom Card */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">Physical Robots</h2>
        <div className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-sm flex items-center gap-5">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-4xl text-white">
            🤖
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-xl">Explore Robots</h3>
            <p className="mt-1 text-gray-600 leading-snug pr-6">
              Real-world humanoid robots, robot dogs, warehouse bots, and home assistants you can actually buy or deploy today. From research platforms to enterprise solutions that save time, reduce risk, and automate physical work.
            </p>
          </div>
          <a 
            href="/physical"
            className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition whitespace-nowrap flex-shrink-0"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}