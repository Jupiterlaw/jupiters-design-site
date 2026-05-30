import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '地板比較與施工流程｜木星設計有限公司',
  description: '比較 SPC、實木、複合木及戶外地板的防水、耐磨、價格與施工時間，幫你揀啱香港地板方案。',
}

export default function ComparisonLayout({ children }: { children: React.ReactNode }) {
  return children
}
