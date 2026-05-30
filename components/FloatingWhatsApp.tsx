'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/85295715155?text=你好，我想查詢地板工程報價'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp 立即查詢地板工程報價"
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-2 rounded-full shadow-lg transition-all hover:scale-105 bg-[#25D366] px-4 py-3"
    >
      <MessageCircle size={20} className="text-white" />
      <span className="font-sans text-sm font-medium text-white hidden md:inline">
        即時報價
      </span>
    </a>
  )
}
