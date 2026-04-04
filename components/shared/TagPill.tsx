import Link from 'next/link'

export default function TagPill({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      style={{
        display: 'inline-block',
        border: '1px solid #2a2a2a',
        color: '#a89880',
        fontSize: '14px',
        padding: '10px 20px',
        fontFamily: 'var(--font-dm-sans), sans-serif',
      }}
    >
      {label}
    </Link>
  )
}
