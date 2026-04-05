import type { Metadata } from 'next'

export const metadata: Metadata = { title: '使用條款 — 木星設計有限公司' }

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="px-6 md:px-16 py-16 max-w-3xl">
        <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">TERMS</p>
        <h1 className="font-serif text-charcoal mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300 }}>
          使用條款
        </h1>

        <div className="space-y-10 font-sans text-charcoal/70 font-light leading-relaxed text-sm">
          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">接受條款</h2>
            <p>使用本網站即表示你同意遵守以下使用條款。如你不同意任何條款，請停止使用本網站。木星設計有限公司保留隨時修訂條款的權利，修訂後的條款將於本頁面公佈，並即時生效。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">網站內容</h2>
            <p>本網站所有內容，包括文字、圖片、品牌標誌及設計，均為木星設計有限公司的財產或已獲授權使用。未經書面許可，不得複製、轉載或作商業用途。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">免責聲明</h2>
            <p>本網站所有資料僅供參考，木星設計有限公司對其準確性、完整性或適時性不作任何保證。所有工程報價及細節需視乎實際勘查結果而定，網站內容不構成任何合約或承諾。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">外部連結</h2>
            <p>本網站可能包含指向第三方網站的連結，僅供參考之用。木星設計有限公司對該等外部網站的內容不負任何責任。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">適用法律</h2>
            <p>本條款受香港特別行政區法律管轄，任何爭議須在香港法院解決。</p>
          </section>

          <p className="text-charcoal/40 text-xs pt-4 border-t border-beige/20">
            最後更新：2026 年 4 月 ｜ 木星設計有限公司 Jupiter's Design Limited
          </p>
        </div>
      </div>
    </div>
  )
}