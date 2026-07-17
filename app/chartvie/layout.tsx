import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'chartvie — risk management for retail traders',
  description:
    'chartvie watches your positions across Interactive Brokers, Webull, and Tastytrade so you always know your real exposure before your next trade.',
}

export default function ChartvieLayout({ children }: { children: React.ReactNode }) {
  return children
}
