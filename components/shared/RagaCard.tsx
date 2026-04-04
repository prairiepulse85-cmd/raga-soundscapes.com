import Link from 'next/link'
import type { Raga } from '@/lib/types'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} style={{ display: 'block' }}>
      <div style={{
        background: 'var(--rs-bg)',
        padding: '20px',
        borderLeft: '2px solid rgba(200, 168, 48, 0.18)',
        textAlign: 'left',
        transition: 'border-left-color 0.2s, background 0.2s',
      }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderLeftColor = '#C8A830'
          e.currentTarget.style.background = 'var(--rs-surface2)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderLeftColor = 'rgba(200, 168, 48, 0.18)'
          e.currentTarget.style.background = 'var(--rs-bg)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
          <h3 style={{ fontSize: '17px', color: 'var(--rs-text)', fontFamily: 'var(--font-cinzel), serif' }}>
            {raga.name}
          </h3>
          {!raga.isLive && (
            <span style={{ fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rs-hint)', border: '1px solid var(--rs-border)', padding: '2px 8px', flexShrink: 0, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Soon
            </span>
          )}
        </div>
        <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '4px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.timeOfDay} · {raga.mood}
        </p>
        <p style={{ fontSize: '12px', color: 'var(--rs-muted)', lineHeight: 1.5, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.rasa}
        </p>
        <p style={{ fontSize: '11px', color: 'var(--rs-hint)', marginTop: '6px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.instruments.slice(0, 2).join(' · ')}
        </p>
      </div>
    </Link>
  )
}
