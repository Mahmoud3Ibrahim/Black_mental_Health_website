import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, basename } from 'node:path';

const SRC_DIR = new URL('../public/assets/images/new_slider/', import.meta.url);
const SRC_PATH = SRC_DIR.pathname.replace(/^\//, '').replace(/%20/g, ' ');

const MAX_WIDTH = 1920;
const JPG_QUALITY = 80;

async function run() {
  const dir = SRC_PATH;
  const files = (await readdir(dir)).filter((n) => /\.jpe?g$/i.test(n));
  let beforeTotal = 0;
  let afterTotal = 0;
  for (const name of files) {
    const inPath = join(dir, name);
    const before = (await stat(inPath)).size;
    beforeTotal += before;
    const tmpPath = inPath + '.tmp.jpg';
    await sharp(inPath, { failOn: 'none' })
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true })
      .toFile(tmpPath);
    try {
      await unlink(inPath);
    } catch {}
    await rename(tmpPath, inPath);
    const after = (await stat(inPath)).size;
    afterTotal += after;
    const pct = (((before - after) / before) * 100).toFixed(1);
    console.log(`${basename(name).padEnd(45)} ${(before / 1024).toFixed(0).padStart(6)}KB -> ${(after / 1024).toFixed(0).padStart(6)}KB  -${pct}%`);
  }
  const totalPct = (((beforeTotal - afterTotal) / beforeTotal) * 100).toFixed(1);
  console.log(
    `\nTotal: ${(beforeTotal / 1024 / 1024).toFixed(1)}MB -> ${(afterTotal / 1024 / 1024).toFixed(1)}MB  (-${totalPct}%)`
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
