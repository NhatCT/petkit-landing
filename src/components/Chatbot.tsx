'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'
import { useStore } from '@/store/useStore'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content:
      'Xin chào! Tôi là trợ lý AI của PETKIT. Tôi có thể giúp bạn tìm hiểu về Purobot Ultra Camera AI, tư vấn chọn thiết bị phù hợp, hoặc giải đáp thắc mắc. Bạn cần hỗ trợ gì?',
    timestamp: new Date(),
  },
]

const AUTO_RESPONSES: Record<string, string> = {
  'giá': 'PETKIT Purobot Ultra có Camera AI hiện có giá 19.800.000đ (giá gốc 35.000.000đ). Nhập mã WELCOME10 để giảm thêm 10% cho đơn hàng đầu tiên. Bạn muốn tôi tư vấn thêm không?',
  'bảo hành': 'Purobot Ultra được bảo hành chính hãng 24 tháng tại HeLiCorp. Linh kiện chính hãng có sẵn. Hotline: 0799 258 929 (24/7).',
  'mèo': 'Purobot Ultra phù hợp với TẤT CẢ giống mèo, trọng lượng dưới 10kg, từ 6 tháng tuổi và 1.5kg trở lên. Đáp ứng tốt cho 3-5 bé mèo.',
  'giao hàng': 'Miễn phí giao hàng toàn quốc. Lắp đặt tận nơi tại Hà Nội và TP.HCM. Hỗ trợ trả góp 0% lãi suất, miễn phí cà thẻ.',
  'camera': 'Purobot Ultra trang bị Camera AI xoay 180°, góc rộng 210°, hồng ngoại ban đêm và đàm thoại 2 chiều. Theo dõi hành vi mèo real-time qua app.',
  'cát': 'Purobot Ultra có cabin dung tích 70L, hộp chất thải 10L. Tự động niêm phong túi rác liền mạch, không cần tiếp xúc khi đổ rác.',
}

function getAutoResponse(input: string): string {
  const lower = input.toLowerCase()
  for (const [key, response] of Object.entries(AUTO_RESPONSES)) {
    if (lower.includes(key)) return response
  }
  return 'Cảm ơn bạn đã quan tâm! Để được tư vấn chi tiết hơn, bạn có thể để lại thông tin tại mục "Đăng ký nhận tin" hoặc gọi hotline 0799 258 929. Tôi có thể hỗ trợ gì thêm không?'
}

export default function Chatbot() {
  const { chatOpen, toggleChat } = useStore()
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSend() {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000))

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: getAutoResponse(userMessage.content),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, botMessage])
    setIsTyping(false)
  }

  return (
    <>
      {/* Toggle button */}
      <AnimatePresence>
        {!chatOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={toggleChat}
            className="fixed bottom-32 right-8 z-40 w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center hover:shadow-blue-500/50 transition-shadow"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-32 right-8 z-40 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-4rem)] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <div>
                  <h3 className="font-semibold text-sm">PETKIT Assistant</h3>
                  <p className="text-xs text-blue-100">Online</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-1 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-sm'
                        : 'bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-slate-800">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t dark:border-slate-700">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 px-3 py-2 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}