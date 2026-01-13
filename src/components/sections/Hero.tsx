'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_CONFIG } from '@/constants'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Farmácia de Manipulação"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-wine/90 via-wine/80 to-wine-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/50 via-transparent to-transparent" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-light/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gold-dark/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-light animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Farmácia de Manipulação</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Medicamentos{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
                sob medida
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-gold-light/30 to-gold-dark/30 blur-sm rounded-full" />
              <span className="absolute -inset-1 bg-gradient-to-r from-gold-light/20 to-gold-dark/20 blur-xl rounded-lg -z-10" />
            </span>
            <br />
            <span className="text-white/90">para sua saúde</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Fórmulas personalizadas com a qualidade que você merece.
            <span className="text-white/90 font-medium"> Atendimento especializado no Rio de Janeiro.</span>
          </p>

          <Link
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-wine font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(183,137,0,0.3)] hover:shadow-[0_0_60px_rgba(235,217,72,0.5)]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <FaWhatsapp size={22} className="relative z-10" />
            <span className="relative z-10">Solicite seu Orçamento</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
