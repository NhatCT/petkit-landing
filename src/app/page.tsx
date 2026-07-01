import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import SpecsSection from '@/components/SpecsSection'
import ProductsSection from '@/components/ProductsSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollTracker from '@/components/ScrollTracker'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ScrollTracker />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SpecsSection />
        <ProductsSection />
        <ContactForm />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
