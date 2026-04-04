import Link from 'next/link'

export default function TagPill({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-block border border-border text-muted text-[13px] font-[family-name:var(--font-dm-sans)] px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
    >
      {label}
    </Link>
  )
}
