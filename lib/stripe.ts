import Stripe from 'stripe'

let stripeClient: Stripe | undefined

// Lazily constructed so the module can be imported at build time even
// before STRIPE_SECRET_KEY is configured in the environment.
function getStripe(): Stripe {
  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY!)
  }
  return stripeClient
}

export const stripe = new Proxy({} as Stripe, {
  get(_target, prop, receiver) {
    return Reflect.get(getStripe(), prop, receiver)
  },
})
