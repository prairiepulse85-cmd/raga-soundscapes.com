import { Metadata } from 'next'
import { ragas } from '@/lib/ragas'
import RagaCard from '@/components/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Indian Classical Music for Focus & Deep Work | Raga Soundscapes',
  description:
    'Ragas for concentration, creative work, and deep focus. Yaman, Bihag, Kafi, Bhimpalasi \u2014 Indian classical soundscapes designed for sustained attention.',
  alternates: { canonical: 'https://ragasoundscapes.com/listen/focus' },
  openGraph: {
    title: 'Indian Classical Music for Focus & Deep Work | Raga Soundscapes',
    description:
      'Ragas for concentration, creative work, and deep focus. Yaman, Bihag, Kafi, Bhimpalasi.',
    url: 'https://ragasoundscapes.com/listen/focus',
    siteName: 'Raga Soundscapes',
    images: [{ url: '/api/og?page=focus', width: 1200, height: 630 }],
  },
}

const focusSlugs = ['yaman', 'bihag', 'kafi', 'bhimpalasi', 'todi']

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Indian Classical Music for Focus & Deep Work | Raga Soundscapes',
  url: 'https://ragasoundscapes.com/listen/focus',
  description:
    'Indian classical ragas for concentration, creative work, and deep focus.',
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
        name: 'Ragas for Focus & Deep Work',
        item: 'https://ragasoundscapes.com/listen/focus',
      },
    ],
  },
}

export default function FocusPage() {
  const focusRagas = focusSlugs
    .map((slug) => ragas.find((r) => r.slug === slug))
    .filter(Boolean)

  return (
    <>
      <SchemaMarkup schema={schema} />

      <main className="max-w-[720px] mx-auto px-6 bg-rs-bg">
        <div className="pt-8">
          <Link
            href="/#ragas"
            className="text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-hint hover:text-rs-muted transition-colors"
          >
            \u2190 All Ragas
          </Link>
        </div>

        <h1 className="font-[family-name:var(--font-cormorant)] italic text-[36px] sm:text-[48px] text-rs-text mt-3 mb-6">
          Ragas for Focus & Deep Work
        </h1>

        <div className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-[1.85] mb-10 space-y-4">
          <p>
            Not all meditation is stillness. Some of the most effective Indian
            classical ragas for concentration are evening and night ragas \u2014 their
            moderate brightness and emotional warmth hold the mind attentive
            without agitation. Yaman opens the evening with clarity and grandeur.
            Bihag is warm and intimate. Kafi has a folk accessibility that makes
            it easy to work alongside.
          </p>
          <p>
            These soundscapes are designed for extended listening \u2014 for creative
            work, deep study, or any task that requires the mind to be present
            without being stimulated. They are instrumental, uninterrupted, and
            long enough to settle into.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px] mb-12">
          {focusRagas.map(
            (raga) => raga && <RagaCard key={raga.slug} raga={raga} />
          )}
        </div>
      </main>

      <SubscribeCTA />
      <Footer />
    </>
  )
}
