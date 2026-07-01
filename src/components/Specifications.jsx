import { motion } from 'framer-motion';
import { Package, Zap, Ruler, Wifi, Database, Award, Scale, ShieldCheck } from 'lucide-react';

const specs = [
  {
    icon: Package,
    label: 'Kích Thước',
    value: '572 x 578 x 658 mm',
    detail: 'Phù hợp với mèo từ 1.5kg - 10kg'
  },
  {
    icon: Scale,
    label: 'Trọng Lượng',
    value: '12.5 kg',
    detail: 'Thiết kế ổn định, bền bỉ'
  },
  {
    icon: Zap,
    label: 'Nguồn Điện',
    value: '100-240V / 50-60Hz',
    detail: 'Tiết kiệm điện, an toàn tuyệt đối'
  },
  {
    icon: Ruler,
    label: 'Khay Chứa',
    value: '10L dung tích',
    detail: 'Chứa được cho 2-3 mèo trưởng thành'
  },
  {
    icon: Wifi,
    label: 'Kết Nối',
    value: 'WiFi 2.4GHz',
    detail: 'Bluetooth 5.0 + App PETKIT Smart'
  },
  {
    icon: Database,
    label: ' Ứng Dụng',
    value: 'PETKIT Smart',
    detail: 'iOS 12+ & Android 8.0+'
  },
  {
    icon: ShieldCheck,
    label: 'Cảm Biến',
    value: '4 lớp cảm biến',
    detail: '红外, trọng lượng, radar, an toàn'
  },
  {
    icon: Award,
    label: 'Bảo Hành',
    value: '12 tháng chính hãng',
    detail: 'PETKIT Việt Nam by HeLiCorp'
  }
];

const Specifications = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Thông Số Kỹ Thuật Pura Max 2
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thiết kế chính xác với chất lượng cao nhất từ PETKIT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <spec.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                    {spec.label}
                  </h3>
                  <p className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {spec.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {spec.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Đã Bán Hơn 5 Triệu Sản Phẩm Toàn Cầu
          </h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            PETKIT là thương hiệu hàng đầu thế giới về sản phẩm công nghệ cho thú cưng, 
            có mặt tại hơn 35 quốc gia với hơn 5 triệu người dùng.
          </p>
          <a 
            href="https://petkitvietnam.com/may-don-phan-meo" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Xem Sản Phẩm Chi Tiết
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Specifications;
