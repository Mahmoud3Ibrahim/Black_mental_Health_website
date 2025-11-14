/**
 * Replace Original Images with Optimized Versions
 * 
 * This script replaces the original images with their optimized versions
 * from the _optimized folder.
 * 
 * Usage: node scripts/replace-with-optimized.js
 */

const fs = require('fs');
const path = require('path');

const imagesToReplace = [
  '/assets/images/faq-hero.jpg',
  '/assets/images/hero.jpg',
  '/assets/images/michelle/1.jpg',
  '/assets/logos/obmh-en.png',
];

const publicDir = path.join(process.cwd(), 'public');
const optimizedDir = path.join(publicDir, 'assets', '_optimized');

function replaceImage(imagePath) {
  const originalPath = path.join(publicDir, imagePath);
  const relativePath = imagePath.replace(/^\//, '');
  const optimizedPath = path.join(optimizedDir, relativePath);

  if (!fs.existsSync(optimizedPath)) {
    console.log(`⚠️  Optimized version not found: ${imagePath}`);
    return false;
  }

  if (!fs.existsSync(originalPath)) {
    console.log(`⚠️  Original file not found: ${imagePath}`);
    return false;
  }

  try {
    // Create backup if it doesn't exist
    const backupPath = `${originalPath}.backup`;
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(originalPath, backupPath);
      console.log(`   📦 Backup created: ${path.basename(backupPath)}`);
    }

    // Replace original with optimized
    fs.copyFileSync(optimizedPath, originalPath);
    
    const originalStats = fs.statSync(backupPath);
    const optimizedStats = fs.statSync(originalPath);
    const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
    
    console.log(`   ✅ Replaced: ${imagePath}`);
    console.log(`      Saved: ${(originalStats.size / 1024).toFixed(2)} KB → ${(optimizedStats.size / 1024).toFixed(2)} KB (${savings}% smaller)`);
    
    return true;
  } catch (error) {
    console.error(`   ❌ Error replacing ${imagePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔄 Replacing original images with optimized versions...\n');

  if (!fs.existsSync(optimizedDir)) {
    console.error(`❌ Optimized directory not found: ${optimizedDir}`);
    console.log('💡 Run "node scripts/optimize-images-safe.js" first to create optimized versions.');
    process.exit(1);
  }

  let successCount = 0;
  for (const imagePath of imagesToReplace) {
    console.log(`\n📝 Processing: ${imagePath}`);
    if (replaceImage(imagePath)) {
      successCount++;
    }
  }

  console.log(`\n✨ Done! Replaced ${successCount}/${imagesToReplace.length} images.`);
  console.log('\n💡 Note: Original backups are saved as .backup files');
  console.log('   You can delete them after verifying the optimized images work correctly.');
}

main();

