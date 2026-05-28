import { Metadata } from 'next'
import { ragas } from '@/lib/ragas'
import RagaCard from '@/components/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Morning Ragas - Learn Dawn Raga Mood | Raga Soundscapes',
  description:
    'Learn about morning ragas from the Hindustani tradition, including Bhairav, Lalit, Todi, and Ahir Bhairav.',
  alternates: { canonical: 'https://www.ragasoundscapes.com/listen/morning' },
  openGraph: {
    title: 'Morning Ragas - Learn Dawn Raga Mood | Raga Soundscapes',
    description: 'Learn about morning ragas from the Hindustani tradition.',
    url: 'https://www.ragasoundscapes.com/listen/morning',
    siteName: 'Raga Soundscapes',
    images: [{ url: '/api/og?page=morning', width: 1200, height: 630 }],
  },
}

const morningSlugs = ['lalit', 'bhairav', 'ahir-bhairav', 'todi', 'bhairavi']

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Morning Ragas | Raga Soundscapes',
  url: 'https://www.ragasoundscapes.com/listen/morning',
  description: 'Morning ragas from the Hindustani tradition.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ragasoundscapes.com' },
      { '@type': 'ListItem', position: 2, name: 'Morning Ragas', item: 'https://www.ragasoundscapes.com/listen/morning' },
    ],
  },
}

export default function MorningPage() {
  const morningRagas = morningSlugs
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
          Morning Ragas
        </h1>
        <div className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-[1.85] mb-10 space-y-4">
          <p>Morning ragas are often understood through their time, gravity, and devotional or inward emotional color. This page introduces the dawn and early morning ragas in plain language for beginners.</p>
          <p>Use these guides to learn the raga mood and identity first. Any related soundscapes on YouTube are meditative interpretations, not formal classical demonstrations.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[12px] mb-12">
          {morningRagas.map((raga) => raga && <RagaCard key={raga.slug} raga={raga} />)}
        </div>
      </main>
      <SubscribeCTA />
      <Footer />
    </>
  )
}
