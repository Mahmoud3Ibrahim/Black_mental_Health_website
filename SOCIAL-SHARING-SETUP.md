# 🚀 Social Sharing & Metadata Setup - Complete Guide

## ✅ What Has Been Configured

### 1. Open Graph Metadata (Facebook, LinkedIn, WhatsApp)
- ✅ Title: "Ottawa Black Mental Health Week 2026"
- ✅ Description: "Theme: Substance Use and Suicide – Breaking the Silence | Ottawa Conference & Event Centre, March 2, 2026"
- ✅ Image: `/assets/images/og-banner.jpg` (1200×630px)
- ✅ URL: `https://bmhw2026.vercel.app`
- ✅ Type: `website`
- ✅ Locale: `en_CA` with alternate `fr_CA`

### 2. Twitter Card Metadata
- ✅ Card type: `summary_large_image`
- ✅ Title: "Ottawa Black Mental Health Week 2026"
- ✅ Description: Same as Open Graph
- ✅ Image: `/assets/images/og-banner.jpg`
- ✅ Creator: `@OBMHC`

### 3. Favicon Configuration
- ✅ Icon path: `/favicon.ico`
- ✅ Apple touch icon: `/apple-touch-icon.png`
- ✅ Configured in metadata object

### 4. SEO Enhancements
- ✅ Canonical URL
- ✅ Keywords for search engines
- ✅ Author and publisher metadata
- ✅ Robots configuration for indexing
- ✅ metadataBase for absolute URLs

---

## 📋 Required Actions (Before Deployment)

### Step 1: Add OG Banner Image
**File:** `public/assets/images/og-banner.jpg`
**Dimensions:** 1200px × 630px
**Format:** JPG (optimized, under 1MB)

**What to include in the image:**
- Event title: "Ottawa Black Mental Health Week 2026"
- Theme: "Substance Use and Suicide: Breaking the Silence"
- Date: March 2, 2026
- Location: Ottawa Conference & Event Centre
- OBMH logo
- Visually appealing brown/gold design

**Design Tools:**
- Canva (easy templates): https://canva.com
- Figma (professional): https://figma.com
- Adobe Express: https://adobe.com/express

### Step 2: Add Favicon
**File:** `public/favicon.ico`
**Size:** 32×32px (ICO format)

**Quick Generation:**
1. Visit: https://favicon.io/favicon-converter/
2. Upload your logo
3. Download and place `favicon.ico` in `public/` folder

**Optional but Recommended:**
- `public/apple-touch-icon.png` (180×180px)

---

## 🧪 Testing Your Social Sharing

After deploying to Vercel with the images:

### Facebook
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: `https://bmhw2026.vercel.app`
3. Click "Scrape Again" to refresh cache
4. Verify image, title, and description appear correctly

### Twitter/X
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: `https://bmhw2026.vercel.app`
3. Preview the card

### LinkedIn
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: `https://bmhw2026.vercel.app`
3. Preview how it will appear in posts

### WhatsApp
1. Send your URL to yourself or a test contact
2. The preview should appear automatically with your image

---

## 📁 Final File Structure

```
bmhw2026-site/
├── public/
│   ├── favicon.ico                    ← Add this
│   ├── apple-touch-icon.png          ← Add this (optional)
│   └── assets/
│       ├── images/
│       │   ├── og-banner.jpg         ← Add this (REQUIRED)
│       │   └── README.md             ← Created (instructions)
│       └── logos/
│           ├── obmh-en.png
│           └── obmh-fr.png
├── app/
│   └── layout.tsx                     ← Updated ✅
└── ...
```

---

## 🔍 Metadata Configuration Details

Location: `app/layout.tsx`

The metadata object includes:
```typescript
export const metadata: Metadata = {
  title: 'Ottawa Black Mental Health Week 2026',
  description: '...',
  metadataBase: new URL('https://bmhw2026.vercel.app'),
  openGraph: {
    title: '...',
    description: '...',
    images: [{ url: '/assets/images/og-banner.jpg', width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/images/og-banner.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};
```

---

## ⚡ Deployment Checklist

Before pushing to Vercel:

- [ ] Add `og-banner.jpg` (1200×630px) to `public/assets/images/`
- [ ] Add `favicon.ico` (32×32px) to `public/`
- [ ] (Optional) Add `apple-touch-icon.png` (180×180px) to `public/`
- [ ] Verify all image paths are correct
- [ ] Test locally with `npm run dev`
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Test social sharing with the tools above
- [ ] Clear social media cache if needed

---

## 🎯 Expected Results

When someone shares `https://bmhw2026.vercel.app` on social media, they will see:

**Title:** Ottawa Black Mental Health Week 2026

**Description:** Theme: Substance Use and Suicide – Breaking the Silence | Ottawa Conference & Event Centre, March 2, 2026

**Image:** Your custom banner with event details

**Favicon:** Your logo in browser tabs

---

## 📞 Support

If you need help with:
- Image design: Contact a graphic designer or use Canva templates
- Technical issues: Check Next.js documentation at https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Social media cache issues: Use the debugging tools listed above

---

**Last Updated:** October 21, 2025
**Status:** Configuration Complete ✅ | Images Pending Upload
