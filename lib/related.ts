import { Raga, ragas } from './ragas'

export function getRelatedRagas(raga: Raga): Raga[] {
  if (raga.relatedRagas?.length === 3) {
    const manual = raga.relatedRagas
      .map(slug => ragas.find(r => r.slug === slug))
      .filter(Boolean) as Raga[]
    if (manual.length === 3) return manual
  }

  return ragas
    .filter(r => r.slug !== raga.slug)
    .sort((a, b) => {
      const aDist = Math.abs(a.timeRank - raga.timeRank)
      const bDist = Math.abs(b.timeRank - raga.timeRank)
      return aDist - bDist
    })
    .slice(0, 3)
}
