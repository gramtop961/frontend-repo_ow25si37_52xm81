import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyTrustUs from './components/WhyTrustUs'
import EarlyAccess from './components/EarlyAccess'
import Features from './components/Features'
import YesSection from './components/YesSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WhyTrustUs />
        <EarlyAccess />
        <Features />
        <YesSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
