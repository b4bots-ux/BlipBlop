-- Run this in the Supabase SQL editor for the project referenced by
-- NEXT_PUBLIC_SUPABASE_URL to create the chartvie waitlist table.

create table if not exists chartvie_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  stripe_session_id text unique,
  status text not null default 'pending' check (status in ('pending', 'paid')),
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

-- RLS is enabled with no policies: the table is only ever read/written by
-- the app's server-side API routes using the Supabase service role key
-- (which bypasses RLS). The browser never talks to this table directly,
-- so a client can't forge a "paid" status without an actual Stripe charge.
alter table chartvie_waitlist enable row level security;
