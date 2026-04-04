import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function FeaturedRagasGrid({ ragas }: { ragas: Raga[] }) {
  return (
    <section className="section-light border-b border-[#E4D8C0] py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A8860] mb-1">
          Recommended starting points
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[24px] text-[#12213A] mb-7">
          Featured Ragas
        </h2>
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px] text-left">
          {ragas.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>
      </div>
    </section>
  )
}
