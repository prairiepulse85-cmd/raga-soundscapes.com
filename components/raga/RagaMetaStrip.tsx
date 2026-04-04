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
    <div className="flex flex-wrap gap-5 pb-6 border-b border-rs-border mb-8">
      {fields.map((field) => (
        <div key={field.label}>
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-rs-hint mb-1">
            {field.label}
          </p>
          <p className="text-[14px] font-[family-name:var(--font-cinzel)] text-rs-text">
            {field.value}
          </p>
        </div>
      ))}
    </div>
  )
}
