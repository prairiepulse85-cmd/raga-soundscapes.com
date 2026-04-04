import Link from 'next/link'
import { Raga } from '@/lib/ragas'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} style={{ display: 'block' }}>
      <div style={{
        background: '#1A2E50',
        border: '1px solid #2A3D5C',
        borderLeft: '2px solid rgba(200, 168, 48, 0.18)',
        padding: '20px',
        transition: 'border-left-color 0.2s, background 0.2s',
      }}
        onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = '#C8A830'; e.currentTarget.style.background = '#0A1220' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = 'rgba(200, 168, 48, 0.18)'; e.currentTarget.style.background = '#1A2E50' }}
      >
        <h3 style={{ fontSize: '17px', color: '#EAD898', marginBottom: '8px', fontFamily: 'var(--font-cinzel), serif' }}>
          {raga.name}
        </h3>
        <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A6080', marginBottom: '4px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.timeOfDay}
        </p>
        <p style={{ fontSize: '12px', color: '#8A9EC4', lineHeight: 1.5, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.rasa}
        </p>
        <p style={{ fontSize: '11px', color: '#4A6080', marginTop: '8px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.instruments.join(' · ')}
        </p>
      </div>
    </Link>
  )
}
