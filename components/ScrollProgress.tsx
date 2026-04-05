'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement
      const pct = Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
      setProgress(isNaN(pct) ? 0 : pct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-progress font-sans" aria-label="Scroll progress">
      <span>{String(progress).padStart(2, '0')}</span>
      <span className="mx-1 opacity-40">/</span>
      <span className="opacity-40">100</span>
    </div>
  )
}
