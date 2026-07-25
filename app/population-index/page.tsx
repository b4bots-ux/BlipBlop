export default function PopulationIndexPage() {
  const factors = [
    {
      title: "Estimated humans alive",
      description:
        "Global population estimates pulled from public demographic data, used as the denominator for the index.",
    },
    {
      title: "Estimated active bot activity",
      description:
        "Automated traffic and bot-driven interactions observed across the web, including crawlers, scrapers, and scripted accounts.",
    },
    {
      title: "Autonomous software agents",
      description:
        "AI agents capable of independently planning and executing multi-step tasks, counted separately from simple bots.",
    },
    {
      title: "Active internet users",
      description:
        "People estimated to be online at a given moment, used to contextualize how much of all internet activity is human-driven.",
    },
  ]

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
          Bot Population Index
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
          What the BPI measures, and how it&apos;s built
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
          The Bot Population Index (BPI) is a single 0–100 score that
          summarizes the balance between human and bot activity across the
          web at a given moment. A score near 0 means activity skews
          human-heavy, a score near 100 means it skews bot-heavy, and 50 is an
          even split.
        </p>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">
            How the score is calculated
          </h2>
          <p className="mt-3 text-sm leading-7 text-neutral-600">
            The BPI blends four live signals &mdash; estimated humans alive,
            estimated bot activity, autonomous agent activity, and active
            internet users &mdash; into a weighted ratio of bot-driven
            activity to total activity. The result is normalized to a 0–100
            scale and labeled Bot-heavy, Balanced, or Human-heavy depending on
            where it falls.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {factors.map((factor) => (
            <div
              key={factor.title}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                {factor.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-7 text-neutral-500">
          Figures update live and are estimates meant to illustrate the
          relative scale of bot vs. human activity &mdash; they are not
          precise measurements.
        </p>
      </div>
    </main>
  )
}
