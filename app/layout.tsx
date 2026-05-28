import type { Metadata } from 'next'
import { Cinzel, DM_Sans } from 'next/font/google'
import SiteHeader from '@/components/layout/SiteHeader'
import './globals.css'

const siteUrl = 'https://www.ragasoundscapes.com'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cinzel',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Raga Soundscapes - Learn Indian Raga Basics by Time, Mood, and Rasa',
    template: '%s | Raga Soundscapes',
  },
  description:
    'A beginner-friendly raga learning library organized by time of day, mood, rasa, thaat, and listening identity.',
  alternates: { canonical: siteUrl },
  applicationName: 'Raga Soundscapes',
  category: 'Music education',
  keywords: [
    'raga',
    'Indian ragas',
    'Hindustani classical music',
    'raga basics',
    'raga mood',
    'raga time theory',
    'raga library',
  ],
  openGraph: {
    title: 'Raga Soundscapes - Learn Indian Raga Basics',
    description:
      'A calm educational library for learning Indian raga basics by time, mood, rasa, and structure.',
    url: siteUrl,
    siteName: 'Raga Soundscapes',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased bg-rs-bg text-rs-text font-[family-name:var(--font-dm-sans)]">
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
