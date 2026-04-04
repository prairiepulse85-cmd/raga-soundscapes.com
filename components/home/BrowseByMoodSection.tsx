import Link from 'next/link'

const MOODS = [
  { label: 'Sleep', href: '/listen/sleep' },
  { label: 'Focus & Study', href: '/listen/focus' },
  { label: 'Meditation', href: '/mood/meditation' },
  { label: 'Stress Relief', href: '/mood/stress-relief' },
  { label: 'Evening Calm', href: '/mood/calm' },
  { label: 'Emotional Release', href: '/mood/emotional-release' },
]

export default function BrowseByMoodSection() {
  return (
    <section className="bg-bg py-14 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-muted mb-1">
          Browse by mood
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[24px] text-text mb-6">
          What do you need?
        </h2>
        <div className="flex flex-wrap gap-2">
          {MOODS.map((mood) => (
            <Link
              key={mood.href}
              href={mood.href}
              className="inline-block border border-border text-muted text-[13px] font-[family-name:var(--font-dm-sans)] px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
            >
              {mood.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
