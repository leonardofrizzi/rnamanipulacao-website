'use client'

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { HiLightBulb, HiShieldCheck, HiBeaker, HiHeart, HiSparkles } from 'react-icons/hi'
import { SectionDivider, AnimatedSection } from '@/components/ui'
import { SITE_CONFIG } from '@/constants'

const differentials = [
  {
    icon: HiLightBulb,
    title: 'Inovação com Excelência',
    description: 'Trazemos o que há de mais moderno em manipulação farmacêutica, aliando tecnologia de ponta com o compromisso da qualidade.',
  },
  {
    icon: HiShieldCheck,
    title: 'Consumo Racional',
    description: 'Defendemos o uso consciente de medicamentos, orientando você sobre dosagens e tratamentos adequados às suas necessidades.',
  },
  {
    icon: HiBeaker,
    title: 'Padrão de Qualidade',
    description: 'Nossos laboratórios seguem rigorosos protocolos de controle de qualidade, garantindo a segurança e eficácia de cada fórmula.',
  },
  {
    icon: HiHeart,
    title: 'Atendimento Humanizado',
    description: 'Cada cliente é único. Oferecemos um atendimento personalizado, ouvindo suas necessidades com atenção e cuidado.',
  },
  {
    icon: HiSparkles,
    title: 'Seu Bem-Estar em Primeiro Lugar',
    description: 'Priorizamos sua saúde e qualidade de vida em cada decisão, buscando sempre os melhores resultados para você.',
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 bg-cream overflow-hidden">
      <SectionDivider />

      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold-light/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-wine/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-wine/10 text-wine text-sm font-medium mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wine mb-6">
            Por que escolher a{' '}
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              RNA
            </span>
            ?
          </h2>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20" />

          {differentials.map((item, index) => {
            const isLeft = index % 2 === 0
            return (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className={`relative flex items-start mb-12 lg:mb-16 last:mb-0 ${
                  isLeft ? 'lg:justify-start' : 'lg:justify-end'
                }`}
              >
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-6 lg:top-1/2 lg:-translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gradient-to-br from-gold-light to-gold-dark shadow-lg shadow-gold/30 z-10" />

                <div
                  className={`relative w-full pl-10 lg:pl-0 lg:w-[calc(50%-40px)] ${
                    isLeft ? 'lg:pr-0' : 'lg:pl-0'
                  }`}
                >
                  <div className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-dark hover:border-gold/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-light/5 to-wine/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div className="relative z-10 flex items-start gap-4 lg:gap-6">
                      <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br from-wine to-wine-dark flex items-center justify-center shadow-lg shadow-wine/20 group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="text-gold-light w-5 h-5 lg:w-7 lg:h-7" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-bold text-wine mb-2 group-hover:text-wine-dark transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm lg:text-base text-wine/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r hidden lg:block ${
                        isLeft
                          ? 'right-0 translate-x-full from-gold/50 to-transparent'
                          : 'left-0 -translate-x-full from-transparent to-gold/50'
                      }`}
                    />
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-wine font-bold px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(183,137,0,0.3)] hover:shadow-[0_0_60px_rgba(235,217,72,0.5)]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <FaWhatsapp size={22} className="relative z-10" />
            <span className="relative z-10">Fale com um Especialista</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
