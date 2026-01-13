import { Navbar } from '@/components/layout'
import { Hero } from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="servicos" className="min-h-screen bg-cream flex items-center justify-center">
          <h2 className="text-4xl text-wine">Serviços</h2>
        </section>
      </main>
    </>
  )
}
