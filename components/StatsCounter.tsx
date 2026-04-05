'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { target: 30, suffix: '+', label: '年地板工程經驗', sub: '紮根香港超過三十年' },
  { target: 1000, suffix: '+', label: '完成項目', sub: '住宅、商舖、工廈及戶外' },
  { target: 18, suffix: '', label: '香港地區', sub: '全港十八區上門施工' },
]

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const numsRef = useRef<(HTMLSpanElement | null)[]>([])

  useLayoutEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      STATS.forEach((stat, i) => {
        const el = numsRef.current[i]
        if (!el) return
        const counter = { value: 0 }
        gsap.to(counter, {
          value: stat.target,
          duration: 2.0,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
          onUpdate: () => { el.textContent = Math.round(counter.value).toString() },
        })
      })
      const items = sectionRef.current?.querySelectorAll('[data-stat-item]') ?? []
      gsap.from(Array.from(items), {
        y: 50, opacity: 0, stagger: 0.15, duration: 1.0, ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-dark py-28 md:py-44 px-6 md:px-20" aria-label="木星設計數字">
      <p className="font-sans text-beige text-xs tracking-[0.4em] uppercase mb-20 text-center">我們的成就</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-5xl mx-auto">
        {STATS.map((stat, i) => (
          <div key={stat.label} data-stat-item className="flex flex-col items-center text-center md:border-r border-white/10 last:border-0 px-6">
            <div className="stat-number flex items-end gap-1 mb-4">
              <span ref={(el) => { numsRef.current[i] = el }}>0</span>
              <span className="text-beige font-serif mb-2">{stat.suffix}</span>
            </div>
            <p className="font-sans text-cream text-sm font-medium tracking-wide mb-2">{stat.label}</p>
            <p className="font-sans text-cream/40 text-xs font-light">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}