import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: '技術與工藝 — 木星設計地板工程' }

const TECH_FEATURES = [
  {
    title: 'SPC 石塑地板系統',
    body: '耐磨、防水、容易打理，特別適合香港潮濕天氣及家居／工商舖戶。配合專業找平及施工工序，減少空鼓、鬆脫及爆邊問題，同時屬於 pet-friendly，適合有小朋友及寵物的家庭。',
    image: '/images/technology/spc.png',
    alt: 'SPC 石塑地板安裝',
  },
{
  title: '實木地板舖設及翻新',
  body: '由選材、收口至打磨與上油，提供新舖及舊木翻新服務。透過專業打磨及塗層處理，延長實木地板壽命，同時保留木材原有質感。',
  image: 'https://images.unsplash.com/photo-1723639904962-e138009b2582?q=80&w=2340&auto=format&fit=crop',
  alt: '實木地板打磨翻新',
},
  {
    title: '地台自流平與工業地台油',
    body: '以自流平找平底層，改善高低不平及裂縫問題；再配合工業中心地台油處理，提升耐磨、抗壓及清潔表現，適合工廠大廈、倉儲及車位空間。',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    alt: '工業地台油塗層施工',
  },
  {
    title: '戶外木地板及圍欄系統',
    body: '為天台、平台、花園及泳池邊提供耐候木地板及圍欄方案，兼顧美觀、防滑與排水，令戶外空間更宜居亦更易保養。',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    alt: '戶外木地板及圍欄',
  },
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="h-[50vh] section-dark flex items-end px-6 md:px-16 pb-16">
        <div>
          <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">OUR CRAFT</p>
          <h1
            className="font-serif text-cream"
            style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300 }}
          >
            技術與工藝
          </h1>
        </div>
      </div>

      <div className="px-6 md:px-16 py-24 max-w-4xl">
        <p className="font-sans text-charcoal/60 text-lg font-light leading-relaxed mb-20">
          木星設計的每一個工程，都是由地台開始。由底到面，我們以合適的工序與物料打造穩定、
          耐用又具質感的地板系統，配合香港真實使用情況而設計，而不是單純追求外觀。
        </p>

        <div className="space-y-16">
          {TECH_FEATURES.map((f, i) => (
            <div key={f.title} className="border-t border-beige/30 pt-10">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <span className="font-sans text-beige text-xs tracking-wider">0{i + 1}</span>
                  <h2 className="font-serif text-charcoal text-2xl font-light mt-2">{f.title}</h2>
                </div>
                <p className="md:col-span-2 font-sans text-charcoal/60 font-light leading-relaxed">
                  {f.body}
                </p>
              </div>
              <div className="relative w-full aspect-[16/7] rounded-sm overflow-hidden bg-beige-light">
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}