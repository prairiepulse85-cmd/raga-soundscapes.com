import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllTimeCategories, getRagasByTime } from '@/lib/ragas'
import { timeToSlug, slugToLabel } from '@/lib/utils'
import RagaCard from '@/components/shared/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllTimeCategories().map((time) => ({ slug: timeToSlug(time) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const label = slugToLabel(slug)
  return {
    title: `${label} Ragas`,
    description: `Indian classical ragas for ${label.toLowerCase()} listening. Curated from the Raga Soundscapes library.`,
  }
}

export default async function TimePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const allTimes = getAllTimeCategories()
  const matchedTime = allTimes.find(t => timeToSlug(t) === slug)
  if (!matchedTime) notFound()

  const ragas = getRagasByTime(matchedTime)
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
              Browse by time of day
            </p>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 48px)', color: '#e8d5b7', marginBottom: '8px' }}>
              {label} Ragas
            </h1>
            <p style={{ fontSize: '15px', color: '#a89880', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              {ragas.length} raga{ragas.length !== 1 ? 's' : ''} for {matchedTime.toLowerCase()} listening.
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
