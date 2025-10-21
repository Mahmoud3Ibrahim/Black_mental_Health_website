# Website Updates - Ottawa Black Mental Health Week 2026

## Summary of Changes

This document outlines all updates made to align the website with the official poster and event details.

---

## 1. Color Palette Update

**Updated colors to match the poster:**
- Deep Brown: `#4B2E05`
- Gold: `#CFA349`
- White: `#FFFFFF`
- Black: `#000000`

**Files modified:**
- [tailwind.config.js](tailwind.config.js:10-15) - Updated color definitions
- [app/globals.css](app/globals.css:21-31) - Updated scrollbar colors

---

## 2. Event Details Correction

**The event is a ONE-DAY conference, not a week-long event:**
- **Date:** Monday, March 2nd, 2026
- **Format:** Full-day, in-person conference
- **Theme:** Substance Use and Suicide: Breaking the Silence

**Files modified:**
- [locales/en.json](locales/en.json) - Updated with correct conference schedule
- [locales/fr.json](locales/fr.json) - Updated with correct French translations

---

## 3. Conference Schedule (from PDF)

### Monday, March 2nd, 2026

1. **Registration and Check-in** (08:30 AM - 09:00 AM)
   - Attendees register and receive conference materials

2. **Opening Ceremony - Main Hall** (09:00 AM - 10:00 AM)
   - Substance Use and Suicide: Breaking the Silence

3. **Community Expo - Quieter Connections** (10:00 AM - 04:00 PM)
   - Main Hall: Connecting Caregivers (Information, experts and entertainment)
   - Room 106H: 1-on-1 Peer Support and System Navigation

4. **Community of Practice - Boardrooms** (10:30 AM - 03:30 PM)
   - Clinical workshops for all mental health professionals

5. **Call to Action - Main Hall** (03:30 PM - 04:00 PM)
   - Closing remarks from the Executive Board and calls to action for the week

---

## 4. Component Updates

### [Hero.tsx](components/Hero.tsx)
- Added language-based logo switching (EN/FR)
- Updated background gradient: brown → black
- Removed hardcoded hero image reference
- Added description text from PDF
- Displays OBMH logo (English or French based on language)
- Updated color scheme to match poster

### [Agenda.tsx](components/Agenda.tsx)
- Changed from 7-day event cards to 5 conference sessions
- Updated to display single-day conference schedule
- Changed component structure from "EventCard" to "SessionCard"
- Updated background colors to brown/gold theme
- Improved responsive layout

### [About.tsx](components/About.tsx)
- Updated background gradient to black/brown theme
- Changed card backgrounds to use brown tones
- Maintained mission and values content
- Improved hover effects and transitions

### [Footer.tsx](components/Footer.tsx)
- Added language-based logo display
- Removed placeholder partner logos
- Updated to show OBMH logo prominently
- Changed background to gradient (black to brown)
- Updated social icon styling with brown theme

### [ImageCarousel.tsx](components/ImageCarousel.tsx) **(NEW)**
- Created auto-rotating image carousel
- Displays 6 event images
- Auto-slides every 5 seconds
- Full-width responsive design
- Smooth fade transitions
- Positioned above footer as requested

### [page.tsx](app/page.tsx)
- Added ImageCarousel component import
- Positioned carousel between Agenda and Footer

---

## 5. Bilingual Logo System

**Logo switching logic implemented:**

```typescript
const logoSrc = i18n.language === 'fr'
  ? '/assets/logos/obmh-fr.png'  // SMNO logo
  : '/assets/logos/obmh-en.png'; // OBMH logo
```

**When to use each logo:**
- English site → `obmh-en.png` (Ottawa Black Mental Health Coalition)
- French site → `obmh-fr.png` (Coalition pour la Santé Mentale des Noirs d'Ottawa / SMNO)

**Logo locations:**
- Hero section (top of page)
- Footer (bottom of page)

---

## 6. Image Requirements

### Logos (Required)
Place in `/public/assets/logos/`:
- `obmh-en.png` - English logo
- `obmh-fr.png` - French logo (SMNO)

### Slider Images (Required)
Place in `/public/assets/images/slider/`:
- `1.jpg` through `6.jpg`
- Recommended: 1920x1080px, optimized for web

---

## 7. Design Philosophy

**Cohesive color scheme:**
- All backgrounds now use smooth gradients between black and brown
- Gold accents throughout for consistency
- No harsh contrasts - smooth transitions
- Warm, welcoming color palette

**Animations:**
- Fade-in effects on scroll
- Smooth hover transitions
- Scale transforms on interactive elements
- Carousel fade transitions (5-second intervals)

---

## 8. Responsive Design

All components are fully responsive:
- **Mobile:** Optimized layouts, stacked elements
- **Tablet:** Two-column layouts where appropriate
- **Desktop:** Full-width hero, multi-column content

**Breakpoints:**
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px

---

## 9. Accessibility

- Proper alt text for all images (bilingual)
- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- High contrast text (gold on dark backgrounds)

---

## 10. Eventbrite Integration

Registration link maintained throughout:
```
https://www.eventbrite.ca/e/ottawa-black-mental-health-week-2026-tickets-1090395364889
```

**Link locations:**
- Hero section (primary CTA)
- Agenda section (CTA card)

---

## 11. Files Modified

### Configuration
- `tailwind.config.js` - Color palette
- `app/globals.css` - Scrollbar colors

### Components
- `components/Hero.tsx` - Logo switching, new colors
- `components/About.tsx` - Brown theme
- `components/Agenda.tsx` - Conference schedule
- `components/Footer.tsx` - Logo display
- `components/ImageCarousel.tsx` - **NEW**

### Content
- `locales/en.json` - Updated event details
- `locales/fr.json` - Updated French translations

### Pages
- `app/page.tsx` - Added carousel

### Documentation
- `public/assets/logos/README.md` - Logo instructions
- `public/assets/images/slider/README.md` - Slider image instructions

---

## 12. Testing Checklist

- [ ] Add logo files (`obmh-en.png`, `obmh-fr.png`)
- [ ] Add slider images (`1.jpg` - `6.jpg`)
- [ ] Test language toggle (EN ↔ FR)
- [ ] Verify logo switches with language
- [ ] Check carousel auto-rotation
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify all links (Eventbrite)
- [ ] Check smooth scrolling
- [ ] Test animations and transitions

---

## 13. Next Steps

1. **Add Images:**
   - Place logo files in `/public/assets/logos/`
   - Place slider images in `/public/assets/images/slider/`

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Test:**
   - Visit http://localhost:3000
   - Toggle between EN/FR
   - Check all sections
   - Verify carousel

4. **Deploy:**
   ```bash
   npm run build
   vercel
   ```

---

## Contact

For questions about these updates:
**Email:** info@ottawablackmentalhealthweek.ca

---

**Last Updated:** October 2025
**Event Date:** Monday, March 2nd, 2026
