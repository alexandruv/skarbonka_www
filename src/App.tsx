import { CTASection } from './components/CTASection'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { ProblemSection } from './components/ProblemSection'
import { Testimonials } from './components/Testimonials'
export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  )
}
