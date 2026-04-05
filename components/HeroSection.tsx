'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const ROTATING_WORDS = ['家居', '辦公室', '店舖', '工廈', '戶外空間']

const CARPET_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80'
const CAT_IMAGE = 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=1200&q=80'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const headlineRef = useRef<HTMLDivElement | null>(null)
  const taglineRef = useRef<HTMLParagraphElement | null>(null)
  const scrollCueRef = useRef<HTMLDivElement | null>(null)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % ROTATING_WORDS.length), 2500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    tl
      .fromTo(taglineRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
      .fromTo(headlineRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 0.6)
      .fromTo(scrollCueRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 1.2)
  }, [])

  useEffect(() => {
    gsap.to(headlineRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden" aria-label="主視覺區域">
      <div className="hero-split flex h-full">

        {/* 左邊：實木地板 / 地毯 */}
        <div className="hero-half flex-1 flex items-end p-8 md:p-12" aria-label="實木地板與地毯工程">
          <img src={CARPET_IMAGE} alt="實木地板舖設" className="hero-bg" />
          <div className="hero-overlay" />
          <div className="relative z-10 text-cream">
            <p className="font-sans text-xs tracking-[0.3em] uppercase mb-2 opacity-80">
              實木地板 / 地毯
            </p>
            <p className="font-serif text-sm font-light opacity-60 mb-4 max-w-[220px]">
              實木地板舖設及翻新、工程木與地毯，一站式專業施工。
            </p>
            <a
              href="/contact"
              className="btn-draw text-cream text-[0.65rem]"
              aria-label="查詢實木地板及地毯工程"
            >
              <span className="border-left" />
              <span className="border-right" />
              查詢報價
            </a>
          </div>
        </div>

        {/* 右邊：SPC / 工業地台 / 戶外 — 貓咪趴在木地板展示 pet-friendly */}
        <div className="hero-half flex-1 flex items-end p-8 md:p-12" aria-label="SPC、工業地台與戶外工程">
          <img src={CAT_IMAGE} alt="貓咪趴在木地板，展示 SPC pet-friendly 效果" className="hero-bg" />
          <div className="hero-overlay" />
          <div className="relative z-10 text-cream">
            <p className="font-sans text-xs tracking-[0.3em] uppercase mb-2 opacity-80">
              SPC / 工業地台 / 戶外
            </p>
            <p className="font-serif text-sm font-light opacity-60 mb-4 max-w-[240px]">
              SPC 石塑地板防水耐磨，pet-friendly，適合有小朋友及寵物的家庭與工商空間。
            </p>
            <a
              href="/contact"
              className="btn-draw text-cream text-[0.65rem]"
              aria-label="查詢 SPC 及工業地台工程"
            >
              <span className="border-left" />
              <span className="border-right" />
              查詢報價
            </a>
          </div>
        </div>

      </div>

      {/* 中央標語 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-cream text-center pointer-events-none px-4">
        <p ref={taglineRef} className="font-sans text-xs tracking-[0.4em] uppercase mb-6 opacity-80">
          香港專業地板工程
        </p>
        <div
          ref={headlineRef}
          className="font-serif leading-none"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 11rem)', fontWeight: 300 }}
        >
          <span>提升你的</span>
          <div className="word-rotator ml-4 md:ml-6" style={{ height: 'clamp(3.5rem, 10vw, 11rem)' }}>
            <div
              className="word-rotator-inner"
              style={{ transform: `translateY(-${wordIndex * 100}%)` }}
            >
              {ROTATING_WORDS.map((word) => (
                <span
                  key={word}
                  className="block"
                  style={{ height: 'clamp(3.5rem, 10vw, 11rem)', lineHeight: 1 }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 向下捲動提示 */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-cream"
        aria-label="向下捲動"
      >
        <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase opacity-60">向下捲動</p>
        <ChevronDown size={16} className="opacity-60 animate-bounce" />
      </div>
    </section>
  )
}