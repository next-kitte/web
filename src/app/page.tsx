import { APIReference } from "@/src/components/api-reference"
import { Examples } from "@/src/components/examples"
import { Features } from "@/src/components/features"
import { Footer } from "@/src/components/footer"
import { Hero } from "@/src/components/hero"
import { Nav } from "@/src/components/nav"
import { QuickStart } from "@/src/components/quick-start"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Features />
        <QuickStart />
        <APIReference />
        <Examples />
      </main>
      <Footer />
    </div>
  )
}
