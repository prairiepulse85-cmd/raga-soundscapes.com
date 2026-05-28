export default function SubscribeCTA() {
  return (
    <section style={{ background: 'var(--rs-surface2)', borderTop: '2px solid var(--rs-accent)', padding: '64px 24px' }}>
      <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ width: '48px', height: '1px', background: 'var(--rs-teal)', margin: '0 auto 24px' }} />
        <h2 style={{ fontSize: '32px', color: 'var(--rs-text)', marginBottom: '16px', fontFamily: 'var(--font-cinzel), serif' }}>
          Continue with the channel.
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--rs-muted)', lineHeight: 1.8, marginBottom: '28px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          This website is a raga education library. The YouTube channel is a separate soundscape channel and should not be treated as a formal classical raga archive.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="https://youtube.com/@ragasoundscapes" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', border: '1px solid var(--rs-accent)', color: 'var(--rs-bg)', background: 'var(--rs-accent)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '12px 24px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Visit YouTube -&gt;
          </a>
          <span style={{ fontSize: '13px', color: 'var(--rs-hint)', fontFamily: 'var(--font-dm-sans), sans-serif' }}>@ragasoundscapes</span>
        </div>
      </div>
    </section>
  )
}
