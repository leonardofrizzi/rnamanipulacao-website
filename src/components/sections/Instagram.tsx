'use client'

import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { SectionDivider, AnimatedSection } from '@/components/ui'
import { SITE_CONFIG } from '@/constants'

export function Instagram() {
  return (
    <section id="contato" className="relative py-24 bg-wine overflow-hidden">
      <SectionDivider />

      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gold-light/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-gold-light text-sm font-medium mb-4">
            Contato
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Siga-nos no{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
              Instagram
            </span>
          </h2>

          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Fique por dentro das novidades, dicas de saúde e promoções exclusivas. Acompanhe nosso dia a dia!
          </p>

          <Link
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:shadow-[0_0_60px_rgba(236,72,153,0.5)]"
          >
            <FaInstagram size={22} className="relative z-10" />
            <span className="relative z-10">@rnamanipulacao</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
