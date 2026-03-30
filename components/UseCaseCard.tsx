import Link from 'next/link'

type UseCaseCardProps = {
  title: string
  body: string
  href: string
}

export default function UseCaseCard({ title, body, href }: UseCaseCardProps) {
  return (
    <Link href={href} className="block">
      <div className="min-h-[200px] flex flex-col justify-between bg-[#FDFAF4] border-[0.5px] border-[#E4D4B0] border-l-[3px] border-l-[#D4A030] rounded-[2px] px-[22px] py-[20px] shadow-[0_1px_8px_rgba(80,40,0,0.06)] transition-colors duration-200 ease-in-out group">
        <div>
          <h3 className="font-[family-name:var(--font-cormorant)] italic text-[18px] text-[#4A2810] mb-[10px]">
            {title}
          </h3>
          <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-[#6A5030] leading-[1.65] flex-1 mb-4">
            {body}
          </p>
        </div>
        <span className="text-[10px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] text-[#D4A030] group-hover:text-[#4A2810] transition-colors duration-200">
          Explore →
        </span>
      </div>
    </Link>
  )
}
