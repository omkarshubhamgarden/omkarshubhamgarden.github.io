#!/usr/bin/env bash
# resize-images.sh — run from repo root after installing ffmpeg
# Resizes oversized venue images in-place.
# After running: node scripts/generate-image-manifest.mjs

set -e
IMG="public/images"

echo "Resizing family-event.webp (was 1600×698 → cap to 1200px long edge)..."
ffmpeg -y -i "$IMG/family-event.webp" \
  -vf "scale='min(1200,iw)':'min(1200,ih)':force_original_aspect_ratio=decrease" \
  -c:v libwebp -q:v 82 -map_metadata -1 \
  "$IMG/family-event-resized.webp" && mv "$IMG/family-event-resized.webp" "$IMG/family-event.webp"

echo "Resizing outdoor-entrance.webp (was 1592×1116 → cap to 1200px long edge)..."
ffmpeg -y -i "$IMG/outdoor-entrance.webp" \
  -vf "scale='min(1200,iw)':'min(1200,ih)':force_original_aspect_ratio=decrease" \
  -c:v libwebp -q:v 82 -map_metadata -1 \
  "$IMG/outdoor-entrance-resized.webp" && mv "$IMG/outdoor-entrance-resized.webp" "$IMG/outdoor-entrance.webp"

echo "Resizing haldi-decor.webp (was 1200×671 → recompress at q:v 72)..."
ffmpeg -y -i "$IMG/haldi-decor.webp" \
  -c:v libwebp -q:v 72 -map_metadata -1 \
  "$IMG/haldi-decor-resized.webp" && mv "$IMG/haldi-decor-resized.webp" "$IMG/haldi-decor.webp"

echo "Resizing food-venue.webp (was 1200×645 → displayed at 840×452, resize to 900px)..."
ffmpeg -y -i "$IMG/food-venue.webp" \
  -vf "scale='min(900,iw)':-1" \
  -c:v libwebp -q:v 80 -map_metadata -1 \
  "$IMG/food-venue-resized.webp" && mv "$IMG/food-venue-resized.webp" "$IMG/food-venue.webp"

echo "Resizing hall-decor.webp (was 1200×494 → recompress at q:v 72)..."
ffmpeg -y -i "$IMG/hall-decor.webp" \
  -c:v libwebp -q:v 72 -map_metadata -1 \
  "$IMG/hall-decor-resized.webp" && mv "$IMG/hall-decor-resized.webp" "$IMG/hall-decor.webp"

echo "Resizing shubham-omkar-logo.webp (was 600×600 → displayed at 352×352, resize to 420px)..."
ffmpeg -y -i "$IMG/shubham-omkar-logo.webp" \
  -vf "scale=420:420" \
  -c:v libwebp -lossless 1 -q:v 90 -map_metadata -1 \
  "$IMG/shubham-omkar-logo-resized.webp" && mv "$IMG/shubham-omkar-logo-resized.webp" "$IMG/shubham-omkar-logo.webp"

echo "Recompressing alt-hero.webp (was 324 KiB → reduce quality slightly)..."
ffmpeg -y -i "$IMG/alt-hero.webp" \
  -c:v libwebp -q:v 78 -map_metadata -1 \
  "$IMG/alt-hero-resized.webp" && mv "$IMG/alt-hero-resized.webp" "$IMG/alt-hero.webp"

echo ""
echo "All done. Now run: node scripts/generate-image-manifest.mjs"
echo "Then: npm run build"
