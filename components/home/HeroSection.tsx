export default function HeroSection() {
  return (
    <section style={{
      padding: '120px 24px 100px',
      textAlign: 'center',
      background: '#0a0a0a',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#c8913a',
          marginBottom: '24px',
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}>
          Indian classical meditation music
        </p>

        <h1 style={{
          fontSize: 'clamp(44px, 7vw, 72px)',
          fontFamily: 'var(--font-serif), Georgia, serif',
          fontWeight: 400,
          color: '#e8d5b7',
          marginBottom: '20px',
          lineHeight: 1.1,
        }}>
          Raga Soundscapes
        </h1>

        <p style={{
          fontSize: '20px',
          color: '#a89880',
          marginBottom: '10px',
          lineHeight: 1.5,
        }}>
          Indian classical soundscapes for calm, focus, and stillness.
        </p>

        <p style={{
          fontSize: '15px',
          color: '#a89880',
          opacity: 0.7,
          marginBottom: '48px',
        }}>
          Organised by time, mood, and rasa.
        </p>

        <a
          href="https://youtube.com/@ragasoundscapes"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            border: '1px solid #c8913a',
            color: '#c8913a',
            padding: '13px 32px',
            fontSize: '14px',
            letterSpacing: '0.06em',
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
