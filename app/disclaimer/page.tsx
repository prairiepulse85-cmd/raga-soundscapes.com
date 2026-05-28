import type { Metadata } from 'next'
import InfoPage from '@/components/InfoPage'
import { siteMeta } from '@/data/site-meta'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Educational and listening disclaimer for Raga Soundscapes.',
  alternates: { canonical: `${siteMeta.siteUrl}/disclaimer` },
}

export default function DisclaimerPage() {
  return (
    <InfoPage eyebrow="Disclaimer" title="Educational use and inspired listening">
      <p>
        Raga Soundscapes is an educational website for general learning. It is not a substitute for instruction from a qualified classical music teacher.
      </p>
      <p>
        Listening pages and YouTube links may refer to sleep, focus, meditation, calm, or emotional release as listening contexts. These are descriptive categories, not medical, therapeutic, or guaranteed outcome claims.
      </p>
      <p>
        The music linked from this site is raga-inspired soundscape material. It should not be understood as a strict, formal, or complete classical raga performance.
      </p>
    </InfoPage>
  )
}
