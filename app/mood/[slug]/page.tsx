import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllMoods, getRagasByMood } from '@/lib/ragas'
import { moodToSlug, slugToLabel } from '@/lib/utils'
import RagaCard from '@/components/shared/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { siteMeta } from '@/data/site-meta'

export async function generateStaticParams() {
  return getAllMoods().map((mood) => ({ slug: moodToSlug(mood) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const label = slugToLabel(slug)
  return {
    title: `Ragas for ${label}`,
    description: `Learn Indian raga basics for ${label.toLowerCase()}, including time, rasa, mood, and listening identity.`,
    alternates: { canonical: `${siteMeta.siteUrl}/mood/${slug}` },
  }
}

export default async function MoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const matchedMood = getAllMoods().find((m) => moodToSlug(m) === slug)
  if (!matchedMood) notFound()
  const ragas = getRagasByMood(matchedMood)
  const label = slugToLabel(slug)

  return (
    <>
      <main className="rs-section">
        <div className="rs-container">
          <div style={{ marginBottom: '32px' }}>
            <Link href="/#ragas" style={{ fontSize: '11px', color: 'var(--rs-hint)', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              &lt;- All Ragas
            </Link>
          </div>
          <p className="rs-section-label">Browse by mood</p>
          <h1 className="rs-section-title text-[38px] sm:text-[48px]" style={{ marginBottom: '8px' }}>
            Ragas for {label}
          </h1>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--rs-hint)', marginBottom: '40px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            {ragas.length} raga{ragas.length !== 1 ? 's' : ''} in this collection.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', background: 'var(--rs-border)', border: '1px solid var(--rs-border)' }}>
            {ragas.map((raga) => (<RagaCard key={raga.slug} raga={raga} />))}
          </div>
        </div>
      </main>
      <SubscribeCTA />
      <Footer />
    </>
  )
}
