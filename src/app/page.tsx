import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { LeadCapture } from "@/components/sections/lead-capture"
import { FounderBrief } from "@/components/sections/founder-brief"
import { QutoBanner } from "@/components/sections/quto-banner"
import { Footer } from "@/components/sections/footer"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <LeadCapture />
      <FounderBrief />
      <QutoBanner />
      <Contact />
      <Footer />
    </main>
  )
}