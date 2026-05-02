import Link from 'next/link'

const CARDS = [
  { label: 'Sleep and night ragas', description: 'Learn why late-night ragas such as Malkauns, Darbari, and Bageshree feel inward and settled.', href: '/listen/sleep' },
  { label: 'Morning ragas', description: 'Understand dawn ragas such as Bhairav, Lalit, and Todi through time, rasa, and mood.', href: '/listen/morning' },
  { label: 'Focus and attention', description: 'Explore ragas often associated with clarity, steadiness, and sustained attention.', href: '/listen/focus' },
  { label: 'Evening calm', description: 'Study ragas that open or soften the evening, including Yaman, Desh, and Kedar.', href: '/mood/calm' },
  { label: 'Emotional color', description: 'Compare ragas associated with longing, tenderness, devotion, and release.', href: '/mood/emotional-release' },
  { label: 'Meditative quality', description: 'Learn how stillness emerges through phrase, time, note emphasis, and rasa.', href: '/mood/meditation' },
]

export default function FindYourRagaGrid() {
  return (
    <section className="rs-section">
      <div className="rs-container">
        <p className="rs-section-label">Learn by purpose</p>
        <h2 className="rs-section-title" style={{ fontSize: '28px' }}>Explore how ragas create mood</h2>
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
                  Learn more -&gt;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
