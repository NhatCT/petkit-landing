'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useStore } from '@/store/useStore'

export default function CartDrawer() {
  const { cartOpen, toggleCart, clearCart } = useStore()
  const [cartItems, setCartItems] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (cartOpen) {
      loadCart()
    }
  }, [cartOpen])

  const loadCart = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/cart?userId=guest')
      if (response.ok) {
        const data = await response.json()
        setCartItems(data.cart || [])
      }
    } catch (error) {
      console.error('Error loading cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = async (productId: string, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCart(productId)
      return
    }

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'guest',
          product: { id: productId, quantity }
        })
      })

      if (response.ok) {
        await loadCart()
      }
    } catch (error) {
      console.error('Error updating quantity:', error)
    }
  }

  const removeFromCart = async (productId: string) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'guest',
          productId
        })
      })

      if (response.ok) {
        await loadCart()
      }
    } catch (error) {
      console.error('Error removing from cart:', error)
    }
  }

  return (
    <AnimatePresence>
      {cartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={toggleCart}
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
                Giỏ hàng ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
              <div className="flex items-center gap-3">
                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    Xóa tất cả
                  </button>
                )}
                <button
                  onClick={toggleCart}
                  className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                  aria-label="Đóng giỏ hàng"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {loading ? (
                <div className="h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              ) : cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400 gap-2">
                  <p className="font-medium">Giỏ hàng của bạn đang trống</p>
                  <p className="text-sm">Thêm sản phẩm để bắt đầu mua sắm</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex gap-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-bold mb-2">
                        {item.price.toLocaleString('vi-VN')}đ
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600"
                          aria-label="Giảm số lượng"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold text-gray-900 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600"
                          aria-label="Tăng số lượng"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto p-1 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                          aria-label="Xóa sản phẩm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="p-6 border-t dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="text-gray-600 dark:text-gray-400">Tổng cộng:</span>
                <span className="font-bold text-2xl text-gray-900 dark:text-white">
                  {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString('vi-VN')}đ
                </span>
              </div>
              <button
                disabled={cartItems.length === 0}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => alert('Tính năng thanh toán sẽ được tích hợp sau!')}
              >
                Thanh toán
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}