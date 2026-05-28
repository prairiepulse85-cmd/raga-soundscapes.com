export default function BestForList({ items }: { items: string[] }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--rs-hint)', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        Best for
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {items.map((item) => (
          <span key={item} style={{ fontSize: '13px', color: 'var(--rs-muted)', background: 'var(--rs-surface2)', border: '1px solid var(--rs-border)', padding: '6px 14px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
