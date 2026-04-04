import Link from 'next/link'
import type { Raga } from '@/lib/types'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} className="group block">
      <div className="min-h-[140px] flex flex-col justify-between bg-surface border border-border rounded-[2px] border-t-2 border-t-accent px-5 py-4 transition-colors duration-200 hover:bg-surface-raised">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-[family-name:var(--font-cinzel)] text-[17px] text-text">
              {raga.name}
            </h3>
            {!raga.isLive && (
              <span className="text-[9px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.1em] text-muted/60 border border-border px-2 py-0.5 rounded-full shrink-0">
                Soon
              </span>
            )}
          </div>
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.1em] text-muted/70 mb-1">
            {raga.timeOfDay}
          </p>
        </div>
        <div>
          <p className="text-[12px] font-[family-name:var(--font-dm-sans)] text-muted leading-relaxed">
            {raga.rasa}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-[family-name:var(--font-dm-sans)] text-accent/80 border border-accent/30 px-2 py-0.5 rounded-full">
              {raga.mood}
            </span>
            <span className="text-[11px] font-[family-name:var(--font-dm-sans)] text-muted/60">
              {raga.instruments.slice(0, 2).join(' · ')}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
