export default function RagaIntroSection() {
  return (
    <section style={{ background: 'var(--rs-surface2)', borderTop: '1px solid var(--rs-border)', borderBottom: '1px solid var(--rs-border)', padding: '48px 0' }}>
      <div className="rs-container" style={{ maxWidth: '720px', textAlign: 'center' }}>
        <p style={{ fontSize: '15px', color: 'var(--rs-muted)', lineHeight: 1.85, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          A raga is not just a melody - it is a time, a mood, an emotional
          world with its own grammar. Each raga belongs to a specific hour of
          the day and carries a distinct <em style={{ color: 'var(--rs-text)' }}>rasa</em> - the emotional essence
          it evokes. This site is built to help beginners understand those basics clearly and respectfully.
        </p>
      </div>
    </section>
  )
}
