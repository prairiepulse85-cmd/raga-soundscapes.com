export default function BestForList({ items }: { items: string[] }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A6080', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        Best for
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {items.map((item) => (
          <span key={item} style={{ fontSize: '12px', color: '#8A9EC4', border: '1px solid #2A3D5C', padding: '4px 14px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
