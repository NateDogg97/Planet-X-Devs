import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Web Development Services for Marketing Agencies
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              I help marketing agencies deliver web projects without hiring developers
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">White-label services</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Fast turnarounds</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Agency-friendly communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Development Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. All services include white-label delivery and ongoing support.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* E-Commerce Service */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    E-Commerce Builds & Migrations
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg">$3,000 - $8,000</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete e-commerce solutions built on modern platforms. Perfect for agencies with retail clients looking to sell online or upgrade their existing stores.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Shopify, WooCommerce, or custom solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Payment gateway integration (Stripe, PayPal, etc.)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Inventory management & order tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Mobile-responsive checkout optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Data migration from existing platforms</span>
                </li>
              </ul>
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Timeline:</strong> 2-6 weeks depending on complexity
                </p>
              </div>
            </div>

            {/* WordPress Service */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Custom WordPress Development
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg">$2,000 - $5,000</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Professional WordPress sites that are easy for your clients to manage. From corporate sites to complex membership platforms.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Custom theme development from your designs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Advanced Custom Fields (ACF) implementation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Page builder setup (Elementor, Gutenberg)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Plugin development & customization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Multisite configuration & management</span>
                </li>
              </ul>
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Timeline:</strong> 1-4 weeks depending on features
                </p>
              </div>
            </div>

            {/* Technical SEO Service */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Technical SEO Implementation
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg">$1,500 - $3,000</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete technical SEO overhaul to improve search rankings and organic traffic. Perfect complement to your content marketing services.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Schema markup implementation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">XML sitemap optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Core Web Vitals optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Mobile-first indexing setup</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">URL structure & redirect management</span>
                </li>
              </ul>
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Timeline:</strong> 1-2 weeks
                </p>
              </div>
            </div>

            {/* Performance Optimization Service */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Performance Optimization Audit
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg">$500 - $1,500</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive site speed analysis and optimization. Improve user experience and conversion rates with faster load times.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">PageSpeed Insights analysis & fixes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Image optimization & lazy loading</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">CDN setup & configuration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Caching strategy implementation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Database & code optimization</span>
                </li>
              </ul>
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Timeline:</strong> 3-5 days
                </p>
              </div>
            </div>
          </div>

          {/* Retainer Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Agency Retainer Plans
              </h2>
              <p className="text-xl text-blue-100 mb-12 text-center">
                Predictable monthly pricing with priority support and faster turnarounds
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Starter Plan */}
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <p className="text-3xl font-bold mb-4">$1,500<span className="text-lg font-normal">/month</span></p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>20 hours of development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>2-3 day turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Perfect for maintenance</span>
                    </li>
                  </ul>
                </div>

                {/* Growth Plan */}
                <div className="bg-white/20 backdrop-blur rounded-xl p-6 ring-2 ring-white/50">
                  <div className="bg-yellow-400 text-blue-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                    MOST POPULAR
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Growth</h3>
                  <p className="text-3xl font-bold mb-4">$3,000<span className="text-lg font-normal">/month</span></p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>40 hours of development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>24-48 hour turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Priority support</span>
                    </li>
                  </ul>
                </div>

                {/* Scale Plan */}
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-2">Scale</h3>
                  <p className="text-3xl font-bold mb-4">$5,000<span className="text-lg font-normal">/month</span></p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>80 hours of development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Same-day turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Dedicated developer</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-center mt-8 text-blue-100">
                All retainer hours roll over for up to 60 days • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A streamlined process designed for busy agencies
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Brief & Quote
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Send your project requirements. Get a detailed quote within 24 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I build while keeping you updated with regular progress reports.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Review & Refine
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Test on staging environment. Make revisions until perfect.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Launch & Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deploy to production. Ongoing support included for 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Can you work with our existing design files?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely! I work with Figma, Adobe XD, Sketch, or even PSD files. I can also collaborate directly with your design team to ensure pixel-perfect implementation.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Do you offer white-label services?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! All work is delivered under your agency's brand. I never contact your clients directly, and all deliverables can be presented as your own work.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What's your typical turnaround time?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For retainer clients: 24-48 hours for most requests. For project work: I provide detailed timelines with each quote, typically ranging from 1-6 weeks depending on complexity.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Do you handle hosting and maintenance?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I can manage hosting setup and provide maintenance through retainer plans. However, I'm also happy to hand off completed projects to your team or preferred hosting provider.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What if we need changes after project completion?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All projects include 30 days of post-launch support for bug fixes. For feature additions or ongoing changes, I recommend our retainer plans for the best value and fastest turnaround.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Web Development?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help your agency deliver exceptional websites without the overhead
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Project
            </a>
            <a href="/contact" className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}