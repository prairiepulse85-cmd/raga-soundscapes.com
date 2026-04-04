import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllMoods, getRagasByMood } from '@/lib/ragas'
import { moodToSlug, slugToLabel } from '@/lib/utils'
import RagaCard from '@/components/shared/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllMoods().map((mood) => ({ slug: moodToSlug(mood) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const label = slugToLabel(slug)
  return {
    title: `Ragas for ${label}`,
    description: `Indian classical ragas for ${label.toLowerCase()}. Curated from the Raga Soundscapes library.`,
  }
}

export default async function MoodPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const allMoods = getAllMoods()
  const matchedMood = allMoods.find(m => moodToSlug(m) === slug)
  if (!matchedMood) notFound()

  const ragas = getRagasByMood(matchedMood)
  const label = slugToLabel(slug)

  return (
    <>
      <main style={{ background: '#0a0a0a', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <Link href="/#ragas" style={{ fontSize: '11px', color: '#a89880', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              ← All Ragas
            </Link>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8913a', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Browse by mood
            </p>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 48px)', color: '#e8d5b7', marginBottom: '8px' }}>
              Ragas for {label}
            </h1>
            <p style={{ fontSize: '15px', color: '#a89880', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              {ragas.length} raga{ragas.length !== 1 ? 's' : ''} in this collection, arranged by time of day.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1px',
            background: '#2a2a2a',
            border: '1px solid #2a2a2a',
          }}>
            {ragas.map((raga) => (
              <RagaCard key={raga.slug} raga={raga} />
            ))}
          </div>
        </div>
      </main>

      <SubscribeCTA />
      <Footer />
    </>
  )
}
