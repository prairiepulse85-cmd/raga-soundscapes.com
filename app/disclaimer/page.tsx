import type { Metadata } from 'next'
import InfoPage from '@/components/InfoPage'
import { siteMeta } from '@/data/site-meta'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Educational disclaimer for Raga Soundscapes.',
  alternates: { canonical: `${siteMeta.siteUrl}/disclaimer` },
}

export default function DisclaimerPage() {
  return (
    <InfoPage eyebrow="Disclaimer" title="Educational use">
      <p>
        Raga Soundscapes is an educational website for general learning. It is not a substitute for instruction from a qualified classical music teacher.
      </p>
      <p>
        Pages may refer to sleep, focus, meditation, calm, or emotional release as listening contexts. These are descriptive categories, not medical, therapeutic, or guaranteed outcome claims.
      </p>
      <p>
        The YouTube channel is separate from this educational library. It should not be understood as a strict, formal, or complete classical raga performance archive.
      </p>
    </InfoPage>
  )
}
