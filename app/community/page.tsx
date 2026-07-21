import { supabase } from '../../lib/supabase'

export const dynamic = 'force-dynamic'

type Submission = {
  id: number
  name: string
  website: string | null
  category: string | null
  description: string
  pricing: string | null
}

export default async function CommunityPage() {
  const { data: submissions, error } = await supabase
    .from('Bot_submissions')
    .select('id, name, website, category, description, pricing')
    .eq('approved', true)
    .order('id', { ascending: false })
    .returns<Submission[]>()

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 min-h-screen bg-white text-gray-900">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-sm text-gray-600 mb-4">
          <span>🌐</span> Community
        </div>
        <h1 className="text-5xl font-semibold tracking-tight">Community Submissions</h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          Bots and tools submitted by the community and approved for listing.
        </p>
      </div>

      {error && (
        <p className="text-red-600">Couldn&apos;t load submissions right now.</p>
      )}

      {!error && (!submissions || submissions.length === 0) && (
        <p className="text-gray-600">
          No community submissions yet.{' '}
          <a href="/submit" className="underline">
            Submit one
          </a>
          .
        </p>
      )}

      <div className="space-y-4">
        {submissions?.map((s) => (
          <div
            key={s.id}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-xl">{s.name}</h3>
              {s.category && (
                <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-600 whitespace-nowrap">
                  {s.category}
                </span>
              )}
            </div>
            <p className="mt-2 text-gray-600 leading-snug">{s.description}</p>
            <div className="mt-4 flex items-center justify-between gap-3">
              {s.pricing && <span className="text-sm text-gray-500">{s.pricing}</span>}
              {s.website && (
                <a
                  href={s.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black px-6 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition whitespace-nowrap"
                >
                  Visit
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
