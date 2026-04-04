import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import RagaIntroSection from '@/components/home/RagaIntroSection'
import FindYourRagaGrid from '@/components/home/FindYourRagaGrid'
import FeaturedRagasGrid from '@/components/home/FeaturedRagasGrid'
import BrowseByMoodSection from '@/components/home/BrowseByMoodSection'
import BrowseByTimeSection from '@/components/home/BrowseByTimeSection'
import RagaLibraryGrid from '@/components/home/RagaLibraryGrid'
import SiteFooter from '@/components/layout/SiteFooter'
import { getAllRagas, getFeaturedRagas } from '@/lib/ragas'

export const metadata: Metadata = {
  title: 'Raga Soundscapes — Indian Classical Meditation Music',
  description: 'Discover Indian classical ragas for meditation, sleep, focus, and stillness. Organised by time of day, mood, and rasa.',
}

export default function HomePage() {
  const allRagas = getAllRagas()
  const featuredRagas = getFeaturedRagas()
  return (
    <>
      <HeroSection />
      <RagaIntroSection />
      <FindYourRagaGrid />
      <FeaturedRagasGrid ragas={featuredRagas} />
      <BrowseByMoodSection />
      <BrowseByTimeSection />
      <RagaLibraryGrid ragas={allRagas} />
      <SiteFooter />
    </>
  )
}
