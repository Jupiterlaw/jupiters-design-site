import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll   from '@/components/SmoothScroll'
import CustomCursor   from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import Navigation     from '@/components/Navigation'
import Footer         from '@/components/Footer'
import CookieBanner   from '@/components/CookieBanner'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
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
  title: {
    template: '%s — 木星設計地板工程',
    default: 'SPC地板安裝｜香港地板工程｜木星設計有限公司',
  },
  description:
    '專營 SPC 地板、實木地板舖設及翻新、地台自流平、工業地台油工程、戶外木地板及圍欄，30+ 年香港本地專業團隊。',
  keywords: [
    '地板安裝',
    'SPC地板',
    '香港地板',
    '地板工程',
    '實木地板',
    '地台自流平',
    '工業地台油',
    '戶外木地板',
    '圍欄工程',
    '香港地板工程',
    '木星設計有限公司',
  ],
  openGraph: {
    title: 'SPC地板安裝｜香港地板工程｜木星設計有限公司',
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
          <FloatingWhatsApp />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: "木星設計有限公司 Jupiter's Design Limited",
                description:
                  '香港專業地板工程公司，專營 SPC 地板、實木地板、地台自流平、工業地台油及戶外木地板，30+ 年本地經驗。',
                telephone: '+852 9571 5155',
                email: 'info@jupitersdesign.com',
                url: 'https://www.jupitersdesign.com',
                areaServed: {
                  '@type': 'City',
                  name: 'Hong Kong',
                },
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Hong Kong',
                  addressCountry: 'HK',
                },
                priceRange: '$$',
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
                  ],
                  opens: '09:00',
                  closes: '18:00',
                },
              }),
            }}
          />
        </SmoothScroll>
      </body>
    </html>
  )
}