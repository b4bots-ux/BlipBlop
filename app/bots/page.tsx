export default function BotsPage() {
  const bots = [
    {
      name: "Roomba",
      company: "iRobot",
      category: "Home Cleaning Robot",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Roomba_980.jpg",
      href: "https://www.irobot.com",
    },
    {
      name: "Amazon Astro",
      company: "Amazon",
      category: "Home Assistant Robot",
      image:
        "https://cdn.vox-cdn.com/thumbor/6c7Q0J4W0iJ4c2g3sZbG8F3QZ3k=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/69953564/akrales_210928_4780_0011.0.jpg",
      href: "https://www.amazon.com/astro",
    },
    {
      name: "Spot",
      company: "Boston Dynamics",
      category: "Industrial Inspection Robot",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/Boston_Dynamics_Spot.jpg",
      href: "https://bostondynamics.com/products/spot/",
    },
    {
      name: "Stretch",
      company: "Boston Dynamics",
      category: "Warehouse Automation Robot",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Boston_Dynamics_Stretch.jpg",
      href: "https://bostondynamics.com/products/stretch/",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold mb-8">Trending Robots</h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {bots.map((bot) => (
            <a
              key={bot.name}
              href={bot.href}
              target="_blank"
              rel="noreferrer"
              className="overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="h-52 w-full bg-gray-100">
                <img
                  src={bot.image}
                  alt={bot.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4">
                <div className="text-xs text-gray-500">{bot.company}</div>
                <h2 className="text-lg font-semibold">{bot.name}</h2>
                <p className="text-sm text-gray-600">{bot.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}