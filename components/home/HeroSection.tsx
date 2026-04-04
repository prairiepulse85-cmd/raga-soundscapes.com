export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-rs-bg border-b-2 border-[#C8A830]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-px pointer-events-none"
        style={{ backgroundColor: 'rgba(200, 168, 48, 0.12)' }}
      />
      <div className="relative z-10 text-center px-6">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.18em] text-rs-hint mb-4">
          Indian classical meditation music
        </p>
        <h1 className="font-[family-name:var(--font-cinzel)] text-[32px] sm:text-[42px] text-rs-text tracking-[0.12em] mb-4">
          Raga Soundscapes
        </h1>
        <p className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted mb-2">
          Indian classical soundscapes for calm, focus, and stillness.
        </p>
        <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-rs-hint max-w-[480px] mx-auto mb-8">
          Organised by time, mood, and rasa.
        </p>
        <a
          href="https://youtube.com/@ragasoundscapes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-rs-accent text-rs-accent text-[12px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] px-6 py-3 rounded-[2px] hover:bg-rs-accent hover:text-rs-bg transition-colors duration-200"
        >
          Listen on YouTube &rarr;
        </a>
      </div>
    </section>
  )
}
