import type { Metadata } from 'next'
import { Cinzel, DM_Sans } from 'next/font/google'
import './globals.css'

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
  metadataBase: new URL('https://ragasoundscapes.com'),
  title: {
    default: 'Raga Soundscapes - Learn Indian Raga Basics',
    template: '%s | Raga Soundscapes',
  },
  description: 'Learn the basics of Indian ragas, organized by time, mood, rasa, and structure.',
  openGraph: {
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
        {children}
      </body>
    </html>
  )
}
