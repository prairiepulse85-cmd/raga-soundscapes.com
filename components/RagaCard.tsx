import Link from 'next/link'
import { Raga } from '@/lib/ragas'

export default function RagaCard({ raga }: { raga: Raga }) {
  return (
    <Link href={`/raga/${raga.slug}`} style={{ display: 'block' }}>
      <div className="rs-raga-card-legacy" style={{
        border: '1px solid #2A3D5C',
        padding: '20px',
      }}>
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
