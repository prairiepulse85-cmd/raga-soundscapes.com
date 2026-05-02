import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function FeaturedRagasGrid({ ragas }: { ragas: Raga[] }) {
  return (
    <section className="rs-section" style={{ borderTop: '1px solid var(--rs-border)' }}>
      <div className="rs-container">
        <p className="rs-section-label">Recommended learning points</p>
        <h2 className="rs-section-title" style={{ fontSize: '28px' }}>Featured Ragas</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1px',
          background: 'var(--rs-border)',
          border: '1px solid var(--rs-border)',
        }}>
          {ragas.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>
      </div>
    </section>
  )
}
