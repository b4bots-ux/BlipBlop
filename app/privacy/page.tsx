export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 min-h-screen bg-white text-gray-900">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-sm text-gray-600 mb-4">
          <span>🔒</span> Privacy
        </div>
        <h1 className="text-5xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-lg text-gray-600">Last updated: October 2026</p>
      </div>

      <div className="space-y-8 leading-relaxed text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">What B4Bots is</h2>
          <p>
            B4Bots is a public directory and index of bots, AI agents, automation
            tools, and physical robots. Browsing the site does not require an
            account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Information we collect</h2>
          <p>
            <strong>Submissions.</strong> If you submit a listing, we store the
            information you provide — such as the product name, website, category,
            description, and pricing — so it can be reviewed and, if approved,
            displayed publicly on the site.
          </p>
          <p className="mt-2">
            <strong>Analytics.</strong> We use privacy-friendly analytics
            (Vercel Analytics) that measure visits in aggregate — pages viewed,
            referrers, and general location — without identifying individual
            visitors.
          </p>
          <p className="mt-2">
            <strong>Email.</strong> If you contact us by email, we keep your
            message and address so we can reply.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">How we use it</h2>
          <p>
            To operate and improve the directory, display approved listings,
            respond to messages, and understand which parts of the site are
            useful. We do not sell personal information, and we do not use it
            for advertising profiles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Public listings</h2>
          <p>
            Approved submissions are public by design — that is the point of a
            directory. If you submitted a listing and want it changed or removed,
            email us and we will take care of it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact</h2>
          <p>
            Questions about this policy:{' '}
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
