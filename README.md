# Ottawa Black Mental Health Week 2026

A bilingual (English/French) landing page for Ottawa Black Mental Health Week 2026.

**Theme:** *Substance Use and Suicide: Breaking the Silence*
**Dates:** February 2-8, 2026

## Features

- **Bilingual Support**: Automatic language detection based on browser settings with manual EN/FR toggle
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Modern Tech Stack**: Built with Next.js 15, React 18, TypeScript, and Tailwind CSS
- **Smooth Animations**: Fade-in effects and smooth scrolling for enhanced user experience
- **SEO Optimized**: Comprehensive meta tags for both languages
- **Production Ready**: Configured for deployment on Vercel

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: i18next, react-i18next
- **Language Detection**: i18next-browser-languagedetector

## Color Theme

- **Black**: #000000 (Primary)
- **Gold**: #D4AF37 (Accent)
- **Dark Blue**: #0A1929 (Background)
- **Blue**: #1E3A5F (Secondary)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bmhw2026-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
bmhw2026-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with banner
│   ├── About.tsx           # About section
│   ├── Agenda.tsx          # Event agenda with cards
│   ├── Footer.tsx          # Footer with logos and credits
│   └── LanguageToggle.tsx  # Language switcher (EN/FR)
├── lib/
│   └── i18n.ts             # i18next configuration
├── locales/
│   ├── en.json             # English translations
│   └── fr.json             # French translations
├── public/
│   └── assets/
│       └── images/         # Event images and logos
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Adding Images

Place your images in the `/public/assets/images/` directory:

- **Hero Banner**: `/public/assets/images/hero.jpg`
- **Logos**: Add partner logos to `/public/assets/images/`

Then update the components to use the actual images:

In `components/Hero.tsx`, uncomment the Image component:
```tsx
<Image
  src="/assets/images/hero.jpg"
  alt="Ottawa Black Mental Health Week 2026"
  fill
  className="object-cover"
  priority
/>
```

In `components/Footer.tsx`, replace the placeholder logo divs with actual Image components.

## Translations

Edit the translation files to customize content:

- **English**: `/locales/en.json`
- **French**: `/locales/fr.json`

The language is automatically detected based on the user's browser settings. Users can manually toggle between EN and FR using the button in the top-right corner.

## Deployment on Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

### Environment Variables

No environment variables are required for this project.

## Build for Production

To create a production build:

```bash
npm run build
npm start
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  'bmhw-black': '#000000',
  'bmhw-gold': '#D4AF37',
  'bmhw-darkblue': '#0A1929',
  'bmhw-blue': '#1E3A5F',
}
```

### Event Agenda

Update the agenda in both translation files:
- `/locales/en.json` → `agenda` section
- `/locales/fr.json` → `agenda` section

### SEO

Edit metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ...
};
```

## Features Breakdown

### Hero Section
- Full-screen hero with background image
- Event title, theme, and dates
- CTA button linking to Eventbrite
- Smooth scroll indicator

### About Section
- Mission statement
- "Why This Matters" explanation
- Animated cards with icons

### Agenda Section
- 7 event cards (one for each day)
- Date, time, and description for each event
- CTA section with registration button

### Footer
- Placeholder for partner logos
- Tagline and contact information
- Social media links
- Copyright and credits

### Language Toggle
- Fixed position button (top-right)
- Switches between EN and FR
- Saves preference to localStorage

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Ottawa Black Mental Health Week. All rights reserved.

## Contact

For questions or support:
**Email**: info@ottawablackmentalhealthweek.ca

---

**Organized with love by the Ottawa Black community for the Black community.**
