import { Raga } from '@/lib/ragas'
import RagaCard from './RagaCard'

export default function RelatedRagas({ ragas }: { ragas: Raga[] }) {
  return (
    <section className="mb-12">
      <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-rs-hint mb-4">
        You might also like
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px]">
        {ragas.map((raga) => (
          <RagaCard key={raga.slug} raga={raga} />
        ))}
      </div>
    </section>
  )
}
