#!/usr/bin/env node
/**
 * Generates lib/image-manifest.json with real pixel dimensions for every
 * raster image under public/images. Requires ffprobe on PATH.
 *
 * Run after adding/resizing images:  node scripts/generate-image-manifest.mjs
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';

const IMAGE_DIR = join(process.cwd(), 'public', 'images');
const OUTPUT = join(process.cwd(), 'lib', 'image-manifest.json');
const EXTENSIONS = new Set(['.webp', '.jpg', '.jpeg', '.png']);

function probe(file) {
  const out = execFileSync(
    'ffprobe',
    [
      '-v', 'error',
      '-select_streams', 'v:0',
      '-show_entries', 'stream=width,height',
      '-of', 'csv=s=x:p=0',
      file,
    ],
    { encoding: 'utf8' }
  ).trim();
  const [width, height] = out.split('x').map(Number);
  if (!width || !height) throw new Error(`Could not read dimensions of ${file}`);
  return { width, height };
}

const manifest = {};
for (const name of readdirSync(IMAGE_DIR)) {
  if (!EXTENSIONS.has(extname(name).toLowerCase())) continue;
  try {
    manifest[name] = probe(join(IMAGE_DIR, name));
  } catch (error) {
    console.warn(`Skipping ${name}: ${error.message}`);
  }
}

writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Wrote ${Object.keys(manifest).length} entries to ${OUTPUT}`);
