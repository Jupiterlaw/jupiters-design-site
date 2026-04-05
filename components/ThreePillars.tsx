'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const PILLARS = [
  {
    number: '01',
    headline: '效率。',
    sub: '環保。更少浪費。',
    body: '透過嚴謹的施工流程與物料選擇，減少水與能源消耗，同時保持高品質與耐用度。',
    stats: [
      { value: '87%', label: '施工用水減少' },
      { value: '30%', label: '能源消耗減少' },
      { value: '42%', label: '溫室氣體排放減少' },
    ],
  },
  {
    number: '02',
    headline: '品質。',
    sub: '保證。放心托付。',
    body: '木星設計由經驗豐富的師傅親自跟進，由地台處理到面層保護，每個步驟都有清晰標準與驗收流程。',
    stats: [
      { value: '30+', label: '年本地施工經驗' },
      { value: '1000+', label: '完成項目' },
      { value: '18區', label: '香港服務範圍' },
    ],
  },
  {
    number: '03',
    headline: '質感。',
    sub: '細節。舒適。',
    body: '由 SPC 到實木及戶外木地板，我們重視腳感、視覺與耐用度的平衡，讓每一個空間都帶有專屬的溫度與性格。',
    stats: [
      { value: '5+', label: '主要地板系統' },
      { value: '全港', label: '上門報價與施工' },
      { value: '一站式', label: '由設計至完工' },
    ],
  },
]

export default function ThreePillars() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const animateIn = useCallback(() => {
    if (!contentRef.current) return
    const els = contentRef.current.querySelectorAll('[data-animate]')
    gsap.fromTo(
      Array.from(els),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power4.out' }
    )
  }, [])

  const goTo = useCallback(
    (idx: number) => {
      setActive(idx)
      animateIn()
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(
        () => goTo((idx + 1) % PILLARS.length),
        5000,
      )
    },
    [animateIn],
  )

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(1), 5000)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [goTo])

  useEffect(() => {
    animateIn()
  }, [animateIn])

  const pillar = PILLARS[active]

  return (
    <section
      ref={sectionRef}
      className="bg-cream py-28 md:py-44 px-6 md:px-20 border-t border-beige/20"
      aria-label="木星設計三大堅持"
    >
      <div className="flex items-center gap-6 mb-16">
        {PILLARS.map((p, i) => (
          <button
            key={p.number}
            onClick={() => goTo(i)}
            aria-label={`切換至第 ${p.number} 項重點`}
            aria-pressed={i === active}
            className="flex flex-col items-start gap-1 group"
          >
            <span
              className={`font-sans text-xs tracking-[0.2em] transition-colors duration-300 ${
                i === active ? 'text-charcoal' : 'text-charcoal/30'
              }`}
            >
              {p.number}
            </span>
            <div
              className={`h-px transition-all duration-500 ${
                i === active ? 'w-12 bg-beige' : 'w-4 bg-charcoal/20 group-hover:w-8'
              }`}
            />
          </button>
        ))}
      </div>

      <div ref={contentRef} className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <p
            data-animate
            className="font-sans text-beige text-xs tracking-[0.3em] uppercase mb-6"
          >
            {pillar.number}
          </p>
          <h2
            data-animate
            className="font-serif leading-tight text-charcoal mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300 }}
          >
            {pillar.headline}
          </h2>
          <h3
            data-animate
            className="font-serif italic text-charcoal/50 leading-tight mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)', fontWeight: 300 }}
          >
            {pillar.sub}
          </h3>
          <p
            data-animate
            className="font-sans text-charcoal/60 leading-relaxed font-light text-base max-w-md"
          >
            {pillar.body}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-4 md:pt-16">
          {pillar.stats.map((stat) => (
            <div
              data-animate
              key={stat.label}
              className="border-t border-beige/30 pt-6"
            >
              <p
                className="font-serif text-charcoal mb-1"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', fontWeight: 300 }}
              >
                {stat.value}
              </p>
              <p className="font-sans text-charcoal/50 text-xs leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-16" role="tablist" aria-label="三大堅持導航">
        {PILLARS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-500 ${
              i === active
                ? 'w-8 h-2 bg-beige'
                : 'w-2 h-2 bg-charcoal/20 hover:bg-charcoal/40'
            }`}
            aria-label={`切換至第 ${i + 1} 項`
            }
          />
        ))}
      </div>
    </section>
  )
}
