/**
 * Generates an optimized multi-size favicon.ico from logo512.png.
 * Run: node scripts/generate-favicon.js
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SOURCE = path.join(PUBLIC_DIR, 'logo512.png');
const OUTPUT = path.join(PUBLIC_DIR, 'favicon.ico');

// Standard favicon sizes
const SIZES = [16, 32, 48];

async function buildIco() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`Source not found: ${SOURCE}`);
    process.exit(1);
  }

  // Render each size to a PNG buffer
  const pngBuffers = await Promise.all(
    SIZES.map((size) =>
      sharp(SOURCE)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );

  // Build ICO container
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4); // number of images

  const dirEntries = [];
  for (let i = 0; i < count; i++) {
    const size = SIZES[i];
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset
    offset += buf.length;
    dirEntries.push(entry);
  }

  const ico = Buffer.concat([header, ...dirEntries, ...pngBuffers]);
  fs.writeFileSync(OUTPUT, ico);

  const kb = (ico.length / 1024).toFixed(1);
  console.log(`✅ favicon.ico generated (${kb} KB) with sizes: ${SIZES.join(', ')}`);
}

buildIco().catch((err) => {
  console.error('Failed to generate favicon:', err);
  process.exit(1);
});
