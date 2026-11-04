import Link from "next/link";
import type { Metadata } from "next";
import VehicleImage from "./vehicle-image";

export const metadata: Metadata = {
  title: "Autonomous Vehicles — Robotaxis & Driverless Vehicles, Counted",
  description:
    "Browse autonomous vehicles — Waymo's I-PACE and Ojai robotaxis, Tesla Cybercab, Zoox, and the Stark delivery scooter — with photos, status, and makers by country, tracked in one index.",
  alternates: { canonical: "/vehicles" },
  openGraph: {
    title: "Autonomous Vehicles — Robotaxis & Driverless Vehicles, Counted",
    description:
      "Driverless vehicles with photos and status — robotaxis in service today and the ones still coming, counted in one index.",
    url: "https://www.b4bots.com/vehicles",
  },
};

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

const liveVehicles: Vehicle[] = [
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
];

const orderableVehicles: Vehicle[] = [
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

function StatusBadge({ status }: { status: Vehicle["status"] }) {
  const styles: Record<Vehicle["status"], string> = {
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

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link
      href={vehicle.href}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/[0.07]"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-black/20">
        <VehicleImage
          src={vehicle.image}
          name={vehicle.name}
          company={vehicle.company}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              {vehicle.company}
              {vehicle.country ? ` · ${vehicle.country}` : ""}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {vehicle.name}
            </h3>
          </div>
          <StatusBadge status={vehicle.status} />
        </div>

        <div className="flex items-center justify-between text-sm text-white/60">
          <span>{vehicle.category}</span>
          <span>{vehicle.price}</span>
        </div>

        <p className="text-sm leading-6 text-white/70">{vehicle.description}</p>

        <div className="flex items-center justify-between pt-2 text-sm font-medium text-white">
          <span>View vehicle</span>
          <span className="text-white/40 transition group-hover:text-white">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function VehiclesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Autonomous Vehicles — B4Bots Index",
    itemListElement: [...liveVehicles, ...orderableVehicles].map(
      (vehicle, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: vehicle.name,
        url: `https://www.b4bots.com${vehicle.href}`,
      })
    ),
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
                Autonomous Vehicles
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Vehicles with no driver,
                <span className="block text-white/60">
                  some with no wheel at all.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                Nobody drives these — that is what makes them bots. Robotaxis
                and autonomous vehicles tracked like the rest of the
                population: who is carrying passengers today, where, and what
                is still coming.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#live"
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  On the road now
                </Link>
                <Link
                  href="#order"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Available to order
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">Vehicles tracked</p>
                <p className="mt-3 text-3xl font-semibold">5</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">In service today</p>
                <p className="mt-3 text-3xl font-semibold">4</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">Companies</p>
                <p className="mt-3 text-3xl font-semibold">4</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">No steering wheel</p>
                <p className="mt-3 text-3xl font-semibold">2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="live" className="mx-auto max-w-7xl px-6 pt-12 pb-8 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/45">
              Driverless and deployed
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              On the road now
            </h2>
          </div>
          <Link
            href="#order"
            className="text-sm text-white/65 transition hover:text-white"
          >
            Available to order →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {liveVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} />
          ))}
        </div>
      </section>

      <section id="order" className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">
            For operators
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Available to order
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
            Not a ride service — autonomous vehicles fleet operators can
            order and deploy today.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {orderableVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} />
          ))}
        </div>
      </section>
    </main>
  );
}
