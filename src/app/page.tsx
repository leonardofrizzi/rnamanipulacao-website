import { Navbar, Footer } from '@/components/layout'
import { Hero, Services, About, Differentials, Testimonials, Location, Instagram, FAQ } from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Differentials />
        <Testimonials />
        <Location />
        <Instagram />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
