import ragasRaw from '@/data/ragas.json'
import type { Raga } from './types'

export type { Raga }

type RagaSource = Omit<Raga, 'youtubeUrl' | 'featured' | 'relatedRagas' | 'isLive'> & {
  youtubeUrl?: string
  featured?: boolean
  relatedRagas?: string[]
}

const allRagas: Raga[] = (ragasRaw as RagaSource[]).map(r => ({
  slug: r.slug,
  name: r.name,
  timeOfDay: r.timeOfDay,
  timeRank: r.timeRank,
  rasa: r.rasa,
  mood: r.mood,
  thaat: r.thaat,
  instruments: r.instruments,
  bestFor: r.bestFor,
  shortDescription: r.shortDescription,
  description: r.description,
  youtubeUrl: r.youtubeUrl || '',
  featured: r.featured || false,
  relatedRagas: r.relatedRagas || [],
  isLive: Boolean(r.youtubeUrl && r.youtubeUrl.trim().length > 0),
}))

// Backward-compatible export for /listen/ pages
export const ragas: Raga[] = allRagas

export function getAllRagas(): Raga[] {
  return [...allRagas].sort((a, b) => a.timeRank - b.timeRank)
}

export function getRagaBySlug(slug: string): Raga | undefined {
  return allRagas.find(r => r.slug === slug)
}

export function getFeaturedRagas(): Raga[] {
  return allRagas.filter(r => r.featured)
}

export function getRagasByMood(mood: string): Raga[] {
  const n = mood.toLowerCase().replace(/-/g, ' ')
  return allRagas
    .filter(r => r.mood.toLowerCase().replace(/-/g, ' ') === n)
    .sort((a, b) => a.timeRank - b.timeRank)
}

export function getRagasByTime(timeOfDay: string): Raga[] {
  const n = timeOfDay.toLowerCase().replace(/-/g, ' ')
  return allRagas.filter(r => r.timeOfDay.toLowerCase().replace(/-/g, ' ') === n)
}

export function getRelatedRagas(slugs: string[]): Raga[] {
  return slugs.map(s => getRagaBySlug(s)).filter(Boolean) as Raga[]
}

export function getAllSlugs(): string[] {
  return allRagas.map(r => r.slug)
}

export function getAllMoods(): string[] {
  return Array.from(new Set(allRagas.map(r => r.mood)))
}

export function getAllTimeCategories(): string[] {
  return Array.from(new Set(allRagas.map(r => r.timeOfDay)))
}
