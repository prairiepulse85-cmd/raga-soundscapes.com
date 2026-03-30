export default function ProofStrip() {
  const stats = [
    { label: '14 ragas' },
    { label: 'Designed for sleep, focus & stillness' },
    { label: 'Hindustani tradition' },
  ]

  return (
    <section className="bg-rs-surface2 border-t border-b border-rs-border py-5 px-10">
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-10">
            {i > 0 && (
              <div className="w-px h-4 bg-rs-border hidden sm:block" />
            )}
            <p className="text-[14px] font-[family-name:var(--font-cormorant)] text-rs-text text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
