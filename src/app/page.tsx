import { Navbar } from '@/components/layout'
import { Hero, Services } from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  )
}
