export default function BotsPage() {
  const bots = [
    {
      name: "Roomba",
      company: "iRobot",
      category: "Home Cleaning Robot",
      description:
        "Autonomous vacuum robot that maps rooms and cleans floors automatically.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Roomba_560.jpg/1280px-Roomba_560.jpg",
      href: "https://www.irobot.com",
      tag: "Trending",
    },
    {
      name: "Amazon Astro",
      company: "Amazon",
      category: "Home Assistant Robot",
      description:
        "A mobile Alexa-powered home robot designed for monitoring and smart home interaction.",
      image:
        "https://m.media-amazon.com/images/I/61f8LhWmKDL._AC_SL1500_.jpg",
      href: "https://www.amazon.com/astro",
      tag: "Home",
    },
    {
      name: "Spot",
      company: "Boston Dynamics",
      category: "Industrial Inspection Robot",
      description:
        "Four-legged robotic platform used for industrial inspection, construction, and research.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9e/Boston_Dynamics_Spot.jpg",
      href: "https://bostondynamics.com/products/spot/",
      tag: "Industrial",
    },
    {
      name: "Stretch",
      company: "Boston Dynamics",
      category: "Warehouse Automation Robot",
      description:
        "Warehouse robot designed to move boxes and unload trucks autonomously.",
      image:
        "https://images.ctfassets.net/daq3tkz6voce/1nWSw8sveq6KCrzK7c7Kzt/4f49dc01ad0573ffb546ea2b785b84bb/Stretch-Hero.png",
      href: "https://bostondynamics.com/products/stretch/",
      tag: "Warehouse",
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_40%,#d9e8ff_68%,#10203d_100%)]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Trending
          </div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Trending Physical Bots
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Popular physical robots people are watching right now.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {bots.map((bot, index) => (
            <article
              key={bot.name}
              className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 shadow-[0_12px_40px_rgba(130,160,220,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(130,160,220,0.18)]"
            >
              <div className="relative">
                <img
                  src={bot.image}
                  alt={bot.name}
                  className="h-56 w-full object-cover"
                />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    #{index + 1}
                  </span>
                  <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur">
                    {bot.tag}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {bot.category}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                      {bot.name}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-500">{bot.company}</p>
                  </div>

                  <div className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                    Physical
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {bot.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
                    Robotics
                  </span>
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
                    Hardware
                  </span>
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
                    Automation
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={bot.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    View robot
                  </a>

                  <span className="text-sm font-medium text-blue-600">
                    Trending now →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}