import SignupForm from './signup-form'

const briefItems = [
  {
    title: 'Figure 03 goes to work at BMW',
    body: "Figure's current-generation humanoid is in production and deployed at BMW's Spartanburg plant — the retired Figure 02 is off our list, replaced by its successor.",
    href: '/physical/figure-03',
  },
  {
    title: 'Atlas is a product now, not a prototype',
    body: "Boston Dynamics' all-electric Atlas entered production, with the entire 2026 run committed to Hyundai and Google DeepMind. It moves to our featured robots.",
    href: '/physical/atlas',
  },
  {
    title: 'Agents grew up',
    body: 'Our agents index tripled: ChatGPT Agent, Manus, and Devin now do real multi-step work daily, alongside Claude, Gemini, Cursor, and Lindy.',
    href: '/agents',
  },
]

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 min-h-screen bg-white text-gray-900">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-sm text-gray-600 mb-4">
          <span>✉️</span> Newsletter
        </div>
        <h1 className="text-5xl font-semibold tracking-tight">The B4Bots Brief</h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          A short monthly email on the bot population: how the Index moved,
          which robots shipped, which agents launched, and what got added to
          the directory. No spam — one email, once a month.
        </p>
      </div>

      <div className="mb-12">
        <SignupForm />
      </div>

      <h2 className="mb-4 text-2xl font-semibold">From the latest brief</h2>
      <div className="space-y-4">
        {briefItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="block rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-sm"
          >
            <h3 className="font-semibold text-xl">{item.title}</h3>
            <p className="mt-2 text-gray-600 leading-snug">{item.body}</p>
            <span className="mt-3 inline-block text-sm font-medium text-gray-900 underline underline-offset-4">
              See it in the index
            </span>
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-500">
        Want your bot, agent, or robot in the next Brief?{' '}
        <a href="/submit" className="underline">
          Submit a listing
        </a>
        .
      </p>
    </div>
  )
}
