# Useful Commands

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Build Locally

```bash
# Create production build
npm run build

# Test production build
npm start
```

## File Structure

```
bmhw2026-site/
│
├── app/                      # Next.js 15 App Router
│   ├── layout.tsx           # Root layout with metadata & SEO
│   ├── page.tsx             # Home page (client component)
│   └── globals.css          # Global styles + Tailwind imports
│
├── components/              # React components
│   ├── Hero.tsx            # Hero section with CTA
│   ├── About.tsx           # About section
│   ├── Agenda.tsx          # Event agenda with day cards
│   ├── Footer.tsx          # Footer with logos & social
│   └── LanguageToggle.tsx  # EN/FR language switcher
│
├── lib/                     # Utilities and configs
│   └── i18n.ts             # i18next configuration
│
├── locales/                 # Translation files
│   ├── en.json             # English translations
│   └── fr.json             # French translations
│
├── public/                  # Static assets
│   └── assets/
│       └── images/         # Event images & logos
│
├── Configuration Files
│   ├── package.json         # Dependencies
│   ├── tsconfig.json        # TypeScript config
│   ├── tailwind.config.js   # Tailwind CSS config
│   ├── next.config.js       # Next.js config
│   ├── postcss.config.js    # PostCSS config
│   ├── .eslintrc.json       # ESLint config
│   ├── .gitignore           # Git ignore rules
│   └── vercel.json          # Vercel deployment config
│
└── Documentation
    ├── README.md            # Main documentation
    ├── SETUP.md             # Quick setup guide
    └── COMMANDS.md          # This file
```

## Customization Quick Reference

### 1. Change Event Dates/Text

Edit translation files:
- `/locales/en.json`
- `/locales/fr.json`

### 2. Change Colors

Edit `tailwind.config.js`:
```js
colors: {
  'bmhw-black': '#000000',
  'bmhw-gold': '#D4AF37',
  'bmhw-darkblue': '#0A1929',
  'bmhw-blue': '#1E3A5F',
}
```

### 3. Add Hero Image

1. Place image in `/public/assets/images/hero.jpg`
2. Edit `components/Hero.tsx` and uncomment the Image component

### 4. Add Partner Logos

1. Place logos in `/public/assets/images/`
2. Edit `components/Footer.tsx` and replace placeholder divs

### 5. Change Eventbrite Link

Search for the URL in:
- `components/Hero.tsx`
- `components/Agenda.tsx`
- Replace with your new link

### 6. Update SEO

Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ...
}
```

## Testing

### Test Responsive Design

1. Run dev server: `npm run dev`
2. Open http://localhost:3000
3. Open browser DevTools (F12)
4. Click device toolbar icon
5. Test on different screen sizes

### Test Language Toggle

1. Click EN/FR button (top-right)
2. Verify all text changes
3. Check localStorage in DevTools
4. Refresh page - language should persist

### Test Smooth Scrolling

1. Click "About" button in hero
2. Should smoothly scroll to About section
3. Test scroll indicator

### Test Animations

1. Scroll down the page
2. Sections should fade in
3. Hover over cards for hover effects

## Common Issues & Solutions

### Issue: Module not found errors
**Solution**: Run `npm install` again

### Issue: Port 3000 already in use
**Solution**:
```bash
# Kill the process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Issue: Images not loading
**Solution**:
- Ensure images are in `/public/assets/images/`
- Check file names (case-sensitive)
- Verify Image component imports

### Issue: Language not switching
**Solution**:
- Check browser console for errors
- Clear localStorage
- Refresh the page

### Issue: Build fails
**Solution**:
- Check Node.js version (need 18+)
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Run `npm run build` again

## Git Commands

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: BMHW 2026 landing page"

# Add remote
git remote add origin <your-repo-url>

# Push to GitHub
git push -u origin main
```

## Performance Tips

1. **Optimize Images**: Use WebP format and optimize file sizes
2. **Lazy Loading**: Images below the fold are automatically lazy-loaded
3. **Code Splitting**: Next.js automatically splits code
4. **Caching**: Vercel CDN caches static assets

## Accessibility

The site includes:
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast colors for readability

## Browser DevTools

### Check Mobile View
```
F12 → Toggle device toolbar → Select device
```

### Check Performance
```
F12 → Lighthouse → Generate report
```

### Check Console Errors
```
F12 → Console tab
```

## Need Help?

- **Documentation**: See README.md
- **Setup Guide**: See SETUP.md
- **Contact**: info@ottawablackmentalhealthweek.ca
