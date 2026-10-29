export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 min-h-screen bg-white text-gray-900">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-sm text-gray-600 mb-4">
          <span>📄</span> Terms
        </div>
        <h1 className="text-5xl font-semibold tracking-tight">Terms of Use</h1>
        <p className="mt-4 text-lg text-gray-600">Last updated: October 2026</p>
      </div>

      <div className="space-y-8 leading-relaxed text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">The service</h2>
          <p>
            B4Bots is an informational directory of bots, AI agents, automation
            tools, and physical robots. Listings are provided for discovery and
            comparison only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Accuracy</h2>
          <p>
            Product details, pricing, and availability change often and are set
            by the companies listed, not by B4Bots. We work to keep listings
            accurate but cannot guarantee it — always confirm details on the
            manufacturer&apos;s or provider&apos;s own site before buying.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Submissions</h2>
          <p>
            By submitting a listing, you confirm the information is accurate and
            that you have the right to share it. B4Bots may edit, decline, or
            remove any listing at any time, for any reason.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">External links</h2>
          <p>
            B4Bots links to third-party websites. We are not responsible for
            their content, products, or practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Liability</h2>
          <p>
            The site is provided &quot;as is,&quot; without warranties of any
            kind. To the extent allowed by law, B4Bots is not liable for damages
            arising from use of the site or reliance on a listing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href="mailto:contact@b4bots.com" className="underline">
              contact@b4bots.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
