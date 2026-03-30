import Link from 'next/link'

type UseCaseCardProps = {
  title: string
  body: string
  href: string
}

export default function UseCaseCard({ title, body, href }: UseCaseCardProps) {
  return (
    <Link href={href}>
      <div className="bg-rs-surface border border-rs-border border-l-2 border-l-[rgba(200,145,58,0.20)] hover:border-l-rs-accent rounded-[2px] p-5 transition-[border-left-color,background] duration-200 ease-in-out hover:bg-rs-surface2 group">
        <h3 className="font-[family-name:var(--font-cormorant)] text-[16px] text-rs-text mb-2">
          {title}
        </h3>
        <p className="text-[12px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-[1.6] mb-3">
          {body}
        </p>
        <span className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-rs-accent">
          Explore →
        </span>
      </div>
    </Link>
  )
}
