'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useStore } from '@/store/useStore'

export default function WishlistPanel() {
  const { wishlistOpen, toggleWishlistPanel, wishlist, toggleWishlist } = useStore()
  const [wishlistItems, setWishlistItems] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (wishlistOpen) {
      loadWishlist()
    }
  }, [wishlistOpen])

  const loadWishlist = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/wishlist?userId=guest')
      if (response.ok) {
        const data = await response.json()
        setWishlistItems(data.wishlist || [])
      }
    } catch (error) {
      console.error('Error loading wishlist:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {wishlistOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={toggleWishlistPanel}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b dark:border-slate-800 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Danh sách yêu thích ({wishlist.length})
              </h2>
              <button
                onClick={toggleWishlistPanel}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                aria-label="Đóng danh sách yêu thích"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {loading ? (
                <div className="h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              ) : wishlistItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400 gap-2">
                  <p className="font-medium">Danh sách yêu thích trống</p>
                  <p className="text-sm">Thêm sản phẩm để bắt đầu</p>
                </div>
              ) : (
                wishlistItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {item.id}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleWishlist(item.id)}
                      className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                      aria-label="Xóa khỏi danh sách"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}