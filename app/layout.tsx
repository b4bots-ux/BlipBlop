import "./globals.css";

export const metadata = {
  title: "B4Bots",
  description: "Explore robots and digital agents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>

        {/* Minimal Footer */}
        <footer className="mt-16 border-t border-black/10 px-6 py-10">
          <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

            <div>
              <h4 className="font-semibold mb-3">B4Bots</h4>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <div className="space-y-2">
                <p>Bots</p>
                <p>Agents</p>
                <p>Submit</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <div className="space-y-2">
                <p>Contact</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-2 break-words">
                <p>contact@b4bots.com</p>
                <p>submit@b4bots.com</p>
              </div>
            </div>

          </div>

          <div className="mt-8 border-t border-black/10 pt-6 text-xs text-black/50 text-center">
            © {new Date().getFullYear()} B4Bots
          </div>
        </footer>
      </body>
    </html>
  );
}