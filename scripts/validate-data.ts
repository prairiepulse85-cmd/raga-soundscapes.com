import ragasData from '../data/ragas.json'
import type { Raga } from '../lib/types'

type RagaData = Partial<Raga> & { _note?: string }

const ragas = ragasData as RagaData[]
const slugs = new Set(ragas.map(r => r.slug).filter(Boolean))
let errors = 0
let warnings = 0

ragas.forEach(raga => {
  const required: Array<keyof Raga> = ['slug', 'name', 'timeOfDay', 'timeRank', 'rasa', 'mood',
    'thaat', 'instruments', 'bestFor', 'shortDescription', 'description', 'relatedRagas']
  required.forEach(field => {
    const val = raga[field]
    if (val === undefined || val === null || val === '' || (Array.isArray(val) && val.length === 0)) {
      console.error(`Missing ${String(field)} for ${raga.slug}`)
      errors++
    }
  })
  if (Array.isArray(raga.relatedRagas)) {
    raga.relatedRagas.forEach((s: string) => {
      if (!slugs.has(s)) {
        console.error(`${raga.slug}: relatedRaga "${s}" not found`)
        errors++
      }
    })
  }
  if (raga._note) {
    console.warn(`${raga.slug}: placeholder - not production-ready`)
    warnings++
  }
})

if (slugs.size !== ragas.length) {
  console.error(`Duplicate slugs: ${ragas.length} entries, ${slugs.size} unique`)
  errors++
}

console.log('')
if (errors === 0) console.log(`${ragas.length} ragas valid. ${warnings} warning(s).`)
else {
  console.error(`${errors} error(s). Fix before build.`)
  process.exit(1)
}
