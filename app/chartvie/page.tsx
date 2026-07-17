'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'

function PlusLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl bg-emerald-500"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        width={size * 0.55}
        height={size * 0.55}
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </div>
  )
}

const brokers = ['Interactive Brokers', 'Webull', 'Tastytrade']

const features = [
  {
    title: 'Unified risk view',
    description:
      'See max drawdown, position sizing, and total exposure across every connected broker in one dashboard.',
  },
  {
    title: 'Smart position sizing',
    description:
      'Get a recommended position size based on your account risk tolerance before you place the trade.',
  },
  {
    title: 'Real-time alerts',
    description:
      'Get notified the moment a position, or your account as a whole, breaches your risk limits.',
  },
]

export default function ChartviePage() {
  return (
    <Suspense fallback={null}>
      <ChartvieContent />
    </Suspense>
  )
}

function ChartvieContent() {
  const searchParams = useSearchParams()
  const canceled = searchParams.get('canceled') === '1'

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/chartvie/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <div className="mb-14 flex items-center gap-3">
          <PlusLogo />
          <span className="text-2xl font-semibold tracking-tight text-gray-900">
            chartvie
          </span>
        </div>

        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
            Risk management for retail traders
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Know your real risk before you take the next trade.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            chartvie watches your positions across Interactive Brokers, Webull, and
            Tastytrade so you always know your exposure, drawdown, and position sizing
            in one place — before it costs you.
          </p>
        </div>

        <div className="mt-10">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-400">
            Built for traders on
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            {brokers.map((broker) => (
              <span
                key={broker}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
              >
                {broker}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-6"
            >
              <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-gray-900">Reserve your spot</h2>
          <p className="mt-2 max-w-lg text-gray-600">
            Join the waitlist for a one-time $1 fee to lock in early access and
            founding-member pricing when chartvie launches.
          </p>

          {canceled && (
            <p className="mt-4 rounded-xl bg-amber-100 px-4 py-3 text-sm text-amber-800">
              Checkout was canceled. You can try again whenever you&apos;re ready.
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-900 outline-none focus:border-emerald-500 sm:flex-1"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 font-medium text-white transition hover:bg-emerald-600 disabled:opacity-60"
            >
              {loading ? 'Redirecting…' : 'Join waitlist — $1'}
            </button>
          </form>

          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

          <p className="mt-4 text-xs text-gray-500">
            Payments are processed securely by Stripe. Your $1 waitlist fee reserves
            your spot and counts toward your first month if you subscribe at launch.
          </p>
        </div>
      </div>
    </div>
  )
}
