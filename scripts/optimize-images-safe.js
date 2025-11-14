/**
 * Safe Image Optimization Script
 * 
 * Creates optimized versions without overwriting originals
 * Saves optimized images to a separate folder
 * 
 * Usage: node scripts/optimize-images-safe.js
 */

const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('❌ Error: sharp is not installed.');
  console.log('📦 Please install it first: npm install --save-dev sharp');
  process.exit(1);
}

const imagesToOptimize = [
  '/assets/images/faq-hero.jpg',
  '/assets/images/hero.jpg',
  '/assets/images/michelle/1.jpg',
  '/assets/logos/obmh-en.png',
];

const publicDir = path.join(process.cwd(), 'public');
const optimizedDir = path.join(publicDir, 'assets', '_optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
  console.log(`📁 Created directory: ${optimizedDir}\n`);
}

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

    const metadata = await sharp(fullPath).metadata();
    console.log(`   Dimensions: ${metadata.width}x${metadata.height}`);

    // Create optimized version
    const relativePath = imagePath.replace(/^\//, ''); // Remove leading slash
    const optimizedPath = path.join(optimizedDir, relativePath);
    const optimizedDirPath = path.dirname(optimizedPath);
    
    // Create subdirectories if needed
    if (!fs.existsSync(optimizedDirPath)) {
      fs.mkdirSync(optimizedDirPath, { recursive: true });
    }

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

    fs.writeFileSync(optimizedPath, optimizedBuffer);
    const optimizedSize = optimizedBuffer.length;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    
    console.log(`   ✅ Optimized saved: ${path.relative(publicDir, optimizedPath)}`);
    console.log(`      Size: ${(optimizedSize / 1024).toFixed(2)} KB (${savings}% smaller)`);

    // Create WebP version
    const basename = path.basename(fullPath, ext);
    const webpPath = path.join(optimizedDirPath, `${basename}.webp`);

    const webpBuffer = await sharp(fullPath)
      .webp({ 
        quality: 85, 
        effort: 6 
      })
      .toBuffer();

    fs.writeFileSync(webpPath, webpBuffer);
    const webpSize = webpBuffer.length;
    const webpSavings = ((1 - webpSize / originalSize) * 100).toFixed(1);
    
    console.log(`   ✅ WebP created: ${path.basename(webpPath)}`);
    console.log(`      Size: ${(webpSize / 1024).toFixed(2)} KB (${webpSavings}% smaller than original)`);

  } catch (error) {
    console.error(`   ❌ Error optimizing ${imagePath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting safe image optimization...\n');
  console.log(`📁 Public directory: ${publicDir}`);
  console.log(`📁 Optimized output: ${optimizedDir}\n`);

  for (const imagePath of imagesToOptimize) {
    await optimizeImage(imagePath);
  }

  console.log('\n✨ Optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('   1. Review optimized images in: public/assets/_optimized/');
  console.log('   2. Replace originals with optimized versions when ready');
  console.log('   3. Or update your code to use the optimized versions');
  console.log('\n💡 Tips:');
  console.log('   - Next.js will automatically serve WebP to supported browsers');
  console.log('   - Keep using original .jpg/.png paths in your code');
  console.log('   - Next.js Image component handles format conversion automatically');
}

main().catch(console.error);

