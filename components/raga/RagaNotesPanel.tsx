import { ragaLearningNotes } from '@/data/raga-learning-notes'
import type { Raga } from '@/lib/types'

export default function RagaNotesPanel({ raga }: { raga: Raga }) {
  const notes = ragaLearningNotes[raga.slug]

  if (!notes) return null

  return (
    <section style={{ marginBottom: '40px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        Raga notes
      </p>
      <div className="rs-soft-panel" style={{ padding: '24px', marginBottom: '18px' }}>
        <h2 style={{ fontSize: '22px', color: 'var(--rs-text)', marginBottom: '12px', fontFamily: 'var(--font-cinzel), serif' }}>
          How to understand {raga.name}
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--rs-muted)', lineHeight: 1.85, marginBottom: '22px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {notes.character}
        </p>
        <h3 style={{ fontSize: '14px', color: 'var(--rs-text)', marginBottom: '10px', fontFamily: 'var(--font-cinzel), serif' }}>
          What to notice first
        </h3>
        <ul style={{ display: 'grid', gap: '10px', marginBottom: '22px', paddingLeft: '18px' }}>
          {notes.listenFor.map((item) => (
            <li key={item} style={{ fontSize: '14px', color: 'var(--rs-muted)', lineHeight: 1.7, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              {item}
            </li>
          ))}
        </ul>
        <h3 style={{ fontSize: '14px', color: 'var(--rs-text)', marginBottom: '10px', fontFamily: 'var(--font-cinzel), serif' }}>
          Beginner note
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--rs-muted)', lineHeight: 1.8, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {notes.beginnerNote}
        </p>
      </div>
      <p style={{ fontSize: '12px', color: 'var(--rs-hint)', lineHeight: 1.75, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        These notes explain the listening character in plain language. Exact swara notation should be added only after verification from reliable classical sources.
      </p>
    </section>
  )
}
