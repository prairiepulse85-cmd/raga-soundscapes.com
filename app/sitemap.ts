import { MetadataRoute } from 'next'
import { ragas } from '@/lib/ragas'

export default function sitemap(): MetadataRoute.Sitemap {
  const ragaUrls = ragas.map((r) => ({
    url: `https://ragasoundscapes.com/raga/${r.slug}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://ragasoundscapes.com',
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: 'monthly' as const,
    },
    {
      url: 'https://ragasoundscapes.com/listen/sleep',
      lastModified: new Date('2025-01-01'),
      priority: 0.7,
      changeFrequency: 'yearly' as const,
    },
    {
      url: 'https://ragasoundscapes.com/listen/morning',
      lastModified: new Date('2025-01-01'),
      priority: 0.7,
      changeFrequency: 'yearly' as const,
    },
    {
      url: 'https://ragasoundscapes.com/listen/focus',
      lastModified: new Date('2025-01-01'),
      priority: 0.7,
      changeFrequency: 'yearly' as const,
    },
    ...ragaUrls,
  ]
}
