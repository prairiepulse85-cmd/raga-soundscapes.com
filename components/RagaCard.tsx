import Link from 'next/link'
import { Raga } from '@/lib/ragas'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} className="block">
      <div className="min-h-[140px] flex flex-col justify-between bg-white border-[0.5px] border-[#E4D8C0] border-t-2 border-t-[#C8A830] rounded-[2px] px-[22px] py-[20px] shadow-[0_1px_6px_rgba(18,33,58,0.08)] transition-shadow duration-200 ease-in-out hover:shadow-[0_2px_12px_rgba(18,33,58,0.12)] group">
        <div>
          <h3 className="font-[family-name:var(--font-cinzel)] text-[18px] text-[#12213A] mb-2">
            {raga.name}
          </h3>
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A8860] mb-1">
            {raga.timeOfDay}
          </p>
        </div>
        <div>
          <p className="text-[12px] font-[family-name:var(--font-dm-sans)] text-[#7A6848] leading-relaxed">
            {raga.rasa}
          </p>
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] text-[#9A8860] mt-2">
            {raga.instruments.join(' · ')}
          </p>
        </div>
      </div>
    </Link>
  )
}
