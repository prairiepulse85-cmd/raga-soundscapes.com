export default function HeroSection() {
  return (
    <section className="rs-section" style={{ textAlign: 'center' }}>
      <div className="rs-container" style={{ maxWidth: '720px' }}>
        <p className="rs-section-label">Indian classical meditation music</p>
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
          Indian classical soundscapes for calm, focus, and stillness.
        </p>
        <p style={{ color: 'var(--rs-hint)', fontSize: '15px', marginBottom: '48px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Organised by time, mood, and rasa.
        </p>
        <a
          href="https://youtube.com/@ragasoundscapes"
          target="_blank"
          rel="noopener noreferrer"
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
          Listen on YouTube →
        </a>
      </div>
    </section>
  )
}
