import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink } from 'lucide-react';

const products = [
  {
    name: 'PETKIT Pura Max 2',
    category: 'Máy Dọn Phân Mèo',
    description: 'Tự động dọn sạch, khử mùi hôi, theo dõi sức khỏe 24/7',
    price: 'Liên hệ',
    image: 'PM2',
    color: 'from-blue-500 to-indigo-600',
    link: 'https://petkitvietnam.com/may-don-phan-meo'
  },
  {
    name: 'PETKIT AirSalon Max Pro',
    category: 'Lồng Sấy Lông',
    description: 'Sấy lông nhanh chóng, an toàn cho thú cưng',
    price: 'Liên hệ',
    image: 'AS',
    color: 'from-purple-500 to-pink-600',
    link: 'https://petkitvietnam.com/long-say-long-cho-meo'
  },
  {
    name: 'PETKIT Fresh Element',
    category: 'Máy Ăn Thông Minh',
    description: 'Điều khiển từ xa, camera HD, phân chia khẩu phần',
    price: 'Liên hệ',
    image: 'FE',
    color: 'from-green-500 to-teal-600',
    link: 'https://petkitvietnam.com/may-cho-thu-cung-an'
  },
  {
    name: 'PETKIT Eversweet 7',
    category: 'Máy Lọc Nước',
    description: 'Lọc nước đa tầng, giữ nước luôn sạch và tươi',
    price: 'Liên hệ',
    image: 'ES',
    color: 'from-cyan-500 to-blue-600',
    link: 'https://petkitvietnam.com/may-loc-nuoc'
  }
];

const ProductGallery = () => {
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
            Sản Phẩm Nổi Bật
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Khám phá các sản phẩm công nghệ PETKIT hàng đầu giúp chăm sóc thú cưng tốt hơn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`aspect-square bg-gradient-to-br ${product.color} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white text-3xl font-bold">{product.image}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    Chi tiết
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
          className="mt-12 text-center"
        >
          <a
            href="https://petkitvietnam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="w-5 h-5" />
            Xem Tất Cả Sản Phẩm
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;
