import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { LeadCapture } from "@/components/sections/lead-capture"
import { FounderBrief } from "@/components/sections/founder-brief"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <LeadCapture />
      <FounderBrief />

      {/* Placeholder for next sections */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Lead capture section coming next...</h3>
        </div>
      </section>
    </main>
  )
}