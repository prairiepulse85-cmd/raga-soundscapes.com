import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0D1828', borderTop: '1px solid #1E3050', padding: '20px 24px', textAlign: 'center' }}>
      <p style={{ fontSize: '11px', color: '#2A3D5C', marginBottom: '8px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        © Raga Soundscapes · ragasoundscapes.com
      </p>
      <p style={{ fontSize: '11px', color: '#4A6080', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        <Link href="/listen/sleep">Sleep Ragas</Link>
        <span style={{ margin: '0 8px' }}>·</span>
        <Link href="/listen/morning">Morning Ragas</Link>
        <span style={{ margin: '0 8px' }}>·</span>
        <Link href="/listen/focus">Focus Ragas</Link>
      </p>
    </footer>
  )
}
