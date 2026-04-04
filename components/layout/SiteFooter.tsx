import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-bg border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-muted mb-3">
              Listen by mood
            </p>
            <div className="flex flex-col gap-2 text-[13px] font-[family-name:var(--font-dm-sans)] text-muted">
              <Link href="/listen/sleep" className="hover:text-text transition-colors">Sleep</Link>
              <Link href="/listen/morning" className="hover:text-text transition-colors">Morning</Link>
              <Link href="/listen/focus" className="hover:text-text transition-colors">Focus</Link>
              <Link href="/mood/meditation" className="hover:text-text transition-colors">Meditation</Link>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-muted mb-3">
              Listen by time
            </p>
            <div className="flex flex-col gap-2 text-[13px] font-[family-name:var(--font-dm-sans)] text-muted">
              <Link href="/time/early-morning" className="hover:text-text transition-colors">Early Morning</Link>
              <Link href="/time/evening" className="hover:text-text transition-colors">Evening</Link>
              <Link href="/time/night" className="hover:text-text transition-colors">Night</Link>
              <Link href="/time/late-night" className="hover:text-text transition-colors">Late Night</Link>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-muted mb-3">
              Raga Soundscapes
            </p>
            <div className="flex flex-col gap-2 text-[13px] font-[family-name:var(--font-dm-sans)] text-muted">
              <a href="https://youtube.com/@ragasoundscapes" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
                YouTube Channel
              </a>
              <Link href="/#ragas" className="hover:text-text transition-colors">Full Library</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] text-muted/60">
            &copy; Raga Soundscapes &middot; ragasoundscapes.com
          </p>
        </div>
      </div>
    </footer>
  )
}
