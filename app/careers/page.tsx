import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '加入我們｜木星設計有限公司 — 香港地板工程招聘',
  description: '木星設計誠聘香港地板工程師傅及學徒，SPC 地板、實木地板、自流平施工團隊，有意請 WhatsApp 查詢。',
}

const JOBS = [
  {
    title: '地板工程師傅（大工）',
    dept: '工程部',
    location: '香港各區',
    type: '全職',
  },
  {
    title: '地板工程學徒',
    dept: '工程部',
    location: '香港各區',
    type: '全職',
  },
  {
    title: '地台自流平技工',
    dept: '工程部',
    location: '香港各區',
    type: '全職／兼職',
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="px-6 md:px-16 py-16">
        <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">Join Us</p>
        <h1
          className="font-serif text-charcoal mb-4"
          style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300 }}
        >
          加入木星設計
        </h1>
        <p className="font-sans text-charcoal/60 font-light max-w-lg mb-16 leading-relaxed text-base">
          木星設計紮根香港，專注地板工程逾三十年。我們正在尋找有經驗的師傅及有心入行的學徒，一同為香港家庭與商戶打造優質地板。
        </p>

        <div className="border-t border-beige/30">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-beige/20 group hover:bg-beige/5 px-2 -mx-2 transition-colors rounded-sm"
            >
              <div>
                <h2 className="font-serif text-charcoal text-lg font-light group-hover:text-charcoal">
                  {job.title}
                </h2>
                <p className="font-sans text-charcoal/50 text-sm font-light mt-1">
                  {job.dept} · {job.location}
                </p>
              </div>
              <div className="flex items-center gap-6 mt-3 md:mt-0">
                <span className="font-sans text-xs text-beige border border-beige/40 px-3 py-1 rounded-full">
                  {job.type}
                </span>
                <a
                  href="https://wa.me/85295715155?text=你好，我想查詢地板工程招聘"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-charcoal/40 hover:text-charcoal transition-colors tracking-wider uppercase"
                >
                  WhatsApp 查詢 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
