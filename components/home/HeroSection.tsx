export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center border-b-2 border-[#C8A830]" style={{ backgroundColor: '#0D1828', minHeight: '85vh' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-px pointer-events-none"
        style={{ backgroundColor: 'rgba(200, 168, 48, 0.12)' }}
      />
      <div className="relative z-10 text-center px-6 max-w-[600px] mx-auto">
        <p style={{ color: '#4A6080' }} className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.18em] mb-4">
          Indian classical meditation music
        </p>
        <h1 style={{ color: '#EAD898' }} className="font-[family-name:var(--font-cinzel)] text-[32px] sm:text-[42px] tracking-[0.12em] mb-4">
          Raga Soundscapes
        </h1>
        <p style={{ color: '#8A9EC4' }} className="text-[15px] font-[family-name:var(--font-dm-sans)] mb-2">
          Indian classical soundscapes for calm, focus, and stillness.
        </p>
        <p style={{ color: '#4A6080' }} className="text-[13px] font-[family-name:var(--font-dm-sans)] mb-8">
          Organised by time, mood, and rasa.
        </p>
        <a
          href="https://youtube.com/@ragasoundscapes"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#C8A830', borderColor: '#C8A830' }}
          className="inline-block border text-[12px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] px-6 py-3 rounded-[2px] hover:bg-[#C8A830] hover:text-[#0D1828] transition-colors duration-200"
        >
          Listen on YouTube →
        </a>
      </div>
    </section>
  )
}
