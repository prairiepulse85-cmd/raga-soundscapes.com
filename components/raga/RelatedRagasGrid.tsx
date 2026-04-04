import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function RelatedRagasGrid({ ragas }: { ragas: Raga[] }) {
  if (ragas.length === 0) return null
  return (
    <section className="section-light py-12 px-6 mb-0">
      <div className="max-w-[720px] mx-auto">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A8860] mb-4">
          You might also like
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px]">
          {ragas.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>
      </div>
    </section>
  )
}
