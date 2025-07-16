import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              Dharshan's <span className="text-white">Portfolio</span>
            </h3>
            <p className="text-gray-400">Creating beautiful web experiences</p>
          </div>

          <div className="flex space-x-6">
  <a
    href="https://github.com/Dacchu2004"
    className="text-gray-400 hover:text-[#6e5494] transition-colors"
    aria-label="GitHub"
  >
    <Github className="h-6 w-6" />
  </a>
  <a
    href="https://www.linkedin.com/in/dharshans2004/"
    className="text-gray-400 hover:text-[#0077B5] transition-colors"
    aria-label="LinkedIn"
  >
    <Linkedin className="h-6 w-6" />
  </a>
            {/* <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a> */}
            {/* <a
              href="mailto:dharshans.2429@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            > */}
            <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=dharshans.2429@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#D44638] transition-colors"
    aria-label="Email"
  >
    <Mail className="h-6 w-6" />
  </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Developer Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
