const POINTS = [
  {
    label: 'Learn the identity',
    text: 'Understand the time, mood, rasa, and grammar that shape each raga.',
  },
  {
    label: 'Browse with context',
    text: 'Move through the library by time of day, emotional color, or beginner listening goal.',
  },
  {
    label: 'Stay educational',
    text: 'Use the raga pages as learning notes rather than as claims about linked performances.',
  },
]

export default function RagaIntroSection() {
  return (
    <section className="border-y border-rs-border2 bg-rs-surface2 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-[11px] uppercase tracking-[0.12em] text-rs-accent">
            Start with context
          </p>
          <p className="text-[18px] leading-8 text-rs-muted">
            A raga is not just a melody. It is a time, a mood, and an emotional world with its own grammar. This site helps beginners understand those basics clearly and respectfully.
          </p>
        </div>
        <div className="grid gap-px border border-rs-border bg-rs-border sm:grid-cols-3">
          {POINTS.map((point) => (
            <article key={point.label} className="bg-rs-bg p-6">
              <h2 className="mb-3 font-[family-name:var(--font-cinzel)] text-[18px] text-rs-text">
                {point.label}
              </h2>
              <p className="text-[14px] leading-7 text-rs-muted">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
