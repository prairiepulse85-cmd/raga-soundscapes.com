'use client'

import { useState, useMemo } from 'react'
import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function RagaLibraryGrid({ ragas }: { ragas: Raga[] }) {
  const [timeFilter, setTimeFilter] = useState('')
  const [moodFilter, setMoodFilter] = useState('')
  const [search, setSearch] = useState('')

  const times = useMemo(() => Array.from(new Set(ragas.map(r => r.timeOfDay))), [ragas])
  const moods = useMemo(() => Array.from(new Set(ragas.map(r => r.mood))), [ragas])

  const filtered = useMemo(() => {
    return ragas.filter(r => {
      if (timeFilter && r.timeOfDay !== timeFilter) return false
      if (moodFilter && r.mood !== moodFilter) return false
      if (search && !r.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [ragas, timeFilter, moodFilter, search])

  const selectStyle: React.CSSProperties = {
    background: 'var(--rs-surface)',
    border: '1px solid var(--rs-border)',
    color: 'var(--rs-muted)',
    fontSize: '13px',
    padding: '8px 12px',
    fontFamily: 'var(--font-dm-sans), sans-serif',
    outline: 'none',
  }

  return (
    <section id="ragas" className="rs-section" style={{ borderTop: '1px solid var(--rs-border)' }}>
      <div className="rs-container">
        <p className="rs-section-label">The raga library</p>
        <h2 className="rs-section-title" style={{ fontSize: '28px', marginBottom: '8px' }}>Explore the Ragas</h2>
        <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--rs-hint)', marginBottom: '40px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Arranged by time of day, mood, rasa, and beginner-friendly context.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '40px' }}>
          <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)} style={selectStyle}>
            <option value="">All times</option>
            {times.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={moodFilter} onChange={(e) => setMoodFilter(e.target.value)} style={selectStyle}>
            <option value="">All moods</option>
            {moods.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search ragas..." style={{ ...selectStyle, width: '200px' }} />
          {(timeFilter || moodFilter || search) && (
            <button onClick={() => { setTimeFilter(''); setMoodFilter(''); setSearch('') }}
              style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rs-accent)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Reset
            </button>
          )}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--rs-border)',
          border: '1px solid var(--rs-border)',
        }}>
          {filtered.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', fontSize: '15px', color: 'var(--rs-hint)', padding: '60px 0', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            No ragas match your filters.
          </p>
        )}
      </div>
    </section>
  )
}
