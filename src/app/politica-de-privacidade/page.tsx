import { Navbar, Footer } from '@/components/layout'
import { SITE_CONFIG } from '@/constants'

export default function PoliticaPrivacidade() {
  return (
    <>
      <Navbar solid />
      <main className="bg-cream min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-wine mb-8">
              Política de Privacidade
            </h1>

            <div className="prose prose-wine max-w-none space-y-6 text-wine/80">
              <p>
                A {SITE_CONFIG.name} está comprometida em proteger a privacidade dos visitantes do nosso site e dos nossos clientes. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
              </p>

              <h2 className="text-xl font-bold text-wine mt-8 mb-4">Informações que Coletamos</h2>
              <p>
                Podemos coletar as seguintes informações quando você utiliza nosso site ou serviços:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome e informações de contato (telefone, e-mail, endereço)</li>
                <li>Informações de prescrições médicas para manipulação de medicamentos</li>
                <li>Dados de navegação e cookies para melhorar sua experiência no site</li>
              </ul>

              <h2 className="text-xl font-bold text-wine mt-8 mb-4">Como Usamos suas Informações</h2>
              <p>
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processar pedidos e fornecer nossos serviços de manipulação farmacêutica</li>
                <li>Entrar em contato sobre seus pedidos e atendimento</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Cumprir obrigações legais e regulatórias do setor farmacêutico</li>
              </ul>

              <h2 className="text-xl font-bold text-wine mt-8 mb-4">Proteção de Dados</h2>
              <p>
                Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Seus dados de saúde são tratados com sigilo conforme as normas da ANVISA e legislação vigente.
              </p>

              <h2 className="text-xl font-bold text-wine mt-8 mb-4">Compartilhamento de Informações</h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar dados apenas quando necessário para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cumprir obrigações legais</li>
                <li>Realizar entregas através de parceiros logísticos</li>
                <li>Processar pagamentos de forma segura</li>
              </ul>

              <h2 className="text-xl font-bold text-wine mt-8 mb-4">Seus Direitos</h2>
              <p>
                Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais. Para exercer esses direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco pelo WhatsApp {SITE_CONFIG.phone} ou visite nossa loja.
              </p>

              <h2 className="text-xl font-bold text-wine mt-8 mb-4">Alterações nesta Política</h2>
              <p>
                Reservamo-nos o direito de atualizar esta política periodicamente. Recomendamos que você revise esta página ocasionalmente para se manter informado sobre como protegemos suas informações.
              </p>

              <h2 className="text-xl font-bold text-wine mt-8 mb-4">Contato</h2>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade, entre em contato:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>WhatsApp: {SITE_CONFIG.phone}</li>
                <li>Endereço: {SITE_CONFIG.address}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
