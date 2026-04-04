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
    background: '#1A2E50',
    border: '1px solid #2A3D5C',
    color: '#8A9EC4',
    fontSize: '13px',
    padding: '8px 12px',
    fontFamily: 'var(--font-dm-sans), sans-serif',
    outline: 'none',
  }

  return (
    <section id="ragas" style={{ background: '#0D1828', padding: '80px 24px', borderTop: '1px solid #2A3D5C' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8A830', marginBottom: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          The raga library
        </p>
        <h2 style={{ fontSize: '28px', color: '#EAD898', marginBottom: '8px', fontFamily: 'var(--font-cinzel), serif' }}>
          Explore the Ragas
        </h2>
        <p style={{ fontSize: '13px', color: '#4A6080', marginBottom: '32px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
          Arranged by time of day, from pre-dawn to deep night.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
          <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)} style={selectStyle}>
            <option value="">All times</option>
            {times.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={moodFilter} onChange={(e) => setMoodFilter(e.target.value)} style={selectStyle}>
            <option value="">All moods</option>
            {moods.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name..." style={{ ...selectStyle, width: '200px' }} />
          {(timeFilter || moodFilter || search) && (
            <button onClick={() => { setTimeFilter(''); setMoodFilter(''); setSearch('') }}
              style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8A830', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Reset
            </button>
          )}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: '#2A3D5C',
          border: '1px solid #2A3D5C',
        }}>
          {filtered.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ fontSize: '15px', color: '#4A6080', padding: '60px 0', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            No ragas match your filters.
          </p>
        )}
      </div>
    </section>
  )
}
