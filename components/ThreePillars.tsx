'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const PILLARS = [
  {
    num: '01',
    label: '效率 · 環保 · 更少浪費',
    desc: '精準選料、合理施工，減少廢料，對空間與環境負責。',
  },
  {
    num: '02',
    label: '品質 · 保證 · 放心托付',
    desc: '每一個項目，都以同一標準把關：準時、穩陣、細緻。',
  },
  {
    num: '03',
    label: '質感 · 細節 · 舒適',
    desc: '從地台到面層，每一個收口都直接影響你日後的使用感受。',
  },
]

export default function ThreePillars() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = contentRef.current?.querySelectorAll('[data-animate]') || []
      gsap.fromTo(
        Array.from(els),
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 md:py-40 px-6 md:px-16 bg-cream" aria-label="三大服務支柱">
      <div ref={contentRef} className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 md:gap-8">
        {PILLARS.map((p) => (
          <div key={p.num} data-animate className="border-t border-beige/30 pt-8">
            <span className="font-sans text-beige text-xs tracking-wider block mb-4">{p.num}</span>
            <h3 className="font-serif text-charcoal text-xl font-light mb-4 leading-snug">{p.label}</h3>
            <p className="font-sans text-charcoal/50 text-sm font-light leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}