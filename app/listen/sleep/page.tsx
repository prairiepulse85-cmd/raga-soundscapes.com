import { Metadata } from 'next'
import { ragas } from '@/lib/ragas'
import RagaCard from '@/components/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ragas for Sleep - Learn Late-Night Raga Mood | Raga Soundscapes',
  description:
    'Learn about Indian ragas associated with sleep, night, deep rest, and inward listening, including Malkauns, Darbari, and Bageshree.',
  alternates: { canonical: 'https://www.ragasoundscapes.com/listen/sleep' },
  openGraph: {
    title: 'Ragas for Sleep - Learn Late-Night Raga Mood | Raga Soundscapes',
    description:
      'Learn about Indian ragas associated with sleep, night, deep rest, and inward listening.',
    url: 'https://www.ragasoundscapes.com/listen/sleep',
    siteName: 'Raga Soundscapes',
    images: [{ url: '/api/og?page=sleep', width: 1200, height: 630 }],
  },
}

const sleepSlugs = ['malkauns', 'darbari', 'bageshree', 'bihag', 'bhairavi']

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ragas for Sleep | Raga Soundscapes',
  url: 'https://www.ragasoundscapes.com/listen/sleep',
  description: 'Indian ragas associated with sleep, night, and deep rest.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ragasoundscapes.com' },
      { '@type': 'ListItem', position: 2, name: 'Ragas for Sleep', item: 'https://www.ragasoundscapes.com/listen/sleep' },
    ],
  },
}

export default function SleepPage() {
  const sleepRagas = sleepSlugs
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
          Ragas for Sleep
        </h1>
        <div className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-[1.85] mb-10 space-y-4">
          <p>In the Hindustani tradition, some ragas are associated with late night and deep inwardness. This page helps beginners understand the mood, time, and emotional color of ragas often connected with rest.</p>
          <p>This page is a learning guide for understanding raga mood and time context. It does not claim that any channel track is a formal classical raga performance.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[12px] mb-12">
          {sleepRagas.map((raga) => raga && <RagaCard key={raga.slug} raga={raga} />)}
        </div>
      </main>
      <SubscribeCTA />
      <Footer />
    </>
  )
}
