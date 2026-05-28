import type { ReactNode } from 'react'
import Footer from '@/components/Footer'

export default function InfoPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <>
      <main className="rs-section">
        <article className="rs-container max-w-[760px]">
          <p className="rs-section-label text-left">{eyebrow}</p>
          <h1 className="mb-6 font-[family-name:var(--font-cinzel)] text-[36px] leading-tight text-rs-text sm:text-[48px]">
            {title}
          </h1>
          <div className="space-y-5 text-[15px] leading-8 text-rs-muted">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
