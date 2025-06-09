"use client"

import Image from "next/image"

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-capture-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-100">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Company Logo/Name */}
        <div className="mb-8 fade-in">
            <Image 
                src="/OPS-Wordmark-Colour-Black-svg.svg" 
                alt="OP Systems" 
                width={300}
                height={80}
                className="mx-auto h-8 w-auto"
            />
        </div>

        {/* Main Headline */}
        <div className="fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            More Boots on the Ground,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Less Admin in Chairs
            </span>
          </h2>
        </div>

        {/* Subheadline */}
        <div className="fade-in">
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform operational chaos into intelligent systems that let your construction team 
            focus on delivery, not paperwork. Digital transformation, ISO compliance, 
            and process automation for growing businesses.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button onClick={scrollToForm} className="btn-accent">
            Request Free Template
          </button>
          <button onClick={scrollToContact} className="btn-primary">
            Get In Touch
          </button>
        </div>

        {/* Credibility Line */}
        <div className="fade-in">
          <p className="text-gray-500 italic">
            15+ years in construction operations • ISO 9001/14001/45001 specialist • 
            Helping companies deploy overhead back to revenue-generating activities
          </p>
        </div>
      </div>
    </section>
  )
}