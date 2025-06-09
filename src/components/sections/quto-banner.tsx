import { ArrowRight, Sparkles } from "lucide-react"

export function QutoBanner() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-100">
              Building the Future
            </span>
            <Sparkles className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building the Next Generation of AI-Powered Solutions
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            After helping companies transform with existing tools, I&apos;m building my own AI-powered 
            software to take systems and automation to a whole new level. The future is 10x-ing 
            your operations to get more boots on the ground, increase client value, and unlock 
            explosive growth while leaving competitors behind.
          </p>
          
          <div className="text-center">
            <a 
              href="https://quto.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg items-center gap-2 mb-3"
            >
              Quto - See What&apos;s Coming
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <p className="text-blue-200 text-sm">
              Early access registration available now
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}