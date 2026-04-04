import type { Raga } from '@/lib/types'

export default function YouTubeCTABlock({ raga }: { raga: Raga }) {
  return (
    <div style={{ background: 'var(--rs-surface)', border: '1px solid var(--rs-border)', borderTop: '2px solid var(--rs-accent)', padding: '24px', marginBottom: '48px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '8px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        Listen now
      </p>
      {raga.isLive ? (
        <a href={raga.youtubeUrl} target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', fontSize: '16px', color: 'var(--rs-accent)', marginBottom: '4px', fontFamily: 'var(--font-cinzel), serif' }}>
          {raga.name} — Meditation Soundscape →
        </a>
      ) : (
        <span style={{ display: 'block', fontSize: '16px', color: 'var(--rs-hint)', marginBottom: '4px', fontFamily: 'var(--font-cinzel), serif' }} aria-disabled="true">
          Coming soon on YouTube
        </span>
      )}
      <div style={{ borderTop: '1px solid var(--rs-border)', margin: '16px 0' }} />
      <p style={{ fontSize: '11px', color: 'var(--rs-hint)', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>Like this soundscape?</p>
      <a href="https://youtube.com/@ragasoundscapes" target="_blank" rel="noopener noreferrer"
        style={{ display: 'inline-block', border: '1px solid var(--rs-accent)', color: 'var(--rs-accent)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '12px 24px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        Subscribe on YouTube →
      </a>
    </div>
  )
}
