import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll   from '@/components/SmoothScroll'
import CustomCursor   from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import Navigation     from '@/components/Navigation'
import Footer         from '@/components/Footer'
import CookieBanner   from '@/components/CookieBanner'
import PageTransition from '@/components/PageTransition'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "木星設計有限公司 Jupiter's Design Limited — 香港專業地板工程",
  description:
    '專營 SPC 地板、實木地板舖設及翻新、地台自流平、工業地台油工程、戶外木地板及圍欄，30+ 年香港本地專業團隊。',
  keywords: [
    'SPC 地板',
    '實木地板舖設',
    '地台自流平',
    '工業地台油',
    '戶外木地板',
    '圍欄工程',
    '香港地板工程',
    "Jupiter's Design Limited",
    '木星設計有限公司',
  ],
  openGraph: {
    title: "木星設計有限公司 Jupiter's Design Limited — 香港專業地板工程",
    description:
      '30+ 年香港本地經驗，提供 SPC 地板、實木地板、自流平、工業地台油、戶外木地板及圍欄一站式服務。',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <PageTransition />
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  )
}