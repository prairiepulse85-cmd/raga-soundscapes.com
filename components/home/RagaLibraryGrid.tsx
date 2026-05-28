'use client'

import { useState, useMemo } from 'react'
import type { Raga } from '@/lib/types'
import RagaCard from '@/components/shared/RagaCard'

export default function RagaLibraryGrid({ ragas }: { ragas: Raga[] }) {
  const [timeFilter, setTimeFilter] = useState('')
  const [moodFilter, setMoodFilter] = useState('')
  const [search, setSearch] = useState('')

  const times = useMemo(() => Array.from(new Set(ragas.map((r) => r.timeOfDay))), [ragas])
  const moods = useMemo(() => Array.from(new Set(ragas.map((r) => r.mood))), [ragas])

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return ragas.filter((r) => {
      if (timeFilter && r.timeOfDay !== timeFilter) return false
      if (moodFilter && r.mood !== moodFilter) return false
      if (query) {
        const haystack = `${r.name} ${r.timeOfDay} ${r.mood} ${r.rasa} ${r.thaat} ${r.instruments.join(' ')}`.toLowerCase()
        if (!haystack.includes(query)) return false
      }
      return true
    })
  }, [ragas, timeFilter, moodFilter, search])

  const fieldStyle: React.CSSProperties = {
    background: 'var(--rs-surface2)',
    border: '1px solid var(--rs-border)',
    color: 'var(--rs-muted)',
    fontSize: '14px',
    minHeight: '44px',
    padding: '10px 12px',
    fontFamily: 'var(--font-dm-sans), sans-serif',
    outline: 'none',
  }

  return (
    <section id="ragas" className="rs-section" style={{ borderTop: '1px solid var(--rs-border)' }}>
      <div className="rs-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '28px' }}>
          <div>
            <p className="rs-section-label" style={{ textAlign: 'left' }}>The raga library</p>
            <h2 className="rs-section-title" style={{ textAlign: 'left', fontSize: '30px', marginBottom: '10px' }}>
              Explore the Ragas
            </h2>
            <p style={{ maxWidth: '620px', fontSize: '15px', color: 'var(--rs-muted)', lineHeight: 1.8, fontFamily: 'var(--font-dm-sans), sans-serif' }}>
              Filter by time, mood, name, thaat, rasa, or instrument. Each page is written as a learning guide first, with inspired listening links only where available.
            </p>
          </div>
          <p style={{ color: 'var(--rs-hint)', fontSize: '13px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Showing {filtered.length} of {ragas.length}
          </p>
        </div>

        <div className="rs-soft-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', padding: '16px', marginBottom: '30px' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--rs-hint)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Time
            <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)} style={fieldStyle}>
              <option value="">All times</option>
              {times.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--rs-hint)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Mood
            <select value={moodFilter} onChange={(e) => setMoodFilter(e.target.value)} style={fieldStyle}>
              <option value="">All moods</option>
              {moods.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--rs-hint)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
            Search
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Try Yaman, evening, Kalyan..." style={fieldStyle} />
          </label>
          <button
            onClick={() => { setTimeFilter(''); setMoodFilter(''); setSearch('') }}
            disabled={!timeFilter && !moodFilter && !search}
            style={{
              alignSelf: 'end',
              minHeight: '44px',
              border: '1px solid var(--rs-border)',
              color: timeFilter || moodFilter || search ? 'var(--rs-accent)' : 'var(--rs-hint)',
              background: 'transparent',
              cursor: timeFilter || moodFilter || search ? 'pointer' : 'default',
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-dm-sans), sans-serif',
            }}
          >
            Reset
          </button>
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
