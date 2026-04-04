import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function FeaturedRagasGrid({ ragas }: { ragas: Raga[] }) {
  return (
    <section style={{ background: '#0a0a0a', padding: '80px 24px', borderTop: '1px solid #2a2a2a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8913a', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Recommended starting points
        </p>
        <h2 style={{ fontSize: '42px', color: '#e8d5b7', marginBottom: '48px' }}>
          Featured Ragas
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1px',
          background: '#2a2a2a',
          border: '1px solid #2a2a2a',
        }}>
          {ragas.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>
      </div>
    </section>
  )
}
