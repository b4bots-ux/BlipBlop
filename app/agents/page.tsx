export default function AgentsPage() {
  const agents = [
    {
      name: 'OpenClaw',
      description:
        'AI agent that can control apps, automate tasks, and operate like a digital assistant.',
      href: 'https://github.com',
    },
    {
      name: 'AutoGPT',
      description:
        'Autonomous agent that breaks goals into steps and executes them with minimal input.',
      href: 'https://github.com/Significant-Gravitas/AutoGPT',
    },
    {
      name: 'Perplexity Copilot',
      description:
        'Research-focused AI assistant that explores topics step by step and refines answers.',
      href: 'https://www.perplexity.ai',
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