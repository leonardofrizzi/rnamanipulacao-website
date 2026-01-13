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
  title: {
    default: `${SITE_CONFIG.name} | Farmácia de Manipulação no Rio de Janeiro`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'farmácia de manipulação',
    'manipulação farmacêutica',
    'medicamentos manipulados',
    'farmácia Rio de Janeiro',
    'RNA Manipulação',
    'Receita Natural Ativa',
    'medicamentos personalizados',
    'fórmulas magistrais',
    'dermocosméticos',
    'suplementos manipulados',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Farmácia de Manipulação no Rio de Janeiro`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Farmácia de Manipulação no Rio de Janeiro`,
    description: SITE_CONFIG.description,
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
