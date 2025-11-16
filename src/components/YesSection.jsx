export default function YesSection() {
  const qs = [
    'Can I import my Shopify catalog in minutes?',
    'Can I see stock across all locations on one screen?',
    'Can I generate POs from reorder points and lead times?',
    'Can I track supplier ETAs and receive against POs?',
    'Can I scan to receive and auto-update Shopify instantly?',
    'Can refunds auto-restock and keep counts accurate?',
    'Can I handle bundles/kits and channel allocations?',
    'Can I reserve stock for drops, preorders, or wholesale?',
    'Can I set approvals and role-based access?',
    'Can I export every bit of my data any time?',
    'Can I switch without downtime—with help?',
    'Can I chat with a human when I\'m stuck?',
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The answer is YES!</h2>
          <p className="mt-3 text-gray-700">Can inventory software be simple, fast, and dependable—without giving up power? With warehouse3, the answer is YES!</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {qs.map((q, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex items-center justify-between">
              <span className="text-gray-800">{q}</span>
              <span className="ml-4 rounded-full bg-green-500 text-white text-xs font-semibold px-2 py-1">YES</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#early-access" className="inline-flex items-center rounded-md bg-gray-900 text-white px-6 py-3 text-base font-medium shadow-lg hover:bg-gray-800 transition">
            Start my 14-day free trial
          </a>
          <p className="mt-3 text-sm text-gray-600">See for yourself. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
