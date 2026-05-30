import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '作品案例｜木星設計有限公司',
  description: '瀏覽木星設計在香港完成的 SPC 地板、實木地板、戶外木地板及商業地台工程案例。',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
