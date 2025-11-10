import { cpSync, existsSync, mkdirSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = resolve(__dirname, '..')
const outDir = resolve(projectRoot, 'out')
const staticTargets = [
  { src: 'link', dest: 'link' },
  { src: 'image', dest: 'image' },
  { src: 'index-static.html', dest: 'index-static.html' },
  { src: 'TEMP.html', dest: 'TEMP.html' },
]

if (!existsSync(outDir)) {
  console.error('[copy-static] Build output directory "out" was not found. Did you run "vite build"?')
  process.exit(1)
}

const copy = (sourcePath, destinationPath) => {
  const sourceStats = statSync(sourcePath)
  if (sourceStats.isDirectory()) {
    cpSync(sourcePath, destinationPath, { recursive: true })
  } else {
    mkdirSync(dirname(destinationPath), { recursive: true })
    cpSync(sourcePath, destinationPath)
  }
}

for (const target of staticTargets) {
  const from = resolve(projectRoot, target.src)
  if (!existsSync(from)) {
    console.warn(`[copy-static] Skip missing ${target.src}`)
    continue
  }

  const to = resolve(outDir, target.dest)
  copy(from, to)
  console.log(`[copy-static] Copied ${target.src} -> out/${target.dest}`)
}
