import { MetadataRoute } from 'next'
import { getAllRagas, getAllMoods, getAllTimeCategories } from '@/lib/ragas'
import { moodToSlug, timeToSlug } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ragasoundscapes.com'
  const ragas = getAllRagas()
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    ...ragas.map(r => ({
      url: `${base}/raga/${r.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: r.featured ? 0.9 : 0.7,
    })),
    ...getAllMoods().map(m => ({
      url: `${base}/mood/${moodToSlug(m)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...getAllTimeCategories().map(t => ({
      url: `${base}/time/${timeToSlug(t)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${base}/listen/sleep`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/listen/morning`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/listen/focus`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${base}/editorial-policy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${base}/disclaimer`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.4 },
  ]
}
