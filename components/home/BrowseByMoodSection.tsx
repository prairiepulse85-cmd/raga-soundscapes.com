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
    <section style={{ background: '#0D1828', padding: '80px 24px', borderTop: '1px solid #2A3D5C' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8A830', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Browse by mood
        </p>
        <h2 style={{ fontSize: '28px', color: '#EAD898', marginBottom: '32px', fontFamily: 'var(--font-cinzel), serif' }}>
          What do you need?
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {MOODS.map((mood) => (
            <Link key={mood.href} href={mood.href}
              style={{ display: 'inline-block', border: '1px solid #2A3D5C', color: '#8A9EC4', fontSize: '14px', padding: '10px 20px', fontFamily: 'var(--font-dm-sans), sans-serif' }}
            >
              {mood.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
