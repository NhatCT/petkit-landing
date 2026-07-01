'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const specs = [
  { label: 'Kích thước', value: '532 x 507 x 644mm' },
  { label: 'Trọng lượng', value: '12.5 kg' },
  { label: 'Dung tích khay cát', value: '76 Lít' },
  { label: 'Tải trọng tối đa', value: '8 kg (mèo)' },
  { label: 'Công suất', value: '12W (hoạt động)' },
  { label: 'Tiêu thụ điện', value: '1.2 kWh/tháng' },
  { label: 'Kết nối', value: 'WiFi 2.4GHz + BLE 5.0' },
  { label: 'Độ ồn', value: '< 45dB' },
  { label: 'Cảm biến', value: 'Trọng lượng + Hồng ngoại + ToF' },
  { label: 'Tương thích', value: 'Cát vón cục (1-4mm)' },
  { label: 'Chứng nhận', value: 'CE / FCC / RoHS' },
  { label: 'Bảo hành', value: '24 tháng chính hãng' },
]

export default function SpecsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="specs" className="py-20 lg:py-32 relative">
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
            Được thiết kế tỉ mỉ từng chi tiết, đảm bảo hiệu suất vượt trội và
            độ bền cao.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Product visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-slate-800 dark:to-blue-900/30 flex items-center justify-center p-12 shadow-inner">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-400/20 dark:to-cyan-400/20 flex items-center justify-center border-4 border-blue-200 dark:border-blue-700">
                  <div className="text-center">
                    <p className="text-4xl font-bold gradient-text">76L</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Dung tích
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">532</p>
                    <p className="text-xs text-gray-500">Rộng (mm)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">507</p>
                    <p className="text-xs text-gray-500">Sâu (mm)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">644</p>
                    <p className="text-xs text-gray-500">Cao (mm)</p>
                  </div>
                </div>
              </div>
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
                  className="p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 transition-colors"
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
