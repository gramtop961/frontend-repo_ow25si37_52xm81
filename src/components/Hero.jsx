import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Never Manually Fix a Stockout at 2 a.m. Again.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Unified inventory, purchase orders, receiving, and returns in one dependable dashboard—with real-time Shopify sync across warehouses, stores.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#early-access" className="inline-flex items-center rounded-md bg-gray-900 text-white px-6 py-3 text-base font-medium shadow-lg hover:bg-gray-800 transition">
            Start my 14-day free trial
          </a>
          <p className="text-sm text-gray-600">no credit card • 10 min setup</p>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-2 shadow-xl">
          <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1974&auto=format&fit=crop" alt="Dashboard Screenshot" className="rounded-xl w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
