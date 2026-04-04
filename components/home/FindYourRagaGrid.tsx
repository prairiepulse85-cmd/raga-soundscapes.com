import Link from 'next/link'

const CARDS = [
  { label: 'For Sleep', description: 'Late-night ragas designed to quiet the mind. Malkauns, Darbari, Bageshree.', href: '/listen/sleep' },
  { label: 'For Morning Meditation', description: 'Dawn ragas to begin the day in stillness. Bhairav, Lalit, Todi.', href: '/listen/morning' },
  { label: 'For Focus & Deep Work', description: 'Ragas for concentration and creative work. Yaman, Bihag, Kafi.', href: '/listen/focus' },
  { label: 'For Evening Calm', description: 'Soft unwinding as the day closes. Yaman, Desh, Kedar.', href: '/mood/calm' },
  { label: 'For Emotional Release', description: 'Ragas that allow feeling to settle and release. Bhairavi, Jaunpuri, Patdeep.', href: '/mood/emotional-release' },
  { label: 'For Meditation', description: 'Stillness, awareness, and inner quiet. Bhairav, Todi, Shree.', href: '/mood/meditation' },
]

export default function FindYourRagaGrid() {
  return (
    <section className="section-light border-b border-[#E4D8C0] py-12 px-6">
      <div className="max-w-[960px] mx-auto text-center">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A8860] mb-1">
          What are you listening for?
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[24px] text-[#12213A] mb-7">
          Find the right raga
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[12px] text-left">
          {CARDS.map((card) => (
            <Link key={card.href} href={card.href} className="block group">
              <div className="flex flex-col justify-between bg-white border-[0.5px] border-[#E4D8C0] border-t-2 border-t-[#C8A830] rounded-[2px] px-[22px] py-[20px] shadow-[0_1px_6px_rgba(18,33,58,0.08)] transition-shadow duration-200 ease-in-out hover:shadow-[0_2px_12px_rgba(18,33,58,0.12)]">
                <div>
                  <h3 className="font-[family-name:var(--font-cinzel)] text-[18px] text-[#12213A] mb-[10px]">
                    {card.label}
                  </h3>
                  <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-[#5A4830] leading-[1.65] mb-4">
                    {card.description}
                  </p>
                </div>
                <span className="text-[10px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] text-[#C8A830] group-hover:text-[#12213A] transition-colors duration-200">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
