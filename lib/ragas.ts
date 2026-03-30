export type Raga = {
  slug: string
  name: string
  timeOfDay: string
  timeRank: number
  rasa: string
  instruments: string[]
  description: string
  youtubeUrl: string
  youtubeSleepUrl?: string
  relatedRagas: string[]
  lastModified: string
}

import ragasData from '@/data/ragas.json'

export const ragas: Raga[] = ragasData as Raga[]

export function getRagaBySlug(slug: string): Raga | undefined {
  return ragas.find(r => r.slug === slug)
}
