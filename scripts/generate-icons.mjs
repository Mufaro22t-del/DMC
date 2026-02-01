import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

// Source image (existing brand image). Adjust if you add a different source later.
const projectRoot = path.resolve(process.cwd())
const src = path.join(projectRoot, 'public', 'DMC', 'IMG_7841.JPG')

const outFavicon = path.join(projectRoot, 'public', 'favicon.png')
const outApple = path.join(projectRoot, 'public', 'apple-touch-icon.png')

async function ensureExists(p) {
  await fs.promises.mkdir(path.dirname(p), { recursive: true })
}

async function generate() {
  if (!fs.existsSync(src)) {
    console.error(`Source image not found: ${src}`)
    process.exit(1)
  }

  await ensureExists(outFavicon)
  await ensureExists(outApple)

  // Create a square favicon 512x512 (browsers will downscale to 32x32 as needed)
  await sharp(src)
    .resize(512, 512, { fit: 'cover', position: 'centre' })
    .png({ quality: 90 })
    .toFile(outFavicon)

  // Create Apple Touch Icon 180x180
  await sharp(src)
    .resize(180, 180, { fit: 'cover', position: 'centre' })
    .png({ quality: 90 })
    .toFile(outApple)

  console.log('Generated:', path.relative(projectRoot, outFavicon))
  console.log('Generated:', path.relative(projectRoot, outApple))
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})
