'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

type ConfirmState = 'loading' | 'paid' | 'pending' | 'error'

export default function ChartvieSuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessContent />
    </Suspense>
  )
}

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  const [state, setState] = useState<ConfirmState>('loading')
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    if (!sessionId) {
      setState('error')
      return
    }

    fetch(`/api/chartvie/confirm?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setState('error')
          return
        }
        setEmail(data.email ?? null)
        setState(data.status === 'paid' ? 'paid' : 'pending')
      })
      .catch(() => setState('error'))
  }, [sessionId])

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 text-gray-900">
      <div className="max-w-md text-center">
        {state === 'loading' && <p className="text-gray-600">Confirming your payment…</p>}

        {state === 'paid' && (
          <>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold">You&apos;re on the list</h1>
            <p className="mt-3 text-gray-600">
              {email ? `We'll email ${email} ` : "We'll email you "}
              as soon as chartvie is ready for you.
            </p>
          </>
        )}

        {state === 'pending' && (
          <>
            <h1 className="text-2xl font-semibold">Payment still processing</h1>
            <p className="mt-3 text-gray-600">
              Give it a moment and refresh this page. If this persists, contact
              support and we&apos;ll sort it out.
            </p>
          </>
        )}

        {state === 'error' && (
          <>
            <h1 className="text-2xl font-semibold">Something went wrong</h1>
            <p className="mt-3 text-gray-600">
              We couldn&apos;t confirm your payment. If you were charged, contact
              support and we&apos;ll make it right.
            </p>
          </>
        )}

        <a
          href="/chartvie"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Back to chartvie
        </a>
      </div>
    </div>
  )
}
