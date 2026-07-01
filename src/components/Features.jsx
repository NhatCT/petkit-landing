import { motion } from 'framer-motion';
import { Bot, Trash2, Wind, Smartphone, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Tự Dộng Dọn Sạch',
    description: 'Hệ thống cảm biến thông minh tự động dọn phân sau 5 phút, giữ khay luôn sạch sẽ.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Trash2,
    title: 'Khay Phản Quang UV',
    description: 'Công nghệ UV diệt khuẩn 99.9%, ngăn ngừa mùi hôi và vi khuẩn phát triển.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Wind,
    title: 'Hệ Thống Khử Mùi',
    description: 'Bộ lọc than hoạt tính cao cấp khử mùi hôi hiệu quả, giữ không khí luôn thơm tho.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Smartphone,
    title: 'Điều Khiển Từ Xa',
    description: 'Kết nối app PETKIT trên điện thoại, theo dõi và điều khiển từ bất cứ đâu.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Shield,
    title: 'An Toàn Tuyệt Đối',
    description: 'Cảm biến an toàn dừng hoạt động khi thú cưng tiếp cận, bảo vệ tối đa.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Clock,
    title: 'Theo Dõi Sức Khỏe',
    description: 'Ghi nhật ký sử dụng, theo dõi tần suất đi vệ sinh để cảnh báo sức khỏe.',
    color: 'from-green-500 to-green-600'
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
            Tính Năng Nổi Bật
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Công nghệ tiên tiến nhất giúp chăm sóc thú cưng dễ dàng hơn bao giờ hết
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
