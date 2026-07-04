'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, ShoppingCart, Eye } from 'lucide-react'
import { useStore } from '@/store/useStore'
import Image from 'next/image'

const products = [
  {
    id: 'purobot-ultra',
    name: 'PETKIT Purobot Ultra',
    price: 19800000,
    image: 'https://bizweb.dktcdn.net/100/492/700/products/petkit-purobot-ultra-camera-3.jpg?v=1727943621200',
    description: 'Máy dọn phân mèo tự động với Camera AI',
  },
  {
    id: 'purobot-x',
    name: 'PETKIT Purobot X',
    price: 12900000,
    image: 'https://bizweb.dktcdn.net/100/492/700/products/petkit-purobot-ultra-camera-4.jpg?v=1727943624360',
    description: 'Phiên bản tiêu chuẩn với cảm biến an toàn',
  },
  {
    id: 'purobot-mini',
    name: 'PETKIT Purobot Mini',
    price: 6900000,
    image: 'https://bizweb.dktcdn.net/100/492/700/products/petkit-purobot-ultra-camera-5.jpg?v=1727943627310',
    description: 'Kích thước nhỏ gọn, phù hợp mọi không gian',
  },
]

export default function ProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { addToCart, toggleWishlist, isInWishlist, addToViewed } = useStore()

  const handleAddToCart = (product: any) => {
    addToCart(product)
  }

  const handleToggleWishlist = (productId: string) => {
    toggleWishlist(productId)
  }

  const handleProductClick = (productId: string) => {
    addToViewed(productId)
  }

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gray-50 dark:bg-slate-900/50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Sản phẩm </span>
            <span className="gradient-text">của chúng tôi</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Khám phá các sản phẩm PETKIT chất lượng cao cho thú cưng của bạn.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onClick={() => handleProductClick(product.id)}
                />
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleToggleWishlist(product.id)}
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-lg hover:scale-110 transition-transform"
                    aria-label="Thêm vào yêu thích"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isInWishlist(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-600 dark:text-gray-300'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {product.price.toLocaleString('vi-VN')}đ
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      handleAddToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                      handleProductClick(product.id)
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Thêm vào giỏ
                  </button>
                  <button
                    onClick={() => handleProductClick(product.id)}
                    className="p-3 rounded-xl border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Xem nhanh"
                  >
                    <Eye className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
