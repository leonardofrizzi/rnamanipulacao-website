'use client'

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { HiLocationMarker, HiClock } from 'react-icons/hi'
import { SectionDivider, AnimatedSection } from '@/components/ui'
import { SITE_CONFIG } from '@/constants'

export function Location() {
  return (
    <section id="localizacao" className="relative py-24 bg-cream overflow-hidden">
      <SectionDivider />

      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold-light/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-wine/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-wine/10 text-wine text-sm font-medium mb-4">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wine mb-6">
            Venha nos{' '}
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              visitar
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="relative w-full h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0876!2d-43.3847!3d-23.0089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2b0c5e8d7f%3A0x1234567890abcdef!2sAv.%20das%20Am%C3%A9ricas%2C%2011365%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-082!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização RNA Manipulação"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-wine to-wine-dark flex items-center justify-center shadow-lg shadow-wine/20">
                  <HiLocationMarker size={24} className="text-gold-light" />
                </div>
                <div>
                  <h3 className="font-bold text-wine mb-1">Endereço</h3>
                  <p className="text-wine/70 text-sm leading-relaxed">
                    Av. das Américas, 11.365<br />
                    Barra da Tijuca, Rio de Janeiro - RJ<br />
                    CEP: 22793-082
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-wine to-wine-dark flex items-center justify-center shadow-lg shadow-wine/20">
                  <HiClock size={24} className="text-gold-light" />
                </div>
                <div>
                  <h3 className="font-bold text-wine mb-1">Horário</h3>
                  <p className="text-wine/70 text-sm leading-relaxed">
                    Seg - Sex: 9h às 19h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-6 shadow-sm border border-cream-dark hover:border-gold/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-wine to-wine-dark flex items-center justify-center shadow-lg shadow-wine/20">
                  <FaWhatsapp size={24} className="text-gold-light" />
                </div>
                <div>
                  <h3 className="font-bold text-wine mb-1">WhatsApp</h3>
                  <p className="text-wine/70 text-sm leading-relaxed">
                    (21) 98290-1000
                  </p>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
