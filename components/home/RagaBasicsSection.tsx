const TERMS = [
  {
    term: 'Aroha',
    meaning: 'The ascending movement of a raga, showing how notes typically rise.',
  },
  {
    term: 'Avaroha',
    meaning: 'The descending movement, often revealing a different path back down.',
  },
  {
    term: 'Pakad',
    meaning: 'A signature phrase that helps listeners recognize the raga by movement, not scale alone.',
  },
  {
    term: 'Vadi / Samvadi',
    meaning: 'The primary and secondary notes that receive special weight in the raga.',
  },
  {
    term: 'Thaat',
    meaning: 'A parent scale family used as one way to classify Hindustani ragas.',
  },
  {
    term: 'Rasa',
    meaning: 'The emotional flavor or aesthetic mood associated with the raga.',
  },
]

export default function RagaBasicsSection() {
  return (
    <section id="raga-basics" className="rs-section" style={{ background: 'var(--rs-surface2)', borderTop: '1px solid var(--rs-border)', borderBottom: '1px solid var(--rs-border)' }}>
      <div className="rs-container">
        <p className="rs-section-label">Understand the grammar</p>
        <h2 className="rs-section-title" style={{ fontSize: '30px', marginBottom: '16px' }}>Raga basics, explained gently</h2>
        <p style={{ maxWidth: '720px', margin: '0 auto 40px', textAlign: 'center', fontSize: '16px', color: 'var(--rs-muted)', lineHeight: 1.85, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          A raga is not only a scale. It is a melodic identity shaped by movement, emphasized notes, characteristic phrases, time, and emotional color.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1px',
          background: 'var(--rs-border)',
          border: '1px solid var(--rs-border)',
        }}>
          {TERMS.map((item) => (
            <article key={item.term} className="rs-grid-card" style={{ padding: '24px 22px' }}>
              <h3 style={{ color: 'var(--rs-text)', fontSize: '17px', marginBottom: '10px', fontFamily: 'var(--font-cinzel), serif' }}>
                {item.term}
              </h3>
              <p style={{ color: 'var(--rs-muted)', fontSize: '14px', lineHeight: 1.7, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                {item.meaning}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
