import Link from 'next/link'
import type { Raga } from '@/lib/types'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} style={{ display: 'block' }}>
      <div className="rs-raga-card" style={{
        padding: '20px',
        textAlign: 'left',
      }}>
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
