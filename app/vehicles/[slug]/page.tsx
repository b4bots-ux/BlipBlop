// app/vehicles/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from "next/link";
import type { Metadata } from "next";
import VehicleImage from "../vehicle-image";

type Vehicle = {
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

const allVehicles: Vehicle[] = [
  {
    name: "Waymo I-PACE",
    company: "Waymo",
    country: "USA",
    category: "Robotaxi",
    status: "In service",
    price: "Ride service — not for sale",
    description:
      "The robotaxi that made driverless ordinary — Waymo's all-electric Jaguar I-PACE runs paid, fully driverless rides around the clock in a dozen-plus US metros, from Phoenix and San Francisco to Miami and Orlando.",
    image:
      "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/waymo-ipace.jpeg?width=900&quality=80",
    href: "/vehicles/waymo-ipace",
  },
  {
    name: "Waymo Ojai",
    company: "Waymo",
    country: "USA",
    category: "Robotaxi",
    status: "In service",
    price: "Ride service — not for sale",
    description:
      "Waymo's purpose-built van — base vehicle built by Zeekr in China, finished with the 6th-generation Waymo Driver in Arizona. Open to all riders in San Francisco, Los Angeles, and Phoenix since August 2026.",
    image:
      "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/waymo-ojai.jpeg?width=900&quality=80",
    href: "/vehicles/waymo-ojai",
  },
  {
    name: "Tesla Cybercab",
    company: "Tesla",
    country: "USA",
    category: "Robotaxi",
    status: "In service",
    price: "Target <$30K",
    description:
      "Tesla's gold two-seater — no steering wheel, no pedals — carrying paying riders in Austin since September 2026, with 300+ in the fleet. Not on sale to the public; under $30K is a production target.",
    image:
      "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/cybercab.jpeg?width=900&quality=80",
    href: "/vehicles/tesla-cybercab",
  },
  {
    name: "Zoox",
    company: "Zoox",
    country: "USA",
    category: "Robotaxi",
    status: "In service",
    price: "Ride service — not for sale",
    description:
      "Amazon's carriage-style pod — no front, no back, no steering wheel. The first robotaxi ever cleared to charge fares in the US: paid rides in Las Vegas, free rides in San Francisco.",
    image:
      "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/zoox.jpeg?width=900&quality=80",
    href: "/vehicles/zoox",
  },
  {
    name: "Stark Scooter",
    company: "Stark",
    category: "Delivery",
    status: "Pre-order",
    price: "Contact",
    description:
      "Autonomous delivery scooter with 360° vision, LiDAR, and deployable stabilizer arms, built for fleet operators on a Segway Max platform.",
    image:
      "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/stark.jpeg?width=900&quality=80",
    href: "/vehicles/stark-scooter",
  },
];

// Official links
function getExternalLink(vehicleName: string): string {
  const links: Record<string, string> = {
    "Waymo I-PACE": "https://waymo.com/",
    "Waymo Ojai": "https://waymo.com/",
    "Tesla Cybercab": "https://www.tesla.com/",
    "Zoox": "https://zoox.com/",
    "Stark Scooter": "https://starkvehicles.com",
  };
  return links[vehicleName] || "#";
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const vehicle = allVehicles.find((v) => v.href === `/vehicles/${params.slug}`);
  if (!vehicle) return {};
  return {
    title: `${vehicle.name} — ${vehicle.company} Autonomous Vehicle: Status & Details`,
    description: `${vehicle.description} ${vehicle.name} by ${vehicle.company}${
      vehicle.country ? ` (${vehicle.country})` : ""
    } — ${vehicle.status.toLowerCase()}. Photos, details, and official links on B4Bots.`,
    alternates: { canonical: vehicle.href },
    openGraph: {
      title: `${vehicle.name} — ${vehicle.company} Autonomous Vehicle`,
      description: vehicle.description,
      url: `https://www.b4bots.com${vehicle.href}`,
      images: [{ url: vehicle.image }],
    },
  };
}

function parsePrice(price: string): number | null {
  const k = price.match(/\$([\d.]+)K/i);
  if (k) return Math.round(parseFloat(k[1]) * 1000);
  const m = price.replace(/,/g, "").match(/\$(\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
}

export default function VehicleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const vehicle = allVehicles.find((v) => v.href === `/vehicles/${params.slug}`);

  if (!vehicle) {
    notFound();
  }

  const externalUrl = getExternalLink(vehicle.name);

  const numericPrice = parsePrice(vehicle.price);
  const productJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: vehicle.name,
    image: vehicle.image,
    description: vehicle.description,
    brand: { "@type": "Brand", name: vehicle.company },
    category: vehicle.category,
    url: `https://www.b4bots.com${vehicle.href}`,
  };
  if (numericPrice !== null) {
    productJsonLd.offers = {
      "@type": "Offer",
      url: `https://www.b4bots.com${vehicle.href}`,
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
          href="/vehicles"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-10 transition"
        >
          ← Back to all autonomous vehicles
        </Link>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="aspect-[16/9] w-full overflow-hidden bg-black/40 relative">
            <VehicleImage
              src={vehicle.image}
              name={vehicle.name}
              company={vehicle.company}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
          </div>

          <div className="p-8 md:p-12 lg:p-16 space-y-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                  {vehicle.company}
                  {vehicle.country ? ` · ${vehicle.country}` : ""}
                </p>
                <h1 className="mt-2 text-5xl md:text-6xl font-semibold tracking-tight">
                  {vehicle.name}
                </h1>
              </div>

              <div className="flex-shrink-0">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium">
                  {vehicle.status}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2">
                {vehicle.category}
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 font-medium">
                {vehicle.price}
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-white/80">
                {vehicle.description}
              </p>
            </div>

            <div className="pt-8">
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-2xl bg-white py-5 text-center text-xl font-semibold text-black hover:bg-white/90 transition-all active:scale-[0.985]"
              >
                {vehicle.status === "Pre-order"
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
  return allVehicles.map((vehicle) => {
    const slug = vehicle.href.replace("/vehicles/", "");
    return { slug };
  });
}
