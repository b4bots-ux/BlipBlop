import type { MetadataRoute } from "next";

const base = "https://www.b4bots.com";

const robotSlugs = [
  "unitree-g1",
  "figure-03",
  "spot",
  "atlas",
  "digit",
  "neo",
  "go2",
  "stark-scooter",
  "apollo",
  "agibot-a2",
  "walker-s2",
  "unitree-h2",
  "phoenix",
  "ameca",
  "optimus",
  "xpeng-iron",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/physical`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/launches`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/bots`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/agents`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/community`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/newsletter`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/press`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/submit`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const robotRoutes: MetadataRoute.Sitemap = robotSlugs.map((slug) => ({
    url: `${base}/physical/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...robotRoutes];
}
