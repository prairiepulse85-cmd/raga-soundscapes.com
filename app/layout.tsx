import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raga Soundscapes — Indian Classical Meditation Music',
  description:
    'Original raga soundscapes for stillness, sleep and focus. A growing library of 14 Indian classical ragas — each designed for a specific time of day, mood, and purpose. On YouTube.',
  keywords: [
    'raga meditation music',
    'indian classical meditation',
    'raga for sleep',
    'hindustani meditation',
    'raga soundscape',
  ],
  openGraph: {
    title: 'Raga Soundscapes — Indian Classical Meditation Music',
    description:
      'A growing library of 14 Indian classical ragas. Each soundscape designed for a specific time, mood, and purpose.',
    url: 'https://ragasoundscapes.com',
    siteName: 'Raga Soundscapes',
    type: 'website',
    images: [{ url: '/api/og?page=home', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raga Soundscapes',
    description:
      'Indian classical meditation music. 14 ragas for sleep, focus, and stillness.',
    images: ['/api/og?page=home'],
  },
  alternates: { canonical: 'https://ragasoundscapes.com' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased bg-rs-bg text-rs-text font-[family-name:var(--font-dm-sans)]">
        {children}
      </body>
    </html>
  )
}
