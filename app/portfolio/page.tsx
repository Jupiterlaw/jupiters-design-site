'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const CASE_STUDIES = [
  {
    id: 1,
    title: '私人住宅 — 實木地板翻新',
    location: '灣仔',
    area: '2,500 sq ft',
    duration: '5 天',
    type: 'residential',
    image: 'https://images.unsplash.com/photo-1723639904962-e138009b2582?q=80&w=2340&auto=format&fit=crop',
    description: '完整的實木地板翻新項目，包括打磨、拋光和上漆。業主對最終效果非常滿意。',
    services: ['實木地板翻新', '打磨拋光', '上油保護'],
  },
  {
    id: 2,
    title: '商業空間 — SPC 地板鋪設',
    location: '中環',
    area: '3,200 sq ft',
    duration: '3 天',
    type: 'commercial',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80',
    description: '高流量商業空間的 SPC 石塑地板安裝，防水耐磨，易於清潔。',
    services: ['SPC 地板安裝', '地台找平', '防水處理'],
  },
  {
    id: 3,
    title: '辦公室 — 複合木地板',
    location: '尖沙咀',
    area: '4,000 sq ft',
    duration: '4 天',
    type: 'commercial',
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=1200&q=80',
    description: '現代辦公室的複合木地板安裝，兼具美觀和耐用性。',
    services: ['複合木地板安裝', '地台準備', '邊角收口'],
  },
  {
    id: 4,
    title: '露台 — 戶外木地板',
    location: '淺水灣',
    area: '1,500 sq ft',
    duration: '3 天',
    type: 'outdoor',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    description: '高級住宅露台的戶外木地板安裝，防UV防滑。',
    services: ['戶外木地板', '防UV處理', '防滑塗層'],
  },
  {
    id: 5,
    title: '工廈 — 地台自流平 + SPC',
    location: '觀塘',
    area: '5,000 sq ft',
    duration: '6 天',
    type: 'industrial',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    description: '工業空間的完整解決方案，地台找平加 SPC 鋪設。',
    services: ['地台自流平', 'SPC 地板', '工業油漆'],
  },
  {
    id: 6,
    title: '豪宅 — 多房間混合地板',
    location: '半山',
    area: '6,000 sq ft',
    duration: '8 天',
    type: 'residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    description: '豪宅項目，不同房間採用不同地板材料的完整設計。',
    services: ['實木地板', 'SPC 地板', '地台自流平'],
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const sectionRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const filteredProjects = activeFilter === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(p => p.type === activeFilter)

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
  }, [filteredProjects])

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Section */}
      <div className="h-[50vh] section-dark flex items-end px-6 md:px-16 pb-16">
        <div>
          <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">OUR WORK</p>
          <h1
            className="font-serif text-cream"
            style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300 }}
          >
            施工案例展示
          </h1>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-6 md:px-16 py-12 max-w-6xl mx-auto">
        <p className="font-sans text-charcoal/60 text-lg font-light leading-relaxed mb-8">
          查看我們過往的優質施工項目，了解我們的工程標準和成果。
        </p>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { id: 'all', label: '全部項目' },
            { id: 'residential', label: '住宅' },
            { id: 'commercial', label: '商業' },
            { id: 'industrial', label: '工業' },
            { id: 'outdoor', label: '戶外' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-sm font-light transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-charcoal text-cream border border-charcoal'
                  : 'border border-beige/30 text-charcoal hover:border-charcoal'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div ref={sectionRef} className="px-6 md:px-16 py-12 max-w-6xl mx-auto">
        <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} data-animate className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-beige-light mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              <h3 className="font-serif text-charcoal text-lg font-light mb-2">
                {project.title}
              </h3>
              
              <p className="font-sans text-charcoal/60 text-sm font-light leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
                <div>
                  <p className="font-sans text-beige/60 uppercase tracking-wider mb-1">地點</p>
                  <p className="font-sans text-charcoal font-light">{project.location}</p>
                </div>
                <div>
                  <p className="font-sans text-beige/60 uppercase tracking-wider mb-1">面積</p>
                  <p className="font-sans text-charcoal font-light">{project.area}</p>
                </div>
                <div>
                  <p className="font-sans text-beige/60 uppercase tracking-wider mb-1">工期</p>
                  <p className="font-sans text-charcoal font-light">{project.duration}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-2 py-1 bg-beige/20 text-charcoal text-xs font-light rounded-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <div className="section-dark rounded-sm p-12 md:p-16 text-center">
          <h2
            className="font-serif text-cream mb-4"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300 }}
          >
            準備開始您的地板工程？
          </h2>
          <p className="font-sans text-cream/80 text-lg font-light mb-8">
            聯絡我們獲取免費上門測量和專業建議
          </p>
          <a
            href="/contact"
            className="btn-draw text-cream text-sm"
          >
            <span className="border-left" />
            <span className="border-right" />
            立即查詢
          </a>
        </div>
      </div>
    </div>
  )
}
