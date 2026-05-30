'use client'

import Link from 'next/link'
import { Instagram } from 'lucide-react'

const WEBSITE_LINKS = [
  { label: '技術與工藝', href: '/technology' },
  { label: '關於木星設計', href: '/about' },
  { label: '保養與維護', href: '/care-and-maintenance' },
  { label: '聯絡我們', href: '/contact' },
]

const FOLLOW_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/jupitersdesign', Icon: Instagram },
]

const CONTACT_LINKS = [
  { label: '聯絡我們', href: '/contact' },
  { label: '保養與維護', href: '/care-and-maintenance' },
]

export default function Footer() {
  return (
    <footer className="section-dark pt-20 pb-8 px-6 md:px-16" aria-label="網站頁尾">

      {/* WhatsApp CTA */}
      <div className="border-b border-white/10 pb-16 mb-16">
        <p className="font-sans text-cream/50 text-xs tracking-[0.3em] uppercase mb-4">GET IN TOUCH</p>
        <h3
          className="font-serif text-cream mb-8"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 300 }}
        >
          立即與木星設計團隊聯絡
        </h3>
        <a
          href="https://wa.me/85295715155?text=你好，我想查詢地板工程報價"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-draw text-cream text-[0.65rem] inline-flex items-center gap-2"
          aria-label="WhatsApp 聯絡我們"
        >
          <span className="border-left" />
          <span className="border-right" />
          WhatsApp 立即查詢
        </a>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-16">
        <div>
          <p className="font-sans text-cream/40 text-xs tracking-[0.25em] uppercase mb-6">WEBSITE</p>
          <ul className="space-y-3">
            {WEBSITE_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-sans text-cream/70 hover:text-beige text-sm font-light transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-cream/40 text-xs tracking-[0.25em] uppercase mb-6">FOLLOW US</p>
          <ul className="space-y-3">
            {FOLLOW_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-sans text-cream/70 hover:text-beige text-sm font-light transition-colors flex items-center gap-2"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={13} className="opacity-60" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-cream/40 text-xs tracking-[0.25em] uppercase mb-6">CONTACT</p>
          <ul className="space-y-3">
            {CONTACT_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-sans text-cream/70 hover:text-beige text-sm font-light transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="font-sans text-cream/40 text-xs mb-1">服務範圍：香港十八區上門施工</p>
            <p className="font-sans text-cream/40 text-xs mb-1">WhatsApp：+852 9571 5155</p>
            <a
              href="mailto:info@jupitersdesign.com"
              className="font-sans text-cream/40 hover:text-beige text-xs transition-colors"
            >
              info@jupitersdesign.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-4 md:gap-8">
          <Link href="/privacy" className="font-sans text-cream/30 hover:text-beige text-xs transition-colors">
            隱私政策
          </Link>
          <Link href="/terms" className="font-sans text-cream/30 hover:text-beige text-xs transition-colors">
            使用條款
          </Link>
          <Link href="/conditions" className="font-sans text-cream/30 hover:text-beige text-xs transition-colors">
            條款及細則
          </Link>
        </div>
        <a
          href="https://jupitersdesign.com"
          className="font-sans text-cream/30 hover:text-beige text-xs transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          jupitersdesign.com
        </a>
        <p className="font-sans text-cream/20 text-xs">
          © {new Date().getFullYear()} 木星設計有限公司 Jupiter's Design Limited. All rights reserved.
        </p>
      </div>

    </footer>
  )
}