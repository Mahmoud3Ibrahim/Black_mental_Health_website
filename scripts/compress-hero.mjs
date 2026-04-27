import sharp from 'sharp';
import { stat, rename, unlink } from 'node:fs/promises';

const TARGETS = [
  {
    path: new URL('../public/assets/images/hero.jpg', import.meta.url).pathname
      .replace(/^\//, '')
      .replace(/%20/g, ' '),
    maxWidth: 1920,
    quality: 75,
  },
];

async function compress({ path, maxWidth, quality }) {
  const before = (await stat(path)).size;
  const tmp = path + '.tmp.jpg';
  await sharp(path, { failOn: 'none' })
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toFile(tmp);
  try {
    await unlink(path);
  } catch {}
  await rename(tmp, path);
  const after = (await stat(path)).size;
  const pct = (((before - after) / before) * 100).toFixed(1);
  console.log(`${path}\n  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB  -${pct}%`);
}

for (const t of TARGETS) {
  // eslint-disable-next-line no-await-in-loop
  await compress(t);
}
