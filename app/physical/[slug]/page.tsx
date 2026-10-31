// app/physical/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from "next/link";
import RobotImage from "../robot-image";

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
    name: "Figure 03",
    company: "Figure",
    category: "Humanoid",
    status: "Enterprise",
    price: "Contact",
    description: "Current-generation humanoid in production and deployed at BMW's Spartanburg plant.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/figure03.jpeg?width=900&quality=80",
    href: "/physical/figure-03",
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
    name: "Digit 5",
    company: "Agility Robotics",
    category: "Warehouse",
    status: "Enterprise",
    price: "Contact",
    description: "Digit 5, unveiled September 2026 with $300M+ in customer orders; early access begins H1 2027, building on Digit deployments at Amazon and GXO.",
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
    price: "Target ~$20K–$30K",
    description: "Gen 3 in initial production at Tesla's Fremont factory; first units stay in-house for training, with external sales not expected before late 2027.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/optimus.jpeg?width=900&quality=80",
    href: "/physical/optimus",
  },
  {
    name: "Atlas",
    company: "Boston Dynamics",
    category: "Humanoid",
    status: "Enterprise",
    price: "Contact",
    description: "All-electric production humanoid entering factory deployments with Hyundai.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/atlas.jpeg?width=900&quality=80",
    href: "/physical/atlas",
  },
  {
    name: "Apollo 2",
    company: "Apptronik",
    category: "Humanoid",
    status: "Enterprise",
    price: "RaaS",
    description: "Second-generation humanoid in pilot deployments with Mercedes-Benz, GXO, and Jabil, developed with Google DeepMind's robotics models.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/apollo.jpeg?width=900&quality=80",
    href: "/physical/apollo",
  },
  {
    name: "Stark Scooter",
    company: "Stark",
    category: "Autonomous Vehicle",
    status: "Pre-order",
    price: "Contact",
    description: "Autonomous delivery scooter with 360° vision, LiDAR, and deployable stabilizer arms, built for fleet operators on a Segway Max platform.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/stark.jpeg?width=900&quality=80",
    href: "/physical/stark-scooter",
  },
  {
    name: "A2",
    company: "AGIBOT",
    category: "Humanoid",
    status: "Enterprise",
    price: "~$56K+",
    description: "The world's top-shipping humanoid — 10,000+ units delivered, working reception, retail, and factory roles across China.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/agibot.jpeg?width=900&quality=80",
    href: "/physical/agibot-a2",
  },
  {
    name: "Walker S2",
    company: "UBTech",
    category: "Humanoid",
    status: "Enterprise",
    price: "Contact",
    description: "Industrial humanoid in mass delivery to BYD, Geely, and Foxconn — swaps its own battery in 3 minutes for near-24/7 shifts.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/walker.jpeg?width=900&quality=80",
    href: "/physical/walker-s2",
  },
  {
    name: "H2",
    company: "Unitree",
    category: "Humanoid",
    status: "Ships now",
    price: "$29,900+",
    description: "Unitree's full-size flagship humanoid — one of the only humanoids anyone can order online today, with a published price.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/h2.jpeg?width=900&quality=80",
    href: "/physical/unitree-h2",
  },
  {
    name: "Phoenix",
    company: "Sanctuary AI",
    category: "Humanoid",
    status: "Enterprise",
    price: "Contact",
    description: "Canadian humanoid built around industry-leading dexterous hands; Gen 8 pilots at Magna and Canadian Tire stores.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/phoenix.jpeg?width=900&quality=80",
    href: "/physical/phoenix",
  },
  {
    name: "Ameca",
    company: "Engineered Arts",
    category: "Humanoid",
    status: "Ships now",
    price: "~$250K",
    description: "The world's most expressive social humanoid — a conversational robot installed at museums, universities, and events worldwide.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/ameca.jpeg?width=900&quality=80",
    href: "/physical/ameca",
  },
  {
    name: "IRON",
    company: "XPeng",
    category: "Humanoid",
    status: "In development",
    price: "TBA",
    description: "EV maker XPeng's humanoid — first units rolled off its automated Guangzhou line in September 2026; mass production targeted for late 2026, sales in 2027.",
    image: "https://ywdzbsqovvzwzwczotzs.supabase.co/storage/v1/object/public/Robots/iron.jpeg?width=900&quality=80",
    href: "/physical/xpeng-iron",
  },
];

// Official / purchase links (ready for affiliate links later)
function getExternalLink(robotName: string): string {
  const links: Record<string, string> = {
    "Unitree G1": "https://shop.unitree.com/products/unitree-g1",
    "Go2": "https://shop.unitree.com/products/unitree-go2",
    "NEO": "https://www.1x.tech/order",
    "Figure 03": "https://www.figure.ai/",
    "Spot": "https://bostondynamics.com/spot-sales/",
    "Digit 5": "https://www.agilityrobotics.com/solutions",
    "Optimus": "https://www.tesla.com/optimus",
    "Atlas": "https://bostondynamics.com/",
    "Apollo 2": "https://apptronik.com/",
    "Stark Scooter": "https://starkvehicles.com",
    "A2": "https://www.agibot.com/products/A2_Ultra",
    "Walker S2": "https://www.ubtrobot.com/en/humanoid/products/walker-s2",
    "H2": "https://www.unitree.com/H2",
    "Phoenix": "https://sanctuary.ai/",
    "Ameca": "https://www.engineeredarts.co.uk/",
    "IRON": "https://www.xpeng.com/technology/ai_robot_iron",
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
            <RobotImage
              src={robot.image}
              name={robot.name}
              company={robot.company}
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