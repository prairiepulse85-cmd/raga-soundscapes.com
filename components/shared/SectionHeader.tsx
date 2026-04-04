export default function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c8913a', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        {label}
      </p>
      <h2 style={{ fontSize: '42px', color: '#e8d5b7' }}>
        {title}
      </h2>
    </div>
  )
}
