import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllRagas, getRagaBySlug, getRelatedRagas } from '@/lib/ragas'
import RagaMetaStrip from '@/components/raga/RagaMetaStrip'
import BestForList from '@/components/raga/BestForList'
import YouTubeCTABlock from '@/components/raga/YouTubeCTABlock'
import RelatedRagasGrid from '@/components/raga/RelatedRagasGrid'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllRagas().map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const raga = getRagaBySlug(slug)
  if (!raga) return {}
  return {
    title: `${raga.name} — ${raga.rasa}`,
    description: `${raga.shortDescription} Best for ${raga.bestFor.slice(0, 3).join(', ')}.`,
    openGraph: { title: `${raga.name} | Raga Soundscapes`, description: raga.shortDescription, url: `https://ragasoundscapes.com/raga/${raga.slug}` },
  }
}

export default async function RagaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const raga = getRagaBySlug(slug)
  if (!raga) notFound()
  const related = getRelatedRagas(raga.relatedRagas)

  const schema = {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: `${raga.name} | Raga Soundscapes`, url: `https://ragasoundscapes.com/raga/${raga.slug}`,
    description: raga.shortDescription,
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ragasoundscapes.com' },
      { '@type': 'ListItem', position: 2, name: 'Raga Library', item: 'https://ragasoundscapes.com/#ragas' },
      { '@type': 'ListItem', position: 3, name: raga.name, item: `https://ragasoundscapes.com/raga/${raga.slug}` },
    ]},
  }

  return (
    <>
      <SchemaMarkup schema={schema} />
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px', background: '#0D1828' }}>
        <div style={{ paddingTop: '32px' }}>
          <Link href="/#ragas" style={{ fontSize: '11px', color: '#4A6080', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            ← All Ragas
          </Link>
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 48px)', color: '#EAD898', marginTop: '12px', marginBottom: '8px', fontFamily: 'var(--font-cinzel), serif' }}>
          {raga.name}
        </h1>
        <p style={{ fontSize: '15px', color: '#8A9EC4', marginBottom: '24px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.shortDescription}
        </p>
        <RagaMetaStrip raga={raga} />
        <p style={{ fontSize: '15px', color: '#8A9EC4', lineHeight: 1.85, marginBottom: '40px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          {raga.description}
        </p>
        <BestForList items={raga.bestFor} />
        <YouTubeCTABlock raga={raga} />
      </main>
      <RelatedRagasGrid ragas={related} />
      <SubscribeCTA />
      <Footer />
    </>
  )
}
