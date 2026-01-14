import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { SITE_CONFIG } from '@/constants'

export function Footer() {
  return (
    <footer className="bg-wine-dark py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-gold-light transition-colors"
          >
            <FaInstagram size={24} />
            <span className="text-sm">@rnamanipulacao</span>
          </Link>

          <div className="text-white/60 text-sm space-y-1">
            <p>{SITE_CONFIG.address}</p>
            <p>CNPJ: 50.144.853/0001-75</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-white/60 text-sm">
            <p>
              © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.
            </p>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-gold-light transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
