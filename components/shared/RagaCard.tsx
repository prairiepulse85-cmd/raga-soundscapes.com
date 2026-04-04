import Link from 'next/link'
import type { Raga } from '@/lib/types'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} style={{ display: 'block' }}>
      <div style={{
        background: '#0a0a0a',
        padding: '28px 24px',
        borderLeft: '2px solid rgba(200, 145, 58, 0.18)',
        transition: 'border-left-color 0.2s, background 0.2s',
      }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderLeftColor = '#c8913a'
          e.currentTarget.style.background = '#111111'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderLeftColor = 'rgba(200, 145, 58, 0.18)'
          e.currentTarget.style.background = '#0a0a0a'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '6px' }}>
          <h3 style={{ fontSize: '17px', color: '#e8d5b7', fontFamily: 'var(--font-serif), Georgia, serif' }}>
            {raga.name}
          </h3>
          {!raga.isLive && (
            <span style={{
              fontSize: '9px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#a89880',
              border: '1px solid #2a2a2a',
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
          color: '#c8913a',
          marginBottom: '4px',
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}>
          {raga.timeOfDay} · {raga.mood}
        </p>
        <p style={{ fontSize: '13px', color: '#a89880', lineHeight: 1.5, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.rasa}
        </p>
        <p style={{ fontSize: '11px', color: '#a89880', opacity: 0.6, marginTop: '6px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.instruments.slice(0, 2).join(' · ')}
        </p>
      </div>
    </Link>
  )
}
