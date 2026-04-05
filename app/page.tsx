import HeroSection        from '@/components/HeroSection'
import InnovationSection  from '@/components/InnovationSection'
import VisualizerPromo    from '@/components/VisualizerPromo'
import ThreePillars       from '@/components/ThreePillars'
import StatsCounter       from '@/components/StatsCounter'
import Footer             from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InnovationSection />
      <VisualizerPromo />
      <ThreePillars />
      <StatsCounter />
      <Footer />
    </>
  )
}
