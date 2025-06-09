"use client"

import { Shield, Zap, TrendingUp } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Compliance & Risk Systems",
      description: "ISO 9001/14001/45001 implementation, SWMS templates, safety documentation, and risk management frameworks that actually work in the real world.",
      examples: ["ISO certification preparation", "Safety management systems", "Risk assessment templates", "Compliance documentation"]
    },
    {
      icon: Zap,
      title: "Digital Transformation", 
      description: "Take your business from paper-based chaos to streamlined digital workflows. Custom solutions that fit your current size and grow with you.",
      examples: ["Automated reporting systems", "Custom built web apps", "Server organisation & structure", "Integration solutions"]
    },
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Cost tracking, project management setup, and process automation that puts control back in your hands and visibility across your operations.",
      examples: ["Daily cost tracking systems", "Tendering templates", "Project management setup", "Process automation"]
    }
  ]

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From compliance headaches to digital workflows, I build the systems that let your team 
            focus on what they do best while keeping everything organised and compliant.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-2 fade-in group border border-transparent hover:border-blue-200">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Examples */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 mb-3">Examples:</p>
                  {service.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-gray-600 mb-6">
            Every business is different. Let&apos;s talk about what you actually need.
          </p>
          <button onClick={scrollToContact} className="btn-primary">
            Let&apos;s Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  )
}