import Link from "next/link";
import type { Metadata } from "next";
import EnvironmentImage from "./environment-image";

export const metadata: Metadata = {
  title: "Environmental Robots — Cleanup Bots for Rivers, Harbours & Beaches, Counted",
  description:
    "Browse environmental robots — WasteShark, Jellyfishbot, BeBot, The Ocean Cleanup's Interceptor, and Clearbot — cleanup machines that collect trash from water and beaches, with photos, status, and makers by country, tracked in one index.",
  alternates: { canonical: "/environment" },
  openGraph: {
    title: "Environmental Robots — Cleanup Bots, Counted",
    description:
      "The cleanup population — robots that collect the world's trash from harbours, rivers, and beaches, counted in one index.",
    url: "https://www.b4bots.com/environment",
  },
};

type EnvBot = {
  name: string;
  company: string;
  country?: string;
  category: string;
  status: "In service" | "Pre-order" | "In development";
  price: string;
  description: string;
  image: string;
  href: string;
};

const cleanupBots: EnvBot[] = [
  {
    name: "WasteShark",
    company: "RanMarine Technology",
    country: "Netherlands",
    category: "Aquatic drone",
    status: "In service",
    price: "From €37,450",
    description:
      "An all-electric aquadrone that skims floating trash, biomass and oil out of marinas, ports and canals — piloted from shore with a live camera feed, while the Pro tier cleans autonomously with LiDAR. Up to 500 kg of debris a day.",
    image: "/images/environment/wasteshark.svg",
    href: "/environment/wasteshark",
  },
  {
    name: "Jellyfishbot",
    company: "IADYS",
    country: "France",
    category: "Harbour robot",
    status: "In service",
    price: "Contact",
    description:
      "A compact electric harbour robot that trawls floating waste and oil into towed nets — remote-controlled or fully autonomous, covering about 1,000 m² an hour in marinas and industrial ports.",
    image: "/images/environment/jellyfishbot.svg",
    href: "/environment/jellyfishbot",
  },
  {
    name: "BeBot",
    company: "Searial Cleaners",
    country: "France",
    category: "Beach robot",
    status: "In service",
    price: "Contact",
    description:
      "A tracked beach robot that sifts sand 10 cm deep for cigarette butts, bottle caps and microplastics — 100% electric, near-silent, and steered by remote from up to 150 m away.",
    image: "/images/environment/bebot.svg",
    href: "/environment/bebot",
  },
  {
    name: "Interceptor",
    company: "The Ocean Cleanup",
    country: "Netherlands",
    category: "River system",
    status: "In service",
    price: "Not sold",
    description:
      "A stationary, solar-powered river system: a floating barrier funnels plastic onto a conveyor and into dumpsters, stopping it before it reaches the ocean. Deployed by a non-profit — never sold.",
    image: "/images/environment/interceptor.svg",
    href: "/environment/interceptor",
  },
  {
    name: "Clearbot",
    company: "Clear Robotics",
    country: "Hong Kong",
    category: "Aquatic drone",
    status: "In service",
    price: "Contact",
    description:
      "Autonomous electric boats that hunt floating debris with AI vision and log every piece — type, material, GPS — to a live dashboard. Run as a service for ports and cities, not sold off a shelf.",
    image: "/images/environment/clearbot.svg",
    href: "/environment/clearbot",
  },
];

function StatusBadge({ status }: { status: EnvBot["status"] }) {
  const styles: Record<EnvBot["status"], string> = {
    "In service": "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    "Pre-order": "border-amber-400/30 bg-amber-400/10 text-amber-200",
    "In development": "border-white/15 bg-white/5 text-white/70",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function EnvBotCard({ bot }: { bot: EnvBot }) {
  return (
    <Link
      href={bot.href}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/[0.07]"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-black/20">
        <EnvironmentImage
          src={bot.image}
          name={bot.name}
          company={bot.company}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              {bot.company}
              {bot.country ? ` · ${bot.country}` : ""}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {bot.name}
            </h3>
          </div>
          <StatusBadge status={bot.status} />
        </div>

        <div className="flex items-center justify-between text-sm text-white/60">
          <span>{bot.category}</span>
          <span>{bot.price}</span>
        </div>

        <p className="text-sm leading-6 text-white/70">{bot.description}</p>

        <div className="flex items-center justify-between pt-2 text-sm font-medium text-white">
          <span>View robot</span>
          <span className="text-white/40 transition group-hover:text-white">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function EnvironmentPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Environmental Robots — B4Bots Index",
    itemListElement: cleanupBots.map((bot, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: bot.name,
      url: `https://www.b4bots.com${bot.href}`,
    })),
  };

  return (
    <main className="min-h-screen bg-[#06070a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,140,255,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(0,255,170,0.09),transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
                Environmental Robots
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Robots that pick up
                <span className="block text-white/60">
                  after everyone else.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                The cleanup population — bots that spend their days
                collecting the world&apos;s trash from harbours, rivers and
                beaches, so less of it reaches the ocean. Some are steered
                from shore; one never moves at all. All of them counted.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#cleanup"
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Meet the cleanup crew
                </Link>
                <Link
                  href="/physical"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  See the physical robots
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">Cleanup bots tracked</p>
                <p className="mt-3 text-3xl font-semibold">5</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">In service today</p>
                <p className="mt-3 text-3xl font-semibold">5</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">Maker countries</p>
                <p className="mt-3 text-3xl font-semibold">3</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">Rivers with an Interceptor</p>
                <p className="mt-3 text-3xl font-semibold">20+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cleanup" className="mx-auto max-w-7xl px-6 pt-12 pb-20 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/45">
              Water &amp; sand
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Cleaning up now
            </h2>
          </div>
          <Link
            href="/vehicles"
            className="text-sm text-white/65 transition hover:text-white"
          >
            Driverless vehicles →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {cleanupBots.map((bot) => (
            <EnvBotCard key={bot.name} bot={bot} />
          ))}
        </div>
      </section>
    </main>
  );
}
