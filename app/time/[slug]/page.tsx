import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllTimeCategories, getRagasByTime } from '@/lib/ragas'
import { timeToSlug, slugToLabel } from '@/lib/utils'
import RagaCard from '@/components/shared/RagaCard'
import SiteFooter from '@/components/layout/SiteFooter'
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
      <main className="max-w-[720px] mx-auto px-6 bg-bg">
        <div className="pt-8">
          <Link
            href="/#ragas"
            className="text-[11px] font-[family-name:var(--font-dm-sans)] text-muted/60 hover:text-muted transition-colors"
          >
            &larr; All Ragas
          </Link>
        </div>

        <h1 className="font-[family-name:var(--font-cinzel)] text-[36px] sm:text-[48px] text-text mt-3 mb-2">
          {label} Ragas
        </h1>
        <p className="text-[15px] font-[family-name:var(--font-dm-sans)] text-muted mb-10">
          {ragas.length} raga{ragas.length !== 1 ? 's' : ''} for {matchedTime.toLowerCase()} listening.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {ragas.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
