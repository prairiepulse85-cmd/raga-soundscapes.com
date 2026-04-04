import Link from 'next/link'
import type { Raga } from '@/lib/types'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} className="block">
      <div className="flex flex-col justify-between bg-white border-[0.5px] border-[#E4D8C0] border-t-2 border-t-[#C8A830] rounded-[2px] px-[22px] py-[20px] shadow-[0_1px_6px_rgba(18,33,58,0.08)] transition-shadow duration-200 ease-in-out hover:shadow-[0_2px_12px_rgba(18,33,58,0.12)] group">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-[family-name:var(--font-cinzel)] text-[18px] text-[#12213A]">
              {raga.name}
            </h3>
            {!raga.isLive && (
              <span className="text-[9px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.1em] text-[#9A8860] border border-[#E4D8C0] px-2 py-0.5 rounded-full shrink-0">
                Soon
              </span>
            )}
          </div>
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A8860] mb-1">
            {raga.timeOfDay}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-[12px] font-[family-name:var(--font-dm-sans)] text-[#7A6848] leading-relaxed">
            {raga.rasa}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-[family-name:var(--font-dm-sans)] text-[#C8A830] border border-[#E4D8C0] px-2 py-0.5 rounded-full">
              {raga.mood}
            </span>
            <span className="text-[11px] font-[family-name:var(--font-dm-sans)] text-[#9A8860]">
              {raga.instruments.slice(0, 2).join(' · ')}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
