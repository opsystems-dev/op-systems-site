"use client"

import { useState, useEffect } from "react"
import { FileText, Mail, Send } from "lucide-react"

export function LeadCapture() {
  const [currentSuggestion, setCurrentSuggestion] = useState(0)
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [request, setRequest] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const suggestions = [
    {
      title: "Daily Cost Tracking Template",
      description: "We're losing money on jobs and can't see where costs are blowing out until it's too late"
    },
    {
      title: "SWMS Template", 
      description: "Creating safety documents from scratch every time is taking forever and they're inconsistent"
    },
    {
      title: "Plant Prestart Template",
      description: "Paper checklists get lost and we spend hours manually documenting them"
    },
    {
      title: "Company Policy For XYZ",
      description: "We need professional policies but don't know what to include or how to structure them"
    },
    {
      title: "Daily Activity Record",
      description: "Field teams struggle to document their daily work clearly and supervisors can't track progress"
    },
    {
      title: "Employee Training Matrix",
      description: "We have no visibility on who's trained for what and compliance training keeps getting missed"
    },
    {
      title: "Server Folder Structure",
      description: "Our files are a complete mess and nobody can find anything when they need it"
    },
    {
      title: "Leave Application Forms",
      description: "Managing leave requests is chaotic with no proper system for approvals and record keeping"
    }
  ]

  // Cycle through suggestions every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSuggestion((prev) => (prev + 1) % suggestions.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [suggestions.length])

  const handleSuggestionClick = (suggestion: any) => {
    setRequest(`${suggestion.title}\n\n${suggestion.description}`)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch("https://formspree.io/f/meokagzz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          company: company,
          email: email,
          request: request
        })
      })
      
      if (response.ok) {
        setSubmitted(true)
        // Remove the auto-reset timeout for real submissions
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  if (submitted) {
    return (
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h3>
            <p className="text-lg text-gray-600 mb-6">
              I'll get your template ready and send it over within 24 hours. 
              Keep an eye on your inbox!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-capture-form" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get a Free Template to Use Immediately
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'll create a custom template or document for your specific needs and send it over within 24 hours. 
            No charge, no strings attached - just immediate value for your business.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Left: Cycling Suggestions */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Popular Requests:</h3>
              </div>
              
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full text-left p-2 rounded-lg border-2 transition-all duration-300 min-h-[50px] flex items-center ${
                      index === currentSuggestion 
                        ? 'border-blue-500 bg-blue-50 shadow-sm' 
                        : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <span className={`font-medium ${
                      index === currentSuggestion ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      {suggestion.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <Send className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Request Your Template</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-[50px] flex items-center"
                        required
                    />
                    
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-[50px] flex items-center"
                        required
                    />
                    
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Work Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-[50px] flex items-center"
                        required
                    />
                    
                    <textarea
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                        rows={5}
                        placeholder={`${suggestions[currentSuggestion].title}\n\n${suggestions[currentSuggestion].description}`}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-[146px] resize-none"
                        required
                    />

                    <p className="text-gray-600 text-sm leading-relaxed">
                        Tell me what document and why. 
                        The more context the you give me, the better I can tailor it to your business.
                    </p>
                    
                    <button type="submit" className="w-full btn-accent text-lg py-4">
                        Send My Request
                    </button>
                </form>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                    I'll personally create and send your template within 24 hours
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}