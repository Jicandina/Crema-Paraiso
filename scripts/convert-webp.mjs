import sharp from "sharp";
import { readdir } from "fs/promises";
import { existsSync, statSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.resolve(__dirname, "../public/images");

// Only convert PNGs over 200KB
const MIN_SIZE_BYTES = 200 * 1024;

const files = await readdir(IMAGES_DIR);
const pngs = files.filter((f) => f.toLowerCase().endsWith(".png"));

let converted = 0;
let skipped = 0;

for (const file of pngs) {
  const src = path.join(IMAGES_DIR, file);
  const dest = path.join(IMAGES_DIR, file.replace(/\.png$/i, ".webp"));

  if (existsSync(dest)) { skipped++; continue; }

  const { size } = statSync(src);
  if (size < MIN_SIZE_BYTES) { skipped++; continue; }

  try {
    await sharp(src)
      .webp({ quality: 85, effort: 4 })
      .toFile(dest);

    const { size: destSize } = statSync(dest);
    const saving = Math.round((1 - destSize / size) * 100);
    console.log(`✓ ${file} → ${file.replace(".png", ".webp")} (−${saving}%)`);
    converted++;
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}

console.log(`\nConvertidos: ${converted} | Saltados: ${skipped}`);
