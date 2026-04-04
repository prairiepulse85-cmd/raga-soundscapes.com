export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-px pointer-events-none bg-accent/10" />
      <div className="relative z-10 text-center px-6">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.18em] text-muted mb-5">
          Indian classical meditation music
        </p>
        <h1 className="font-[family-name:var(--font-cinzel)] text-[36px] sm:text-[48px] text-text tracking-[0.08em] mb-4">
          Raga Soundscapes
        </h1>
        <p className="text-[16px] font-[family-name:var(--font-dm-sans)] text-muted mb-2 max-w-[520px] mx-auto">
          Indian classical soundscapes for calm, focus, and stillness.
        </p>
        <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-muted/70 mb-8">
          Organised by time, mood, and rasa.
        </p>
        <a
          href="https://youtube.com/@ragasoundscapes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-accent text-accent text-[12px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] px-6 py-3 rounded-[2px] hover:bg-accent hover:text-bg transition-colors duration-200"
        >
          Listen on YouTube &rarr;
        </a>
      </div>
    </section>
  )
}
