export default function HeroSection() {
  return (
    <section className="rs-section" style={{ textAlign: 'center' }}>
      <div className="rs-container" style={{ maxWidth: '780px' }}>
        <p className="rs-section-label">Beginner-friendly raga education</p>
        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 68px)',
          marginBottom: '20px',
          fontFamily: 'var(--font-cinzel), serif',
          color: 'var(--rs-text)',
          letterSpacing: '0.08em',
          lineHeight: 1.1,
        }}>
          Raga Soundscapes
        </h1>
        <p style={{ color: 'var(--rs-muted)', fontSize: '20px', marginBottom: '10px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Learn the basics of Indian ragas through mood, time, rasa, and structure.
        </p>
        <p style={{ color: 'var(--rs-hint)', fontSize: '15px', lineHeight: 1.8, marginBottom: '48px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          A calm guide to aroha, avaroha, pakad, vadi, samvadi, thaat, and beginner listening notes.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#ragas"
            style={{
              border: '1px solid var(--rs-accent)',
              color: 'var(--rs-accent)',
              padding: '13px 32px',
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'inline-block',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Explore the raga library
          </a>
          <a
            href="#raga-basics"
            style={{
              border: '1px solid var(--rs-border)',
              color: 'var(--rs-muted)',
              padding: '13px 32px',
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'inline-block',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Learn raga basics
          </a>
        </div>
      </div>
    </section>
  )
}
