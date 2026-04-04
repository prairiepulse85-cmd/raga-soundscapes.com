import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-rs-bg border-t border-rs-border2 py-8 px-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="text-center sm:text-left">
            <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-rs-hint mb-3">
              Listen by mood
            </p>
            <div className="flex flex-col gap-2 text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-hint">
              <Link href="/listen/sleep" className="hover:text-rs-muted transition-colors">Sleep Ragas</Link>
              <Link href="/listen/morning" className="hover:text-rs-muted transition-colors">Morning Ragas</Link>
              <Link href="/listen/focus" className="hover:text-rs-muted transition-colors">Focus Ragas</Link>
              <Link href="/mood/meditation" className="hover:text-rs-muted transition-colors">Meditation</Link>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-rs-hint mb-3">
              Listen by time
            </p>
            <div className="flex flex-col gap-2 text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-hint">
              <Link href="/time/early-morning" className="hover:text-rs-muted transition-colors">Early Morning</Link>
              <Link href="/time/evening" className="hover:text-rs-muted transition-colors">Evening</Link>
              <Link href="/time/night" className="hover:text-rs-muted transition-colors">Night</Link>
              <Link href="/time/late-night" className="hover:text-rs-muted transition-colors">Late Night</Link>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-rs-hint mb-3">
              Raga Soundscapes
            </p>
            <div className="flex flex-col gap-2 text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-hint">
              <a href="https://youtube.com/@ragasoundscapes" target="_blank" rel="noopener noreferrer" className="hover:text-rs-muted transition-colors">
                YouTube Channel
              </a>
              <Link href="/#ragas" className="hover:text-rs-muted transition-colors">Full Library</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-rs-border2 pt-5 text-center">
          <p className="text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-border">
            &copy; Raga Soundscapes &middot; ragasoundscapes.com
          </p>
        </div>
      </div>
    </footer>
  )
}
