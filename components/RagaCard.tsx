import Link from 'next/link'
import { Raga } from '@/lib/ragas'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} style={{ display: 'block' }}>
      <div className="rs-raga-card-legacy" style={{ border: '1px solid var(--rs-border)', padding: '22px' }}>
        <h3 style={{ fontSize: '19px', color: 'var(--rs-text)', marginBottom: '8px', fontFamily: 'var(--font-cinzel), serif' }}>
          {raga.name}
        </h3>
        <p style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '6px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.timeOfDay}
        </p>
        <p style={{ fontSize: '14px', color: 'var(--rs-muted)', lineHeight: 1.65, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.rasa}
        </p>
        <p style={{ fontSize: '12px', color: 'var(--rs-hint)', marginTop: '10px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.instruments.join(' - ')}
        </p>
      </div>
    </Link>
  )
}
