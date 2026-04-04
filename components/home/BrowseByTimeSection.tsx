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
    <section style={{ background: '#0D1828', padding: '80px 24px', borderTop: '1px solid #2A3D5C' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8A830', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Browse by time of day
        </p>
        <h2 style={{ fontSize: '28px', color: '#EAD898', marginBottom: '32px', fontFamily: 'var(--font-cinzel), serif' }}>
          When are you listening?
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {TIMES.map((time) => (
            <Link key={time.href} href={time.href}
              style={{ display: 'inline-block', border: '1px solid #2A3D5C', color: '#8A9EC4', fontSize: '14px', padding: '10px 20px', fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              {time.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
