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
  youtubeUrl: string
  featured: boolean
  relatedRagas: string[]
  isLive?: boolean
}
