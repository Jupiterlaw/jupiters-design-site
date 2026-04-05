import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "關於木星設計 — Jupiter's Design Limited",
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
            <h2 className="font-serif text-charcoal text-3xl font-light mb-6">
              三十多年本地經驗，
              <br />
              專注每一塊地板的細節。
            </h2>
            <p className="font-sans text-charcoal/60 font-light leading-relaxed mb-6">
              木星設計有限公司 Jupiter&apos;s Design Limited 深耕香港超過 30 年，
              由最初的細小施工團隊，逐步發展成為提供 SPC 地板、實木地板舖設及翻新、
              地台自流平、工業地台油工程，以及戶外木地板與圍欄的一站式地板工程公司。
            </p>
            <p className="font-sans text-charcoal/60 font-light leading-relaxed mb-6">
              我們相信，地板不只是行走的表面，而是每天生活、工作與相聚的基礎。
              因此，從前期現場勘查、物料建議，到施工與完工後保養建議，
              每一個步驟都由經驗豐富的師傅親自把關。
            </p>
            <p className="font-sans text-charcoal/60 font-light leading-relaxed">
              無論是細單位家居翻新，還是大型寫字樓、工廈、商舖或戶外平台工程，
              木星設計都以同一標準對待：準時、穩陣、細緻，
              讓客戶可以放心交託，把時間放回在空間本身的使用與想像上。
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-beige-light">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80"
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
