import type { Raga } from '@/lib/types'

export default function YouTubeCTABlock({ raga }: { raga: Raga }) {
  return (
    <div className="bg-surface border border-border border-t-2 border-t-accent rounded-[2px] p-6 mb-12">
      <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-muted/60 mb-2">
        Listen now
      </p>
      {raga.isLive ? (
        <a
          href={raga.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block font-[family-name:var(--font-cinzel)] text-[16px] text-accent hover:underline mb-4"
        >
          {raga.name} — Meditation Soundscape &rarr;
        </a>
      ) : (
        <span
          className="block font-[family-name:var(--font-cinzel)] text-[16px] text-muted/50 mb-4"
          aria-disabled="true"
        >
          Coming soon on YouTube
        </span>
      )}

      <div className="border-t border-border my-4" />

      <p className="text-[11px] font-[family-name:var(--font-dm-sans)] text-muted/60 mb-3">
        Like this soundscape?
      </p>
      <a
        href="https://youtube.com/@ragasoundscapes"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-accent text-accent text-[12px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] px-6 py-3 rounded-[2px] hover:bg-accent hover:text-bg transition-colors duration-200"
      >
        Subscribe on YouTube &rarr;
      </a>
    </div>
  )
}
