'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export default function InnovationSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = contentRef.current?.querySelectorAll('[data-reveal]') || []
      gsap.fromTo(
        Array.from(els),
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 1.0, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-dark py-28 md:py-44 px-6 md:px-20" aria-label="品牌理念">
      <div ref={contentRef} className="max-w-4xl">
        <p data-reveal className="font-sans text-beige text-xs tracking-[0.4em] uppercase mb-8">
          匠心工藝
        </p>
        <h2
          data-reveal
          className="font-serif text-cream mb-10 leading-tight"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)', fontWeight: 300 }}
        >
          重新定義<br />香港地板工程的標準
        </h2>
        <p data-reveal className="font-sans text-cream/60 font-light leading-relaxed text-lg max-w-2xl mb-6">
          木星設計深耕香港超過 30 年，累積逾千個住宅、商舖、工廈及戶外地板項目的實戰經驗。
          我們相信，每一個地板工程背後，都是一個家庭或業務的新開始。
        </p>
        <p data-reveal className="font-sans text-cream/40 font-light leading-relaxed max-w-xl">
          由地台找平、SPC 舖設、實木打磨，到工業地台油及戶外木地板，
          每一步工序都按照最高標準執行，確保完工後經得起日常使用的考驗。
        </p>
      </div>
    </section>
  )
}