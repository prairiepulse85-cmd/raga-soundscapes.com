import { siteMeta } from '@/data/site-meta'

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-rs-border2 px-6 py-20 sm:py-24"
      style={{
        minHeight: '640px',
        backgroundImage:
          'linear-gradient(90deg, rgba(23,34,53,0.92) 0%, rgba(23,34,53,0.74) 43%, rgba(23,34,53,0.22) 100%), url("/images/raga-library-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto flex min-h-[500px] max-w-6xl items-center">
        <div className="max-w-[690px]">
          <p className="mb-4 font-[family-name:var(--font-dm-sans)] text-[11px] uppercase tracking-[0.12em] text-rs-accent">
            Beginner-friendly raga education
          </p>
          <h1 className="mb-5 font-[family-name:var(--font-cinzel)] text-[44px] leading-[1.05] text-rs-text sm:text-[64px]">
            Raga Soundscapes
          </h1>
          <p className="mb-4 max-w-[620px] text-[20px] leading-8 text-rs-muted">
            Learn Indian raga basics through time, mood, rasa, thaat, and listening identity.
          </p>
          <p className="mb-8 max-w-[620px] text-[15px] leading-8 text-rs-hint">
            Use this library to understand each raga through plain-language educational notes, not as a directory of classical performance links.
          </p>
          <div className="mb-10 flex flex-wrap gap-3">
            <a
              href="#ragas"
              className="border border-rs-accent bg-rs-accent px-6 py-3 text-[12px] uppercase tracking-[0.08em] text-rs-bg transition-colors hover:bg-rs-text"
            >
              Explore the library
            </a>
            <a
              href="#raga-basics"
              className="border border-rs-border bg-rs-bg/40 px-6 py-3 text-[12px] uppercase tracking-[0.08em] text-rs-muted transition-colors hover:border-rs-teal hover:text-rs-text"
            >
              Learn the basics
            </a>
          </div>
          <div className="grid max-w-[620px] grid-cols-3 border-y border-rs-border2 py-4">
            <div>
              <p className="text-[24px] text-rs-text">{siteMeta.ragaCount}</p>
              <p className="text-[11px] uppercase tracking-[0.08em] text-rs-hint">Ragas</p>
            </div>
            <div>
              <p className="text-[24px] text-rs-text">Time</p>
              <p className="text-[11px] uppercase tracking-[0.08em] text-rs-hint">Morning to night</p>
            </div>
            <div>
              <p className="text-[24px] text-rs-text">Mood</p>
              <p className="text-[11px] uppercase tracking-[0.08em] text-rs-hint">Rasa-led browsing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
