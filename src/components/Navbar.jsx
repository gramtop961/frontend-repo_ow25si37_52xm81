import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-white/60 border-b border-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-violet-600" />
              <span className="text-lg font-semibold tracking-tight text-gray-900">warehouse3</span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">Features</a>
              <a href="#faq" className="text-sm text-gray-700 hover:text-gray-900">FAQ</a>
              <a href="#early-access" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-800 transition">Start my 14-day free trial</a>
            </div>

            <button className="md:hidden p-2 rounded-md hover:bg-white/60" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/40 bg-white/70 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
              <a href="#features" className="block text-sm text-gray-700">Features</a>
              <a href="#faq" className="block text-sm text-gray-700">FAQ</a>
              <a href="#early-access" className="block w-full text-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm">Start Trial</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
