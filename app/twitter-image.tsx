import { ImageResponse } from "next/og";
import { OgCard } from "./og-card";

export const alt = "B4Bots — Bot Population Index: robots, AI agents & bots, counted";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgCard />, { ...size });
}
