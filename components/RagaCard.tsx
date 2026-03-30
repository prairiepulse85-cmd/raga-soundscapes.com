import Link from 'next/link'
import { Raga } from '@/lib/ragas'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`}>
      <div className="bg-[#EFE4CC] border border-[#DAC8A8] border-l-2 border-l-[#D4A855] hover:border-l-[#C89830] rounded-[2px] p-5 transition-[border-left-color,background] duration-200 ease-in-out hover:bg-[#E8DCC4] group">
        <h3 className="font-[family-name:var(--font-cormorant)] text-[17px] text-[#8B5A20] mb-2">
          {raga.name}
        </h3>
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A7850] mb-1">
          {raga.timeOfDay}
        </p>
        <p className="text-[12px] font-[family-name:var(--font-dm-sans)] text-[#7A6040] leading-relaxed">
          {raga.rasa}
        </p>
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] text-[#9A7850] mt-2">
          {raga.instruments.join(' · ')}
        </p>
      </div>
    </Link>
  )
}
