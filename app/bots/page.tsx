export default function BotsPage() {

const physicalBots = [
{
name: "Roomba",
company: "iRobot",
category: "Home Cleaning Robot",
description:
"Autonomous robot vacuum that maps rooms and cleans floors automatically.",
link: "https://www.irobot.com/roomba"
},
{
name: "Amazon Astro",
company: "Amazon",
category: "Home Assistant Robot",
description:
"A mobile Alexa-powered home robot designed for monitoring, communication, and smart home interaction.",
link: "https://www.amazon.com/astro"
},
{
name: "Spot",
company: "Boston Dynamics",
category: "Industrial Inspection Robot",
description:
"Four-legged robotic platform used for industrial inspection, construction, and research.",
link: "https://www.bostondynamics.com/products/spot"
},
{
name: "Stretch",
company: "Boston Dynamics",
category: "Warehouse Automation Robot",
description:
"Autonomous warehouse robot designed to move boxes and unload trucks efficiently.",
link: "https://www.bostondynamics.com/products/stretch"
}
];

return (
<main className="min-h-screen bg-slate-50 px-6 py-16">

<div className="mx-auto max-w-6xl">

<h1 className="text-4xl font-bold text-slate-900 mb-4">
Physical Robots
</h1>

<p className="text-slate-600 mb-10">
Real-world robots used in homes, warehouses, and industry.
</p>

<div className="grid md:grid-cols-2 gap-6">

{physicalBots.map((bot) => (
<div
key={bot.name}
className="bg-white rounded-2xl border p-6 shadow-sm"
>

<h2 className="text-2xl font-semibold text-slate-900">
{bot.name}
</h2>

<p className="text-sm text-slate-500 mt-1">
{bot.company} • {bot.category}
</p>

<p className="text-slate-700 mt-4">
{bot.description}
</p>

<a
href={bot.link}
target="_blank"
className="inline-block mt-4 text-blue-600 font-medium"
>
View robot →
</a>

</div>
))}

</div>

</div>

</main>
);
}