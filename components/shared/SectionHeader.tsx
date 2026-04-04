export default function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-muted mb-1">
        {label}
      </p>
      <h2 className="font-[family-name:var(--font-cinzel)] text-[24px] text-text">
        {title}
      </h2>
    </div>
  )
}
