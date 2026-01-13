'use client'

import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { SectionDivider, AnimatedSection } from '@/components/ui'

const faqs = [
  {
    question: 'Qual a vantagem de manipular meu medicamento na RNA?',
    answer: 'Na RNA você tem acesso a fórmulas 100% personalizadas, com dosagens exatas para o seu tratamento, atendimento humanizado de farmacêuticos especializados, preços competitivos e entrega rápida em todo o Rio de Janeiro. Além disso, trabalhamos apenas com matérias-primas de alta qualidade e fornecedores certificados.',
  },
  {
    question: 'Preciso de receita médica para comprar medicamentos manipulados?',
    answer: 'Para medicamentos controlados e fórmulas com substâncias que exigem prescrição, sim, é necessário apresentar receita médica válida. Já para dermocosméticos, suplementos vitamínicos e algumas fórmulas fitoterápicas, a receita pode não ser obrigatória. Nossa equipe está pronta para orientar você sobre cada caso.',
  },
  {
    question: 'Qual o prazo de entrega dos medicamentos manipulados?',
    answer: 'O prazo de produção varia de acordo com a complexidade da fórmula, geralmente entre 1 a 3 dias úteis. Após a produção, realizamos entregas em todo o Rio de Janeiro. Para a Barra da Tijuca e regiões próximas, a entrega pode ser feita no mesmo dia. Entre em contato pelo WhatsApp para mais informações sobre prazos.',
  },
  {
    question: 'Vocês fazem entrega de medicamentos manipulados no Rio de Janeiro?',
    answer: 'Sim! Realizamos entregas em toda a cidade do Rio de Janeiro e região metropolitana. Nossa farmácia está localizada na Barra da Tijuca, na Av. das Américas, 11.365. Você também pode retirar seu pedido diretamente em nossa loja.',
  },
  {
    question: 'Quais tipos de medicamentos a RNA Manipulação produz?',
    answer: 'Produzimos uma ampla variedade de medicamentos personalizados: fórmulas para tratamentos hormonais, dermocosméticos, suplementos vitamínicos, fitoterápicos, homeopatia, medicamentos para emagrecimento, fórmulas para performance esportiva, entre outros. Todos produzidos com matérias-primas de alta qualidade e rigoroso controle de qualidade.',
  },
  {
    question: 'Como faço para solicitar um orçamento?',
    answer: 'É muito simples! Basta enviar a foto da sua receita pelo nosso WhatsApp (21) 98290-1000 que nossa equipe farmacêutica irá analisar e retornar com o orçamento em poucos minutos. Você também pode nos visitar pessoalmente em nossa loja na Barra da Tijuca.',
  },
  {
    question: 'Medicamento manipulado é mais barato que o industrializado?',
    answer: 'Em muitos casos, sim! O medicamento manipulado permite que você compre exatamente a quantidade necessária para seu tratamento, evitando desperdício. Além disso, é possível combinar vários princípios ativos em uma única cápsula, o que pode representar economia significativa comparado à compra de vários medicamentos industrializados separadamente.',
  },
  {
    question: 'A RNA Manipulação é confiável?',
    answer: 'Absolutamente! Somos uma farmácia autorizada pela Vigilância Sanitária, com laboratório equipado seguindo todas as normas da ANVISA. Contamos com farmacêuticos qualificados e utilizamos matérias-primas de fornecedores certificados. Nossa nota 5.0 no Google com dezenas de avaliações positivas reflete nosso compromisso com a qualidade e satisfação dos clientes.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 bg-cream overflow-hidden">
      <SectionDivider />

      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold-light/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-wine/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-wine/10 text-wine text-sm font-medium mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wine mb-6">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.05}
              className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cream/50 transition-colors"
              >
                <span className="font-semibold text-wine pr-4">{faq.question}</span>
                <HiChevronDown
                  size={24}
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-wine/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
