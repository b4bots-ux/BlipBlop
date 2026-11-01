import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents — Autonomous Agents for Browsing, Coding, Research & Sales",
  description:
    "The AI agents worth knowing — ChatGPT Agent, Claude, Manus, Gemini, Devin, Cursor and more — what each one does, who makes it, and where to get it. Counted in the B4Bots index.",
  alternates: { canonical: "/agents" },
};

export default function AgentsPage() {
  const agents = [
    {
      name: 'ChatGPT Agent',
      description:
        "OpenAI's agent mode browses the web, operates a virtual computer, and completes multi-step tasks — research, bookings, and spreadsheets — for you.",
      href: 'https://chatgpt.com',
    },
    {
      name: 'Claude',
      description:
        "Anthropic's assistant and its Claude Code agent plan, reason, and write or fix code across whole projects with careful, supervised autonomy.",
      href: 'https://claude.ai',
    },
    {
      name: 'Manus',
      description:
        'General-purpose autonomous agent: give it a goal and it plans, browses, codes, and delivers finished work from its own cloud computer.',
      href: 'https://manus.im',
    },
    {
      name: 'Gemini',
      description:
        "Google's assistant with Deep Research and agentic features built in, connected across Search, Gmail, Docs, and the rest of Google Workspace.",
      href: 'https://gemini.google.com',
    },
    {
      name: 'Devin',
      description:
        'Autonomous software engineer from Cognition. Assign it a ticket and it writes, tests, and debugs the code, then opens a pull request for review.',
      href: 'https://devin.ai',
    },
    {
      name: 'Cursor',
      description:
        'AI code editor with agents that understand your whole codebase, make multi-file changes, and run commands while you direct the work.',
      href: 'https://cursor.com',
    },
    {
      name: 'Lindy',
      description:
        'No-code builder for AI employees that handle email, scheduling, CRM updates, and sales workflows for small businesses and ops teams.',
      href: 'https://www.lindy.ai',
    },
    {
      name: 'Perplexity',
      description:
        'Answer engine with agentic research: it searches the live web step by step and returns sourced answers, summaries, and comparisons.',
      href: 'https://www.perplexity.ai',
    },
    {
      name: 'AutoGPT',
      description:
        'The open-source original. A self-hosted autonomous agent that breaks goals into steps and executes them — full control, no vendor lock-in.',
      href: 'https://github.com/Significant-Gravitas/AutoGPT',
    },
  ]

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Agents
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
            AI agents that can think, act, and complete tasks
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            Agents are AI systems that can plan, take action, and complete
            tasks with minimal human input.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {agents.map((agent) => (
            <a
              key={agent.name}
              href={agent.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
            >
              <h2 className="text-xl font-semibold text-neutral-900">
                {agent.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {agent.description}
              </p>
              <span className="mt-5 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4">
                Visit
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}