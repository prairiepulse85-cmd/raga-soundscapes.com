import { Metadata } from 'next'
import { ragas } from '@/lib/ragas'
import RagaCard from '@/components/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ragas for Sleep — Indian Classical Meditation Music | Raga Soundscapes',
  description:
    'The best Indian classical ragas for sleep and deep rest. Malkauns, Darbari, Bageshree and more — each a late-night raga designed to quiet the mind.',
  alternates: { canonical: 'https://ragasoundscapes.com/listen/sleep' },
  openGraph: {
    title: 'Ragas for Sleep — Indian Classical Meditation Music | Raga Soundscapes',
    description:
      'The best Indian classical ragas for sleep and deep rest. Malkauns, Darbari, Bageshree and more.',
    url: 'https://ragasoundscapes.com/listen/sleep',
    siteName: 'Raga Soundscapes',
    images: [{ url: '/api/og?page=sleep', width: 1200, height: 630 }],
  },
}

const sleepSlugs = ['malkauns', 'darbari', 'bageshree', 'bihag', 'bhairavi']

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ragas for Sleep | Raga Soundscapes',
  url: 'https://ragasoundscapes.com/listen/sleep',
  description: 'Indian classical ragas for sleep and deep rest.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ragasoundscapes.com' },
      { '@type': 'ListItem', position: 2, name: 'Ragas for Sleep', item: 'https://ragasoundscapes.com/listen/sleep' },
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
            ← All Ragas
          </Link>
        </div>
        <h1 className="font-[family-name:var(--font-cinzel)] text-[36px] sm:text-[48px] text-rs-text mt-3 mb-6">
          Ragas for Sleep
        </h1>
        <div className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-[1.85] mb-10 space-y-4">
          <p>In the Indian classical tradition, certain ragas belong exclusively to the hours after midnight — not because of convention, but because of their structure. The deep, flattened notes of Malkauns, the measured gravity of Darbari, the quiet yearning of Bageshree — these are not generalised “calming music.” They are ragas built around the specific quality of the mind in its most restful state.</p>
          <p>Each soundscape in this collection is a 22-minute or longer meditation designed around the raga’s traditional late-night character. No percussion. No vocals. Just the raga, at the hour it was made for.</p>
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
