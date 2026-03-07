import Nav from './components/Nav'
import Hero from './components/Hero'
import ProblemStrip from './components/ProblemStrip'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <ProblemStrip />
      <HowItWorks />
      <Features />
      <Pricing />
      <FinalCTA />
    </div>
  )
}
