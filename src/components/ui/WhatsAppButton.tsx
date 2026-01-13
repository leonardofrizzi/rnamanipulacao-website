'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { SITE_CONFIG } from '@/constants'

const messages = [
  'Como podemos ajudar?',
  'Tire suas dúvidas conosco!',
  'Precisa de um orçamento?',
  'Estamos online!',
]

export function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const interval = setInterval(() => {
      setShowMessage(true)
      setMessageIndex((prev) => (prev + 1) % messages.length)

      setTimeout(() => {
        setShowMessage(false)
      }, 3000)
    }, 10000)

    return () => clearInterval(interval)
  }, [dismissed])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showMessage && !dismissed && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl p-4 pr-10 animate-fade-in min-w-[180px]">
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 text-wine/40 hover:text-wine transition-colors"
            aria-label="Fechar"
          >
            <HiX size={16} />
          </button>
          <p className="text-wine text-sm font-medium">{messages[messageIndex]}</p>
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white rotate-45 shadow-xl" />
        </div>
      )}

      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={28} className="text-white" />
      </a>
    </div>
  )
}
