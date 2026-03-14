export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 px-6 py-16">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <h1 className="text-4xl font-bold text-slate-900">
          Submit a bot listing
        </h1>

        <p className="mt-2 text-slate-600">
          Add your bot to the marketplace — reach builders, researchers, and enthusiasts.
        </p>

        {/* Form Card */}
        <div className="mt-8 rounded-2xl border bg-white/70 backdrop-blur p-8 shadow-xl">

          <h2 className="text-lg font-semibold mb-6 text-slate-800">
            Bot details
          </h2>

          {/* Row */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="text-sm font-medium text-slate-700">
                Bot name
              </label>
              <input
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="Example: Nimbus Assistant"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Category
              </label>
              <select className="mt-1 w-full rounded-lg border px-3 py-2">
                <option>Select a category</option>
                <option>AI Assistant</option>
                <option>Automation Bot</option>
                <option>Physical Robot</option>
                <option>Trading Bot</option>
              </select>
            </div>

          </div>

          {/* Row */}
          <div className="grid grid-cols-2 gap-4 mt-4">

            <div>
              <label className="text-sm font-medium text-slate-700">
                Company or creator
              </label>
              <input
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="Acme Robotics"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Pricing
              </label>

              <div className="flex gap-2 mt-1">
                <button className="px-4 py-2 border rounded-lg">
                  Free
                </button>
                <button className="px-4 py-2 border rounded-lg">
                  Paid
                </button>
              </div>

            </div>

          </div>

          {/* Website */}
          <div className="mt-4">
            <label className="text-sm font-medium text-slate-700">
              Website
            </label>

            <input
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="https://yourbot.com"
            />
          </div>

          {/* Description */}
          <div className="mt-4">
            <label className="text-sm font-medium text-slate-700">
              Description
            </label>

            <textarea
              rows={4}
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="What does this bot do? Key features, capabilities, and use cases."
            />
          </div>

          {/* Capabilities */}
          <div className="mt-4">
            <label className="text-sm font-medium text-slate-700">
              Capabilities
            </label>

            <input
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="Conversational AI, API Access, Multilingual"
            />
          </div>

          {/* Media */}
          <div className="mt-6 border rounded-xl p-6 text-center text-slate-500">
            Drop images or click to upload
            <div className="text-sm mt-1">
              Screenshots, logos, or product images (max 5)
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">

            <button className="px-4 py-2 border rounded-lg">
              Save draft
            </button>

            <button className="px-5 py-2 rounded-lg bg-slate-900 text-white">
              Submit listing
            </button>

          </div>

        </div>

        <p className="text-sm text-slate-500 mt-4 text-center">
          Submissions are reviewed before going live to keep listings accurate and safe.
        </p>

      </div>
    </main>
  );
}