import { Metadata } from 'next'
import { ragas } from '@/lib/ragas'
import RagaCard from '@/components/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ragas for Morning Meditation \u2014 Indian Classical Music | Raga Soundscapes',
  description:
    'Morning ragas from the Hindustani classical tradition \u2014 Bhairav, Lalit, Todi, Ahir Bhairav. Each designed for the specific emotional quality of the early hours.',
  alternates: { canonical: 'https://ragasoundscapes.com/listen/morning' },
  openGraph: {
    title: 'Ragas for Morning Meditation \u2014 Indian Classical Music | Raga Soundscapes',
    description:
      'Morning ragas from the Hindustani classical tradition \u2014 Bhairav, Lalit, Todi, Ahir Bhairav.',
    url: 'https://ragasoundscapes.com/listen/morning',
    siteName: 'Raga Soundscapes',
    images: [{ url: '/api/og?page=morning', width: 1200, height: 630 }],
  },
}

const morningSlugs = ['lalit', 'bhairav', 'ahir-bhairav', 'todi', 'bhairavi']

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ragas for Morning Meditation | Raga Soundscapes',
  url: 'https://ragasoundscapes.com/listen/morning',
  description:
    'Morning ragas from the Hindustani classical tradition for meditation and yoga.',
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
        name: 'Ragas for Morning Meditation',
        item: 'https://ragasoundscapes.com/listen/morning',
      },
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
          <Link
            href="/#ragas"
            className="text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-hint hover:text-rs-muted transition-colors"
          >
            \u2190 All Ragas
          </Link>
        </div>

        <h1 className="font-[family-name:var(--font-cormorant)] italic text-[36px] sm:text-[48px] text-rs-text mt-3 mb-6">
          Ragas for Morning Meditation
        </h1>

        <div className="text-[15px] font-[family-name:var(--font-dm-sans)] text-rs-muted leading-[1.85] mb-10 space-y-4">
          <p>
            The earliest ragas in the Hindustani tradition are not simply slow or
            quiet \u2014 they are architecturally designed for the pre-dawn and
            morning hours. Bhairav carries the gravity and devotion of the moment
            before sunrise. Lalit holds the mystical darkness of 4am. Todi turns
            the mind inward in a way that no afternoon raga can.
          </p>
          <p>
            These soundscapes are built for morning meditation, pranayama, slow
            yoga, or simply as a way to inhabit the first hour of the day with
            intention. The raga you choose will shape the emotional register of
            your morning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px] mb-12">
          {morningRagas.map(
            (raga) => raga && <RagaCard key={raga.slug} raga={raga} />
          )}
        </div>
      </main>

      <SubscribeCTA />
      <Footer />
    </>
  )
}
