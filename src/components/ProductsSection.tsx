'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const galleryImages = [
  {
    src: 'https://bizweb.dktcdn.net/100/492/700/products/petkit-purobot-ultra-camera-3.jpg?v=1727943621200',
    alt: 'PETKIT Purobot Ultra - Camera AI góc rộng',
  },
  {
    src: 'https://bizweb.dktcdn.net/100/492/700/products/petkit-purobot-ultra-camera-4.jpg?v=1727943624360',
    alt: 'PETKIT Purobot Ultra - Hệ thống niêm phong tự động',
  },
  {
    src: 'https://bizweb.dktcdn.net/100/492/700/products/petkit-purobot-ultra-camera-5.jpg?v=1727943627310',
    alt: 'PETKIT Purobot Ultra - Thiết kế cabin rộng rãi',
  },
  {
    src: 'https://bizweb.dktcdn.net/100/492/700/products/petkit-purobot-ultra-camera-7.jpg?v=1746956890317',
    alt: 'PETKIT Purobot Ultra - Bộ khử mùi N60',
  },
]

export default function ProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
            <span className="text-gray-900 dark:text-white">Hình ảnh </span>
            <span className="gradient-text">sản phẩm</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Khám phá PETKIT Purobot Ultra từ mọi góc nhìn.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
