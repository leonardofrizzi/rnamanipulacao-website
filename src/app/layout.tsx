import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { SITE_CONFIG } from '@/constants'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rnamanipulacao.com.br'),
  title: {
    default: `${SITE_CONFIG.name} | Farmácia de Manipulação no Rio de Janeiro - Barra da Tijuca`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Farmácia de manipulação no Rio de Janeiro, Barra da Tijuca. Medicamentos manipulados personalizados, dermocosméticos, suplementos, homeopatia e fitoterápicos. Entrega em todo RJ. WhatsApp (21) 98290-1000.',
  keywords: [
    'farmácia de manipulação',
    'farmácia de manipulação rio de janeiro',
    'farmácia de manipulação barra da tijuca',
    'farmácia de manipulação rj',
    'manipulação farmacêutica',
    'medicamentos manipulados',
    'medicamentos manipulados rio de janeiro',
    'medicamentos personalizados',
    'fórmulas magistrais',
    'dermocosméticos manipulados',
    'suplementos manipulados',
    'hormônios bioidênticos',
    'homeopatia rio de janeiro',
    'fitoterápicos manipulados',
    'manipulação barra da tijuca',
    'farmácia barra da tijuca',
    'RNA Manipulação',
    'Receita Natural Ativa',
    'entrega medicamentos rio de janeiro',
    'orçamento medicamento manipulado',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  alternates: {
    canonical: 'https://rnamanipulacao.com.br',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://rnamanipulacao.com.br',
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Farmácia de Manipulação no Rio de Janeiro - Barra da Tijuca`,
    description:
      'Farmácia de manipulação no Rio de Janeiro, Barra da Tijuca. Medicamentos manipulados personalizados, dermocosméticos, suplementos e homeopatia. Entrega em todo RJ.',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'RNA Manipulação - Farmácia de Manipulação no Rio de Janeiro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Farmácia de Manipulação no Rio de Janeiro`,
    description:
      'Farmácia de manipulação no Rio de Janeiro, Barra da Tijuca. Medicamentos manipulados personalizados. Entrega em todo RJ.',
    images: ['/images/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'SEU_CODIGO_GOOGLE_SEARCH_CONSOLE',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Pharmacy',
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.fullName,
  description: SITE_CONFIG.description,
  url: 'https://rnamanipulacao.com.br',
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. das Américas, 11365, lj 105-107',
    addressLocality: 'Rio de Janeiro',
    addressRegion: 'RJ',
    postalCode: '22793-082',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.0089,
    longitude: -43.3847,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  image: 'https://rnamanipulacao.com.br/images/hero.webp',
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
  },
  sameAs: [SITE_CONFIG.instagram],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual a vantagem de manipular meu medicamento na RNA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na RNA você tem acesso a fórmulas 100% personalizadas, com dosagens exatas para o seu tratamento, atendimento humanizado de farmacêuticos especializados, preços competitivos e entrega rápida em todo o Rio de Janeiro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso de receita médica para comprar medicamentos manipulados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para medicamentos controlados e fórmulas com substâncias que exigem prescrição, sim, é necessário apresentar receita médica válida. Já para dermocosméticos, suplementos vitamínicos e algumas fórmulas fitoterápicas, a receita pode não ser obrigatória.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o prazo de entrega dos medicamentos manipulados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O prazo de produção varia de acordo com a complexidade da fórmula, geralmente entre 1 a 3 dias úteis. Para a Barra da Tijuca e regiões próximas, a entrega pode ser feita no mesmo dia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês fazem entrega de medicamentos manipulados no Rio de Janeiro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! Realizamos entregas em toda a cidade do Rio de Janeiro e região metropolitana. Nossa farmácia está localizada na Barra da Tijuca, na Av. das Américas, 11.365.',
      },
    },
    {
      '@type': 'Question',
      name: 'Medicamento manipulado é mais barato que o industrializado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em muitos casos, sim! O medicamento manipulado permite que você compre exatamente a quantidade necessária para seu tratamento, evitando desperdício. Além disso, é possível combinar vários princípios ativos em uma única cápsula.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
