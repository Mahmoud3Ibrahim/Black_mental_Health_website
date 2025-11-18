/**
 * Image Conversion Script to WebP
 * 
 * Usage:
 * 1. Install sharp temporarily: npm install --save-dev sharp
 * 2. Run: node scripts/convert-to-webp.js
 * 3. Remove sharp if desired: npm uninstall sharp
 * 
 * This script converts all JPG/PNG images in public/assets/images to WebP format
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('❌ Error: sharp is not installed.');
  console.log('📦 Please install it first: npm install --save-dev sharp');
  console.log('💡 Or use online tools like: https://cloudconvert.com/jpg-to-webp');
  process.exit(1);
}

const imagesDir = path.join(process.cwd(), 'public', 'assets', 'images');
const supportedFormats = ['.jpg', '.jpeg', '.png'];

async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!supportedFormats.includes(ext)) {
    return;
  }

  const dir = path.dirname(filePath);
  const basename = path.basename(filePath, ext);
  const webpPath = path.join(dir, `${basename}.webp`);

  // Skip if WebP already exists
  if (fs.existsSync(webpPath)) {
    console.log(`⏭️  Skipping ${path.basename(filePath)} (WebP already exists)`);
    return;
  }

  try {
    await sharp(filePath)
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);
    
    const originalSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
    
    console.log(`✅ Converted: ${path.basename(filePath)} → ${path.basename(webpPath)} (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error converting ${path.basename(filePath)}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await convertToWebP(fullPath);
    }
  }
}

async function main() {
  console.log('🖼️  Starting image conversion to WebP...\n');
  
  if (!fs.existsSync(imagesDir)) {
    console.error(`❌ Directory not found: ${imagesDir}`);
    process.exit(1);
  }

  await processDirectory(imagesDir);
  
  console.log('\n✨ Conversion complete!');
  console.log('📝 Note: Update your code to use .webp extensions if you want to use the converted files directly.');
  console.log('💡 Or keep using .jpg/.png - Next.js will auto-convert to WebP when serving images.');
}

main().catch(console.error);


