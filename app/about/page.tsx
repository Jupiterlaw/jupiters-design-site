import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "關於木星設計 — Jupiter's Design Limited",
  description: '木星設計有限公司紮根香港超過 30 年，專營 SPC 地板、實木地板、地台自流平、工業地台油及戶外木地板工程，提供專業免費上門測量服務。',
  keywords: ['地板工程', '香港地板公司', 'SPC地板安裝', '實木地板', '木星設計', 'Jupiter Design'],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="h-[60vh] section-dark flex items-end px-6 md:px-16 pb-16">
        <div>
          <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">
            OUR STORY
          </p>
          <h1
            className="font-serif text-cream"
            style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300 }}
          >
            關於木星設計
          </h1>
        </div>
      </div>

      <div className="px-6 md:px-16 py-24">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
          <div>
            <h2 className="font-serif text-charcoal text-3xl font-light mb-8 leading-snug">
              家，本該是我們<br />最安心的避風港。
            </h2>
            <p className="font-sans text-charcoal/70 font-light leading-relaxed mb-6">
              然而，在香港經歷過裝修的人都知道，這往往是一場充滿焦慮的旅程。面對繁雜的建材選擇、難以掌控的進度，以及對施工品質的擔憂，打造夢想家園的過程常常讓人感到疲憊不堪。正是這種深切的共鳴與理解，成為了我們創立的契機。「木星設計有限公司（Jupiter&apos;s Design Limited）」的誕生，不僅僅是出於對空間美學的熱愛，更是為了將這份「安心感」還給每一位屋主。
            </p>
            <p className="font-sans text-charcoal/70 font-light leading-relaxed mb-6">
              我們深信，好的設計不只停留在視覺，而是能被真實感知的日常體驗。想像一下，當您結束疲憊的一天推開家門：空氣中瀰漫著實木的溫潤氣息，赤腳踩在頂級 SPC 地板上那種平滑而踏實的觸感，以及指尖滑過客製化傢俱時的細膩無瑕。對我們而言，這些從來不是冰冷的建材與塗料。它們是構築您每日生活的感官基石。每一塊地板的精準拼接、每一道高端保護漆的塗佈，都是為了讓您的居所更具溫度。
            </p>
            <p className="font-sans text-charcoal/70 font-light leading-relaxed">
              多年來，我們的團隊致力於帶領客戶跨越未知的裝修挑戰，將冰冷的水泥空間轉化為充滿生命力的家。面對香港獨特且多變的格局，我們將堅固的工程技術與優雅的室內設計完美結合。從最底層的木地板鋪設，到全屋傢俱的量身訂製，我們為您消除過程中的所有不確定性。當您選擇木星設計，您不只是聘請了一間工程公司，而是找到了一群與您同樣在乎這座「家」的專業工匠與夥伴。
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-beige-light">
            <Image
              src="/images/about/story.png"
              alt="木星設計團隊施工與地板細節"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}