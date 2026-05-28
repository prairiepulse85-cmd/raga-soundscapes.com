import type { Metadata } from 'next'
import InfoPage from '@/components/InfoPage'
import { siteMeta } from '@/data/site-meta'

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: 'How Raga Soundscapes handles raga descriptions, verification, and inspired listening links.',
  alternates: { canonical: `${siteMeta.siteUrl}/editorial-policy` },
}

export default function EditorialPolicyPage() {
  return (
    <InfoPage eyebrow="Editorial policy" title="How this raga library is maintained">
      <p>
        Raga Soundscapes aims to make raga learning approachable while avoiding overclaiming. Pages are written for beginners and focus on time, mood, rasa, thaat, instruments, and listening identity.
      </p>
      <p>
        Detailed classical fields such as aroha, avaroha, pakad, vadi, and samvadi should be added only after verification from a reliable classical source or teacher. Until then, those fields remain marked as coming soon.
      </p>
      <p>
        Linked YouTube tracks are described as raga-inspired soundscapes. The links are optional listening companions and are not proof that a page contains a full, formal, or authoritative raga performance.
      </p>
      <p>
        Corrections are welcome at {siteMeta.contactEmail}. Useful corrections should include the raga name, the exact page URL, and a source or explanation.
      </p>
    </InfoPage>
  )
}
