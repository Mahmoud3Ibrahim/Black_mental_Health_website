/**
 * Image Optimization Script
 * 
 * Optimizes specific images by:
 * 1. Compressing original images (in-place)
 * 2. Creating WebP versions
 * 
 * Usage:
 * 1. Install sharp: npm install --save-dev sharp
 * 2. Run: node scripts/optimize-images.js
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
  process.exit(1);
}

// Images to optimize (relative to public folder)
const imagesToOptimize = [
  '/assets/images/faq-hero.jpg',
  '/assets/images/hero.jpg',
  '/assets/images/michelle/1.jpg',
  '/assets/logos/obmh-en.png',
];

const publicDir = path.join(process.cwd(), 'public');

async function optimizeImage(imagePath) {
  const fullPath = path.join(publicDir, imagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${imagePath}`);
    return;
  }

  const ext = path.extname(fullPath).toLowerCase();
  const isJpg = ['.jpg', '.jpeg'].includes(ext);
  const isPng = ext === '.png';

  if (!isJpg && !isPng) {
    console.log(`⏭️  Skipping ${imagePath} (unsupported format)`);
    return;
  }

  try {
    const originalStats = fs.statSync(fullPath);
    const originalSize = originalStats.size;
    
    console.log(`\n🖼️  Optimizing: ${imagePath}`);
    console.log(`   Original size: ${(originalSize / 1024).toFixed(2)} KB`);

    // Get image metadata
    const metadata = await sharp(fullPath).metadata();
    console.log(`   Dimensions: ${metadata.width}x${metadata.height}`);

    // Create backup first
    const backupPath = `${fullPath}.backup`;
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(fullPath, backupPath);
      console.log(`   📦 Backup created: ${path.basename(backupPath)}`);
    }

    // Optimize original image (in-place)
    let optimizedBuffer;
    if (isJpg) {
      optimizedBuffer = await sharp(fullPath)
        .jpeg({ 
          quality: 85, 
          progressive: true,
          mozjpeg: true 
        })
        .toBuffer();
    } else if (isPng) {
      optimizedBuffer = await sharp(fullPath)
        .png({ 
          quality: 85,
          compressionLevel: 9,
          adaptiveFiltering: true
        })
        .toBuffer();
    }

    // Write optimized original (retry if file is locked)
    let retries = 3;
    while (retries > 0) {
      try {
        fs.writeFileSync(fullPath, optimizedBuffer);
        break;
      } catch (error) {
        retries--;
        if (retries === 0) {
          throw error;
        }
        console.log(`   ⏳ File locked, retrying... (${retries} attempts left)`);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    const optimizedSize = optimizedBuffer.length;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    
    console.log(`   ✅ Optimized size: ${(optimizedSize / 1024).toFixed(2)} KB (${savings}% smaller)`);

    // Create WebP version
    const dir = path.dirname(fullPath);
    const basename = path.basename(fullPath, ext);
    const webpPath = path.join(dir, `${basename}.webp`);

    const webpBuffer = await sharp(fullPath)
      .webp({ 
        quality: 85, 
        effort: 6 
      })
      .toBuffer();

    fs.writeFileSync(webpPath, webpBuffer);
    const webpSize = webpBuffer.length;
    const webpSavings = ((1 - webpSize / originalSize) * 100).toFixed(1);
    
    console.log(`   ✅ WebP created: ${path.basename(webpPath)} (${(webpSize / 1024).toFixed(2)} KB, ${webpSavings}% smaller than original)`);

  } catch (error) {
    console.error(`   ❌ Error optimizing ${imagePath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📁 Public directory: ${publicDir}\n`);

  for (const imagePath of imagesToOptimize) {
    await optimizeImage(imagePath);
  }

  console.log('\n✨ Optimization complete!');
  console.log('\n💡 Tips:');
  console.log('   - Next.js will automatically serve WebP to supported browsers');
  console.log('   - Keep using original .jpg/.png paths in your code');
  console.log('   - Next.js Image component handles format conversion automatically');
}

main().catch(console.error);

