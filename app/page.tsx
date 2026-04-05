import HeroSection from '@/components/HeroSection'
import StatsCounter from '@/components/StatsCounter'
import ThreePillars from '@/components/ThreePillars'
import InnovationSection from '@/components/InnovationSection'

export default function HomePage() {
  return (
    <main>
      {/* 主視覺 */}
      <HeroSection />

      {/* 關於我們簡介 */}
      <InnovationSection />

      {/* 三大服務支柱 */}
      <ThreePillars />

      {/* 數字成就 */}
      <StatsCounter />
    </main>
  )
}