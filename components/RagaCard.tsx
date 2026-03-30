import Link from 'next/link'
import { Raga } from '@/lib/ragas'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`}>
      <div className="bg-rs-surface border border-rs-border border-l-2 border-l-[rgba(200,145,58,0.18)] hover:border-l-rs-accent rounded-[2px] p-5 transition-[border-left-color,background] duration-200 ease-in-out hover:bg-rs-surface2 group">
        <h3 className="font-[family-name:var(--font-cormorant)] text-[17px] text-rs-text mb-2">
          {raga.name}
        </h3>
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-rs-hint mb-1">
          {raga.timeOfDay}
        </p>
        <p className="text-[12px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-relaxed">
          {raga.rasa}
        </p>
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-hint mt-2">
          {raga.instruments.join(' \u00b7 ')}
        </p>
      </div>
    </Link>
  )
}
