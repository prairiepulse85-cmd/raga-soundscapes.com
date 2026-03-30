import Link from 'next/link'

type UseCaseCardProps = {
  title: string
  body: string
  href: string
}

export default function UseCaseCard({ title, body, href }: UseCaseCardProps) {
  return (
    <Link href={href} className="block">
      <div className="min-h-[200px] flex flex-col justify-between bg-white border-[0.5px] border-[#E4D8C0] border-t-2 border-t-[#C8A830] rounded-[2px] px-[22px] py-[20px] shadow-[0_1px_6px_rgba(18,33,58,0.08)] transition-shadow duration-200 ease-in-out hover:shadow-[0_2px_12px_rgba(18,33,58,0.12)] group">
        <div>
          <h3 className="font-[family-name:var(--font-cinzel)] text-[18px] text-[#12213A] mb-[10px]">
            {title}
          </h3>
          <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-[#5A4830] leading-[1.65] flex-1 mb-4">
            {body}
          </p>
        </div>
        <span className="text-[10px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] text-[#C8A830] group-hover:text-[#12213A] transition-colors duration-200">
          Explore →
        </span>
      </div>
    </Link>
  )
}
