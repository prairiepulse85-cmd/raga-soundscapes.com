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
    <section className="section-light border-b border-[#E4D8C0] py-12 px-6">
      <div className="max-w-[960px] mx-auto text-center">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A8860] mb-1">
          Browse by mood
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[24px] text-[#12213A] mb-6">
          What do you need?
        </h2>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {MOODS.map((mood) => (
            <Link
              key={mood.href}
              href={mood.href}
              className="inline-block border border-[#E4D8C0] text-[#5A4830] text-[13px] font-[family-name:var(--font-dm-sans)] px-4 py-2 rounded-full hover:border-[#C8A830] hover:text-[#C8A830] transition-colors duration-200"
            >
              {mood.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
