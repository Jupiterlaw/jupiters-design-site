'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

export default function PageTransition() {
  const ref      = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const el = ref.current!
    const tl = gsap.timeline()
    tl.set(el, { yPercent: 0, autoAlpha: 1, pointerEvents: 'auto' })
      .to(el, { yPercent: -100, duration: 0.7, ease: 'power3.inOut', delay: 0.1 })
      .set(el, { yPercent: 100, autoAlpha: 0, pointerEvents: 'none' })
  }, [pathname])

  return (
    <div
      ref={ref}
      className="page-transition"
      aria-hidden="true"
      style={{ transform: 'translateY(100%)' }}
    />
  )
}
