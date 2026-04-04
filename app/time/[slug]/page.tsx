import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllTimeCategories, getRagasByTime } from '@/lib/ragas'
import { timeToSlug, slugToLabel } from '@/lib/utils'
import RagaCard from '@/components/shared/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateStaticParams() { return getAllTimeCategories().map((time) => ({ slug: timeToSlug(time) })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const label = slugToLabel(slug)
  return { title: `${label} Ragas`, description: `Indian classical ragas for ${label.toLowerCase()} listening.` }
}

export default async function TimePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const matchedTime = getAllTimeCategories().find(t => timeToSlug(t) === slug)
  if (!matchedTime) notFound()
  const ragas = getRagasByTime(matchedTime)
  const label = slugToLabel(slug)

  return (
    <>
      <main className="rs-section">
        <div className="rs-container">
          <div style={{ marginBottom: '32px' }}>
            <Link href="/#ragas" style={{ fontSize: '11px', color: 'var(--rs-hint)', fontFamily: 'var(--font-dm-sans), sans-serif' }}>← All Ragas</Link>
          </div>
          <p className="rs-section-label">Browse by time of day</p>
          <h1 className="rs-section-title" style={{ fontSize: 'clamp(36px, 5vw, 48px)', marginBottom: '8px' }}>{label} Ragas</h1>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--rs-hint)', marginBottom: '40px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            {ragas.length} raga{ragas.length !== 1 ? 's' : ''} for {matchedTime.toLowerCase()} listening.
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
