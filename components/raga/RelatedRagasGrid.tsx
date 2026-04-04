import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function RelatedRagasGrid({ ragas }: { ragas: Raga[] }) {
  if (ragas.length === 0) return null
  return (
    <section style={{ borderTop: '1px solid var(--rs-border)', padding: '48px 0' }}>
      <div className="rs-container" style={{ maxWidth: '720px' }}>
        <p className="rs-section-label">You might also like</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1px', background: 'var(--rs-border)', border: '1px solid var(--rs-border)' }}>
          {ragas.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>
      </div>
    </section>
  )
}
