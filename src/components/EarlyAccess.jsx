export default function EarlyAccess() {
  return (
    <section id="early-access" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-blue-600">EARLY PARTNER ACCESS</h2>
            <h3 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Be one of the first 25 brands shaping warehouse3.</h3>
            <p className="mt-6 text-gray-700">Self-serve setup in minutes, direct founder feedback, and early-partner pricing locked for life.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/>15-min setup</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/>Founder inbox</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/>Price locked for life</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/>Cancel anytime</li>
            </ul>
            <a href="#signup" className="mt-8 inline-flex items-center rounded-md bg-gray-900 text-white px-6 py-3 text-base font-medium shadow-lg hover:bg-gray-800 transition">
              Start my 14-day free trial
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 shadow-xl">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 grid place-items-center text-gray-600">
              <span className="text-sm">Product preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
