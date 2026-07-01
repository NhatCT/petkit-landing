import { motion } from 'framer-motion';
import { Share2, Camera, Video, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              PETKIT Việt Nam
            </h3>
            <p className="text-gray-400 mb-4">
              Nhà phân phối ủy quyền chính thức của PETKIT tại Việt Nam. 
              Sản phẩm chính hãng 100%.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Video className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Sản Phẩm</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Máy Dọn Phân Mèo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Lồng Sấy Lông</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Máy Ăn Thông Minh</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Máy Lọc Nước</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Chính Sách Bảo Hành</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Hướng Dẫn Sử Dụng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Câu Hỏi Thường Gặp</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Liên Hệ</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>0799 258 929</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@petkitvietnam.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span>Hà Nội & TP. Hồ Chí Minh</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2025 PETKIT Việt Nam by HeLiCorp. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
