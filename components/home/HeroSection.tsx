export default function HeroSection() {
  return (
    <section style={{
      padding: '120px 24px 100px',
      textAlign: 'center',
      background: '#0D1828',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#4A6080',
          marginBottom: '24px',
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}>
          Indian classical meditation music
        </p>

        <h1 style={{
          fontSize: 'clamp(32px, 6vw, 42px)',
          fontFamily: 'var(--font-cinzel), serif',
          fontWeight: 400,
          color: '#EAD898',
          letterSpacing: '0.12em',
          marginBottom: '16px',
          lineHeight: 1.1,
        }}>
          Raga Soundscapes
        </h1>

        <p style={{
          fontSize: '15px',
          color: '#8A9EC4',
          marginBottom: '10px',
          lineHeight: 1.5,
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}>
          Indian classical soundscapes for calm, focus, and stillness.
        </p>

        <p style={{
          fontSize: '13px',
          color: '#4A6080',
          marginBottom: '32px',
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}>
          Organised by time, mood, and rasa.
        </p>

        <a
          href="https://youtube.com/@ragasoundscapes"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            border: '1px solid #C8A830',
            color: '#C8A830',
            padding: '12px 24px',
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-dm-sans), sans-serif',
          }}
        >
          Listen on YouTube →
        </a>
      </div>
    </section>
  )
}
