# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- i18next (for bilingual support)

## Step 2: Add Your Images

Add the following images to `/public/assets/images/`:

1. **hero.jpg** - Main banner image for the hero section (recommended size: 1920x1080px)
2. **Partner logos** - PNG/JPG files for partner organizations

## Step 3: Update Image References

Once you add images, update the components:

### In `components/Hero.tsx`:

Find this section (around line 18-25):
```tsx
{/* Uncomment when hero.jpg is added */}
{/* <Image
  src="/assets/images/hero.jpg"
  alt="Ottawa Black Mental Health Week 2026"
  fill
  className="object-cover"
  priority
/> */}
```

Uncomment the Image component:
```tsx
<Image
  src="/assets/images/hero.jpg"
  alt="Ottawa Black Mental Health Week 2026"
  fill
  className="object-cover"
  priority
/>
```

### In `components/Footer.tsx`:

Replace the placeholder logo divs with your actual logos using the Image component from Next.js.

## Step 4: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## Step 5: Test Language Toggle

- Click the **EN/FR** button in the top-right corner
- It should switch between English and French
- The preference is saved in localStorage
- On first visit, it auto-detects based on browser language

## Step 6: Customize Content (Optional)

### Edit Translations:
- English: `/locales/en.json`
- French: `/locales/fr.json`

### Edit Colors:
- Update `tailwind.config.js` theme colors

### Edit SEO:
- Update metadata in `app/layout.tsx`

## Step 7: Build for Production

Test the production build locally:

```bash
npm run build
npm start
```

## Step 8: Deploy to Vercel

### Option A: Use Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Use Vercel Dashboard
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

That's it! Your bilingual landing page is ready.

## Troubleshooting

### Build Errors

If you get build errors, ensure you have:
- Node.js 18 or higher
- All dependencies installed (`npm install`)

### Images Not Showing

- Make sure images are in `/public/assets/images/`
- Check file names match exactly (case-sensitive)
- Verify Image imports in components

### Language Not Switching

- Check browser console for errors
- Ensure i18next is properly initialized
- Clear localStorage and refresh

## Need Help?

Contact: info@ottawablackmentalhealthweek.ca
