import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllTimeCategories, getRagasByTime } from '@/lib/ragas'
import { timeToSlug, slugToLabel } from '@/lib/utils'
import RagaCard from '@/components/shared/RagaCard'
import SubscribeCTA from '@/components/SubscribeCTA'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllTimeCategories().map((time) => ({ slug: timeToSlug(time) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const label = slugToLabel(slug)
  return {
    title: `${label} Ragas`,
    description: `Indian classical ragas for ${label.toLowerCase()} listening. Curated from the Raga Soundscapes library.`,
  }
}

export default async function TimePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const allTimes = getAllTimeCategories()
  const matchedTime = allTimes.find(t => timeToSlug(t) === slug)
  if (!matchedTime) notFound()

  const ragas = getRagasByTime(matchedTime)
  const label = slugToLabel(slug)

  return (
    <>
      <main className="section-light py-16 px-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link
              href="/#ragas"
              className="text-[11px] font-[family-name:var(--font-dm-sans)] text-[#9A8860] hover:text-[#5A4830] transition-colors"
            >
              &larr; All Ragas
            </Link>
          </div>

          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A8860] mb-1">
            Browse by time of day
          </p>
          <h1 className="font-[family-name:var(--font-cinzel)] text-[36px] sm:text-[48px] text-[#12213A] mb-2">
            {label} Ragas
          </h1>
          <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-[#7A6848] mb-10">
            {ragas.length} raga{ragas.length !== 1 ? 's' : ''} for {matchedTime.toLowerCase()} listening.
          </p>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-[12px]">
            {ragas.map((raga) => (
              <RagaCard key={raga.slug} raga={raga} />
            ))}
          </div>
        </div>
      </main>

      <SubscribeCTA />
      <Footer />
    </>
  )
}
