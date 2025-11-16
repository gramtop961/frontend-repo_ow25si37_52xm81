export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a href="#top" className="text-sm text-gray-600 hover:text-gray-900">Back to Top</a>
            <span className="text-gray-300">•</span>
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
            <span className="text-gray-300">•</span>
            <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</a>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" aria-label="Facebook" className="hover:text-gray-900">Facebook</a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-900">Instagram</a>
            <a href="#" aria-label="X" className="hover:text-gray-900">X</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900">LinkedIn</a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-900">YouTube</a>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">© 2024 warehouse3, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
