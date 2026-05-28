export interface Raga {
  slug: string
  name: string
  timeOfDay: string
  timeRank: number
  rasa: string
  mood: string
  thaat: string
  instruments: string[]
  bestFor: string[]
  shortDescription: string
  description: string
  featured: boolean
  relatedRagas: string[]
}
