'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { NAV_LINKS, SITE_CONFIG } from '@/constants'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-500">
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled
            ? 'mt-4 max-w-5xl rounded-full bg-wine/95 backdrop-blur-md shadow-2xl shadow-wine/20 px-6 py-3 border border-gold-dark/20'
            : 'mt-0 max-w-7xl bg-transparent px-4 py-6'
        }`}
      >
        <Link href="#home" className="relative group">
          <div className={`relative transition-all duration-500 ${
            isScrolled ? 'w-12 h-12' : 'w-20 h-20'
          }`}>
            <Image
              src="/images/rnafarmaciademanipulacao.webp"
              alt={SITE_CONFIG.name}
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <ul className={`hidden lg:flex items-center transition-all duration-500 ${
          isScrolled ? 'gap-5' : 'gap-8'
        }`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-white/80 hover:text-white transition-all duration-300 text-sm font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-dark to-gold-light group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FaInstagram
              size={20}
              className="text-gold-light transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(235,217,72,0.5)]"
            />
          </a>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FaWhatsapp
              size={20}
              className="text-gold-light transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(235,217,72,0.5)]"
            />
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <HiX size={24} className="text-gold-light" />
          ) : (
            <HiMenu size={24} className="text-gold-light" />
          )}
        </button>
      </nav>

      <div
        className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
          isScrolled ? 'mx-auto max-w-5xl' : ''
        } ${isMobileMenuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className={`backdrop-blur-md px-6 py-6 mt-2 border border-gold-dark/20 ${
          isScrolled ? 'bg-wine/95 rounded-2xl' : 'bg-wine/95 rounded-2xl'
        }`}>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 text-base font-medium block py-3 px-4 rounded-xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <FaInstagram size={22} className="text-gold-light" />
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <FaWhatsapp size={22} className="text-gold-light" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
