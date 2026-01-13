'use client'

import Link from 'next/link'
import { FaCapsules, FaFlask, FaLeaf, FaDumbbell, FaHeart, FaPrescriptionBottleAlt, FaWhatsapp } from 'react-icons/fa'
import { SectionDivider, AnimatedSection } from '@/components/ui'
import { SITE_CONFIG } from '@/constants'

const services = [
  {
    icon: FaCapsules,
    title: 'Medicamentos Personalizados',
    description: 'Fórmulas desenvolvidas exclusivamente para suas necessidades, com dosagens e combinações únicas.',
  },
  {
    icon: FaFlask,
    title: 'Dermocosméticos',
    description: 'Tratamentos para pele e cabelo com ativos de alta performance e formulações sob medida.',
  },
  {
    icon: FaLeaf,
    title: 'Fitoterápicos',
    description: 'Medicamentos naturais à base de plantas medicinais com eficácia comprovada.',
  },
  {
    icon: FaDumbbell,
    title: 'Suplementação Esportiva',
    description: 'Suplementos personalizados para otimizar seu desempenho e recuperação atlética.',
  },
  {
    icon: FaHeart,
    title: 'Hormônios Bioidênticos',
    description: 'Reposição hormonal personalizada com hormônios idênticos aos produzidos pelo corpo.',
  },
  {
    icon: FaPrescriptionBottleAlt,
    title: 'Homeopatia',
    description: 'Tratamentos homeopáticos individualizados para diversas condições de saúde.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative py-24 bg-cream">
      <SectionDivider />
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-wine/10 text-wine text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wine mb-6">
            Soluções para sua{' '}
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              saúde
            </span>
          </h2>
          <p className="text-lg text-wine/70 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços farmacêuticos com foco em qualidade, personalização e atendimento especializado.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-dark hover:border-gold/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-light/5 to-gold-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-wine to-wine-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-wine/20">
                  <service.icon size={24} className="text-gold-light" />
                </div>

                <h3 className="text-xl font-bold text-wine mb-3 group-hover:text-wine-dark transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-wine/60 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-gold-light/10 to-gold-dark/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
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
