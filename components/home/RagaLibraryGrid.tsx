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

  const selectClass = "bg-white border border-[#E4D8C0] text-[#5A4830] text-[13px] font-[family-name:var(--font-dm-sans)] px-3 py-2 rounded-[2px] focus:outline-none focus:border-[#C8A830]"

  return (
    <section id="ragas" className="section-light py-16 px-10">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.12em] text-[#9A8860] mb-1">
          The raga library
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[28px] text-[#12213A] mb-2">
          Explore the Ragas
        </h2>
        <p className="text-[13px] font-[family-name:var(--font-dm-sans)] text-[#7A6848] mb-6">
          Arranged by time of day, from pre-dawn to deep night.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)} className={selectClass}>
            <option value="">All times</option>
            {times.map(t => <option key={t} value={t}>{t}</option>)}
          </select>

          <select value={moodFilter} onChange={(e) => setMoodFilter(e.target.value)} className={selectClass}>
            <option value="">All moods</option>
            {moods.map(m => <option key={m} value={m}>{m}</option>)}
          </select>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name..."
            className="bg-white border border-[#E4D8C0] text-[#5A4830] text-[13px] font-[family-name:var(--font-dm-sans)] px-3 py-2 rounded-[2px] focus:outline-none focus:border-[#C8A830] placeholder:text-[#9A8860] w-full sm:w-48"
          />

          {(timeFilter || moodFilter || search) && (
            <button
              onClick={() => { setTimeFilter(''); setMoodFilter(''); setSearch('') }}
              className="text-[11px] font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.1em] text-[#C8A830] hover:text-[#12213A] transition-colors"
            >
              Reset
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-[12px]">
          {filtered.map((raga) => (
            <RagaCard key={raga.slug} raga={raga} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[14px] font-[family-name:var(--font-dm-sans)] text-[#9A8860] py-12">
            No ragas match your filters.
          </p>
        )}
      </div>
    </section>
  )
}
