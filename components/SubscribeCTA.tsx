import { siteMeta } from '@/data/site-meta'

export default function SubscribeCTA() {
  return (
    <section className="bg-rs-surface2 border-t border-rs-border py-16 px-10">
      <div className="max-w-[480px] mx-auto text-center">
        <div className="w-10 h-px bg-rs-border mx-auto mb-6" />
        <h2 className="font-[family-name:var(--font-cormorant)] italic text-[30px] text-rs-text mb-4">
          Find your stillness.
        </h2>
        <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-[1.7] mb-7">
          An ever-growing library of Indian classical raga soundscapes. Each one
          designed around the time, mood, and rasa of its raga.
        </p>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <a
            href={siteMeta.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-rs-accent text-rs-accent text-[12px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] px-6 py-3 rounded-[2px] hover:bg-rs-accent hover:text-rs-bg transition-colors duration-200"
          >
            Subscribe on YouTube →
          </a>
          <span className="text-[12px] font-[family-name:var(--font-dm-sans)] text-rs-hint">
            {siteMeta.channelHandle}
          </span>
        </div>
      </div>
    </section>
  )
}
