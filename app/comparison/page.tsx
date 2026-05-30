'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

const COMPARISON_DATA = [
  {
    feature: '防水性能',
    spc: '✓ 100% 防水',
    solid: '✗ 不防水',
    composite: '✓ 防潮',
    outdoor: '✓ 100% 防水',
  },
  {
    feature: '耐磨等級',
    spc: 'AC3-AC4',
    solid: '高',
    composite: 'AC3',
    outdoor: 'R11 防滑',
  },
  {
    feature: '安裝時間',
    spc: '快（1-2天）',
    solid: '中（2-3天）',
    composite: '快（1天）',
    outdoor: '中（2-3天）',
  },
  {
    feature: '價格範圍',
    spc: 'HK$25-60/sqft',
    solid: 'HK$150-300/sqft',
    composite: 'HK$100-180/sqft',
    outdoor: 'HK$120-200/sqft',
  },
  {
    feature: '保養難度',
    spc: '簡單',
    solid: '複雜',
    composite: '簡單',
    outdoor: '中等',
  },
  {
    feature: '使用壽命',
    spc: '10-15年',
    solid: '20-30年',
    composite: '10-15年',
    outdoor: '15-20年',
  },
  {
    feature: '適合場景',
    spc: '全場景',
    solid: '住宅',
    composite: '住宅/辦公',
    outdoor: '露台/天台',
  },
]

const INSTALLATION_STEPS = [
  {
    step: 1,
    title: '上門測量和報價',
    duration: '1-2 天',
    description: '我們的專業團隊上門測量房間尺寸，了解您的需求，提供詳細報價。',
    details: ['免費上門測量', '現場勘察', '詳細報價單', '方案建議'],
  },
  {
    step: 2,
    title: '簽訂合同和支付定金',
    duration: '1 天',
    description: '確認方案後簽訂施工合同，支付定金（通常為總價的30%）。',
    details: ['簽訂合同', '支付定金', '確認施工日期', '交付合同副本'],
  },
  {
    step: 3,
    title: '地台找平（如需要）',
    duration: '1-3 天',
    description: '使用自流平材料對地面進行精準找平，確保基層平整。',
    details: ['清理地面', '地台找平', '乾燥固化', '質量檢查'],
  },
  {
    step: 4,
    title: '地板鋪設',
    duration: '1-3 天',
    description: '專業施工隊伍進行地板鋪設，確保每個細節都符合標準。',
    details: ['材料運輸', '地板鋪設', '邊角收口', '質量檢查'],
  },
  {
    step: 5,
    title: '驗收和清潔',
    duration: '1 天',
    description: '進行最終驗收，確保施工質量達到標準，清潔施工現場。',
    details: ['最終驗收', '缺陷修復', '現場清潔', '交付鑰匙'],
  },
]

const MAINTENANCE_GUIDES = [
  {
    type: 'SPC 石塑地板',
    tips: [
      '日常清潔：用乾布或微濕布擦拭，避免積水',
      '污漬清潔：用中性清潔劑和軟布擦拭',
      '防護：避免尖銳物體刮傷，使用地墊保護',
      '溫度：保持室溫 18-24°C，相對濕度 40-60%',
      '頻率：每週清潔 1-2 次，每月深度清潔 1 次',
    ],
  },
  {
    type: '實木地板',
    tips: [
      '日常清潔：用乾布擦拭，定期吸塵',
      '防水：避免積水，立即擦乾潑灑的液體',
      '防曬：使用窗簾避免長期日曬導致褪色',
      '溫度：保持室溫 18-24°C，相對濕度 45-65%',
      '定期保養：每 3-5 年進行一次打磨和上漆',
    ],
  },
  {
    type: '複合木地板',
    tips: [
      '日常清潔：用乾布或微濕布擦拭',
      '污漬清潔：用中性清潔劑和軟布擦拭',
      '防水：避免積水，及時擦乾',
      '溫度：保持室溫 16-24°C，相對濕度 40-65%',
      '頻率：每週清潔 1-2 次，每月深度清潔 1 次',
    ],
  },
  {
    type: '戶外木地板',
    tips: [
      '日常清潔：用軟毛刷或吸塵器清潔',
      '深度清潔：每季度用高壓水槍清洗一次',
      '防曬：定期涂抹防UV保護劑（每年 1-2 次）',
      '防霉：保持良好通風，避免積水',
      '檢查：定期檢查是否有損傷或松動',
    ],
  },
]

export default function ComparisonPage() {
  const [activeTab, setActiveTab] = useState('comparison')
  const sectionRef = useRef<HTMLDivElement | null>(null)
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
  }, [activeTab])

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Section */}
      <div className="h-[50vh] section-dark flex items-end px-6 md:px-16 pb-16">
        <div>
          <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">GUIDES & COMPARISON</p>
          <h1
            className="font-serif text-cream"
            style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300 }}
          >
            產品對比與指南
          </h1>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 md:px-16 py-12 max-w-6xl mx-auto border-b border-beige/30">
        <div className="flex flex-wrap gap-6">
          {[
            { id: 'comparison', label: '產品對比表' },
            { id: 'timeline', label: '施工流程時間線' },
            { id: 'maintenance', label: '保養維護指南' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-sans text-sm font-light pb-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-charcoal border-b-2 border-charcoal'
                  : 'text-charcoal/50 border-b-2 border-transparent hover:text-charcoal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div ref={sectionRef} className="px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <div ref={contentRef}>
          {/* Comparison Table */}
          {activeTab === 'comparison' && (
            <div data-animate>
              <h2 className="font-serif text-charcoal text-3xl font-light mb-8">
                地板產品對比表
              </h2>
              <p className="font-sans text-charcoal/60 text-lg font-light mb-12 leading-relaxed">
                對比不同地板類型的性能、價格和適用場景，幫助您做出最佳選擇。
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-beige/30">
                      <th className="text-left py-4 px-4 font-sans text-charcoal text-sm font-light">功能特性</th>
                      <th className="text-left py-4 px-4 font-sans text-charcoal text-sm font-light">SPC 石塑地板</th>
                      <th className="text-left py-4 px-4 font-sans text-charcoal text-sm font-light">實木地板</th>
                      <th className="text-left py-4 px-4 font-sans text-charcoal text-sm font-light">複合木地板</th>
                      <th className="text-left py-4 px-4 font-sans text-charcoal text-sm font-light">戶外木地板</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_DATA.map((row, idx) => (
                      <tr key={idx} className="border-b border-beige/20">
                        <td className="py-4 px-4 font-sans text-charcoal text-sm font-light">{row.feature}</td>
                        <td className="py-4 px-4 font-sans text-charcoal/70 text-sm font-light">{row.spc}</td>
                        <td className="py-4 px-4 font-sans text-charcoal/70 text-sm font-light">{row.solid}</td>
                        <td className="py-4 px-4 font-sans text-charcoal/70 text-sm font-light">{row.composite}</td>
                        <td className="py-4 px-4 font-sans text-charcoal/70 text-sm font-light">{row.outdoor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Installation Timeline */}
          {activeTab === 'timeline' && (
            <div data-animate>
              <h2 className="font-serif text-charcoal text-3xl font-light mb-8">
                典型施工流程時間線
              </h2>
              <p className="font-sans text-charcoal/60 text-lg font-light mb-12 leading-relaxed">
                了解從測量到完成的完整施工過程，預計所需時間。
              </p>

              <div className="space-y-6">
                {INSTALLATION_STEPS.map((item) => (
                  <div key={item.step} className="border-l-2 border-beige/30 pl-8 pb-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="font-sans text-beige text-xs tracking-wider uppercase block mb-2">
                          步驟 {item.step}
                        </span>
                        <h3 className="font-serif text-charcoal text-xl font-light">
                          {item.title}
                        </h3>
                      </div>
                      <span className="bg-beige/20 text-charcoal px-3 py-1 rounded-sm text-xs font-light whitespace-nowrap ml-4">
                        {item.duration}
                      </span>
                    </div>
                    <p className="font-sans text-charcoal/60 text-sm font-light mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {item.details.map((detail) => (
                        <div key={detail} className="text-xs font-light text-charcoal/70">
                          • {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Maintenance Guide */}
          {activeTab === 'maintenance' && (
            <div data-animate>
              <h2 className="font-serif text-charcoal text-3xl font-light mb-8">
                地板保養維護指南
              </h2>
              <p className="font-sans text-charcoal/60 text-lg font-light mb-12 leading-relaxed">
                正確的保養方法可以延長地板的使用壽命，保持其美觀和性能。
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {MAINTENANCE_GUIDES.map((guide) => (
                  <div key={guide.type} className="border border-beige/30 p-8 rounded-sm">
                    <h3 className="font-serif text-charcoal text-xl font-light mb-6">
                      {guide.type}
                    </h3>
                    <ul className="space-y-3">
                      {guide.tips.map((tip) => (
                        <li key={tip} className="font-sans text-charcoal/70 text-sm font-light leading-relaxed">
                          • {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-beige/10 border border-beige/30 p-8 rounded-sm">
                <h3 className="font-serif text-charcoal text-xl font-light mb-4">
                  💡 通用保養建議
                </h3>
                <ul className="space-y-3 font-sans text-charcoal/70 text-sm font-light">
                  <li>• 定期清潔：每週至少清潔 1-2 次，保持地板清潔衛生</li>
                  <li>• 及時處理：立即清理潑灑的液體，避免積水</li>
                  <li>• 保護措施：在家具腳下放置墊片，避免刮傷</li>
                  <li>• 環境控制：保持室內溫度和濕度穩定</li>
                  <li>• 定期檢查：定期檢查地板是否有損傷或松動</li>
                  <li>• 專業保養：根據地板類型定期進行專業保養</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 md:px-16 py-24 max-w-6xl mx-auto">
        <div className="section-dark rounded-sm p-12 md:p-16 text-center">
          <h2
            className="font-serif text-cream mb-4"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300 }}
          >
            需要更多幫助？
          </h2>
          <p className="font-sans text-cream/80 text-lg font-light mb-8">
            我們的專業團隊隨時準備為您解答任何問題
          </p>
          <a
            href="https://wa.me/85295715155?text=你好，我想查詢地板工程報價"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-draw text-cream text-sm"
          >
            <span className="border-left" />
            <span className="border-right" />
            立即聯絡
          </a>
        </div>
      </div>
    </div>
  )
}