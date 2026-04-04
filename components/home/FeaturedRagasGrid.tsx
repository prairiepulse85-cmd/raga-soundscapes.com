import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function FeaturedRagasGrid({ ragas }: { ragas: Raga[] }) {
  return (
    <section className="bg-bg py-14 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-muted mb-1">
          Recommended starting points
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[24px] text-text mb-8">
          Featured Ragas
        </h2>
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-3">
          {ragas.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>
      </div>
    </section>
  )
}
