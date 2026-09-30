import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import { createCanvas } from '@napi-rs/canvas'

const resumeDir = join(process.cwd(), 'public', 'assets', 'Resume')
const resumeFile = join(resumeDir, 'Waleed_Ahmed_Korashy_Resume.pdf')
const scale = 1.5

const data = new Uint8Array(await readFile(resumeFile))
const doc = await getDocument({ data }).promise

for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i)
  const viewport = page.getViewport({ scale })
  const canvas = createCanvas(viewport.width, viewport.height)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, viewport.width, viewport.height)
  await page.render({ canvasContext: ctx, viewport }).promise
  const out = join(resumeDir, `Waleed_Ahmed_Korashy_Resume-${i}.png`)
  await writeFile(out, canvas.toBuffer('image/png'))
  console.log(`rendered page ${i} -> ${out} (${viewport.width}x${viewport.height})`)
}
console.log(`done: ${doc.numPages} page(s)`)