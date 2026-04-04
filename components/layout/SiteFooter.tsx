import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #2a2a2a', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '32px', marginBottom: '32px' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a89880', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Listen by mood
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#a89880', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <Link href="/listen/sleep">Sleep Ragas</Link>
              <Link href="/listen/morning">Morning Ragas</Link>
              <Link href="/listen/focus">Focus Ragas</Link>
              <Link href="/mood/meditation">Meditation</Link>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a89880', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Listen by time
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#a89880', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <Link href="/time/early-morning">Early Morning</Link>
              <Link href="/time/evening">Evening</Link>
              <Link href="/time/night">Night</Link>
              <Link href="/time/late-night">Late Night</Link>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a89880', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Raga Soundscapes
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#a89880', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              <a href="https://youtube.com/@ragasoundscapes" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
              <Link href="/#ragas">Full Library</Link>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', color: '#a89880', opacity: 0.5, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            © Raga Soundscapes · ragasoundscapes.com
          </p>
        </div>
      </div>
    </footer>
  )
}
