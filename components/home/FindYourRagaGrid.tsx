import Link from 'next/link'

const CARDS = [
  { label: 'For Sleep', description: 'Late-night ragas designed to quiet the mind. Malkauns, Darbari, Bageshree.', href: '/listen/sleep' },
  { label: 'For Morning Meditation', description: 'Dawn ragas to begin the day in stillness. Bhairav, Lalit, Todi.', href: '/listen/morning' },
  { label: 'For Focus & Deep Work', description: 'Ragas for concentration and creative work. Yaman, Bihag, Kafi.', href: '/listen/focus' },
  { label: 'For Evening Calm', description: 'Soft unwinding as the day closes. Yaman, Desh, Kedar.', href: '/mood/calm' },
  { label: 'For Emotional Release', description: 'Ragas that allow feeling to settle and release. Bhairavi, Jaunpuri, Patdeep.', href: '/mood/emotional-release' },
  { label: 'For Meditation', description: 'Stillness, awareness, and inner quiet. Bhairav, Todi, Shree.', href: '/mood/meditation' },
]

export default function FindYourRagaGrid() {
  return (
    <section style={{ background: '#0a0a0a', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8913a', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          What are you listening for?
        </p>
        <h2 style={{ fontSize: '42px', color: '#e8d5b7', marginBottom: '48px' }}>
          Find the right raga
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1px',
          background: '#2a2a2a',
          border: '1px solid #2a2a2a',
        }}>
          {CARDS.map((card) => (
            <Link key={card.href} href={card.href} style={{ display: 'block' }}>
              <div
                style={{ background: '#0a0a0a', padding: '32px 28px', textAlign: 'left', transition: 'background 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#111111' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#0a0a0a' }}
              >
                <h3 style={{ fontSize: '18px', color: '#e8d5b7', marginBottom: '8px' }}>
                  {card.label}
                </h3>
                <p style={{ fontSize: '14px', color: '#a89880', lineHeight: 1.6, marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                  {card.description}
                </p>
                <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c8913a', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
