import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '../../../../lib/stripe'
import { supabaseAdmin } from '../../../../lib/supabaseAdmin'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
  }

  const origin = req.headers.get('origin') ?? new URL(req.url).origin

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: 100,
          product_data: {
            name: 'chartvie waitlist spot',
            description: 'Reserve your spot on the chartvie waitlist.',
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/chartvie/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/chartvie?canceled=1`,
  })

  const { error } = await supabaseAdmin.from('chartvie_waitlist').upsert(
    {
      email,
      stripe_session_id: session.id,
      status: 'pending',
    },
    { onConflict: 'email' }
  )

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ url: session.url })
}
