import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllRagas, getRagaBySlug, getRelatedRagas } from '@/lib/ragas'
import RagaMetaStrip from '@/components/raga/RagaMetaStrip'
import BestForList from '@/components/raga/BestForList'
import YouTubeCTABlock from '@/components/raga/YouTubeCTABlock'
import RelatedRagasGrid from '@/components/raga/RelatedRagasGrid'
import SiteFooter from '@/components/layout/SiteFooter'
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
  }

  return (
    <>
      <SchemaMarkup schema={schema} />

      <main className="max-w-[720px] mx-auto px-6 bg-bg">
        <div className="pt-8">
          <Link
            href="/#ragas"
            className="text-[11px] font-[family-name:var(--font-dm-sans)] text-muted/60 hover:text-muted transition-colors"
          >
            &larr; All Ragas
          </Link>
        </div>

        <h1 className="font-[family-name:var(--font-cinzel)] text-[36px] sm:text-[48px] text-text mt-3 mb-2">
          {raga.name}
        </h1>

        <p className="text-[15px] font-[family-name:var(--font-dm-sans)] text-muted mb-6">
          {raga.shortDescription}
        </p>

        <RagaMetaStrip raga={raga} />

        <p className="text-[15px] font-[family-name:var(--font-dm-sans)] text-muted leading-[1.85] mb-8">
          {raga.description}
        </p>

        <BestForList items={raga.bestFor} />

        <YouTubeCTABlock raga={raga} />

        <RelatedRagasGrid ragas={related} />
      </main>

      <SiteFooter />
    </>
  )
}
