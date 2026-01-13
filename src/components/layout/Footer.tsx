import Link from 'next/link'
import { SITE_CONFIG } from '@/constants'

export function Footer() {
  return (
    <footer className="bg-wine-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
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
    </footer>
  )
}
