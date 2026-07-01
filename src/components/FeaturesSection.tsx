'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Camera,
  Wind,
  Shield,
  Smartphone,
  Heart,
  Droplets,
} from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'Camera AI Xoay 180°',
    description:
      'Camera thông minh góc rộng 210°, hồng ngoại ban đêm, hỗ trợ đàm thoại 2 chiều. Theo dõi hành vi mèo và phân tích sức khỏe qua phân.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Wind,
    title: 'Khử Mùi N60',
    description:
      'Bộ khử mùi N60 chuyên dụng kết hợp hộp chất thải đóng kín. Không gian sống luôn trong lành, sạch sẽ.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: '20 Cảm Biến An Toàn',
    description:
      'Hệ thống 20 cảm biến bảo vệ mèo tuyệt đối. Ngăn chặn hoạt động khi mèo ở bên trong. Chống nước IPX5.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Smartphone,
    title: 'Điều Khiển Qua App',
    description:
      'Quản lý từ xa qua ứng dụng PETKIT. Nhận thông báo real-time, xem camera trực tiếp và theo dõi lịch sử sử dụng.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Theo Dõi Sức Khỏe',
    description:
      'Phân tích sức khỏe mèo thông qua màu sắc và tần suất phân. Phù hợp cho 3-5 bé mèo, trọng lượng dưới 10kg.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Droplets,
    title: 'Tự Động Niêm Phong',
    description:
      'Túi rác liền mạch tự động niêm phong. Không cần tiếp xúc trực tiếp khi đổ rác. Vành cửa chống thấm nâng cấp.',
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function FeaturesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gray-50 dark:bg-slate-900/50" />
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Tính năng </span>
            <span className="gradient-text">nổi bật</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tích hợp công nghệ hiện đại nhất, mang đến trải nghiệm chăm sóc
            thú cưng hoàn toàn tự động và an toàn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-6 lg:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
