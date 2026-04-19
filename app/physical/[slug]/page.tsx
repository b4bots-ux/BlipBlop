// app/physical/[slug]/page.tsx
import { notFound } from 'next/navigation';
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

// All your robots from the list page
const allRobots: Robot[] = [
  {
    name: "Unitree G1",
    company: "Unitree",
    category: "Humanoid",
    status: "Ships now",
    price: "$17,990+",
    description: "Compact humanoid platform for research, labs, and demos.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/unitree.jpeg?width=900&quality=80",
    href: "/physical/unitree-g1",
  },
  {
    name: "Figure 02",
    company: "Figure",
    category: "Humanoid",
    status: "Enterprise",
    price: "Contact",
    description: "Enterprise humanoid focused on logistics and industrial work.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/figure02.jpeg?width=900&quality=80",
    href: "/physical/figure-02",
  },
  {
    name: "Spot",
    company: "Boston Dynamics",
    category: "Robot Dog",
    status: "Enterprise",
    price: "Contact",
    description: "Mobile inspection robot used in industrial and enterprise settings.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/spot.jpeg?width=900&quality=80",
    href: "/physical/spot",
  },
  {
    name: "Digit",
    company: "Agility Robotics",
    category: "Warehouse",
    status: "In development",
    price: "Contact",
    description: "Biped robot designed for logistics and repetitive warehouse tasks.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/digit.jpeg?width=900&quality=80",
    href: "/physical/digit",
  },
  {
    name: "NEO",
    company: "1X",
    category: "Home",
    status: "Pre-order",
    price: "~$20,000",
    description: "Home-oriented humanoid concept aimed at consumer assistance.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/neo.jpeg?width=900&quality=80",
    href: "/physical/neo",
  },
  {
    name: "Go2",
    company: "Unitree",
    category: "Robot Dog",
    status: "Ships now",
    price: "$2,590+",
    description: "Entry-level quadruped platform with broad hobbyist and dev appeal.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/go2.jpeg?width=900&quality=80",
    href: "/physical/go2",
  },
  {
    name: "Optimus",
    company: "Tesla",
    category: "Humanoid",
    status: "In development",
    price: "TBD",
    description: "Internal deployment focus with long-term public ambitions.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/optimus.jpeg?width=900&quality=80",
    href: "/physical/optimus",
  },
  {
    name: "Atlas",
    company: "Boston Dynamics",
    category: "Humanoid",
    status: "In development",
    price: "TBD",
    description: "High-performance humanoid platform with selective partner access.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/atlas.jpeg?width=900&quality=80",
    href: "/physical/atlas",
  },
  {
    name: "Apollo",
    company: "Apptronik",
    category: "Humanoid",
    status: "In development",
    price: "RaaS",
    description: "Humanoid built around enterprise deployment and service models.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/apollo.jpeg?width=900&quality=80",
    href: "/physical/apollo",
  },
];

// Official / purchase links (ready for affiliate links later)
function getExternalLink(robotName: string): string {
  const links: Record<string, string> = {
    "Unitree G1": "https://shop.unitree.com/products/unitree-g1",
    "Go2": "https://shop.unitree.com/products/unitree-go2",
    "NEO": "https://www.1x.tech/order",
    "Figure 02": "https://www.figure.ai/",
    "Spot": "https://bostondynamics.com/spot-sales/",
    "Digit": "https://www.agilityrobotics.com/solutions",
    "Optimus": "https://www.tesla.com/optimus",
    "Atlas": "https://bostondynamics.com/",
    "Apollo": "https://apptronik.com/",
  };
  return links[robotName] || "#";
}

export default function RobotDetailPage({ params }: { params: { slug: string } }) {
  const robot = allRobots.find((r) => r.href === `/physical/${params.slug}`);

  if (!robot) {
    notFound();
  }

  const externalUrl = getExternalLink(robot.name);

  return (
    <main className="min-h-screen bg-[#06070a] text-white pb-20">
      <div className="mx-auto max-w-5xl px-6 pt-12 md:px-8">
        <Link
          href="/physical"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-10 transition"
        >
          ← Back to all physical robots
        </Link>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="aspect-[16/9] w-full overflow-hidden bg-black/40 relative">
            <img
              src={robot.image}
              alt={robot.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
          </div>

          <div className="p-8 md:p-12 lg:p-16 space-y-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                  {robot.company}
                </p>
                <h1 className="mt-2 text-5xl md:text-6xl font-semibold tracking-tight">
                  {robot.name}
                </h1>
              </div>

              <div className="flex-shrink-0">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium">
                  {robot.status}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2">
                {robot.category}
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 font-medium">
                {robot.price}
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-white/80">
                {robot.description}
              </p>
            </div>

            {/* Big button that sends users to the real manufacturer site */}
            <div className="pt-8">
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-2xl bg-white py-5 text-center text-xl font-semibold text-black hover:bg-white/90 transition-all active:scale-[0.985]"
              >
                {robot.status === "Ships now" || robot.status === "Pre-order"
                  ? "Buy or Pre-order Now →"
                  : "Visit Official Site & Contact Sales →"}
              </a>
              <p className="text-center text-xs text-white/50 mt-3">
                You will be redirected to the manufacturer&apos;s website
              </p>
            </div>

            <div className="pt-12 border-t border-white/10">
              <h2 className="text-2xl font-semibold mb-4">More Information</h2>
              <p className="text-white/60">
                Full specifications, videos, reviews, and comparison tools coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return allRobots.map((robot) => {
    const slug = robot.href.replace("/physical/", "");
    return { slug };
  });
}