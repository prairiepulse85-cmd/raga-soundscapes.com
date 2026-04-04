import type { Raga } from '@/lib/types'

export default function YouTubeCTABlock({ raga }: { raga: Raga }) {
  return (
    <div style={{
      background: '#111111',
      border: '1px solid #2a2a2a',
      borderTop: '2px solid #c8913a',
      padding: '28px',
      marginBottom: '48px',
    }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a89880', marginBottom: '10px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        Listen now
      </p>
      {raga.isLive ? (
        <a
          href={raga.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', fontSize: '17px', color: '#c8913a', marginBottom: '4px' }}
        >
          {raga.name} — Meditation Soundscape →
        </a>
      ) : (
        <span
          style={{ display: 'block', fontSize: '17px', color: '#a89880', opacity: 0.5, marginBottom: '4px' }}
          aria-disabled="true"
        >
          Coming soon on YouTube
        </span>
      )}

      <div style={{ borderTop: '1px solid #2a2a2a', margin: '16px 0' }} />

      <p style={{ fontSize: '11px', color: '#a89880', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        Like this soundscape?
      </p>
      <a
        href="https://youtube.com/@ragasoundscapes"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          border: '1px solid #c8913a',
          color: '#c8913a',
          fontSize: '12px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '12px 24px',
          fontFamily: 'var(--font-dm-sans), sans-serif',
        }}
      >
        Subscribe on YouTube →
      </a>
    </div>
  )
}
