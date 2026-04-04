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
    <section className="rs-section">
      <div className="rs-container">
        <p className="rs-section-label">What are you listening for?</p>
        <h2 className="rs-section-title" style={{ fontSize: '28px' }}>Find the right raga</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--rs-border)',
          border: '1px solid var(--rs-border)',
        }}>
          {CARDS.map((card) => (
            <Link key={card.href} href={card.href} style={{ display: 'block' }}>
              <div
                className="rs-grid-card"
                style={{ padding: '24px 20px', textAlign: 'left' }}
              >
                <h3 style={{ fontSize: '16px', color: 'var(--rs-text)', marginBottom: '8px', fontFamily: 'var(--font-cinzel), serif' }}>
                  {card.label}
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--rs-muted)', lineHeight: 1.6, marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                  {card.description}
                </p>
                <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-accent)', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
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
