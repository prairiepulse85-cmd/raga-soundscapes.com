import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-rs-bg border-t border-rs-border2 py-5 px-10 text-center">
      <p className="text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-border mb-2">
        © Raga Soundscapes · ragasoundscapes.com
      </p>
      <p className="text-[11px] font-[family-name:var(--font-dm-sans)] text-rs-hint">
        <Link href="/listen/sleep" className="hover:text-rs-muted transition-colors">
          Sleep Ragas
        </Link>
        <span className="mx-2">·</span>
        <Link href="/listen/morning" className="hover:text-rs-muted transition-colors">
          Morning Ragas
        </Link>
        <span className="mx-2">·</span>
        <Link href="/listen/focus" className="hover:text-rs-muted transition-colors">
          Focus Ragas
        </Link>
      </p>
    </footer>
  )
}
