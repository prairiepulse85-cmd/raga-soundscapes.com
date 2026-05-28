import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import RagaIntroSection from '@/components/home/RagaIntroSection'
import RagaBasicsSection from '@/components/home/RagaBasicsSection'
import FindYourRagaGrid from '@/components/home/FindYourRagaGrid'
import FeaturedRagasGrid from '@/components/home/FeaturedRagasGrid'
import BrowseByMoodSection from '@/components/home/BrowseByMoodSection'
import BrowseByTimeSection from '@/components/home/BrowseByTimeSection'
import RagaLibraryGrid from '@/components/home/RagaLibraryGrid'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import { getAllRagas, getFeaturedRagas } from '@/lib/ragas'
import { siteMeta } from '@/data/site-meta'

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Raga Soundscapes',
  url: siteMeta.siteUrl,
  description:
    'A beginner-friendly guide to Indian ragas, organized by time, mood, rasa, and structure.',
  publisher: {
    '@type': 'Organization',
    name: 'Raga Soundscapes',
    url: siteMeta.siteUrl,
    sameAs: [siteMeta.channelUrl],
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteMeta.siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export const metadata: Metadata = {
  title: 'Raga Soundscapes - Learn Indian Raga Basics',
  description:
    'Explore a beginner-friendly raga library with time of day, mood, rasa, thaat, aroha, avaroha, pakad, vadi, and samvadi learning notes.',
  alternates: { canonical: siteMeta.siteUrl },
}

export default function HomePage() {
  const allRagas = getAllRagas()
  const featuredRagas = getFeaturedRagas()
  return (
    <>
      <SchemaMarkup schema={homeSchema} />
      <HeroSection />
      <RagaIntroSection />
      <RagaBasicsSection />
      <FindYourRagaGrid />
      <FeaturedRagasGrid ragas={featuredRagas} />
      <BrowseByMoodSection />
      <BrowseByTimeSection />
      <RagaLibraryGrid ragas={allRagas} />
      <SubscribeCTA />
      <Footer />
    </>
  )
}
