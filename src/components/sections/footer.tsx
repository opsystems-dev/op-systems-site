export function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-3xl px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-center">
            
            {/* Quick Links */}
            <div className="md:text-left">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#lead-capture-form" className="hover:text-white transition-colors">Request Template</a></li>
                <li><a href="https://quto.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Quto.app</a></li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <div className="space-y-2 text-gray-400">
                <a href="mailto:haiden@op.systems" className="hover:text-white transition-colors">haiden@op.systems</a>
                <p>ABN: 90 668 139 286</p>
                <p>Gold Coast, Australia</p>
              </div>
            </div>

            {/* Follow */}
            <div className="md:text-right">
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.linkedin.com/in/haidenbaker" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://x.com/haidenbaker" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X / Twitter</a></li>
                <li><a href="https://github.com/haidenbaker" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
  
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 OP Systems Pty Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }