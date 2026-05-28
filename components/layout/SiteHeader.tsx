import Link from 'next/link'
import { siteMeta } from '@/data/site-meta'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rs-border2 bg-rs-bg/95 backdrop-blur-sm">
      <div className="rs-container flex h-16 items-center justify-between gap-5">
        <Link href="/" className="font-[family-name:var(--font-cinzel)] text-[15px] text-rs-text tracking-[0.08em]">
          Raga Soundscapes
        </Link>
        <nav className="flex items-center gap-4 text-[12px] font-[family-name:var(--font-dm-sans)] text-rs-muted sm:gap-6">
          <Link href="/#ragas" className="hover:text-rs-text transition-colors">Library</Link>
          <Link href="/mood/meditation" className="hover:text-rs-text transition-colors hidden sm:block">Moods</Link>
          <Link href="/time/morning" className="hover:text-rs-text transition-colors hidden sm:block">Times</Link>
          <Link href="/about" className="hover:text-rs-text transition-colors hidden sm:block">About</Link>
          <a href={siteMeta.channelUrl} target="_blank" rel="noopener noreferrer" className="text-rs-accent hover:text-rs-text transition-colors">
            YouTube
          </a>
        </nav>
      </div>
    </header>
  )
}
