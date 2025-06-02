import { Metadata } from 'next';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/layout/Hero';
import IntroSection from '@/components/sections/IntroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Icon from '@/components/ui/Icon';
import { faqItems } from '@/constants/content';

export const metadata: Metadata = {
  title: "Web Development Services for Marketing Agencies | Planet X Devs",
  description: "Custom websites, e-commerce, and WordPress development exclusively for marketing agencies. White-label services, 30-day support, starting at $2,000.",
  keywords: "white label web development, agency web developer, marketing agency websites, wordpress development, ecommerce development",
  openGraph: {
    title: "Web Development Services for Marketing Agencies",
    description: "Your secret weapon for premium web development. White-label services that make you look good.",
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function Services() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen">
        <Hero
          title="Web Development Services for Marketing Agencies"
          subtitle="I help marketing agencies deliver web projects without hiring developers"
          bullets={[
            "White-label services",
            "Fast turnarounds", 
            "Agency-friendly communication"
          ]}
          centered={true}
        />

        <IntroSection
          content="Whether you're a solo consultant or a 50-person agency, I understand that your reputation is on the line with every project. That's why I don't do cheap, cookie-cutter work. Every website is crafted to reflect your client's unique brand while incorporating modern design principles that convert."
        />

      <ServicesSection />

      {/* Retainer Plans Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
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
                      <Icon name="check" className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>20 hours of development</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>2-3 day turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
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
                      <Icon name="check" className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>40 hours of development</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24-48 hour turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
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
                      <Icon name="check" className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>80 hours of development</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Same-day turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
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

      {/* Coming Soon Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-full">
                  COMING SOON
                </span>
              </div>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 mt-4">
                  Full Website Management Solutions
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Complete website care from hosting to maintenance. Let us handle everything while you focus on strategy and client relationships.
                </p>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 inline-block">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Interested? Contact us to be first in line when we launch.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Early Access
                    <Icon name="arrow-right" className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      <FAQSection />

      <CTASection
        title="Ready to Streamline Your Web Development?"
        subtitle="Let's discuss how I can help your agency deliver exceptional websites without the overhead"
        buttons={[
          {
            text: "Let's Discuss Your Project",
            href: "/contact"
          },
          {
            text: "Get a Quote",
            href: "/contact"
          }
        ]}
      />

      <Footer />
      </div>
    </>
  );
}