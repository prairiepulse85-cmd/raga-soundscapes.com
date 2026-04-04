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
    <section className="section-light border-b border-[#E4D8C0] py-12 px-10">
      <div className="max-w-[960px] mx-auto">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A8860] mb-1">
          Browse by time of day
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[24px] text-[#12213A] mb-6">
          When are you listening?
        </h2>
        <div className="flex flex-wrap gap-[10px]">
          {TIMES.map((time) => (
            <Link
              key={time.href}
              href={time.href}
              className="inline-block border border-[#E4D8C0] text-[#5A4830] text-[13px] font-[family-name:var(--font-dm-sans)] px-4 py-2 rounded-full hover:border-[#C8A830] hover:text-[#C8A830] transition-colors duration-200"
            >
              {time.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
