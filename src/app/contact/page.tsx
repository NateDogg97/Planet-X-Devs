import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Tell me about your project and let's discuss how I can help your agency deliver exceptional results
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Social Links */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Intake Form
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="john@agency.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="agency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Agency Name *
                      </label>
                      <input
                        type="text"
                        id="agency"
                        name="agency"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Digital Marketing Agency"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">Select a project type</option>
                      <option value="ecommerce">E-Commerce Build/Migration</option>
                      <option value="wordpress">Custom WordPress Development</option>
                      <option value="seo">Technical SEO Implementation</option>
                      <option value="performance">Performance Optimization</option>
                      <option value="custom">Custom Web Application</option>
                      <option value="retainer">Ongoing Retainer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="project-scope" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Scope & Requirements *
                    </label>
                    <textarea
                      id="project-scope"
                      name="project-scope"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Please describe your project requirements, features needed, and any specific technical requirements..."
                    ></textarea>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Rush delivery +25%)</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="2-4-weeks">2-4 weeks</option>
                        <option value="1-2-months">1-2 months</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Budget *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-3k">$1,000 - $3,000</option>
                        <option value="3k-5k">$3,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-20k">$10,000 - $20,000</option>
                        <option value="20k+">$20,000+</option>
                        <option value="retainer">Monthly Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additional-info"
                      name="additional-info"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Any other details, special requirements, or questions?"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="white-label"
                      name="white-label"
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="white-label" className="text-sm text-gray-700 dark:text-gray-300">
                      I need white-label services (work will be presented as our agency's)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit Project Request
                  </button>

                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    * Required fields. I typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info & Social Links - 1/3 width */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">hello@youragency.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Response Time</p>
                      <p className="text-gray-600 dark:text-gray-300">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect on Social
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6 text-blue-700 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="font-medium text-gray-900 dark:text-white">LinkedIn</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-pink-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                    <span className="font-medium text-gray-900 dark:text-white">Instagram</span>
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-red-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6 text-red-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    <span className="font-medium text-gray-900 dark:text-white">YouTube</span>
                  </a>

                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-900 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                    <span className="font-medium text-gray-900 dark:text-white">TikTok</span>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    <span className="font-medium text-gray-900 dark:text-white">Twitter</span>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-900 dark:text-gray-300 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="font-medium text-gray-900 dark:text-white">GitHub</span>
                  </a>
                </div>

                <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Pro tip:</strong> Follow me on social for web dev tips and agency growth strategies!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Check out our services page for detailed information about our offerings and pricing
          </p>
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Services & Pricing
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}