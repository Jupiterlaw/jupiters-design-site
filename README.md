# LUXORA Flooring — Premium Marketing Website

> Next.js 14 · TypeScript · Tailwind CSS · GSAP · Lenis

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Layer       | Library                        |
|-------------|--------------------------------|
| Framework   | Next.js 14 (App Router)        |
| Language    | TypeScript                     |
| Styling     | Tailwind CSS + custom CSS      |
| Animation   | GSAP 3 + ScrollTrigger         |
| Smooth Scroll | Lenis                        |
| Icons       | Lucide React                   |
| Deployment  | Vercel                         |

---

## Project Structure

```
luxora-flooring/
├── app/
│   ├── layout.tsx            ← Root layout (fonts, providers)
│   ├── page.tsx              ← Homepage
│   ├── globals.css           ← Global styles + animations
│   ├── products/             ← Product grid + filter
│   ├── technology/           ← Editorial scroll page
│   ├── about/                ← Brand story
│   ├── careers/              ← Job listings
│   ├── visualizer/           ← 3D room visualizer embed
│   ├── dealer-locator/       ← Map-based dealer search
│   ├── contact/              ← Contact form
│   └── care-and-maintenance/ ← FAQ / accordion
├── components/
│   ├── Navigation.tsx        ← Fixed nav + fullscreen overlay
│   ├── HeroSection.tsx       ← Split hero + rotating word
│   ├── InnovationSection.tsx ← Dark statement section
│   ├── VisualizerPromo.tsx   ← Clip-path wipe reveal
│   ├── ThreePillars.tsx      ← Auto-play tabbed carousel
│   ├── StatsCounter.tsx      ← GSAP animated counters
│   ├── Footer.tsx            ← Newsletter + links + socials
│   ├── CustomCursor.tsx      ← Magnetic cursor dot
│   ├── ScrollProgress.tsx    ← "35 / 100" progress indicator
│   ├── SmoothScroll.tsx      ← Lenis + GSAP ticker sync
│   ├── CookieBanner.tsx      ← Slide-up consent banner
│   └── PageTransition.tsx    ← Route-change animation
├── lib/
│   ├── gsap.ts               ← GSAP + plugin registration
│   └── utils.ts              ← cn() helper
└── types/
    └── index.ts

```

---

## Customisation

### Brand Name
Search-replace `LUXORA` across the codebase.

### Colours
Edit `tailwind.config.ts` and the CSS variables in `app/globals.css`:
```css
:root {
  --color-cream:    #F5F2EE;   /* Page background      */
  --color-charcoal: #1A1A1A;   /* Primary text          */
  --color-beige:    #C8B89A;   /* Warm accent           */
}
```

### Hero Images
Replace Unsplash URLs in `components/HeroSection.tsx` with your CDN assets.

### Visualizer
In `app/visualizer/page.tsx`, replace the placeholder `<div>` with your vendor iframe:
```tsx
<iframe
  src="https://your-visualizer-url.com"
  className="w-full h-full border-none"
  title="LUXORA Room Visualizer"
  allowFullScreen
/>
```

### GSAP SplitText (Club GSAP)
To enable character-by-character reveal, sign up at https://gsap.com/pricing/
and replace the manual `splitLines()` utility in `lib/gsap.ts` with:
```ts
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)
```

---

## Deployment (Vercel)

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo directly in the Vercel dashboard.

---

## Accessibility

- All interactive elements have `aria-label`
- Cookie banner uses `aria-live="polite"`
- Reduced-motion: GSAP animations disabled via `@media (prefers-reduced-motion: reduce)`
- Images use Next.js `<Image>` with descriptive `alt` text
- Hamburger/overlay uses `aria-expanded` + `aria-controls`

---

© 2026 LUXORA Flooring. All rights reserved.
