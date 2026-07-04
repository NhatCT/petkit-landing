'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Heart, ShoppingCart } from 'lucide-react'
import { useStore } from '@/store/useStore'

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useStore()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') {
      document.documentElement.classList.add('dark')
      useStore.setState({ darkMode: true })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Tính năng', href: '#features' },
    { label: 'Thông số', href: '#specs' },
    { label: 'Hình ảnh', href: '#gallery' },
    { label: 'Liên hệ', href: '#contact' },
  ]

  const { wishlist, cartCount, toggleCart } = useStore()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg'
          : 'bg-gradient-to-r from-blue-600 to-cyan-500'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img
              src="https://bizweb.dktcdn.net/100/492/700/themes/953114/assets/logo.png?1777695381976"
              alt="PETKIT Việt Nam"
              className="h-8 md:h-10 w-auto"
              loading="eager"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white hover:text-blue-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 md:gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>

            <button
              onClick={toggleCart}
              className="hidden md:flex p-2 rounded-lg hover:bg-white/20 transition-colors relative"
              aria-label="Mở giỏ hàng"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              {cartCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-blue-600 text-xs rounded-full flex items-center justify-center font-semibold">
                  {cartCount()}
                </span>
              )}
            </button>

            <button
              onClick={toggleCart}
              className="hidden md:flex p-2 rounded-lg hover:bg-white/20 transition-colors relative"
              aria-label="Danh sách yêu thích"
            >
              <Heart className="w-5 h-5 text-white" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-red-600 text-xs rounded-full flex items-center justify-center font-semibold">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/20"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blue-700 border-t border-blue-500"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-white hover:text-blue-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}