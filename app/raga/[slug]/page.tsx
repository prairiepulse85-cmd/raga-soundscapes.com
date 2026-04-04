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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const raga = getRagaBySlug(slug)
  if (!raga) return {}

  return {
    title: `${raga.name} — ${raga.rasa}`,
    description: `${raga.shortDescription} Best for ${raga.bestFor.slice(0, 3).join(', ')}.`,
    openGraph: {
      title: `${raga.name} | Raga Soundscapes`,
      description: raga.shortDescription,
      url: `https://ragasoundscapes.com/raga/${raga.slug}`,
    },
  }
}

export default async function RagaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const raga = getRagaBySlug(slug)
  if (!raga) notFound()

  const related = getRelatedRagas(raga.relatedRagas)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${raga.name} | Raga Soundscapes`,
    url: `https://ragasoundscapes.com/raga/${raga.slug}`,
    description: raga.shortDescription,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ragasoundscapes.com' },
        { '@type': 'ListItem', position: 2, name: 'Raga Library', item: 'https://ragasoundscapes.com/#ragas' },
        { '@type': 'ListItem', position: 3, name: raga.name, item: `https://ragasoundscapes.com/raga/${raga.slug}` },
      ],
    },
    mainEntity: {
      '@type': 'MusicComposition',
      name: raga.name,
      description: `${raga.rasa}. A ${raga.timeOfDay.toLowerCase()} raga from the Hindustani classical tradition.`,
      musicCompositionForm: 'Raga',
      typicalAgeRange: 'All ages',
    },
  }

  return (
    <>
      <SchemaMarkup schema={schema} />

      <main className="max-w-[720px] mx-auto px-6 bg-rs-bg">
        <div className="pt-8">
          <Link
            href="/#ragas"
            className="text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-hint hover:text-rs-muted transition-colors"
          >
            &larr; All Ragas
          </Link>
        </div>

        <h1 className="font-[family-name:var(--font-cinzel)] text-[36px] sm:text-[48px] text-rs-text mt-3 mb-2">
          {raga.name}
        </h1>

        <p className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted mb-6">
          {raga.shortDescription}
        </p>

        <RagaMetaStrip raga={raga} />

        <p className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-[1.85] mb-10">
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
