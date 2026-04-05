'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, X, ArrowUpRight } from 'lucide-react'

const PRIMARY_LINKS = [
  { label: '技術與工藝', href: '/technology' },
  { label: '關於木星設計', href: '/about' },
  { label: '保養與維護', href: '/care-and-maintenance' },
  { label: '聯絡我們', href: '/contact' },
]

const SECONDARY_LINKS = [
  { label: '加入我們', href: '/careers' },
  { label: 'Instagram', href: 'https://www.instagram.com/', external: true },
  { label: '我的帳戶', href: '/account' },
]

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [query, setQuery] = useState('')
  const navRef = useRef<HTMLElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const linksRef = useRef<HTMLUListElement | null>(null)
  const searchRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!linksRef.current) return
    const items = linksRef.current.querySelectorAll('li')
    if (menuOpen) {
      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.07, duration: 0.7, ease: 'power3.out', delay: 0.3 },
      )
    } else {
      gsap.to(items, { y: 20, opacity: 0, stagger: 0.04, duration: 0.3, ease: 'power2.in' })
    }
  }, [menuOpen])

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 100)
  }, [searchOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const logoColor = scrolled || menuOpen ? 'var(--color-charcoal)' : 'white'

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[400] transition-all duration-500 ${
          scrolled ? 'bg-cream/95 backdrop-blur-sm border-b border-beige/20' : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <Link
            href="/"
            className="z-10 flex items-center gap-4"
            aria-label="木星設計有限公司 Jupiter's Design Limited — 首頁"
          >
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <Image
                src="https://i.ibb.co/d0bfgLty/logo.png"
                alt="木星設計有限公司標誌"
                fill
                className="object-contain"
                sizes="80px"
                priority
              />
            </div>
            <span
              className="font-serif text-2xl md:text-3xl font-light tracking-[0.2em] uppercase"
              style={{ color: logoColor }}
            >
              木星設計
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div
              className={`flex items-center overflow-hidden transition-all duration-500 ${
                searchOpen ? 'w-52' : 'w-6'
              }`}
            >
              {searchOpen && (
                <input
                  ref={searchRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="搜尋服務..."
                  className="w-full bg-transparent border-b border-current text-sm py-1 outline-none font-sans"
                  style={{ color: scrolled ? 'var(--color-charcoal)' : 'white' }}
                  aria-label="搜尋"
                />
              )}
              <button
                onClick={() => setSearchOpen((p) => !p)}
                className="ml-1 shrink-0"
                aria-label={searchOpen ? '關閉搜尋' : '開啟搜尋'}
                style={{ color: logoColor }}
              >
                {searchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
            </div>

            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="font-sans text-xs tracking-[0.25em] uppercase font-medium"
              style={{ color: logoColor }}
              aria-expanded={menuOpen}
              aria-controls="nav-overlay"
              aria-label={menuOpen ? '關閉主選單' : '開啟主選單'}
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </header>

      <div
        id="nav-overlay"
        ref={overlayRef}
        className={`nav-overlay ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="網站主選單"
      >
        <div className="flex flex-col justify-between h-full px-8 md:px-16 py-24">
          <ul ref={linksRef} className="space-y-2 mt-8" role="list">
            {PRIMARY_LINKS.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link-overlay group flex items-end gap-4 text-cream font-serif"
                  style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.6rem)', fontWeight: 300, lineHeight: 1.1 }}
                >
                  <span className="text-beige font-sans text-xs self-end mb-3 opacity-60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                  <ArrowUpRight
                    size={20}
                    className="self-end mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-beige"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
            {SECONDARY_LINKS.map((link) => {
              const Comp: any = link.external ? 'a' : Link
              const props: any = link.external
                ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: link.href }
              return (
                <Comp
                  key={link.href}
                  {...props}
                  onClick={() => setMenuOpen(false)}
                  className="text-cream/60 hover:text-beige font-sans text-sm tracking-wide transition-colors"
                >
                  {link.label}
                </Comp>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
