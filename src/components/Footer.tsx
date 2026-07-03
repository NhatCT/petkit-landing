export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://bizweb.dktcdn.net/100/492/700/themes/953114/assets/logo.png?1777695381976"
                alt="PETKIT Việt Nam"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Thiết bị thông minh hàng đầu dành cho thú cưng. Công nghệ hiện đại,
              thiết kế tinh tế.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Sản phẩm</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Purobot Ultra</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Tính năng</a></li>
              <li><a href="#specs" className="hover:text-white transition-colors">Thông số</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Hình ảnh</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-sm">
              <li>Hotline: 0799 258 929</li>
              <li>Email: support@petkit.vn</li>
              <li>Địa chỉ: HeLiPet - Đại lý ủy quyền PETKIT</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; 2024 PETKIT Vietnam. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-white transition-colors">Bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  )
}