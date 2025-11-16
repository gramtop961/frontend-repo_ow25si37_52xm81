export default function Features() {
  const items = [
    {
      title: 'VISIBILITY',
      headline: "See what's where—at a glance.",
      body: "Stop asking, 'Is this number right?' Get live counts by location and variant, one screen, always in sync with Shopify.",
      bullets: [
        'One view across stores, warehouses, and channels',
        'Guardrails for bundles/kits and allocations',
        'Instant search for any SKU, anywhere',
      ],
    },
    {
      title: 'REORDERING',
      headline: 'Reorder the right SKUs at the right time.',
      body: 'No more guessing. Lead times, velocity, and targets generate POs you actually trust.',
      bullets: ['Lead-time awareness', 'Supplier ETAs & approvals', 'Free cash from wrong stock'],
    },
    {
      title: 'RECEIVING',
      headline: 'Turn shipments into sellable stock—fast.',
      body: 'Unbox, scan, done. Stock goes live in Shopify without double entry.',
      bullets: ['Barcode verification', 'Auto-update quantities', 'Exception handling'],
    },
    {
      title: 'RETURNS',
      headline: 'Refunds that actually restock.',
      body: 'Keep counts clean and revenue in play with exchanges or store credit.',
      bullets: [
        'One-click refunds & exchanges',
        'Auto-restock to the right location',
        'Clear audit trail for finance',
      ],
    },
    {
      title: 'FULFILLMENT',
      headline: 'Pick & pack without errors.',
      body: 'Scan-verified picking means zero wrong items shipped. Orders flow faster, customers stay happy.',
      bullets: ['Scan-to-pick verification', 'Auto-confirm orders', 'Ship with confidence'],
    },
  ]

  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need, nothing you don't</h2>
          <p className="mt-3 text-gray-700">Five core features that actually work together. No bloat, no learning curve, no surprises.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {items.map((f, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-widest text-blue-600">{f.title}</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{f.headline}</h3>
              <p className="mt-3 text-gray-700">{f.body}</p>
              <ul className="mt-4 space-y-2 text-gray-800">
                {f.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#early-access" className="inline-flex items-center rounded-md bg-gray-900 text-white px-6 py-3 text-base font-medium shadow-lg hover:bg-gray-800 transition">
            Start my 14-day free trial
          </a>
          <p className="mt-3 text-sm text-gray-600">All features included. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
