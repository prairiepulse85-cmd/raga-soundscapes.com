import Link from 'next/link'

type UseCaseCardProps = {
  title: string
  body: string
  href: string
}

export default function UseCaseCard({ title, body, href }: UseCaseCardProps) {
  return (
    <Link href={href} className="block">
      <div className="min-h-[200px] flex flex-col justify-between bg-[#EFE4CC] border-[0.5px] border-[#DAC8A8] border-l-2 border-l-[#D4A855] hover:border-l-[#C89830] rounded-[2px] px-[22px] py-[20px] transition-[border-left-color,background] duration-200 ease-in-out hover:bg-[#E8DCC4] group">
        <div>
          <h3 className="font-[family-name:var(--font-cormorant)] italic text-[18px] text-[#8B5A20] mb-2">
            {title}
          </h3>
          <p className="text-[14px] font-[family-name:var(--font-dm-sans)] text-[#6A5038] leading-[1.65] mb-3">
            {body}
          </p>
        </div>
        <span className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#D4A855]">
          Explore →
        </span>
      </div>
    </Link>
  )
}
