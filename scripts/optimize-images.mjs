import { mkdir, stat } from 'node:fs/promises'
import { basename, dirname, join } from 'node:path'
import sharp from 'sharp'

const jobs = [
  {
    input: 'public/assets/profile/profile-photo.jpg',
    quality: 80,
    outputs: [
      { suffix: '-480', width: 480 },
      { suffix: '-720', width: 720 },
      { suffix: '-960', width: 960 },
    ],
  },
  {
    input: 'public/assets/projects/Nova-preview.jpg',
    quality: 80,
    outputs: [
      { suffix: '-800', width: 800 },
      { suffix: '-1600', width: 1600 },
    ],
  },
  {
    input: 'public/assets/projects/OutfitMaker-preview.jpg',
    quality: 80,
    outputs: [
      { suffix: '-800', width: 800 },
      { suffix: '-1600', width: 1600 },
    ],
  },
  {
    input: 'public/assets/projects/taskflow-preview.jpg',
    quality: 80,
    outputs: [
      { suffix: '-800', width: 800 },
      { suffix: '-1600', width: 1600 },
    ],
  },
]

for (const job of jobs) {
  const input = join(process.cwd(), job.input)
  const outputDir = dirname(input)
  const base = basename(job.input).replace(/\.[^.]+$/, '')

  await mkdir(outputDir, { recursive: true })

  for (const output of job.outputs) {
    const target = join(outputDir, `${base}${output.suffix}.webp`)
    const info = await sharp(input)
      .rotate()
      .resize({ width: output.width, withoutEnlargement: true })
      .webp({ quality: job.quality, effort: 5 })
      .toFile(target)

    const { size } = await stat(target)
    console.log(`${target} -> ${info.width}x${info.height} (${(size / 1024).toFixed(0)} KB)`)
  }
}
