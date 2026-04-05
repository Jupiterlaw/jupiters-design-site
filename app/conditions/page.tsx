import type { Metadata } from 'next'

export const metadata: Metadata = { title: '條款及細則 — 木星設計有限公司' }

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="px-6 md:px-16 py-16 max-w-3xl">
        <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">CONDITIONS</p>
        <h1 className="font-serif text-charcoal mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300 }}>
          條款及細則
        </h1>

        <div className="space-y-10 font-sans text-charcoal/70 font-light leading-relaxed text-sm">
          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">報價及確認</h2>
            <p>所有報價均以書面形式確認為準。報價有效期為 30 天，期後價格可能因物料市場波動而調整。工程確認須以書面（WhatsApp 或電郵）形式回覆，方為有效。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">付款條款</h2>
            <p>工程款項一般分期支付，具體安排視乎工程規模而定。通常為簽約時支付訂金，餘款於工程完成並驗收後支付。付款詳情將於報價書中列明。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">施工安排</h2>
            <p>施工日期及時間將與客戶協商確定。如需更改施工日期，請提前至少 48 小時通知。因客戶原因導致的延期，木星設計有限公司保留收取額外費用的權利。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">保養保證</h2>
            <p>所有施工工程提供一年保養，保養範圍包括因施工工藝引起的問題。因人為損壞、不當使用或正常磨損引起的問題不在保養範圍之內。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">取消政策</h2>
            <p>如需取消已確認之工程，須提前 7 個工作天以書面通知。訂金一般不予退還，具體安排視乎個別情況而定。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">查詢</h2>
            <p>如對以上條款及細則有任何疑問，請聯絡我們：</p>
            <ul className="mt-3 space-y-1">
              <li>電郵：<a href="mailto:info@jupitersdesign.com" className="text-beige hover:underline">info@jupitersdesign.com</a></li>
              <li>WhatsApp：<a href="https://wa.me/85295715155" className="text-beige hover:underline">+852 9571 5155</a></li>
            </ul>
          </section>

          <p className="text-charcoal/40 text-xs pt-4 border-t border-beige/20">
            最後更新：2026 年 4 月 ｜ 木星設計有限公司 Jupiter's Design Limited
          </p>
        </div>
      </div>
    </div>
  )
}