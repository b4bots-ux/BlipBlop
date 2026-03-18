export default function HomePage() {
  const humans = "8,123,041,217";
  const bots = "4,308,214,693";
  const agents = "12,418,541";
  const ratio = "0.53";
  const bpi = 68.7;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#eef4ff,white_55%,#dbe6ff)] text-zinc-900">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-white/60 shadow-[0_20px_80px_rgba(50,80,180,0.18)] backdrop-blur">
          <div className="px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-indigo-500" />
                <div>
                  <div className="text-xl font-semibold tracking-tight">B4Bots</div>
                  <div className="text-sm text-zinc-500">Bot Population Index</div>
                </div>
              </div>

              <nav className="hidden items-center gap-6 text-sm text-zinc-600 sm:flex">
                <a href="/" className="transition hover:text-zinc-900">
                  Home
                </a>
                <a href="/bots" className="transition hover:text-zinc-900">
                  Bots
                </a>
                <a
                  href="/submit"
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-zinc-700 shadow-sm transition hover:text-zinc-900"
                >
                  Submit
                </a>
              </nav>
            </div>

            <section className="mt-8 rounded-[1.75rem] bg-white/50 p-5 sm:p-8">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                Bot population, at a glance.
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
                Live counters for people, humanoid bots, and digital bots — an
                index that summarizes the balance.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/bots"
                  className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
                >
                  Browse bots
                </a>
                <a
                  href="/submit"
                  className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition hover:text-zinc-900"
                >
                  Submit a listing
                </a>
              </div>
            </section>

            <section className="mt-6 rounded-[1.75rem] bg-white/50 p-5 sm:p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-500">Bot Population Index (BPI)</p>
                  <div className="mt-2 flex flex-wrap items-baseline gap-3">
                    <span className="text-3xl font-semibold tracking-tight sm:text-5xl">
                      {bpi} / 100
                    </span>
                    <span className="text-2xl text-zinc-600 sm:text-4xl">
                      Human-heavy
                    </span>
                  </div>
                </div>
                <p className="text-sm text-zinc-400">0–100</p>
              </div>

              <div className="h-4 w-full overflow-hidden rounded-full bg-zinc-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500"
                  style={{ width: `${bpi}%` }}
                />
              </div>

              <div className="mt-3 grid grid-cols-3 text-sm text-zinc-500">
                <span className="text-left">Bot-heavy</span>
                <span className="text-center">Balanced</span>
                <span className="text-right">Human-heavy</span>
              </div>
            </section>

            <section className="mt-6 rounded-[1.75rem] bg-white/50 p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <p className="text-[11px] font-medium tracking-[0.35em] text-zinc-500 sm:text-xs">
                  LIVE ESTIMATE
                </p>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
                  Active
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="min-w-0 rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-zinc-500">People</p>
                  <p className="mt-4 text-[clamp(1.8rem,7vw,3rem)] font-semibold leading-none tracking-tight text-zinc-900 [overflow-wrap:anywhere]">
                    {humans}
                  </p>
                  <p className="mt-4 text-sm text-zinc-500">
                    Estimated humans alive
                  </p>
                </div>

                <div className="min-w-0 rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-zinc-500">Bots</p>
                  <p className="mt-4 text-[clamp(1.8rem,7vw,3rem)] font-semibold leading-none tracking-tight text-zinc-900 [overflow-wrap:anywhere]">
                    {bots}
                  </p>
                  <p className="mt-4 text-sm text-zinc-500">
                    Estimated active bot activity
                  </p>
                </div>

                <div className="min-w-0 rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-zinc-500">AI Agents</p>
                  <p className="mt-4 text-[clamp(1.8rem,7vw,3rem)] font-semibold leading-none tracking-tight text-zinc-900 [overflow-wrap:anywhere]">
                    {agents}
                  </p>
                  <p className="mt-4 text-sm text-zinc-500">
                    Autonomous software agents
                  </p>
                </div>

                <div className="min-w-0 rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-zinc-500">Bot / Human Ratio</p>
                  <p className="mt-4 text-[clamp(1.8rem,7vw,3rem)] font-semibold leading-none tracking-tight text-zinc-900 [overflow-wrap:anywhere]">
                    {ratio}
                  </p>
                  <p className="mt-4 text-sm text-zinc-500">
                    Bots relative to humans
                  </p>
                </div>
              </div>
            </section>

            <footer className="mt-8 border-t border-white/40 pt-6 text-sm text-zinc-500">
              Explore robots and digital agents.
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
