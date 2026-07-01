'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, ShoppingCart, Eye } from 'lucide-react'
import { useStore } from '@/store/useStore'

const products = [
  {
    id: 'pura-max-2',
    name: 'PETKIT PURA MAX 2',
    price: 12990000,
    image: 'https://bizweb.dktcdn.net/100/492/700/products/pura-max-2025-4.jpg?v=1767698417437',
    description: 'Nhà vệ sinh tự động thông minh - Thế hệ mới nhất',
    badge: 'Best Seller',
  },
  {
    id: 'pura-x',
    name: 'PETKIT PURA X',
    price: 8990000,
    image: 'https://bizweb.dktcdn.net/100/492/700/products/petkit-pura-x-2024.jpg?v=1702029599527',
    description: 'Nhà vệ sinh tự động - Phiên bản compact',
    badge: 'Popular',
  },
  {
    id: 'fresh-element-3',
    name: 'PETKIT Fresh Element 3',
    price: 4590000,
    image: 'https://bizweb.dktcdn.net/thumb/large/100/492/700/products/petkit-fresh-element-solo-1.jpg?v=1732179102810',
    description: 'Máy cho ăn tự động với camera HD',
    badge: 'New',
  },
  {
    id: 'eversweet-3-pro',
    name: 'PETKIT Eversweet 3 Pro',
    price: 1890000,
    image: 'https://bizweb.dktcdn.net/100/492/700/products/may-loc-nuoc-cho-thu-cung-petkit-eversweet-6-01-b3f09a1b-a5d8-4c63-889b-ffd1b2139305.jpg?v=1693068907007',
    description: 'Máy lọc nước thông minh cho thú cưng',
    badge: null,
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat('vi-VN').format(price) + 'đ'
}

export default function ProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { addToCart, addFavorite, removeFavorite, isFavorite, addViewedProduct } =
    useStore()

  return (
    <section id="products" className="py-20 lg:py-32 bg-gray-50 dark:bg-slate-900/50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Sản phẩm </span>
            <span className="gradient-text">nổi bật</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hệ sinh thái thiết bị thông minh dành cho thú cưng yêu của bạn.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onViewportEnter={() => addViewedProduct(product)}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white z-10">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                  loading="lazy"
                />

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => {
                      if (isFavorite(product.id)) {
                        removeFavorite(product.id)
                      } else {
                        addFavorite(product)
                      }
                    }}
                    className={`p-2 rounded-full shadow-md transition-colors ${
                      isFavorite(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-red-50'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={isFavorite(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="p-2 rounded-full bg-white text-gray-700 shadow-md hover:bg-blue-50 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-50 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {formatPrice(product.price)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Thêm vào giỏ
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
