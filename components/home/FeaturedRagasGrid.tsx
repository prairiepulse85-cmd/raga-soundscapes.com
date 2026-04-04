import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function FeaturedRagasGrid({ ragas }: { ragas: Raga[] }) {
  return (
    <section style={{ background: '#0D1828', padding: '80px 24px', borderTop: '1px solid #2A3D5C' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8A830', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Recommended starting points
        </p>
        <h2 style={{ fontSize: '28px', color: '#EAD898', marginBottom: '32px', fontFamily: 'var(--font-cinzel), serif' }}>
          Featured Ragas
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1px',
          background: '#2A3D5C',
          border: '1px solid #2A3D5C',
        }}>
          {ragas.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>
      </div>
    </section>
  )
}
