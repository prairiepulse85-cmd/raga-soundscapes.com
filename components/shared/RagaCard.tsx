import Link from 'next/link'
import type { Raga } from '@/lib/types'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} style={{ display: 'block' }}>
      <article className="rs-raga-card" style={{ padding: '22px', textAlign: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '19px', color: 'var(--rs-text)', lineHeight: 1.25, fontFamily: 'var(--font-cinzel), serif' }}>
            {raga.name}
          </h3>
          <span style={{
            fontSize: '10px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: raga.isLive ? 'var(--rs-teal)' : 'var(--rs-hint)',
            border: `1px solid ${raga.isLive ? 'var(--rs-teal)' : 'var(--rs-border)'}`,
            padding: '3px 8px',
            flexShrink: 0,
            fontFamily: 'var(--font-dm-sans), sans-serif',
          }}>
            {raga.isLive ? 'Listen' : 'Guide'}
          </span>
        </div>
        <p style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '8px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.timeOfDay} - {raga.mood}
        </p>
        <p style={{ fontSize: '14px', color: 'var(--rs-muted)', lineHeight: 1.65, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.rasa}
        </p>
        <p style={{ fontSize: '12px', color: 'var(--rs-hint)', marginTop: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.instruments.slice(0, 2).join(' - ')}
        </p>
      </article>
    </Link>
  )
}
