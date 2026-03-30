import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ragas, getRagaBySlug } from '@/lib/ragas'
import { getRelatedRagas } from '@/lib/related'
import { siteMeta } from '@/data/site-meta'
import RagaMetaStrip from '@/components/RagaMetaStrip'
import RelatedRagas from '@/components/RelatedRagas'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'

export async function generateStaticParams() {
  return ragas.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const raga = getRagaBySlug(slug)
  if (!raga) return {}

  const desc = `Raga ${raga.name} meditation music — ${raga.rasa.toLowerCase()}. A ${raga.timeOfDay.toLowerCase()} raga from the Hindustani classical tradition, played on ${raga.instruments.join(' and ')}. Listen on YouTube.`
    .replace(/\s+/g, ' ')
    .trim()

  return {
    title: `Raga ${raga.name} Meditation Music | Raga Soundscapes`,
    description: desc.slice(0, 155),
    openGraph: {
      title: `Raga ${raga.name} — ${raga.rasa}`,
      description: desc.slice(0, 155),
      url: `https://ragasoundscapes.com/raga/${raga.slug}`,
      siteName: 'Raga Soundscapes',
      images: [
        { url: `/api/og?raga=${raga.slug}`, width: 1200, height: 630 },
      ],
    },
    alternates: {
      canonical: `https://ragasoundscapes.com/raga/${raga.slug}`,
    },
  }
}

export default async function RagaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const raga = getRagaBySlug(slug)
  if (!raga) notFound()

  const related = getRelatedRagas(raga)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Raga ${raga.name} Meditation Music | Raga Soundscapes`,
    url: `https://ragasoundscapes.com/raga/${raga.slug}`,
    description: raga.description.slice(0, 155),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ragasoundscapes.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Raga Library',
          item: 'https://ragasoundscapes.com/#ragas',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `Raga ${raga.name}`,
          item: `https://ragasoundscapes.com/raga/${raga.slug}`,
        },
      ],
    },
    mainEntity: {
      '@type': 'MusicComposition',
      name: `Raga ${raga.name}`,
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
            ← All Ragas
          </Link>
        </div>

        <h1 className="font-[family-name:var(--font-cinzel)] text-[36px] sm:text-[48px] text-rs-text mt-3 mb-6">
          Raga {raga.name}
        </h1>

        <RagaMetaStrip raga={raga} />

        <p className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-[1.85] mb-10">
          {raga.description}
        </p>

        <div className="bg-rs-surface border border-rs-border border-t-2 border-t-rs-accent rounded-[2px] p-6 mb-12">
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-rs-hint mb-2">
            Listen now
          </p>
          <a
            href={raga.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-[family-name:var(--font-cinzel)] text-[16px] text-rs-accent hover:underline mb-1"
          >
            Raga {raga.name} — Meditation Soundscape →
          </a>
          {raga.youtubeSleepUrl && (
            <a
              href={raga.youtubeSleepUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-[family-name:var(--font-cinzel)] text-[16px] text-rs-accent hover:underline"
            >
              Raga {raga.name} — Sleep Edition →
            </a>
          )}

          <div className="border-t border-rs-border my-4" />

          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-hint mb-3">
            Like this soundscape?
          </p>
          <a
            href={siteMeta.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-rs-accent text-rs-accent text-[12px] font-[family-name:var(--font-dm-sans)] font-medium uppercase tracking-[0.12em] px-6 py-3 rounded-[2px] hover:bg-rs-accent hover:text-rs-bg transition-colors duration-200"
          >
            Subscribe on YouTube →
          </a>
        </div>

        <RelatedRagas ragas={related} />
      </main>

      <SubscribeCTA />
      <Footer />
    </>
  )
}
