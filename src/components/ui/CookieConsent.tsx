'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setMounted(true)
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShow(false)
  }

  if (!mounted || !show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-wine border-t border-gold/20">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/80 text-sm text-center sm:text-left">
          Utilizamos cookies para melhorar sua experiência.{' '}
          <Link href="/politica-de-privacidade" className="text-gold-light hover:underline">
            Saiba mais
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-gold text-wine font-semibold text-sm rounded-full hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            Aceitar
          </button>
          <button
            onClick={handleDecline}
            className="px-5 py-2 text-white/70 hover:text-white text-sm transition-colors whitespace-nowrap"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  )
}
