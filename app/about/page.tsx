import type { Metadata } from 'next'
import InfoPage from '@/components/InfoPage'
import { siteMeta } from '@/data/site-meta'

export const metadata: Metadata = {
  title: 'About Raga Soundscapes',
  description:
    'Learn what Raga Soundscapes publishes, how the raga library is structured, and how YouTube listening links should be understood.',
  alternates: { canonical: `${siteMeta.siteUrl}/about` },
}

export default function AboutPage() {
  return (
    <InfoPage eyebrow="About the project" title="A calm beginner library for learning ragas">
      <p>
        Raga Soundscapes is an educational website for people who want a clear, respectful introduction to Indian raga basics. The library organizes ragas by time of day, mood, rasa, thaat, instruments, and beginner listening identity.
      </p>
      <p>
        The website is informational first. It explains concepts such as aroha, avaroha, pakad, vadi, samvadi, thaat, rasa, and time theory in plain language for new listeners.
      </p>
      <p>
        Some raga pages include optional links to YouTube listening material. Those tracks are raga-inspired soundscapes based on mood and melodic character. They are not presented as strict, formal, or complete classical raga performances.
      </p>
      <p>
        Where detailed notation or classical identity fields have not yet been verified, the site says so directly and leaves those fields marked as coming soon.
      </p>
    </InfoPage>
  )
}
