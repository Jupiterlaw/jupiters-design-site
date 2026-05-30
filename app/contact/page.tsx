'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const set =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/xreoojap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-20 max-w-6xl">

        {/* 左邊：聯絡資訊 */}
        <div>
          <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">
            GET IN TOUCH
          </p>
          <h1
            className="font-serif text-charcoal mb-8"
            style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300 }}
          >
            聯絡我們
          </h1>

          <p className="font-sans text-charcoal/60 font-light leading-relaxed mb-12 max-w-sm">
            無論是家居地板翻新、商舖或工廈地台工程，歡迎透過以下方式聯絡木星設計，
            我們會盡快回覆你的查詢。
          </p>

          <div className="space-y-6 text-sm font-sans">
            <div>
              <p className="text-charcoal/40 text-xs tracking-wider uppercase mb-1">服務範圍</p>
              <p className="text-charcoal/70 font-light">香港十八區上門施工</p>
            </div>

            <div>
              <p className="text-charcoal/40 text-xs tracking-wider uppercase mb-1">WhatsApp</p>
              <a
                href="https://wa.me/85295715155?text=你好，我想查詢地板工程報價"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/70 hover:text-beige transition-colors font-light"
              >
                +852 9571 5155
              </a>
            </div>

            <div>
              <p className="text-charcoal/40 text-xs tracking-wider uppercase mb-1">電郵</p>
              <a
                href="mailto:info@jupitersdesign.com"
                className="text-charcoal/70 hover:text-beige transition-colors font-light"
              >
                info@jupitersdesign.com
              </a>
            </div>

            <div>
              <p className="text-charcoal/40 text-xs tracking-wider uppercase mb-1">Instagram</p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/70 hover:text-beige transition-colors font-light"
              >
                @jupitersdesign
              </a>
            </div>
          </div>
        </div>

        {/* 右邊：表單 */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8"
          aria-label="聯絡表格"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-sans text-charcoal/50 text-xs tracking-wider uppercase"
            >
              姓名
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={set('name')}
              placeholder="你的姓名"
              className="bg-transparent border-b border-beige/40 text-charcoal font-sans text-sm py-3 outline-none focus:border-charcoal transition-colors placeholder-charcoal/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-sans text-charcoal/50 text-xs tracking-wider uppercase"
            >
              電郵
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={set('email')}
              placeholder="your@email.com"
              className="bg-transparent border-b border-beige/40 text-charcoal font-sans text-sm py-3 outline-none focus:border-charcoal transition-colors placeholder-charcoal/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-sans text-charcoal/50 text-xs tracking-wider uppercase"
            >
              查詢內容
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={set('message')}
              placeholder="請描述你的地板工程需求，例如：地點、面積、類型等"
              className="bg-transparent border-b border-beige/40 text-charcoal font-sans text-sm py-3 outline-none focus:border-charcoal transition-colors resize-none placeholder-charcoal/20"
            />
          </div>

          {/* 狀態訊息 */}
          {status === 'success' && (
            <p className="font-sans text-sm text-green-700 bg-green-50 px-4 py-3 rounded">
              ✅ 查詢已成功送出！我們會盡快回覆你。
            </p>
          )}
          {status === 'error' && (
            <p className="font-sans text-sm text-red-700 bg-red-50 px-4 py-3 rounded">
              ❌ 發送失敗，請直接 WhatsApp 我們：
              <a href="https://wa.me/85295715155?text=你好，我想查詢地板工程報價" className="underline ml-1">
                +852 9571 5155
              </a>
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-draw text-charcoal self-start disabled:opacity-40"
            aria-label="送出查詢"
          >
            <span className="border-left" />
            <span className="border-right" />
            {status === 'sending' ? '發送中...' : '送出查詢'}
          </button>
        </form>

      </div>
    </div>
  )
}