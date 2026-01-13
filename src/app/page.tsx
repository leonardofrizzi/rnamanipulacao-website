import { Navbar } from '@/components/layout'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="min-h-screen bg-wine flex items-center justify-center">
          <h1 className="text-4xl text-gold-light">Hero Section</h1>
        </section>
        <section id="servicos" className="min-h-screen bg-cream flex items-center justify-center">
          <h2 className="text-4xl text-wine">Serviços</h2>
        </section>
      </main>
    </>
  )
}
