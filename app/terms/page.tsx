import type { Metadata } from 'next'
import InfoPage from '@/components/InfoPage'
import { siteMeta } from '@/data/site-meta'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Raga Soundscapes.',
  alternates: { canonical: `${siteMeta.siteUrl}/terms` },
}

export default function TermsPage() {
  return (
    <InfoPage eyebrow="Terms" title="Terms of Use">
      <p>
        Raga Soundscapes is provided for general educational and cultural learning. The content is intended to help beginners understand raga concepts and listening context.
      </p>
      <p>
        The site does not provide professional music instruction, certification, medical advice, therapy, or guaranteed wellness outcomes. Listening suggestions are informational and should be treated as personal preference, not a health claim.
      </p>
      <p>
        You may link to public pages on this website. Please do not copy substantial portions of the site or represent the YouTube channel as a formal classical raga performance archive.
      </p>
      <p>
        External services such as YouTube have their own terms. Questions can be sent to {siteMeta.contactEmail}.
      </p>
    </InfoPage>
  )
}
