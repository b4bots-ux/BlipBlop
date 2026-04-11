import Link from "next/link";

type Robot = {
  name: string;
  company: string;
  category: string;
  status: "Ships now" | "Pre-order" | "Enterprise" | "In development";
  price: string;
  description: string;
  image: string;
  href: string;
};

const featuredRobots: Robot[] = [
  {
    name: "Unitree G1",
    company: "Unitree",
    category: "Humanoid",
    status: "Ships now",
    price: "$17,990+",
    description: "Compact humanoid platform for research, labs, and demos.",
    image: "/robots/unitree-g1.jpg",
    href: "/physical/unitree-g1",
  },
  {
    name: "Figure 02",
    company: "Figure",
    category: "Humanoid",
    status: "Enterprise",
    price: "Contact",
    description: "Enterprise humanoid focused on logistics and industrial work.",
    image: "/robots/figure-02.jpg",
    href: "/physical/figure-02",
  },
  {
    name: "Spot",
    company: "Boston Dynamics",
    category: "Robot Dog",
    status: "Enterprise",
    price: "Contact",
    description: "Mobile inspection robot used in industrial and enterprise settings.",
    image: "/robots/spot.jpg",
    href: "/physical/spot",
  },
  {
    name: "Digit",
    company: "Agility Robotics",
    category: "Warehouse",
    status: "In development",
    price: "Contact",
    description: "Biped robot designed for logistics and repetitive warehouse tasks.",
    image: "/robots/digit.jpg",
    href: "/physical/digit",
  },
  {
    name: "NEO",
    company: "1X",
    category: "Home",
    status: "Pre-order",
    price: "~$20,000",
    description: "Home-oriented humanoid concept aimed at consumer assistance.",
    image: "/robots/neo.jpg",
    href: "/physical/neo",
  },
  {
    name: "Go2",
    company: "Unitree",
    category: "Robot Dog",
    status: "Ships now",
    price: "$2,590+",
    description: "Entry-level quadruped platform with broad hobbyist and dev appeal.",
    image: "/robots/go2.jpg",
    href: "/physical/go2",
  },
];

const developmentRobots: Robot[] = [
  {
    name: "Optimus",
    company: "Tesla",
    category: "Humanoid",
    status: "In development",
    price: "TBD",
    description: "Internal deployment focus with long-term public ambitions.",
    image: "/robots/optimus.jpg",
    href: "/physical/optimus",
  },
  {
    name: "Atlas",
    company: "Boston Dynamics",
    category: "Humanoid",
    status: "In development",
    price: "TBD",
    description: "High-performance humanoid platform with selective partner access.",
    image: "/robots/atlas.jpg",
    href: "/physical/atlas",
  },
  {
    name: "Apollo",
    company: "Apptronik",
    category: "Humanoid",
    status: "In development",
    price: "RaaS",
    description: "Humanoid built around enterprise deployment and service models.",
    image: "/robots/apollo.jpg",
    href: "/physical/apollo",
  },
];

const categories = [
  "Humanoids",
  "Robot Dogs",
  "Warehouse",
  "Home Robots",
  "Industrial",
  "Autonomous Vehicles",
];

function StatusBadge({ status }: { status: Robot["status"] }) {
  const styles: Record<Robot["status"], string> = {
    "Ships now":
      "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
    "Pre-order":
      "border-amber-400/30 bg-amber-400/10 text-amber-200",
    Enterprise:
      "border-sky-400/30 bg-sky-400/10 text-sky-200",
    "In development":
      "border-white/15 bg-white/5 text-white/70",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function RobotCard({ robot }: { robot: Robot }) {
  return (
    <Link
      href={robot.href}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/[0.07]"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-black/20">
        <img
          src={robot.image}
          alt={robot.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              {robot.company}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {robot.name}
            </h3>
          </div>
          <StatusBadge status={robot.status} />
        </div>

        <div className="flex items-center justify-between text-sm text-white/60">
          <span>{robot.category}</span>
          <span>{robot.price}</span>
        </div>

        <p className="text-sm leading-6 text-white/70">{robot.description}</p>

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

export default function PhysicalPage() {
  return (
    <main className="min-h-screen bg-[#06070a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,140,255,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(0,255,170,0.09),transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
                Physical Robots
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Explore real-world robots,
                <span className="block text-white/60">
                  not just AI tools.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                Browse humanoids, robot dogs, warehouse systems, and home robots
                in one clean index. Compare categories, status, pricing, and
                real-world use cases.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#featured"
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Browse robots
                </Link>
                <Link
                  href="#development"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  In development
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">Robots tracked</p>
                <p className="mt-3 text-3xl font-semibold">62</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">Humanoids</p>
                <p className="mt-3 text-3xl font-semibold">18</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">Available now</p>
                <p className="mt-3 text-3xl font-semibold">9</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/55">Manufacturers</p>
                <p className="mt-3 text-3xl font-semibold">25+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section
        id="featured"
        className="mx-auto max-w-7xl px-6 pb-8 md:px-8"
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/45">
              Marketplace-style listings
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Featured physical robots
            </h2>
          </div>
          <Link
            href="/physical/all"
            className="text-sm text-white/65 transition hover:text-white"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredRobots.map((robot) => (
            <RobotCard key={robot.name} robot={robot} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                Categories
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Browse by robot type
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/physical/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-white/20 hover:bg-black/30"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{category}</h3>
                  <span className="text-white/35">→</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Explore listings, pricing, and deployment status.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="development"
        className="mx-auto max-w-7xl px-6 pb-20 md:px-8"
      >
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">
            Tracking
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            In-development robots
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
            For robots not publicly purchasable yet, keep these pages focused on
            status, deployments, target pricing, and manufacturer progress.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {developmentRobots.map((robot) => (
            <RobotCard key={robot.name} robot={robot} />
          ))}
        </div>
      </section>
    </main>
  );
}