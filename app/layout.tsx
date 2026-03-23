import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B4Bots",
  description: "Bot population, at a glance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden text-black">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#edf3ff_0%,#edf2fb_22%,#e4eaf7_42%,#ccd5ea_62%,#8b9bc2_82%,#243d72_100%)]" />
            <div className="absolute left-[-10%] top-[-4%] h-[320px] w-[320px] rounded-full bg-cyan-300/20 blur-3xl sm:h-[420px] sm:w-[420px]" />
            <div className="absolute right-[-8%] top-[2%] h-[260px] w-[260px] rounded-full bg-emerald-300/16 blur-3xl sm:h-[360px] sm:w-[360px]" />
            <div className="absolute left-[8%] top-[28%] h-[260px] w-[260px] rounded-full bg-indigo-300/14 blur-3xl sm:h-[340px] sm:w-[340px]" />
            <div className="absolute right-[6%] top-[40%] h-[260px] w-[260px] rounded-full bg-sky-300/10 blur-3xl sm:h-[320px] sm:w-[320px]" />
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(35,62,116,0.20)_0%,rgba(35,62,116,0.10)_40%,rgba(35,62,116,0)_75%)]" />
            <div className="absolute left-[-12%] bottom-[-8%] h-[360px] w-[360px] rounded-full bg-blue-900/28 blur-3xl sm:h-[520px] sm:w-[520px]" />
            <div className="absolute right-[-14%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-[#18376f]/34 blur-3xl sm:h-[620px] sm:w-[620px]" />
            <div className="absolute left-[18%] bottom-[-14%] h-[260px] w-[260px] rounded-full bg-indigo-800/20 blur-3xl sm:h-[360px] sm:w-[360px]" />
          </div>

          <main className="flex-1">{children}</main>

          <footer className="bg-black text-white">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-semibold">B4Bots</h3>

                <div className="flex flex-col gap-2 text-sm text-neutral-300 sm:flex-row sm:gap-6">
                  <a href="/bots" className="hover:text-white">
                    Bots
                  </a>
                  <a href="/agents" className="hover:text-white">
                    Agents
                  </a>
                  <a href="/submit" className="hover:text-white">
                    Submit
                  </a>
                </div>

                <div className="flex flex-col gap-1 text-sm">
                  <a href="mailto:contact@b4bots.com" className="text-white">
                    contact@b4bots.com
                  </a>
                  <a href="mailto:submit@b4bots.com" className="text-white">
                    submit@b4bots.com
                  </a>
                </div>

                <div className="pt-4 text-xs text-neutral-400">
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