# Jupiter's Design Limited / 木星設計有限公司 — Marketing Website

> Next.js 14 · TypeScript · Tailwind CSS · GSAP · Lenis

香港專業地板工程公司網站。專營 SPC 地板、實木地板、地台自流平、工業地台油及戶外木地板工程。

Live: https://www.jupitersdesign.com

---

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
| Smooth Scroll | Lenis (GSAP ticker sync)    |
| Fonts       | next/font (Cormorant Garamond + Inter) |

---

## Project Structure

```
app/
├── layout.tsx              ← Root layout (metadata, JSON-LD, Navigation, Footer)
├── page.tsx                ← Homepage
├── globals.css             ← Global CSS + Tailwind
├── about/                  ← 關於木星設計
├── care-and-maintenance/   ← 保養 FAQ
├── careers/                ← 加入我們
├── comparison/             ← 地板產品對比表
├── conditions/             ← 條款及細則
├── contact/                ← 聯絡我們 (Formspree + WhatsApp)
├── portfolio/              ← 施工案例
├── privacy/                ← 隱私政策
├── technology/             ← 技術與工藝
└── terms/                  ← 使用條款

components/
├── HeroSection.tsx         ← 首頁 split-screen hero + GSAP 動畫
├── InnovationSection.tsx   ← 品牌理念區塊
├── ThreePillars.tsx        ← 三大支柱區塊
├── StatsCounter.tsx        ← 30+ 年 / 1000+ 項目 / 18 區數字動畫
├── Navigation.tsx          ← 頂部導航 + 搜尋 + 全屏選單
├── Footer.tsx              ← 頁腳 + WhatsApp CTA + 社交連結
├── FloatingWhatsApp.tsx    ← 全域 WhatsApp 浮動按鈕
├── CookieBanner.tsx        ← Cookie 同意橫幅
├── CustomCursor.tsx        ← 自訂鼠標
├── PageTransition.tsx      ← 頁面轉場動畫
├── SmoothScroll.tsx        ← Lenis + GSAP ticker sync
├── ScrollProgress.tsx      ← 瀏覽進度指示器
└── VisualizerPromo.tsx     ← 視覺化推廣區塊
```

---

## Deployment

This site is deployed to Vercel, connected via GitHub repo.

```bash
npm i -g vercel
vercel
```

---

## Accessibility

- All interactive elements have `aria-label`
- Cookie banner uses `aria-live="polite"`
- Reduced-motion: GSAP animations disabled via `@media (prefers-reduced-motion: reduce)`
- Images use Next.js `<Image>` with descriptive `alt` text
- Hamburger/overlay uses `aria-expanded` + `aria-controls`

---

## SEO

- LocalBusiness JSON-LD schema (in root layout)
- Metadata with Traditional Chinese keywords: 地板安裝, SPC地板, 香港地板, 地板工程, 實木地板, 地台自流平
- `zh-Hant` lang attribute
- Static site generation for all pages
- OG image + meta descriptions

---

## Primary CTA

- WhatsApp: [+852 9571 5155](https://wa.me/85295715155)
- Email: [info@jupitersdesign.com](mailto:info@jupitersdesign.com)

---

© 2026 木星設計有限公司 Jupiter's Design Limited. All rights reserved.
