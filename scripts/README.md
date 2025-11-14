# Image Conversion Scripts

## Convert Images to WebP

This script converts all JPG/PNG images to WebP format for better compression.

### Option 1: Using the Script (One-time setup)

```bash
# Install sharp temporarily
npm install --save-dev sharp

# Run the conversion script
node scripts/convert-to-webp.js

# Optional: Remove sharp after conversion
npm uninstall sharp
```

### Option 2: Online Tools (No installation needed)

Use free online converters:
- https://cloudconvert.com/jpg-to-webp
- https://convertio.co/jpg-webp/
- https://squoosh.app/

### Option 3: Next.js Automatic Conversion (Recommended)

**You don't need to convert source files!** Next.js automatically converts images to WebP/AVIF when serving them. This is already configured in `next.config.js`.

The Image component will:
- Automatically serve WebP/AVIF to supported browsers
- Fall back to original format for older browsers
- Optimize images on-the-fly

**This is the recommended approach** - no manual conversion needed!

