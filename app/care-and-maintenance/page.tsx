'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'SPC 地板是否適合有寵物的家庭？',
    a:
      '適合。SPC 石塑地板耐磨、防水、容易清潔，對寵物指甲相對友善，被視為 pet-friendly 地板選擇之一。日常只需以微濕拖把清潔，避免使用強酸強鹼清潔劑即可。',
  },
  {
    q: '平日應如何清潔 SPC 或強化地板？',
    a:
      '建議先以吸塵機或掃帚清除沙粒，再以微濕拖把配合中性清潔劑抹拭。避免使用大量水、漂白水或含蠟清潔劑，以免影響接縫與表面塗層。',
  },
  {
    q: '實木地板需要多久打蠟／翻新一次？',
    a:
      '視乎使用情況而定，一般家庭每 5–7 年可考慮一次打磨及重塗保護層。如只是表面細紋，可先以專用木地板清潔及保養油處理，無需即時大修。',
  },
  {
    q: '新鋪地板前，地台自流平為什麼重要？',
    a:
      '平整的地台可以減少空鼓聲、板材移位及接縫開裂問題。自流平可修正高低不平及細小裂紋，為 SPC、實木或其他地板提供穩定基礎。',
  },
  {
    q: '工業地台油需要如何保養？',
    a:
      '日常可用除塵拖把或洗地機清潔。如有油漬或化學品濺出，應盡快以合適清潔劑處理，避免長時間滯留。建議定期檢查高磨損區域，如有明顯磨損可安排重塗。',
  },
  {
    q: '戶外木地板需要注意什麼？',
    a:
      '保持排水暢通並定期清理樹葉及積塵，避免長期積水。可視乎日曬雨淋情況每 1–2 年重新上油或保護塗層，以延長使用壽命。',
  },
]

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-beige/20">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex justify-between items-center py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-sans text-charcoal text-sm font-medium pr-8">{q}</span>
        {open ? <Minus size={16} className="text-beige shrink-0" /> : <Plus size={16} className="text-beige shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-40' : 'max-h-0'}`}>
        <p className="font-sans text-charcoal/60 text-sm font-light leading-relaxed pb-5">{a}</p>
      </div>
    </div>
  )
}

export default function CarePage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="px-6 md:px-16 py-16 max-w-3xl">
        <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">GUIDANCE</p>
        <h1
          className="font-serif text-charcoal mb-4"
          style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300 }}
        >
          保養與維護
        </h1>
        <p className="font-sans text-charcoal/50 font-light mb-16 max-w-lg">
          好的地板需要正確保養，才能維持多年如新。以下是木星設計就 SPC 地板、實木地板、
          自流平地台、工業地台油及戶外木地板整理的常見問題與建議，
          方便你在日常使用中快速查閱。
        </p>

        <div className="border-t border-beige/20" role="list" aria-label="常見問題收合列表">
          {FAQS.map((faq) => (
            <Accordion key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </div>
  )
}
