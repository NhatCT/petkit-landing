'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Brain,
  Wind,
  Smartphone,
  Shield,
  Battery,
  Wifi,
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Nhận Diện Mèo',
    description:
      'Cảm biến thông minh nhận diện chính xác mèo, phân biệt với vật nuôi khác và trẻ nhỏ. Tự động kích hoạt chu trình dọn dẹp sau khi mèo rời đi.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Wind,
    title: 'Khử Mùi xOdor',
    description:
      'Công nghệ khử mùi tiên tiến 3 lớp: than hoạt tính, ion bạc và quạt thông gió thông minh. Loại bỏ 99.9% mùi hôi trong 5 phút.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Smartphone,
    title: 'Điều Khiển Từ Xa',
    description:
      'Theo dõi và quản lý qua app PETKIT. Nhận thông báo real-time về sức khỏe mèo, lịch sử sử dụng và cảnh báo bất thường.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'An Toàn Tuyệt Đối',
    description:
      'Cảm biến trọng lượng + hồng ngoại đa điểm ngăn chặn hoạt động khi mèo ở bên trong. Chứng nhận an toàn quốc tế CE/FCC.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Battery,
    title: 'Siêu Tiết Kiệm',
    description:
      'Tiêu thụ chỉ 1.2kWh/tháng, tương đương 3.000đ tiền điện. Thiết kế khay cát lớn 76L giảm tần suất thay cát.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Wifi,
    title: 'Kết Nối IoT',
    description:
      'Tương thích HomeKit, Google Home và Alexa. Tự động lên lịch dọn dẹp theo thói quen sinh hoạt của mèo.',
    color: 'from-pink-500 to-rose-500',
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
            <span className="text-gray-900 dark:text-white">Công nghệ </span>
            <span className="gradient-text">đột phá</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tích hợp 6 công nghệ tiên tiến nhất, mang đến trải nghiệm chăm sóc
            thú cưng hoàn toàn tự động.
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
