import { Metadata } from 'next'
import { ragas } from '@/lib/ragas'
import RagaCard from '@/components/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ragas for Focus - Learn Raga Mood and Attention | Raga Soundscapes',
  description:
    'Learn about ragas associated with focus, clarity, and sustained attention, including Yaman, Bihag, Kafi, and Bhimpalasi.',
  alternates: { canonical: 'https://ragasoundscapes.com/listen/focus' },
  openGraph: {
    title: 'Ragas for Focus - Learn Raga Mood and Attention | Raga Soundscapes',
    description: 'Learn about ragas associated with focus, clarity, and sustained attention.',
    url: 'https://ragasoundscapes.com/listen/focus',
    siteName: 'Raga Soundscapes',
    images: [{ url: '/api/og?page=focus', width: 1200, height: 630 }],
  },
}

const focusSlugs = ['yaman', 'bihag', 'kafi', 'bhimpalasi', 'todi']

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ragas for Focus | Raga Soundscapes',
  url: 'https://ragasoundscapes.com/listen/focus',
  description: 'Ragas associated with focus, clarity, and sustained attention.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ragasoundscapes.com' },
      { '@type': 'ListItem', position: 2, name: 'Ragas for Focus', item: 'https://ragasoundscapes.com/listen/focus' },
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
          <Link href="/#ragas" className="text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-hint hover:text-rs-muted transition-colors">
            &lt;- All Ragas
          </Link>
        </div>
        <h1 className="font-[family-name:var(--font-cinzel)] text-[36px] sm:text-[48px] text-rs-text mt-3 mb-6">
          Ragas for Focus
        </h1>
        <div className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-[1.85] mb-10 space-y-4">
          <p>Some ragas are especially useful to study through their steadiness, brightness, warmth, or inward pull. This page groups ragas that listeners may associate with focus and sustained attention.</p>
          <p>The educational guide and the meditative soundscapes are intentionally separate: learn the raga basics here, then explore inspired listening only if it is helpful.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[12px] mb-12">
          {focusRagas.map((raga) => raga && <RagaCard key={raga.slug} raga={raga} />)}
        </div>
      </main>
      <SubscribeCTA />
      <Footer />
    </>
  )
}
