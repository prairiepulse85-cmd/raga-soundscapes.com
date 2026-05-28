import Link from 'next/link'

const MOODS = [
  { label: 'Sleep', href: '/listen/sleep' },
  { label: 'Focus & Study', href: '/listen/focus' },
  { label: 'Meditation', href: '/mood/meditation' },
  { label: 'Quiet & Settled', href: '/mood/quiet-settling' },
  { label: 'Evening Calm', href: '/mood/calm' },
  { label: 'Emotional Release', href: '/mood/emotional-release' },
]

export default function BrowseByMoodSection() {
  return (
    <section className="rs-section" style={{ borderTop: '1px solid var(--rs-border)' }}>
      <div className="rs-container">
        <p className="rs-section-label">Browse by mood</p>
        <h2 className="rs-section-title" style={{ fontSize: '30px' }}>Browse by listening mood</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {MOODS.map((mood) => (
            <Link key={mood.href} href={mood.href}
              style={{
                border: '1px solid var(--rs-border)',
                color: 'var(--rs-muted)',
                background: 'var(--rs-surface2)',
                padding: '11px 20px',
                fontSize: '14px',
                letterSpacing: '0.06em',
                fontFamily: 'var(--font-dm-sans), sans-serif',
              }}
            >
              {mood.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
