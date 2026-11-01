import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Force every Supabase request to bypass the Next.js Data Cache.
// Without this, Vercel caches the first PostgREST response and dynamic
// pages (launches feed, community) keep serving stale rows indefinitely —
// new approved entries never appear until the cache entry is invalidated.
const noStoreFetch = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, { ...init, cache: 'no-store' })

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { fetch: noStoreFetch },
})
