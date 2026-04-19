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
    title: 'SPC 現代客廳',
    location: '香港中環',
    area: '450 sq ft',
    duration: '3 週',
    type: 'residential',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663573137272/WGAVXDraoTqzhkuEqdtzNG/portfolio-spc-modern-living-P26PW4LSMCt26gSDt7PA9M.webp',
    description: 'SPC 石塑地板安裝 - 展示防水防潮性能和現代美感。完美適合香港潮濕氣候。',
    services: ['SPC 石塑地板', '地台找平', '防水處理'],
  },
  {
    id: 2,
    title: '實木臥室翻新',
    location: '香港銅鑼灣',
    area: '800 sq ft',
    duration: '2 週',
    type: 'residential',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663573137272/WGAVXDraoTqzhkuEqdtzNG/portfolio-solid-wood-bedroom-JJ6ax4TDJoYtz7nVuMHWju.webp',
    description: '高級實木地板安裝 - 展示天然紋理和奢華質感。打造溫暖舒適的居住環境。',
    services: ['實木地板安裝', '打磨拋光', '上油保護'],
  },
  {
    id: 3,
    title: '戶外露台木地板',
    location: '香港屏門',
    area: '2000 sq ft',
    duration: '4 週',
    type: 'outdoor',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663573137272/WGAVXDraoTqzhkuEqdtzNG/portfolio-outdoor-decking-RnpaLtJGxehdw3PQcf67ji.webp',
    description: '戶外防水木地板 - 防UV、防霉、防滑（R11級）。適合露台、天台、平台。',
    services: ['戶外木地板', '防UV處理', '防滑塗層'],
  },
  {
    id: 4,
    title: '辦公室複合地板',
    location: '香港太古',
    area: '300 sq ft',
    duration: '2 週',
    type: 'commercial',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663573137272/WGAVXDraoTqzhkuEqdtzNG/portfolio-composite-office-jq2iUJMtptf7UT9RZVUmuY.webp',
    description: '複合木地板在商業空間的應用 - 防潮性能優於實木，高性價比。',
    services: ['複合木地板', '防潮處理', '快速安裝'],
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const sectionRef = useRef<HTMLDivElement | null>(null)
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
