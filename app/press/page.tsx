export default function PressPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 min-h-screen bg-white text-gray-900">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-sm text-gray-600 mb-4">
          <span>📰</span> Press
        </div>
        <h1 className="text-5xl font-semibold tracking-tight">Press &amp; Media</h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          Covering the growth of the bot population? Start here — what B4Bots
          tracks, the numbers behind it, and how to reach us.
        </p>
      </div>

      <div className="space-y-10 leading-relaxed text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">What B4Bots is</h2>
          <p>
            B4Bots is an independent index of the world&apos;s bots. We track
            three populations in one place: automation tools and software bots,
            AI agents that can plan and act on their own, and physical robots —
            humanoids, robot dogs, and warehouse machines. The centerpiece is
            the Bot Population Index (BPI), a single score that tracks how fast
            the bot population is growing and where.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Fast facts</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500">Bot Population Index</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">54.6<span className="text-base text-gray-400"> / 100</span></p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500">Populations tracked</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">3</p>
              <p className="text-sm text-gray-500">Bots · Agents · Robots</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500">Listings and counting</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">32</p>
              <p className="text-sm text-gray-500">Curated entries, growing</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Story angles</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>The bot population curve.</strong> The BPI turns a noisy
              flood of launches into one trackable number — how many bots, of
              what kind, growing how fast.
            </li>
            <li>
              <strong>The humanoid race.</strong> Figure 03 is working at BMW,
              Boston Dynamics&apos; Atlas is in production, and Tesla&apos;s
              Optimus is in mass production — the index watches all of them.
            </li>
            <li>
              <strong>The agent wave.</strong> Software agents like ChatGPT
              Agent, Manus, and Devin moved from demos to daily work in a
              single year.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Boilerplate</h2>
          <p className="rounded-2xl bg-gray-50 p-5 text-sm leading-6">
            B4Bots is an independent index and directory of bots, AI agents,
            and physical robots. Its Bot Population Index (BPI) tracks the
            growth and mix of the world&apos;s bot population across software
            automation, autonomous AI agents, and real-world machines, with
            curated listings and community submissions. Learn more at
            b4bots.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Media contact</h2>
          <p>
            Interviews, data requests, and corrections:{' '}
            <a href="mailto:contact@b4bots.com" className="underline">
              contact@b4bots.com
            </a>
            . To suggest a listing, use the{' '}
            <a href="/submit" className="underline">
              submit page
            </a>{' '}
            or email{' '}
            <a href="mailto:submit@b4bots.com" className="underline">
              submit@b4bots.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
