import Link from 'next/link'

const CARDS = [
  { label: 'Sleep', description: 'Deep, restful soundscapes for night and stillness', href: '/listen/sleep' },
  { label: 'Morning', description: 'Quiet clarity for the first hours of the day', href: '/listen/morning' },
  { label: 'Focus', description: 'Calm concentration for study and deep work', href: '/listen/focus' },
  { label: 'Evening Calm', description: 'Soft unwinding as the day closes', href: '/mood/calm' },
  { label: 'Emotional Release', description: 'Ragas that allow feeling to settle and release', href: '/mood/emotional-release' },
  { label: 'Meditation', description: 'Stillness, awareness, and inner quiet', href: '/mood/meditation' },
]

export default function FindYourRagaGrid() {
  return (
    <section className="bg-bg py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-muted mb-1">
          What are you listening for?
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[24px] text-text mb-8">
          Find the right raga
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CARDS.map((card) => (
            <Link key={card.href} href={card.href} className="group block">
              <div className="min-h-[160px] flex flex-col justify-between bg-surface border border-border rounded-[2px] border-t-2 border-t-accent px-5 py-5 transition-colors duration-200 hover:bg-surface-raised">
                <div>
                  <h3 className="font-[family-name:var(--font-cinzel)] text-[18px] text-text mb-2">
                    {card.label}
                  </h3>
                  <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-muted leading-[1.65]">
                    {card.description}
                  </p>
                </div>
                <span className="text-[10px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] text-accent group-hover:text-text transition-colors duration-200 mt-4">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
