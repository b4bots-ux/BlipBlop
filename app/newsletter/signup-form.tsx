"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("sending");
    const { error } = await supabase
      .from("newsletter_signups")
      .insert({ email: email.trim() });
    setState(error ? "error" : "done");
  }

  if (state === "done") {
    return (
      <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-800">
        You&apos;re in. The next Brief lands in your inbox soon.
      </p>
    );
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full flex-1 rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-100"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="flex-shrink-0 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
        >
          {state === "sending" ? "Joining…" : "Subscribe"}
        </button>
      </form>
      {state === "error" && (
        <p className="mt-3 text-sm text-gray-600">
          Signups are briefly unavailable. You can still join by emailing{' '}
          <a
            href="mailto:contact@b4bots.com?subject=Newsletter%20signup"
            className="underline"
          >
            contact@b4bots.com
          </a>{' '}
          with the subject &ldquo;Newsletter signup&rdquo;.
        </p>
      )}
    </div>
  );
}
