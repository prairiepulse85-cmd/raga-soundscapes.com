import type { Metadata } from 'next'
import InfoPage from '@/components/InfoPage'
import { siteMeta } from '@/data/site-meta'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Raga Soundscapes.',
  alternates: { canonical: `${siteMeta.siteUrl}/privacy-policy` },
}

export default function PrivacyPolicyPage() {
  return (
    <InfoPage eyebrow="Privacy" title="Privacy Policy">
      <p>
        Raga Soundscapes is a public educational website. We do not ask visitors to create accounts, submit passwords, or provide sensitive personal information to use the raga library.
      </p>
      <p>
        The site may use standard hosting, security, analytics, or advertising technologies that process basic technical data such as browser type, device information, approximate region, pages visited, and referral source.
      </p>
      <p>
        If advertising is enabled in the future, advertising partners such as Google may use cookies or similar technologies to serve and measure ads. Visitors can manage ad personalization through their browser settings and Google ad settings.
      </p>
      <p>
        External links, including YouTube links, are governed by the privacy policies of those services. Contact us at {siteMeta.contactEmail} for privacy questions.
      </p>
    </InfoPage>
  )
}
