import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--rs-border)', padding: '48px 0', textAlign: 'center' }}>
      <div className="rs-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '32px', marginBottom: '32px' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Listen by mood
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--rs-hint)', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <Link href="/listen/sleep">Sleep Ragas</Link>
              <Link href="/listen/morning">Morning Ragas</Link>
              <Link href="/listen/focus">Focus Ragas</Link>
              <Link href="/mood/meditation">Meditation</Link>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Listen by time
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--rs-hint)', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <Link href="/time/early-morning">Early Morning</Link>
              <Link href="/time/evening">Evening</Link>
              <Link href="/time/night">Night</Link>
              <Link href="/time/late-night">Late Night</Link>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Raga Soundscapes
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--rs-hint)', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <a href="https://youtube.com/@ragasoundscapes" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
              <Link href="/#ragas">Full Library</Link>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--rs-border2)', paddingTop: '20px' }}>
          <p style={{ fontSize: '11px', color: 'var(--rs-border)', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            © Raga Soundscapes · ragasoundscapes.com
          </p>
        </div>
      </div>
    </footer>
  )
}
