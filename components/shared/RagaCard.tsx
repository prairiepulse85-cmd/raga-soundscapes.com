import Link from 'next/link'
import type { Raga } from '@/lib/types'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} style={{ display: 'block' }}>
      <div style={{
        background: '#0D1828',
        padding: '20px',
        borderLeft: '2px solid rgba(200, 168, 48, 0.18)',
        transition: 'border-left-color 0.2s, background 0.2s',
      }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderLeftColor = '#C8A830'
          e.currentTarget.style.background = '#0A1220'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderLeftColor = 'rgba(200, 168, 48, 0.18)'
          e.currentTarget.style.background = '#0D1828'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
          <h3 style={{ fontSize: '17px', color: '#EAD898', fontFamily: 'var(--font-cinzel), serif' }}>
            {raga.name}
          </h3>
          {!raga.isLive && (
            <span style={{
              fontSize: '9px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#4A6080',
              border: '1px solid #2A3D5C',
              padding: '2px 8px',
              flexShrink: 0,
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}>
              Soon
            </span>
          )}
        </div>
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#4A6080',
          marginBottom: '4px',
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}>
          {raga.timeOfDay} · {raga.mood}
        </p>
        <p style={{ fontSize: '12px', color: '#8A9EC4', lineHeight: 1.5, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.rasa}
        </p>
        <p style={{ fontSize: '11px', color: '#4A6080', marginTop: '6px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.instruments.slice(0, 2).join(' · ')}
        </p>
      </div>
    </Link>
  )
}
