import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function RelatedRagasGrid({ ragas }: { ragas: Raga[] }) {
  if (ragas.length === 0) return null
  return (
    <section style={{ background: '#0a0a0a', padding: '48px 24px', borderTop: '1px solid #2a2a2a' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c8913a', marginBottom: '16px', textAlign: 'center', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          You might also like
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
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
