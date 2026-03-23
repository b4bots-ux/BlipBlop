import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-black">
        <div className="flex min-h-screen flex-col">

          <main className="flex-1">{children}</main>

          <footer className="bg-black text-white">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-6">

                <h3 className="text-xl font-semibold">
                  B4Bots
                </h3>

                <div className="flex flex-col gap-2 text-sm text-neutral-300">
                  <a href="/bots" className="hover:text-white">Bots</a>
                  <a href="/agents" className="hover:text-white">Agents</a>
                  <a href="/submit" className="hover:text-white">Submit</a>
                </div>

                <div className="flex flex-col gap-1 text-sm">
                  <a href="mailto:contact@b4bots.com" className="text-white">
                    contact@b4bots.com
                  </a>
                  <a href="mailto:submit@b4bots.com" className="text-white">
                    submit@b4bots.com
                  </a>
                </div>

                <div className="text-xs text-neutral-400 pt-4">
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