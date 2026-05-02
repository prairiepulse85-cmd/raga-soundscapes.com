export default function SubscribeCTA() {
  return (
    <section style={{ background: '#0A1220', borderTop: '2px solid #C8A830', padding: '64px 24px' }}>
      <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ width: '40px', height: '1px', background: '#2A3D5C', margin: '0 auto 24px' }} />
        <h2 style={{ fontSize: '30px', color: '#EAD898', marginBottom: '16px', fontStyle: 'italic', fontFamily: 'var(--font-cinzel), serif' }}>
          Learn here. Listen gently.
        </h2>
        <p style={{ fontSize: '13px', color: '#8A9EC4', lineHeight: 1.7, marginBottom: '28px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          The website explains raga basics. The YouTube channel offers meditation and sleep soundscapes with raga-inspired elements, not strict classical performances.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="https://youtube.com/@ragasoundscapes" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', border: '1px solid #C8A830', color: '#C8A830', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 24px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Visit YouTube -&gt;
          </a>
          <span style={{ fontSize: '12px', color: '#4A6080', fontFamily: 'var(--font-dm-sans), sans-serif' }}>@ragasoundscapes</span>
        </div>
      </div>
    </section>
  )
}
