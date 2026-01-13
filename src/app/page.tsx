import { Navbar } from '@/components/layout'
import { Hero, Services, About } from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
    </>
  )
}
