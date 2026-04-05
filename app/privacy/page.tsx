import type { Metadata } from 'next'

export const metadata: Metadata = { title: '隱私政策 — 木星設計有限公司' }

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="px-6 md:px-16 py-16 max-w-3xl">
        <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">PRIVACY</p>
        <h1 className="font-serif text-charcoal mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300 }}>
          隱私政策
        </h1>

        <div className="space-y-10 font-sans text-charcoal/70 font-light leading-relaxed text-sm">
          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">收集的資料</h2>
            <p>當你透過本網站的聯絡表格提交查詢時，我們會收集你提供的姓名、電郵地址及查詢內容。我們不會在未經你同意的情況下收集其他個人資料。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">資料的用途</h2>
            <p>所收集的個人資料只會用於回覆你的查詢及提供相關服務報價。我們不會將你的個人資料出售、租借或轉讓予任何第三方，亦不會用作市場推廣用途，除非你明確同意。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">資料保存</h2>
            <p>你的個人資料只會保存至查詢處理完畢為止，或按香港法律規定的期限保存。如你希望要求刪除你的個人資料，請透過以下方式聯絡我們。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">Cookie</h2>
            <p>本網站使用 Cookie 以改善瀏覽體驗及分析網站流量。你可以透過瀏覽器設定管理或拒絕 Cookie，但部分網站功能或因此受到影響。</p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-xl font-light mb-3">聯絡我們</h2>
            <p>如對本隱私政策有任何疑問，請透過以下方式聯絡木星設計有限公司：</p>
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