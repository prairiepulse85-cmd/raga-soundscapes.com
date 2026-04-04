export default function SubscribeCTA() {
  return (
    <section style={{ background: '#111111', borderTop: '2px solid #c8913a', padding: '80px 24px' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ width: '40px', height: '1px', background: '#2a2a2a', margin: '0 auto 24px' }} />
        <h2 style={{ fontSize: '30px', color: '#e8d5b7', marginBottom: '16px', fontStyle: 'italic' }}>
          Find your stillness.
        </h2>
        <p style={{ fontSize: '14px', color: '#a89880', lineHeight: 1.7, marginBottom: '28px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          An ever-growing library of Indian classical raga soundscapes. Each one
          designed around the time, mood, and rasa of its raga.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href="https://youtube.com/@ragasoundscapes"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              border: '1px solid #c8913a',
              color: '#c8913a',
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Subscribe on YouTube →
          </a>
          <span style={{ fontSize: '12px', color: '#a89880', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            @ragasoundscapes
          </span>
        </div>
      </div>
    </section>
  )
}
