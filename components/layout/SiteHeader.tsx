import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-cinzel)] text-[16px] text-text tracking-[0.08em]">
          Raga Soundscapes
        </Link>
        <nav className="flex items-center gap-6 text-[13px] font-[family-name:var(--font-dm-sans)] text-muted">
          <Link href="/#ragas" className="hover:text-text transition-colors">Library</Link>
          <Link href="/mood/meditation" className="hover:text-text transition-colors hidden sm:block">Moods</Link>
          <Link href="/time/morning" className="hover:text-text transition-colors hidden sm:block">Times</Link>
        </nav>
      </div>
    </header>
  )
}
