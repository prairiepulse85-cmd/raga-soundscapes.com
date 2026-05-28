import type { Raga } from '@/lib/types'

const structureItems = [
  {
    label: 'Thaat',
    getValue: (raga: Raga) => raga.thaat,
    note: 'The parent scale family used for classification.',
  },
  {
    label: 'Aroha',
    getValue: () => 'Verified notation coming soon',
    note: 'The characteristic ascending movement of the raga.',
  },
  {
    label: 'Avaroha',
    getValue: () => 'Verified notation coming soon',
    note: 'The characteristic descending movement of the raga.',
  },
  {
    label: 'Pakad',
    getValue: () => 'Verified phrase coming soon',
    note: 'The signature phrase or movement that makes the raga recognizable.',
  },
  {
    label: 'Vadi / Samvadi',
    getValue: () => 'Verified notes coming soon',
    note: 'The primary and secondary notes emphasized in the raga.',
  },
  {
    label: 'Listening identity',
    getValue: (raga: Raga) => raga.rasa,
    note: 'The emotional color a beginner can listen for first.',
  },
]

export default function RagaLearningPanel({ raga }: { raga: Raga }) {
  return (
    <section style={{ marginBottom: '40px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        Raga structure
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1px',
        background: 'var(--rs-border)',
        border: '1px solid var(--rs-border)',
        marginBottom: '18px',
      }}>
        {structureItems.map((item) => (
          <article key={item.label} className="rs-grid-card" style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '15px', color: 'var(--rs-text)', marginBottom: '8px', fontFamily: 'var(--font-cinzel), serif' }}>
              {item.label}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--rs-muted)', lineHeight: 1.65, marginBottom: '8px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              {item.getValue(raga)}
            </p>
            <p style={{ fontSize: '12px', color: 'var(--rs-hint)', lineHeight: 1.65, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              {item.note}
            </p>
          </article>
        ))}
      </div>
      <p style={{ fontSize: '12px', color: 'var(--rs-hint)', lineHeight: 1.75, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        The detailed aroha, avaroha, pakad, vadi, and samvadi fields should be added only after verification from a reliable classical source or teacher.
      </p>
    </section>
  )
}
