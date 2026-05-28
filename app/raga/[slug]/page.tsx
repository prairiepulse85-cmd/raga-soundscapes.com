import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllRagas, getRagaBySlug, getRelatedRagas } from '@/lib/ragas'
import RagaMetaStrip from '@/components/raga/RagaMetaStrip'
import RagaLearningPanel from '@/components/raga/RagaLearningPanel'
import BestForList from '@/components/raga/BestForList'
import YouTubeCTABlock from '@/components/raga/YouTubeCTABlock'
import RelatedRagasGrid from '@/components/raga/RelatedRagasGrid'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'
import { siteMeta } from '@/data/site-meta'

export async function generateStaticParams() {
  return getAllRagas().map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const raga = getRagaBySlug(slug)
  if (!raga) return {}
  return {
    title: `${raga.name} - ${raga.rasa}`,
    description: `${raga.shortDescription} Learn its time, mood, rasa, thaat, and beginner listening identity.`,
    alternates: { canonical: `${siteMeta.siteUrl}/raga/${raga.slug}` },
    openGraph: { title: `${raga.name} | Raga Soundscapes`, description: raga.shortDescription, url: `${siteMeta.siteUrl}/raga/${raga.slug}` },
  }
}

export default async function RagaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const raga = getRagaBySlug(slug)
  if (!raga) notFound()
  const related = getRelatedRagas(raga.relatedRagas)

  const schema = {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: `${raga.name} | Raga Soundscapes`, url: `${siteMeta.siteUrl}/raga/${raga.slug}`,
    description: raga.shortDescription,
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteMeta.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Raga Library', item: `${siteMeta.siteUrl}/#ragas` },
      { '@type': 'ListItem', position: 3, name: raga.name, item: `${siteMeta.siteUrl}/raga/${raga.slug}` },
    ]},
  }

  return (
    <>
      <SchemaMarkup schema={schema} />
      <main style={{ padding: '80px 0' }}>
        <div className="rs-container" style={{ maxWidth: '760px' }}>
          <div style={{ marginBottom: '12px' }}>
            <Link href="/#ragas" style={{ fontSize: '11px', color: 'var(--rs-hint)', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              &lt;- All Ragas
            </Link>
          </div>
          <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-accent)', marginBottom: '10px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Raga learning guide
          </p>
          <h1 className="text-[38px] sm:text-[48px]" style={{ color: 'var(--rs-text)', marginBottom: '8px', fontFamily: 'var(--font-cinzel), serif' }}>
            {raga.name}
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--rs-muted)', marginBottom: '24px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            {raga.shortDescription}
          </p>
          <RagaMetaStrip raga={raga} />
          <p style={{ fontSize: '15px', color: 'var(--rs-muted)', lineHeight: 1.85, marginBottom: '32px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            {raga.description}
          </p>
          <RagaLearningPanel raga={raga} />
          <BestForList items={raga.bestFor} />
          <YouTubeCTABlock raga={raga} />
        </div>
      </main>
      <RelatedRagasGrid ragas={related} />
      <SubscribeCTA />
      <Footer />
    </>
  )
}
