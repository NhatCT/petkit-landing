import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollTracker from '@/components/ScrollTracker'

const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-slate-800" />,
})

const SpecsSection = dynamic(() => import('@/components/SpecsSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-slate-800" />,
})

const ProductsSection = dynamic(() => import('@/components/ProductsSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-slate-800" />,
})

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-slate-800" />,
})

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
