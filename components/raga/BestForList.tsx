export default function BestForList({ items }: { items: string[] }) {
  return (
    <div className="mb-8">
      <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-muted/60 mb-3">
        Best for
      </p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-[12px] font-[family-name:var(--font-dm-sans)] text-muted border border-border px-3 py-1 rounded-full"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
