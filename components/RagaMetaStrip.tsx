import { Raga } from '@/lib/ragas'

export default function RagaMetaStrip({ raga }: { raga: Raga }) {
  const fields = [
    { label: 'Time', value: raga.timeOfDay },
    { label: 'Mood', value: raga.rasa },
    { label: 'Instruments', value: raga.instruments.join(' - ') },
  ]

  return (
    <div className="mb-8 flex flex-wrap gap-5 border-b border-rs-border pb-6">
      {fields.map((field) => (
        <div key={field.label}>
          <p className="mb-1 font-[family-name:var(--font-dm-sans)] text-[11px] uppercase tracking-[0.1em] text-rs-hint">
            {field.label}
          </p>
          <p className="font-[family-name:var(--font-cinzel)] text-[15px] text-rs-text">
            {field.value}
          </p>
        </div>
      ))}
    </div>
  )
}
