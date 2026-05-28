import type { Metadata } from 'next'
import InfoPage from '@/components/InfoPage'
import { siteMeta } from '@/data/site-meta'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Raga Soundscapes about corrections, feedback, raga education notes, or website questions.',
  alternates: { canonical: `${siteMeta.siteUrl}/contact` },
}

export default function ContactPage() {
  return (
    <InfoPage eyebrow="Contact" title="Corrections, feedback, and questions">
      <p>
        For feedback, corrections, or questions about the raga learning library, email{' '}
        <a className="text-rs-accent" href={`mailto:${siteMeta.contactEmail}`}>
          {siteMeta.contactEmail}
        </a>
        .
      </p>
      <p>
        If you are writing about a specific raga page, please include the page URL and the field you are commenting on, such as time of day, thaat, rasa, aroha, avaroha, pakad, or vadi and samvadi.
      </p>
      <p>
        For YouTube listening content, please remember that the linked music is raga-inspired soundscape material and not a formal classical performance archive.
      </p>
    </InfoPage>
  )
}
