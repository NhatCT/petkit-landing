'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'
import Image from 'next/image'

const specs = [
  { label: 'Chất liệu cabin', value: 'Nhựa ABS - 70 Lít' },
  { label: 'Hộp chất thải', value: '10 Lít' },
  { label: 'Mèo phù hợp', value: 'Tất cả giống mèo' },
  { label: 'Trọng lượng mèo', value: 'Dưới 10 kg' },
  { label: 'Tuổi mèo', value: 'Từ 6 tháng (≥1.5 kg)' },
  { label: 'Camera', value: 'AI Xoay 180° - Góc rộng 210°' },
  { label: 'Hồng ngoại', value: 'Có - Đàm thoại 2 chiều' },
  { label: 'Khử mùi', value: 'Sáp khử mùi N60' },
  { label: 'Niêm phong rác', value: 'Tự động - Túi liền mạch' },
  { label: 'Chống nước', value: 'IPX5' },
  { label: 'Cảm biến', value: '20 cảm biến an toàn' },
  { label: 'Bảo hành', value: '24 tháng chính hãng' },
]

export default function SpecsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section id="specs" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Thông số </span>
            <span className="gradient-text">kỹ thuật</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thiết kế cao cấp, đáp ứng mọi nhu cầu chăm sóc thú cưng tự động.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Product visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ x, scale }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-slate-800 dark:to-blue-900/30 overflow-hidden shadow-inner">
              <Image
                src="https://bizweb.dktcdn.net/100/492/700/products/petkit-purobot-ultra-camera-2.jpg?v=1727943618297"
                alt="PETKIT Purobot Ultra - góc nhìn bên trong"
                fill
                className="object-contain p-6"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 448px"
              />
            </div>
          </motion.div>

          {/* Specs grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 transition-colors cursor-pointer"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                    {spec.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {spec.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}