'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }))

  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-20 max-w-6xl">
        <div>
          <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">
            聯絡我們
          </p>
          <h1
            className="font-serif text-charcoal mb-8"
            style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300 }}
          >
            聯絡木星設計
          </h1>

          <div className="space-y-6">
            <div>
              <p className="font-sans text-charcoal/40 text-xs uppercase tracking-wider mb-1">
                服務範圍
              </p>
              <p className="font-sans text-charcoal/70 text-sm">
                香港十八區 · 家居、寫字樓、店舖、工廈及戶外空間
              </p>
            </div>
            <div>
              <p className="font-sans text-charcoal/40 text-xs uppercase tracking-wider mb-1">
                WhatsApp / 電話
              </p>
              <a
                href="https://wa.me/85295715155"
                className="font-sans text-charcoal/70 text-sm hover:text-beige transition-colors"
              >
                +852 9571 5155（點擊 WhatsApp 查詢）
              </a>
            </div>
            <div>
              <p className="font-sans text-charcoal/40 text-xs uppercase tracking-wider mb-1">
                電郵
              </p>
              <a
                href="mailto:info@jupitersdesign.com"
                className="font-sans text-charcoal/70 text-sm hover:text-beige transition-colors"
              >
                info@jupitersdesign.com
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-8"
          aria-label="聯絡表格"
        >
          <div className="border-b border-beige/30 pb-2">
            <input
              type="text"
              value={form.name}
              onChange={set('name')}
              placeholder="你的姓名"
              required
              className="w-full bg-transparent font-sans text-sm text-charcoal outline-none placeholder-charcoal/30 py-2"
              aria-label="姓名"
            />
          </div>
          <div className="border-b border-beige/30 pb-2">
            <input
              type="email"
              value={form.email}
              onChange={set('email')}
              placeholder="你的電郵"
              required
              className="w-full bg-transparent font-sans text-sm text-charcoal outline-none placeholder-charcoal/30 py-2"
              aria-label="電郵"
            />
          </div>
          <div className="border-b border-beige/30 pb-2">
            <textarea
              rows={4}
              value={form.message}
              onChange={set('message')}
              placeholder="請簡單描述你的工程需要，例如：面積、位置、物料類型等"
              required
              className="w-full bg-transparent font-sans text-sm text-charcoal outline-none placeholder-charcoal/30 py-2 resize-none"
              aria-label="查詢內容"
            />
          </div>
          <button
            type="submit"
            className="btn-draw text-charcoal"
            aria-label="送出查詢"
          >
            <span className="border-left" />
            <span className="border-right" />
            送出查詢
          </button>
        </form>
      </div>
    </div>
  )
}
