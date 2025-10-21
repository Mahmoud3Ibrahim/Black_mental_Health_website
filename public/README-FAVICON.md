# Favicon Setup Instructions

## 📌 Required Files

### 1. favicon.ico
**Location:** `public/favicon.ico`
**Size:** 32×32px or 16×16px (ICO format supports multiple sizes)
**Purpose:** Browser tab icon

### 2. apple-touch-icon.png (Optional but recommended)
**Location:** `public/apple-touch-icon.png`
**Size:** 180×180px
**Purpose:** iOS home screen icon when users add your site

---

## 🎨 How to Create Your Favicon:

### Option 1: Online Generator (Easiest)
1. Visit: https://favicon.io/favicon-converter/
2. Upload your logo or design
3. Download the generated files
4. Place `favicon.ico` in the `public/` folder

### Option 2: Use Your Logo
1. Take your OBMH logo (PNG format)
2. Resize to 32×32px or 180×180px
3. Convert to ICO format using online tools
4. Save as `favicon.ico` in `public/` folder

### Option 3: Custom Design
1. Design a 512×512px icon with your brand colors (brown/gold)
2. Use Figma, Photoshop, or Canva
3. Export as PNG
4. Convert to ICO using https://convertico.com/

---

## 📂 Final File Structure:
```
public/
├── favicon.ico           ← Required
├── apple-touch-icon.png  ← Optional
└── assets/
    └── images/
        └── og-banner.jpg ← Required for social sharing
```

---

## ✅ Verification:
After adding your favicon:
1. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
2. Reload your site
3. Check the browser tab - you should see your icon

---

**Note:** Currently, the layout.tsx is configured to look for these files. Add them before deploying to production for a complete professional appearance.
