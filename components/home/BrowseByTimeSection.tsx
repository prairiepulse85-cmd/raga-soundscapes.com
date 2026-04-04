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
    <section className="rs-section" style={{ borderTop: '1px solid var(--rs-border)' }}>
      <div className="rs-container">
        <p className="rs-section-label">Browse by time of day</p>
        <h2 className="rs-section-title" style={{ fontSize: '28px' }}>When are you listening?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {TIMES.map((time) => (
            <Link key={time.href} href={time.href}
              style={{
                border: '1px solid var(--rs-border)',
                color: 'var(--rs-muted)',
                padding: '10px 20px',
                fontSize: '13px',
                letterSpacing: '0.06em',
                fontFamily: 'var(--font-dm-sans), sans-serif',
              }}
            >
              {time.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
