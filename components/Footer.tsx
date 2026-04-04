import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #2a2a2a', padding: '20px 24px', textAlign: 'center' }}>
      <p style={{ fontSize: '11px', color: '#2a2a2a', marginBottom: '8px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        © Raga Soundscapes · ragasoundscapes.com
      </p>
      <p style={{ fontSize: '11px', color: '#a89880', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        <Link href="/listen/sleep">Sleep Ragas</Link>
        <span style={{ margin: '0 8px' }}>·</span>
        <Link href="/listen/morning">Morning Ragas</Link>
        <span style={{ margin: '0 8px' }}>·</span>
        <Link href="/listen/focus">Focus Ragas</Link>
      </p>
    </footer>
  )
}
