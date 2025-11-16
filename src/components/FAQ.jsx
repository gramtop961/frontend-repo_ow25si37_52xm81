export default function FAQ() {
  const faqs = [
    {
      q: 'Does it only work with Shopify?',
      a: "While we're Shopify-first and offer the deepest integration with Shopify, we also support other e-commerce platforms and 3PL systems. Our platform is designed to unify inventory across multiple channels, regardless of where you sell.",
    },
    {
      q: 'How do migrations work?',
      a: 'We provide a guided migration process with dedicated support. Our team helps you import your existing inventory data, set up your locations, and configure integrations. Most migrations are completed within 10 minutes to a few hours, depending on your data volume.',
    },
    { q: 'Can I export my data?', a: 'Absolutely. You can export your data at any time in multiple formats (CSV, Excel, JSON). Your data is yours, and we believe in complete transparency. There are no lock-ins or export fees.' },
    { q: 'Do you support 3PLs/multi-location/bundles?', a: 'Yes to all three! We support major 3PL providers, unlimited locations (warehouses, stores, fulfillment centers), and product bundles/kits. You can track inventory across all locations in real-time and manage complex product configurations.' },
    { q: 'What happens if I need help?', a: 'We offer live chat support with real humans (no bots), comprehensive documentation, video tutorials, and email support. Our team is responsive and committed to helping you succeed. Most inquiries are resolved within hours, not days.' },
    { q: 'How do the guarantee and refunds work?', a: "We offer a 14-day free trial with no credit card required. If you decide it's not the right fit during your trial, simply don't subscribe. For paid subscribers, we offer a 30-day money-back guarantee if you're not satisfied with the platform." },
  ]

  return (
    <section id="faq" className="relative py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Questions? We got you.</h2>
          <p className="mt-2 text-gray-700">Everything you need to know before getting started</p>
        </div>

        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur">
          {faqs.map((item, i) => (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left">
                <span className="font-medium text-gray-900">{item.q}</span>
                <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#support" className="text-blue-600 hover:underline">Still have questions? We're here to help. Contact Support</a>
        </div>
      </div>
    </section>
  )
}
