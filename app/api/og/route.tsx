import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const ragaSlug = searchParams.get('raga')
  const page = searchParams.get('page')

  let title = 'Indian Classical Meditation Music'
  let subtitle = 'A growing library of 14 ragas'

  if (ragaSlug) {
    const name = ragaSlug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
    title = `Raga ${name}`
    subtitle = 'Meditation Soundscape'
  } else if (page === 'sleep') {
    title = 'Ragas for Sleep'
    subtitle = 'Indian Classical Meditation Music'
  } else if (page === 'morning') {
    title = 'Ragas for Morning Meditation'
    subtitle = 'Indian Classical Meditation Music'
  } else if (page === 'focus') {
    title = 'Ragas for Focus & Deep Work'
    subtitle = 'Indian Classical Meditation Music'
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D1828',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            color: '#4A6080',
            fontSize: 14,
            letterSpacing: 8,
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          RAGA SOUNDSCAPES
        </div>
        <div
          style={{
            color: '#EAD898',
            fontSize: ragaSlug ? 64 : 52,
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: '#C8A830',
            fontSize: 16,
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginTop: 28,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
