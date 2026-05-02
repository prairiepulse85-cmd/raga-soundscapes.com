import type { Raga } from '@/lib/types'

export default function YouTubeCTABlock({ raga }: { raga: Raga }) {
  return (
    <div style={{ background: 'var(--rs-surface)', border: '1px solid var(--rs-border)', borderTop: '2px solid var(--rs-accent)', padding: '24px', marginBottom: '48px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '8px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        Optional inspired listening
      </p>
      <p style={{ fontSize: '12px', color: 'var(--rs-muted)', lineHeight: 1.75, marginBottom: '18px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        The YouTube channel offers meditation and sleep soundscapes with raga-inspired elements. They are peaceful listening experiences, not strict or formal classical performances.
      </p>
      {raga.isLive ? (
        <a href={raga.youtubeUrl} target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', fontSize: '16px', color: 'var(--rs-accent)', marginBottom: '4px', fontFamily: 'var(--font-cinzel), serif' }}>
          Explore a soundscape inspired by {raga.name} -&gt;
        </a>
      ) : (
        <span style={{ display: 'block', fontSize: '16px', color: 'var(--rs-hint)', marginBottom: '4px', fontFamily: 'var(--font-cinzel), serif' }} aria-disabled="true">
          Inspired soundscape coming soon
        </span>
      )}
      <div style={{ borderTop: '1px solid var(--rs-border)', margin: '16px 0' }} />
      <a href="https://youtube.com/@ragasoundscapes" target="_blank" rel="noopener noreferrer"
        style={{ display: 'inline-block', border: '1px solid var(--rs-accent)', color: 'var(--rs-accent)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 24px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        Visit the YouTube channel -&gt;
      </a>
    </div>
  )
}
