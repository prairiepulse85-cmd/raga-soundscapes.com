import Link from 'next/link'

export default function TagPill({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-block border border-[#E4D8C0] text-[#5A4830] text-[13px] font-[family-name:var(--font-dm-sans)] px-4 py-2 rounded-full hover:border-[#C8A830] hover:text-[#C8A830] transition-colors duration-200"
    >
      {label}
    </Link>
  )
}
