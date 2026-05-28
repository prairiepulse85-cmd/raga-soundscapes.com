import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-rs-border2 bg-rs-bg px-6 py-10 text-center">
      <div className="mx-auto grid max-w-4xl gap-8 text-left sm:grid-cols-3">
        <div>
          <p className="mb-3 font-[family-name:var(--font-cinzel)] text-[15px] text-rs-text">
            Raga Soundscapes
          </p>
          <p className="text-[12px] leading-6 text-rs-muted">
            A beginner-friendly educational library for learning raga time, mood, rasa, and structure.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-[12px] text-rs-muted">
          <Link href="/#ragas">Raga Library</Link>
          <Link href="/listen/sleep">Sleep Ragas</Link>
          <Link href="/listen/morning">Morning Ragas</Link>
          <Link href="/listen/focus">Focus Ragas</Link>
        </div>
        <div className="flex flex-col gap-2 text-[12px] text-rs-muted">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
        </div>
      </div>
      <p className="mt-8 border-t border-rs-border2 pt-5 text-[11px] text-rs-hint">
        (c) Raga Soundscapes - www.ragasoundscapes.com
      </p>
    </footer>
  )
}
