'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const ROOM_IMAGE = 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1400&q=80'

export default function VisualizerPromo() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !imageRef.current) return

      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.4,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 55%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power4.out', duration: 0.9 },
      })

      const elements = textRef.current?.querySelectorAll('[data-reveal]') || []
      tl.fromTo(elements, { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 px-6 md:px-16 grid md:grid-cols-2 gap-12 md:gap-20 items-center bg-cream"
      aria-label="項目案例展示"
    >
      <div
        ref={imageRef}
        className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl"
        style={{ clipPath: 'inset(0 100% 0 0)' }}
      >
        <Image
          src={ROOM_IMAGE}
          alt="木星設計完成項目示意圖"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>

      <div ref={textRef} className="flex flex-col gap-6">
        <p data-reveal className="font-sans text-xs tracking-[0.35em] uppercase text-beige">
          PROJECT SHOWCASE
        </p>
        <h2
          data-reveal
          className="font-serif leading-tight text-charcoal"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300 }}
        >
          看見完成後的空間，
          <br />
          更容易想像下一步。
        </h2>
        <p
          data-reveal
          className="font-sans text-charcoal/60 font-light leading-relaxed text-base max-w-md"
        >
          從家居到寫字樓、店舖與工廈，木星設計完成過上千個不同類型的地板工程，
          以穩陣施工與細緻收口，呈現合乎實際需要的地面效果。
        </p>
        <a
          data-reveal
          href="/products"
          className="btn-draw text-charcoal self-start"
          aria-label="瀏覽地板產品與案例"
        >
          <span className="border-left" />
          <span className="border-right" />
          瀏覽產品
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}
