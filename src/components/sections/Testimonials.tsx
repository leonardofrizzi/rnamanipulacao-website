'use client'

import Link from 'next/link'
import { SectionDivider, AnimatedSection } from '@/components/ui'
import { FcGoogle } from 'react-icons/fc'
import { HiStar } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Qiu Jianmei',
    text: 'Ótimo atendimento e rápido, ótimo preço e mantendo a melhor qualidade do manipulado!',
    rating: 5,
  },
  {
    name: 'Sheila da Costa Ramos',
    text: 'Atendimento muito bom. A medicação chega sempre no dia certo. Já comprei por duas vezes e até agora gostei muito.',
    rating: 5,
  },
  {
    name: 'Ana',
    text: 'Tive uma ótima experiência. O produto chegou rápido e o atendimento foi perfeito.',
    rating: 5,
  },
  {
    name: 'Milene Gomes',
    text: 'Nunca me arrependo de realizar minhas compras de manipulados com vocês, os produtos são perfeitos e eu e minhas clientes estamos amando!',
    rating: 5,
  },
  {
    name: 'Mara Cristian da Silva',
    text: 'Excelente atendimento! Fiz duas compras com o laboratório. Respondem rápido as mensagens e atendem as ligações. Todas as dúvidas que tive foram sanadas.',
    rating: 5,
  },
  {
    name: 'Alice Maia Santos',
    text: 'Muito bom os resultados dos produtos.',
    rating: 5,
  },
  {
    name: 'Débora Alves Magalhães',
    text: 'Atendimento excelente, ágil. E os produtos? Lindas embalagens que encantam. Obrigada!',
    rating: 5,
  },
  {
    name: 'Jones Velasco',
    text: 'Muito satisfeito! Atendimento e entrega rápida e eficiente.',
    rating: 5,
  },
  {
    name: 'Aurea Vigna',
    text: 'Super aprovada! Sempre fazendo minhas formulações com excelência e comprometimento!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 bg-wine overflow-hidden">
      <SectionDivider />

      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gold-light/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-gold-light text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            O que nossos{' '}
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              clientes
            </span>{' '}
            dizem
          </h2>

          <div className="flex items-center justify-center gap-3 mt-8">
            <FcGoogle size={32} />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} size={24} className="text-yellow-400" />
              ))}
            </div>
            <span className="text-white/80 font-medium">5.0 no Google</span>
          </div>
        </AnimatedSection>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.05}
              className="break-inside-avoid mb-6 group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-white/20 hover:border-gold/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-wine to-wine-dark flex items-center justify-center text-gold-light font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-wine text-sm">{testimonial.name}</p>
                    <div className="flex items-center gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <HiStar key={i} size={14} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <FcGoogle size={20} className="ml-auto" />
                </div>
                <p className="text-wine/70 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://www.google.com/maps/place/RNA+-+Manipula%C3%A7%C3%A3o+Farmac%C3%AAutica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-light hover:text-gold transition-colors font-medium"
          >
            <FcGoogle size={20} />
            Ver todas as avaliações no Google
          </Link>
        </div>
      </div>
    </section>
  )
}
