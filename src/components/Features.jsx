import { motion } from 'framer-motion';
import { Bot, Trash2, Wind, Smartphone, Shield, Clock, PawPrint, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Tự Động Dọn Sạch 24/7',
    description: 'Hệ thống cảm biến thông minh tự động dọn phân sau 5 phút, giữ khay luôn sạch sẽ mà không cần can thiệp thủ công.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Trash2,
    title: 'Công Nghệ UV Diệt Khuẩn',
    description: 'Khay phản quang UV diệt khuẩn 99.9%, ngăn ngừa mùi hôi và vi khuẩn phát triển, bảo vệ sức khỏe thú cưng.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Wind,
    title: 'Hệ Thống Khử Mùi Đa Tầng',
    description: 'Bộ lọc than hoạt tính cao cấp khử mùi hôi hiệu quả, kết hợp quạt thông minh giữ không khí luôn thơm tho.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Smartphone,
    title: 'App PETKIT Smart',
    description: 'Kết nối app PETKIT Smart trên điện thoại, theo dõi lịch sử sử dụng, nhận thông báo và điều khiển từ bất cứ đâu.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Shield,
    title: 'Cảm Biến An Toàn 4 Lớp',
    description: 'Hệ thống cảm biến红外, trọng lượng và radar dừng hoạt động khi thú cưng tiếp cận, bảo vệ tuyệt đối an toàn.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Clock,
    title: 'Theo Dõi Sức Khỏe',
    description: 'Ghi nhật ký sử dụng chi tiết, theo dõi tần suất đi vệ sinh, thời gian và cảnh báo sức khỏe qua app.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: PawPrint,
    title: 'Phù Hợp Nhiều Loài Mèo',
    description: 'Thiết kế phù hợp cho mèo từ 1.5kg - 10kg, hỗ trợ nhiều mèo cùng sử dụng với hệ thống nhận diện.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Tiết Kiệm Điện Năng',
    description: 'Chế độ standby thông minh, tự động chuyển sang chế độ tiết kiệm điện khi không sử dụng, bảo vệ môi trường.',
    color: 'from-teal-500 to-cyan-500'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tính Năng Nổi Bật Pura Max 2
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Công nghệ tiên tiến nhất của PETKIT giúp chăm sóc thú cưng dễ dàng hơn bao giờ hết
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://petkitvietnam.com/may-don-phan-meo" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Xem Chi Tiết Tính Năng
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
