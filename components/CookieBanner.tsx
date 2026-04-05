'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('jupiter_cookies')
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('jupiter_cookies', 'accepted')
    setVisible(false)
  }
  const decline = () => {
    localStorage.setItem('jupiter_cookies', 'declined')
    setVisible(false)
  }

  return (
    <div
      className={`cookie-banner ${visible ? 'visible' : ''}`}
      role="region"
      aria-label="Cookie 使用提示"
      aria-live="polite"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 md:px-12 py-5">
        <p className="font-sans text-cream/70 text-xs font-light max-w-lg leading-relaxed">
          本網站使用 Cookie 以提升瀏覽體驗及分析網站流量。
          繼續使用即表示你同意我們的{' '}
          <Link
            href="/privacy"
            className="text-beige underline hover:text-cream transition-colors"
          >
            私隱政策
          </Link>
          。
        </p>
        <div className="flex gap-4 shrink-0">
          <button
            onClick={decline}
            className="font-sans text-cream/40 hover:text-cream text-xs tracking-wider uppercase transition-colors"
            aria-label="拒絕使用 Cookie"
          >
            拒絕
          </button>
          <button
            onClick={accept}
            className="btn-draw text-cream text-[0.65rem]"
            aria-label="接受使用 Cookie"
          >
            <span className="border-left" />
            <span className="border-right" />
            接受
          </button>
        </div>
      </div>
    </div>
  )
}
