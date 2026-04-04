import Link from 'next/link'

const TIMES = [
  { label: 'Pre-dawn', href: '/time/pre-dawn' },
  { label: 'Early Morning', href: '/time/early-morning' },
  { label: 'Morning', href: '/time/morning' },
  { label: 'Afternoon', href: '/time/afternoon' },
  { label: 'Sunset', href: '/time/sunset' },
  { label: 'Evening', href: '/time/evening' },
  { label: 'Night', href: '/time/night' },
  { label: 'Late Night', href: '/time/late-night' },
  { label: 'Deep Night', href: '/time/deep-night' },
  { label: 'Any Time', href: '/time/any-time' },
]

export default function BrowseByTimeSection() {
  return (
    <section className="bg-bg py-14 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-muted mb-1">
          Browse by time of day
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[24px] text-text mb-6">
          When are you listening?
        </h2>
        <div className="flex flex-wrap gap-2">
          {TIMES.map((time) => (
            <Link
              key={time.href}
              href={time.href}
              className="inline-block border border-border text-muted text-[13px] font-[family-name:var(--font-dm-sans)] px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
            >
              {time.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
