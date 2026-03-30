import { ragas } from '@/lib/ragas'
import { siteMeta } from '@/data/site-meta'
import RagaCard from '@/components/RagaCard'
import ProofStrip from '@/components/ProofStrip'
import UseCaseCard from '@/components/UseCaseCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Raga Soundscapes',
  url: 'https://ragasoundscapes.com',
  description:
    'Original Indian classical raga meditation soundscapes for stillness, sleep and focus.',
  publisher: {
    '@type': 'Organization',
    name: 'Raga Soundscapes',
    url: 'https://ragasoundscapes.com',
    sameAs: ['https://youtube.com/@ragasoundscapes'],
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ragasoundscapes.com/raga/{slug}',
    'query-input': 'required name=slug',
  },
}

const sortedRagas = [...ragas].sort((a, b) => a.timeRank - b.timeRank)

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={homeSchema} />

      {/* Hero — stays dark */}
      <section className="relative min-h-screen flex items-center justify-center bg-rs-bg">
        {/* Tanpura string decorative line */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-px pointer-events-none"
          style={{ backgroundColor: 'rgba(212, 168, 85, 0.12)' }}
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.18em] text-rs-hint mb-4">
            Indian classical meditation music
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[32px] sm:text-[42px] text-rs-text tracking-[0.12em] mb-4">
            Raga Soundscapes
          </h1>
          <p className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted mb-3">
            Original raga soundscapes for stillness, sleep and focus
          </p>
          <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-rs-hint max-w-[480px] mx-auto mb-8">
            A growing library of 14 Indian classical ragas — each recorded for a
            specific time of day, mood, and purpose.
          </p>
          <a
            href={siteMeta.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-rs-accent text-rs-accent text-[12px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] px-6 py-3 rounded-[2px] hover:bg-rs-accent hover:text-rs-bg transition-colors duration-200"
          >
            Listen on YouTube →
          </a>
        </div>
      </section>

      {/* Proof Strip — stays dark */}
      <ProofStrip />

      {/* What is a Raga — light section */}
      <section className="section-light py-9 px-10">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[15px] font-[family-name:var(--font-dm-sans)] text-[#6A5038] leading-[1.85]">
            A raga is not just a melody — it is a time, a mood, an emotional
            world with its own grammar. Each raga belongs to a specific hour of
            the day and carries a distinct <em>rasa</em> — the emotional essence
            it evokes. These soundscapes honour that tradition.
          </p>
        </div>
      </section>

      {/* Listen By Mood — light section */}
      <section className="section-light border-b border-[#DAC8A8] py-12 px-10">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A7850] mb-1">
            What are you listening for?
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic text-[24px] text-[#3A2010] mb-7">
            Find the right raga
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px]">
            <UseCaseCard
              title="For Sleep"
              body="Late-night ragas designed to quiet the mind. Malkauns, Darbari, Bageshree."
              href="/listen/sleep"
            />
            <UseCaseCard
              title="For Morning Meditation"
              body="Dawn ragas to begin the day in stillness. Bhairav, Lalit, Todi."
              href="/listen/morning"
            />
            <UseCaseCard
              title="For Focus & Deep Work"
              body="Ragas for concentration and creative work. Yaman, Bihag, Kafi."
              href="/listen/focus"
            />
          </div>
        </div>
      </section>

      {/* Raga Library — light section */}
      <section id="ragas" className="section-light py-16 px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A7850] mb-1">
            The raga library
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic text-[28px] text-[#3A2010] mb-2">
            Explore the Ragas
          </h2>
          <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-[#7A6040] mb-8">
            Arranged by time of day, from pre-dawn to deep night.
          </p>
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-[12px]">
            {sortedRagas.map((raga) => (
              <RagaCard key={raga.slug} raga={raga} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — stays dark */}
      <SubscribeCTA />

      {/* Footer — stays dark */}
      <Footer />
    </>
  )
}
