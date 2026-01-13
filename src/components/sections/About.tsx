'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { SectionDivider, AnimatedSection } from '@/components/ui'
import { SITE_CONFIG } from '@/constants'

export function About() {
  return (
    <section id="sobre" className="relative py-24 bg-wine">
      <SectionDivider />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-gold-light text-sm font-medium mb-6">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              RNA —{' '}
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
                Receita Natural Ativa
              </span>
            </h2>

            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Seguimos uma abordagem personalizada, respeitando as diferenças de cada pessoa, produzindo produtos de qualidade através das melhores técnicas, equipamentos e profissionais qualificados.
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              Trazemos a inovação e o conceito da excelência com padrão rigoroso de qualidade e transparência. Juntos criamos a conexão entre a ciência e o cuidado único e personalizado para oferecer saúde, bem-estar e qualidade de vida.
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10">
              <div className="text-center">
                <div className="text-lg md:text-3xl font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-1 md:mb-2">
                  Qualidade
                </div>
                <p className="text-white/60 text-xs md:text-sm">Padrão rigoroso</p>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-3xl font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-1 md:mb-2">
                  Inovação
                </div>
                <p className="text-white/60 text-xs md:text-sm">Técnicas modernas</p>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-3xl font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-1 md:mb-2">
                  Cuidado
                </div>
                <p className="text-white/60 text-xs md:text-sm">Atendimento único</p>
              </div>
            </div>

            <div className="mt-10 hidden lg:block">
              <Link
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-wine font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(183,137,0,0.3)] hover:shadow-[0_0_60px_rgba(235,217,72,0.5)]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FaWhatsapp size={22} className="relative z-10" />
                <span className="relative z-10">Fale Conosco</span>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="relative order-last lg:order-last flex">
            <div className="relative w-full rounded-2xl overflow-hidden min-h-[300px] lg:min-h-0">
              <Image
                src="/images/sobre.webp"
                alt="RNA Manipulação"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gold-light/20 to-gold-dark/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-gold-light/10 to-gold-dark/10 rounded-full blur-xl" />
          </AnimatedSection>
        </div>

        <div className="mt-12 text-center lg:hidden">
          <Link
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-wine font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(183,137,0,0.3)] hover:shadow-[0_0_60px_rgba(235,217,72,0.5)]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <FaWhatsapp size={22} className="relative z-10" />
            <span className="relative z-10">Fale Conosco</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
