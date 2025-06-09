import { CheckCircle } from "lucide-react"

export function FounderBrief() {
  const highlights = [
    "15+ years construction operations",
    "AI & automation implementation expert",
    "Advanced Excel & database solutions",
    "ISO 9001/14001/45001 specialist", 
    "Systems for startups to $20M+ companies",
    "Site engineer → Ops manager → Founder"
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        
        {/* Header - Full Width */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Built by Someone Who&apos;s Lived the Chaos
          </h2>
        </div>

        {/* Middle - Two Columns */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-12">
          
          {/* Left: Content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
                Fifteen years of watching brilliant tradespeople and talented engineers get the life 
                sucked out of them by paperwork, compliance chaos, and systems that create more work 
                instead of eliminating it. I became obsessed with fixing this.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
                I&apos;ve lived this chaos - progressing from site engineer to project manager to 
                operations manager, experiencing every level of operational frustration firsthand. 
                At each step, I was determined to solve the problems that had driven me crazy in 
                the previous role.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
                Now I combine that hard-earned experience with AI and automation to build systems 
                that actually get people back to real work. Tools that eliminate admin burden 
                instead of adding to it. Systems that allow teams to focus on what they do best - building 
                great things.
            </p>
          </div>

          {/* Right: Quote Card - Original Size */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <blockquote className="text-xl italic text-gray-700 mb-6 leading-relaxed">
                &quot;I don&apos;t just theorise about construction problems - I&apos;ve lived them. 
                Now I&apos;m building the tools that actually solve them.&quot;
                </blockquote>
                
                <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                        src="/profile-image-2025.png" 
                        alt="Haiden Baker" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="font-semibold text-gray-900">Haiden Baker</p>
                    <p className="text-gray-600">Founder, OP Systems</p>
                </div>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom - Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}