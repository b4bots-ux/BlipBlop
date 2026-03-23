import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B4Bots",
  description: "Explore robots and digital agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-[#eef3ff] text-black">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          {/* Full-page Rothko background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* base wash */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#edf3ff_0%,#edf2fb_22%,#e5ebf8_42%,#cad4ea_62%,#8796be_82%,#20386d_100%)]" />

            {/* top glow */}
            <div className="absolute left-[-10%] top-[-4%] h-[320px] w-[320px] rounded-full bg-cyan-300/20 blur-3xl sm:h-[420px] sm:w-[420px]" />
            <div className="absolute right-[-8%] top-[2%] h-[260px] w-[260px] rounded-full bg-emerald-300/16 blur-3xl sm:h-[360px] sm:w-[360px]" />

            {/* mid haze */}
            <div className="absolute left-[8%] top-[28%] h-[260px] w-[260px] rounded-full bg-indigo-300/14 blur-3xl sm:h-[340px] sm:w-[340px]" />
            <div className="absolute right-[6%] top-[40%] h-[260px] w-[260px] rounded-full bg-sky-300/10 blur-3xl sm:h-[320px] sm:w-[320px]" />

            {/* lower depth */}
            <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[radial-gradient(ellipse_at_center,rgba(35,62,116,0.18)_0%,rgba(35,62,116,0.08)_38%,rgba(35,62,116,0)_72%)]" />
            <div className="absolute left-[-12%] bottom-[-8%] h-[360px] w-[360px] rounded-full bg-blue-900/28 blur-3xl sm:h-[520px] sm:w-[520px]" />
            <div className="absolute right-[-14%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-[#18376f]/34 blur-3xl sm:h-[620px] sm:w-[620px]" />
            <div className="absolute left-[18%] bottom-[-14%] h-[260px] w-[260px] rounded-full bg-indigo-800/20 blur-3xl sm:h-[360px] sm:w-[360px]" />

            {/* soft vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_36%),radial-gradient(circle_at_bottom,rgba(7,19,54,0.14),transparent_48%)]" />
          </div>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-white/20 bg-white/8 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-6 text-center sm:text-left">
                <h3 className="text-2xl font-semibold tracking-tight text-[#111827]">
                  B4Bots
                </h3>

                <div className="flex flex-col gap-3 text-base text-neutral-700 sm:flex-row sm:gap-6">
                  <a href="/bots" className="transition hover:text-black">
                    Bots
                  </a>
                  <a href="/agents" className="transition hover:text-black">
                    Agents
                  </a>
                  <a href="/submit" className="transition hover:text-black">
                    Submit
                  </a>
                </div>

                <div className="flex flex-col gap-2 text-sm text-neutral-700">
                  <a
                    href="mailto:contact@b4bots.com"
                    className="transition hover:text-black"
                  >
                    contact@b4bots.com
                  </a>
                  <a
                    href="mailto:submit@b4bots.com"
                    className="transition hover:text-black"
                  >
                    submit@b4bots.com
                  </a>
                </div>

                <div className="pt-4 text-xs text-neutral-700">
                  © 2026 B4Bots
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}