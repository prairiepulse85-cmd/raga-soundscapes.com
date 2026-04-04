import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function RelatedRagasGrid({ ragas }: { ragas: Raga[] }) {
  if (ragas.length === 0) return null
  return (
    <section style={{ background: '#0D1828', padding: '48px 24px', borderTop: '1px solid #2A3D5C' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A6080', marginBottom: '16px', textAlign: 'center', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          You might also like
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1px', background: '#2A3D5C', border: '1px solid #2A3D5C' }}>
          {ragas.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>
      </div>
    </section>
  )
}
