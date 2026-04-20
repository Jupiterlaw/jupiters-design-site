# Jupiter's Design — Hong Kong Flooring Landing Page

Marketing landing page for **Jupiter's Design**, a Hong Kong flooring company
specialising in SPC, engineered wood, and composite flooring.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Hero section** with a full-bleed background image and a prominent
  WhatsApp CTA linking to `+85295715155`.
- **Product gallery** with 8 flooring products, filterable by category
  (SPC · Wood · Composite · All).
- **Project showcase** with interactive before/after cards for three recent
  Hong Kong installations.
- **Contact form** with client-side validation (name, email, phone, message)
  and a success confirmation state.
- **Fully responsive** mobile layout with an accessible mobile navigation
  drawer and a floating WhatsApp button.
- **TypeScript throughout** with explicit type definitions for products,
  showcase projects, and form values (see `src/types/index.ts`).

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── globals.css       ← Tailwind layer + brand tokens
│   ├── layout.tsx        ← Root layout + metadata
│   ├── page.tsx          ← Composes the landing-page sections
│   └── fonts/            ← Local Geist font files
├── components/
│   ├── ContactForm.tsx   ← Validated contact form + success state
│   ├── Footer.tsx        ← Contact + services footer
│   ├── Hero.tsx          ← Hero section with WhatsApp CTA
│   ├── Navbar.tsx        ← Sticky navbar with mobile drawer
│   ├── ProductGallery.tsx← Filterable product grid
│   ├── ProjectShowcase.tsx← Before/after project cards
│   └── WhatsAppButton.tsx← Shared WhatsApp CTA component
├── lib/
│   ├── constants.ts      ← Brand + contact constants (WhatsApp number, etc.)
│   └── data.ts           ← Product + project showcase data
└── types/
    └── index.ts          ← Shared TypeScript types
```

## Customisation

- **WhatsApp number**: `src/lib/constants.ts` (`WHATSAPP_PHONE`).
- **Brand colours**: `tailwind.config.ts` (`brand` palette) and CSS variables
  in `src/app/globals.css`.
- **Products**: `src/lib/data.ts` (`PRODUCTS`).
- **Showcase projects**: `src/lib/data.ts` (`SHOWCASE_PROJECTS`).

## Deployment

The site is a plain Next.js 14 app and deploys cleanly to Vercel, Netlify, or
any Node-compatible host. Images are served unoptimized
(`next.config.mjs → images.unoptimized = true`) so the app can also be
statically exported via `next build && next export` if needed.
