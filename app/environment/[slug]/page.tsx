// app/environment/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from "next/link";
import type { Metadata } from "next";
import EnvironmentImage from "../environment-image";

type EnvBot = {
  name: string;
  company: string;
  country?: string;
  category: string;
  status: "In service" | "Pre-order" | "In development";
  price: string;
  description: string;
  more: string;
  facts: { label: string; value: string }[];
  image: string;
  href: string;
};

const allBots: EnvBot[] = [
  {
    name: "WasteShark",
    company: "RanMarine Technology",
    country: "Netherlands",
    category: "Aquatic drone",
    status: "In service",
    price: "From €37,450",
    description:
      "An all-electric aquadrone that skims floating trash, biomass and oil out of marinas, ports and canals — piloted from shore with a live camera feed, while the Pro tier cleans autonomously with LiDAR. Up to 500 kg of debris a day.",
    more:
      "The open-mouth floating basket holds 160 litres — up to 60 kg per load, swapped in under a minute — and the Plus model runs up to 8 hours per charge (5 hours on the Classic), with up to 5 km of radio range. WasteShark fleets have worked since 2016: RanMarine counts 110+ deployments across 34 countries.",
    facts: [
      { label: "Collection", value: "Up to 500 kg / day" },
      { label: "Basket", value: "160 L · 60 kg per load" },
      { label: "Runtime", value: "Up to 8 hrs (Plus)" },
      { label: "Control", value: "Remote from shore · autonomous Pro tier" },
      { label: "Radio range", value: "Up to 5 km (Plus)" },
      { label: "Deployments", value: "110+ · 34 countries" },
    ],
    image: "/images/environment/wasteshark.jpg",
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
    more:
      "At 70 × 70 × 48 cm and 20 kg it is built for tight corners bigger craft can't reach, with three multidirectional thrusters, GNSS positioning and obstacle avoidance above and below the surface. Swappable batteries give 6–8 hours per charge, and with sonar and probe accessories it also maps harbour floors (bathymetry to 10–20 m) and measures water quality.",
    facts: [
      { label: "Capacity", value: "80 L waste · 30 L oil" },
      { label: "Coverage", value: "~1,000 m² / hr" },
      { label: "Size", value: "70 × 70 × 48 cm · 20 kg" },
      { label: "Runtime", value: "6–8 hrs per charge" },
      { label: "Control", value: "Remote or autonomous (GNSS)" },
      { label: "Extras", value: "Sonar bathymetry · water-quality probes" },
    ],
    image: "/images/environment/jellyfishbot.jpg",
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
    more:
      "It screens a 130 cm-wide swath at up to 3,000 m² per hour into a 100-litre tray, runs up to 3 hours per charge on batteries topped up by solar panels, and doubles as a workhorse — raking seaweed, levelling sand and towing loads up to 400 kg. BeBots work beaches from Lake Tahoe and the Great Lakes to Bali and Bahrain.",
    facts: [
      { label: "Swath", value: "130 cm wide · 10 cm deep" },
      { label: "Coverage", value: "Up to 3,000 m² / hr" },
      { label: "Runtime", value: "Up to 3 hrs per charge" },
      { label: "Power", value: "100% electric · battery + solar" },
      { label: "Control", value: "Remote · up to 150 m" },
      { label: "Tray", value: "100 L · tows up to 400 kg" },
    ],
    image: "/images/environment/bebot.jpg",
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
    more:
      "The catamaran sits in the river while the current does the work — debris guided into its mouth is lifted out by a permeable conveyor belt, and an automated shuttle distributes it between six dumpster containers on a separate barge, swapped and emptied ashore when full. Solar power means no fuel and minimal labour. More than 20 Interceptors are deployed in rivers from Jamaica to Indonesia, and by the end of 2025 the fleet had intercepted over 48 million kg of trash.",
    facts: [
      { label: "Power", value: "100% solar" },
      { label: "Containers", value: "6 dumpsters · barge-swapped" },
      { label: "Deployed", value: "20+ rivers worldwide" },
      { label: "Intercepted", value: "48M+ kg by end of 2025" },
      { label: "Operator", value: "The Ocean Cleanup · non-profit" },
      { label: "Availability", value: "Not sold — deployed with partners" },
    ],
    image: "/images/environment/interceptor.jpg",
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
    more:
      "The flagship Class 3 is 4.04 m long, solar-charged, runs up to 8 hours and collects up to 200 kg of waste per hour (500 kg payload per mission). Smaller Fetch skimmers handle tight, shallow marinas, and the Alligator variant harvests invasive water hyacinth. Clearbot counts 25+ boats deployed across Hong Kong, India, Singapore, the Philippines and the UAE — sold as Robots-as-a-Service.",
    facts: [
      { label: "Fleet", value: "25+ boats · 5 markets" },
      { label: "Class 3", value: "4.04 m · up to 200 kg / hr" },
      { label: "Runtime", value: "Up to 8 hrs · solar charging" },
      { label: "Navigation", value: "Autonomous · AI vision" },
      { label: "Data", value: "Every item logged · live dashboard" },
      { label: "Model", value: "Robots-as-a-Service" },
    ],
    image: "/images/environment/clearbot.jpg",
    href: "/environment/clearbot",
  },
];

// Official links
function getExternalLink(botName: string): string {
  const links: Record<string, string> = {
    "WasteShark": "https://www.ranmarine.io/wasteshark/",
    "Jellyfishbot": "https://www.iadys.com/mos/",
    "BeBot": "https://searial-cleaners.com/our-cleaners/bebot-the-beach-cleaner/",
    "Interceptor": "https://theoceancleanup.com/rivers/",
    "Clearbot": "https://www.clearbot.org/",
  };
  return links[botName] || "#";
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const bot = allBots.find((b) => b.href === `/environment/${params.slug}`);
  if (!bot) return {};
  return {
    title: `${bot.name} — ${bot.company} Environmental Robot: Status & Details`,
    description: `${bot.description} ${bot.name} by ${bot.company}${
      bot.country ? ` (${bot.country})` : ""
    } — ${bot.status.toLowerCase()}. Photos, details, and official links on B4Bots.`,
    alternates: { canonical: bot.href },
    openGraph: {
      title: `${bot.name} — ${bot.company} Environmental Robot`,
      description: bot.description,
      url: `https://www.b4bots.com${bot.href}`,
      images: [{ url: bot.image }],
    },
  };
}

function parsePrice(price: string): number | null {
  const k = price.match(/\$([\d.]+)K/i);
  if (k) return Math.round(parseFloat(k[1]) * 1000);
  const m = price.replace(/,/g, "").match(/\$(\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
}

export default function EnvironmentDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const bot = allBots.find((b) => b.href === `/environment/${params.slug}`);

  if (!bot) {
    notFound();
  }

  const externalUrl = getExternalLink(bot.name);

  const numericPrice = parsePrice(bot.price);
  const productJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: bot.name,
    image: bot.image,
    description: bot.description,
    brand: { "@type": "Brand", name: bot.company },
    category: bot.category,
    url: `https://www.b4bots.com${bot.href}`,
  };
  if (numericPrice !== null) {
    productJsonLd.offers = {
      "@type": "Offer",
      url: `https://www.b4bots.com${bot.href}`,
      priceCurrency: "USD",
      price: numericPrice,
    };
  }

  return (
    <main className="min-h-screen bg-[#06070a] text-white pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-6 pt-12 md:px-8">
        <Link
          href="/environment"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-10 transition"
        >
          ← Back to all environmental robots
        </Link>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="aspect-[16/9] w-full overflow-hidden bg-black/40 relative">
            <EnvironmentImage
              src={bot.image}
              name={bot.name}
              company={bot.company}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
          </div>

          <div className="p-8 md:p-12 lg:p-16 space-y-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                  {bot.company}
                  {bot.country ? ` · ${bot.country}` : ""}
                </p>
                <h1 className="mt-2 text-5xl md:text-6xl font-semibold tracking-tight">
                  {bot.name}
                </h1>
              </div>

              <div className="flex-shrink-0">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium">
                  {bot.status}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2">
                {bot.category}
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 font-medium">
                {bot.price}
              </div>
            </div>

            <div className="max-w-3xl space-y-5">
              <p className="text-lg leading-relaxed text-white/80">
                {bot.description}
              </p>
              <p className="text-lg leading-relaxed text-white/80">
                {bot.more}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Key facts</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {bot.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-base font-medium text-white">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-2xl bg-white py-5 text-center text-xl font-semibold text-black hover:bg-white/90 transition-all active:scale-[0.985]"
              >
                {bot.status === "Pre-order"
                  ? "Pre-order / Visit Official Site →"
                  : "Visit Official Site →"}
              </a>
              <p className="text-center text-xs text-white/50 mt-3">
                You will be redirected to the manufacturer&apos;s website
              </p>
            </div>

            <div className="pt-12 border-t border-white/10">
              <h2 className="text-2xl font-semibold mb-4">More Information</h2>
              <p className="text-white/60">
                Full specifications, service areas, videos, and comparison
                tools coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return allBots.map((bot) => {
    const slug = bot.href.replace("/environment/", "");
    return { slug };
  });
}
