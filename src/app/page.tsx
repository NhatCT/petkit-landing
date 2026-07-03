import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollTracker from '@/components/ScrollTracker'
import CartDrawer from '@/components/CartDrawer'

const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  loading: () => (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 w-64 mx-auto mb-16 bg-gray-200 dark:bg-slate-700 rounded-lg animate-pulse" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 lg:p-8 rounded-2xl bg-gray-100 dark:bg-slate-800 animate-pulse">
              <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-slate-700 mb-5" />
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-slate-700 rounded mb-3" />
              <div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const SpecsSection = dynamic(() => import('@/components/SpecsSection'), {
  loading: () => (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 w-64 mx-auto mb-16 bg-gray-200 dark:bg-slate-700 rounded-lg animate-pulse" />
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gray-100 dark:bg-slate-800 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="p-4 rounded-xl bg-gray-100 dark:bg-slate-800 animate-pulse">
                <div className="h-3 w-1/2 bg-gray-200 dark:bg-slate-700 rounded mb-2" />
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-slate-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
})

const ProductsSection = dynamic(() => import('@/components/ProductsSection'), {
  loading: () => (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 w-64 mx-auto mb-16 bg-gray-200 dark:bg-slate-700 rounded-lg animate-pulse" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl bg-gray-100 dark:bg-slate-800 overflow-hidden animate-pulse">
              <div className="aspect-square bg-gray-200 dark:bg-slate-700" />
              <div className="p-6">
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-slate-700 rounded mb-3" />
                <div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded mb-4" />
                <div className="h-8 w-1/2 bg-gray-200 dark:bg-slate-700 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="h-12 w-3/4 bg-gray-200 dark:bg-slate-700 rounded-lg animate-pulse" />
            <div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-slate-700 animate-pulse" />
                <div className="h-4 w-48 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
              </div>
            ))}
          </div>
          <div className="p-6 lg:p-8 rounded-2xl bg-gray-100 dark:bg-slate-800 animate-pulse">
            <div className="space-y-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <div className="h-4 w-24 bg-gray-200 dark:bg-slate-700 rounded mb-2" />
                  <div className="h-12 w-full bg-gray-200 dark:bg-slate-700 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
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
      <CartDrawer />
    </>
  )
}
