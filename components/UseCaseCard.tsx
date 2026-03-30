import Link from 'next/link'

type UseCaseCardProps = {
  title: string
  body: string
  href: string
}

export default function UseCaseCard({ title, body, href }: UseCaseCardProps) {
  return (
    <Link href={href}>
      <div className="bg-[#EFE4CC] border border-[#DAC8A8] border-l-2 border-l-[#D4A855] hover:border-l-[#C89830] rounded-[2px] p-5 transition-[border-left-color,background] duration-200 ease-in-out hover:bg-[#E8DCC4] group">
        <h3 className="font-[family-name:var(--font-cormorant)] text-[16px] text-[#8B5A20] mb-2">
          {title}
        </h3>
        <p className="text-[12px] font-[family-name:var(--font-dm-sans)] text-[#7A6040] leading-[1.6] mb-3">
          {body}
        </p>
        <span className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#D4A855]">
          Explore →
        </span>
      </div>
    </Link>
  )
}
