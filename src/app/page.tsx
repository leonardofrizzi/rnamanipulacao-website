import { Navbar } from '@/components/layout'
import { Hero, Services, About, Differentials, Testimonials, Location, Instagram } from '@/components/sections'

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
      </main>
    </>
  )
}
