import Link from 'next/link'

const MOODS = [
  { label: 'Sleep', href: '/listen/sleep' },
  { label: 'Focus & Study', href: '/listen/focus' },
  { label: 'Meditation', href: '/mood/meditation' },
  { label: 'Stress Relief', href: '/mood/stress-relief' },
  { label: 'Evening Calm', href: '/mood/calm' },
  { label: 'Emotional Release', href: '/mood/emotional-release' },
]

export default function BrowseByMoodSection() {
  return (
    <section style={{ background: '#0a0a0a', padding: '80px 24px', borderTop: '1px solid #2a2a2a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8913a', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Browse by mood
        </p>
        <h2 style={{ fontSize: '42px', color: '#e8d5b7', marginBottom: '48px' }}>
          What do you need?
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {MOODS.map((mood) => (
            <Link
              key={mood.href}
              href={mood.href}
              style={{
                display: 'inline-block',
                border: '1px solid #2a2a2a',
                color: '#a89880',
                fontSize: '14px',
                padding: '10px 20px',
                transition: 'border-color 0.2s, color 0.2s',
                fontFamily: 'var(--font-dm-sans), sans-serif',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c8913a'; e.currentTarget.style.color = '#c8913a' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#a89880' }}
            >
              {mood.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
