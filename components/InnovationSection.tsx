'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export default function InnovationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headRef = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power4.out', duration: 1.0 },
      })
      tl
        .fromTo(eyebrowRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.6')
        .fromTo(bodyRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')
        .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.4')
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-dark py-32 md:py-48 px-8 md:px-20 relative overflow-hidden"
      aria-label="創新技術宣言"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(200,184,154,0.3) 40px, rgba(200,184,154,0.3) 41px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl">
        <p
          ref={eyebrowRef}
          className="font-sans text-beige text-xs tracking-[0.4em] uppercase mb-8"
        >
          INNOVATION REINVENTED
        </p>

        <h2
          ref={headRef}
          className="font-serif text-cream leading-tight mb-10"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 300 }}
        >
          以匠心與科技，
          <br />
          重新定義香港地板工程。
        </h2>

        <p
          ref={bodyRef}
          className="font-sans text-cream/60 text-base font-light leading-relaxed mb-12 max-w-xl"
        >
          木星設計深耕香港超過三十年，結合傳統手藝與現代工程技術，
          從地台自流平、工業地台油，到 SPC 及實木地板，每一個步驟都為了讓你的空間更耐用、更舒適、更有質感。
        </p>

        <a
          ref={ctaRef}
          href="/technology"
          className="btn-draw text-cream inline-flex"
          aria-label="了解木星設計的技術與工藝"
        >
          <span className="border-left" />
          <span className="border-right" />
          探索技術
        </a>
      </div>
    </section>
  )
}
