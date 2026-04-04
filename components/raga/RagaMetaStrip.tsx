import type { Raga } from '@/lib/types'

export default function RagaMetaStrip({ raga }: { raga: Raga }) {
  const fields = [
    { label: 'Time', value: raga.timeOfDay },
    { label: 'Rasa', value: raga.rasa },
    { label: 'Thaat', value: raga.thaat },
    { label: 'Mood', value: raga.mood },
    { label: 'Instruments', value: raga.instruments.join(' · ') },
  ]

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--rs-border)', marginBottom: '32px' }}>
      {fields.map((field) => (
        <div key={field.label}>
          <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '4px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            {field.label}
          </p>
          <p style={{ fontSize: '14px', color: 'var(--rs-text)', fontFamily: 'var(--font-cinzel), serif' }}>
            {field.value}
          </p>
        </div>
      ))}
    </div>
  )
}
