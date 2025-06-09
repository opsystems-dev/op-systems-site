"use client"

import { Mail } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const scrollToForm = () => {
    document.getElementById('lead-capture-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch("https://formspree.io/f/xvgrkalv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _subject: "Contact Form - Project Discussion",
          name: name,
          company: company,
          email: email,
          website: website,
          message: message
        })
      })
      
      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setName("")
          setCompany("")
          setEmail("")
          setWebsite("")
          setMessage("")
        }, 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can eliminate your admin headaches and get your team 
            back to what they do best.
          </p>
          
          {/* Email Button */}
          <a 
            href="mailto:haiden@op.systems?subject=Project Discussion with OP Systems&body=Hi Haiden,%0D%0A%0D%0A[Let me know about your company and what problems you're trying to solve]%0D%0A%0D%0ACompany: %0D%0AWebsite: %0D%0A(if not in your footer)"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3 mb-6"
          >
            <Mail className="h-6 w-6" />
            Email Now
          </a>
          
          <p className="text-gray-600 mb-8">or fill out the form below</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          {submitted ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Message Sent!</h3>
              <p className="text-gray-600">I&apos;ll get back to you within a few hours.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Send a Quick Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Company Website (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="What's your biggest operational headache right now? What would you like to discuss?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  required
                />
                
                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 italic">
            All consultations are free - I&apos;ll tell you honestly if I can help or point you in the right direction.
          </p>
        </div>
      </div>
    </section>
  )
}