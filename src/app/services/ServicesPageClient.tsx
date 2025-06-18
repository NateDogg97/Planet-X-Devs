'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Hero from '@/components/layout/Hero';
import ServiceDetailCard from '@/components/ui/ServiceDetailCard';
import RetainerPlanCard from '@/components/ui/RetainerPlanCard';
import { services } from '@/constants/services';
import { faqItems } from '@/constants/faq';

// Lazy load below-fold components
const VerticalTimeline = dynamic(() => import('@/components/ui/VerticalTimeline'), {
  loading: () => (
    <div className="space-y-8 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-start gap-6">
          <div className="w-12 h-12 bg-nebula-violet rounded-full flex-shrink-0"></div>
          <div className="flex-1 space-y-3">
            <div className="h-6 bg-nebula-purple-20 rounded w-1/2"></div>
            <div className="space-y-2">
              <div className="h-4 bg-nebula-purple-10 rounded w-full"></div>
              <div className="h-4 bg-nebula-purple-10 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
});

const FAQItem = dynamic(() => import('@/components/ui/FAQItem'), {
  loading: () => (
    <div className="border border-nebula-purple-30 rounded-lg p-6 animate-pulse">
      <div className="h-6 bg-nebula-purple-20 rounded w-3/4 mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-nebula-purple-10 rounded w-full"></div>
        <div className="h-4 bg-nebula-purple-10 rounded w-5/6"></div>
      </div>
    </div>
  )
});

const Footer = dynamic(() => import('@/components/navigation/Footer'), {
  loading: () => (
    <div className="bg-nebula-black h-64 animate-pulse border-t border-nebula-purple-30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 bg-nebula-purple-30 rounded w-24"></div>
              <div className="space-y-2">
                <div className="h-4 bg-nebula-purple-20 rounded w-32"></div>
                <div className="h-4 bg-nebula-purple-20 rounded w-28"></div>
                <div className="h-4 bg-nebula-purple-20 rounded w-36"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
});

export default function ServicesPageClient() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Premium Web Development Services"
        subtitle="White-label development partnerships that make your agency look great. From WordPress to React, we've got the technical expertise you need."
        showPlanets={false}
      />

      {/* Services Overview */}
      <section className="py-24 bg-nebula-violet-5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nebula-white mb-6">
              What We Build
            </h2>
            <p className="text-xl text-nebula-white/80 max-w-3xl mx-auto">
              From simple landing pages to complex web applications, we deliver the technical solutions your clients need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceDetailCard 
                key={index} 
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={{
                  amount: service.price,
                  period: service.timeline
                }}
                features={service.features.map(feature => ({
                  text: feature,
                  included: true
                }))}
                timeline={service.timeline}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Retainer Plans */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nebula-white mb-6">
              Monthly Retainer Plans
            </h2>
            <p className="text-xl text-nebula-white/80 max-w-3xl mx-auto">
              Predictable pricing for ongoing development needs. Perfect for agencies with consistent project flow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <RetainerPlanCard
              title="Launch Pad"
              price={{
                amount: "$2,500",
                period: "/month"
              }}
              description="Perfect for agencies just getting started with white-label development"
              features={[
                "20 hours of development time",
                "WordPress & Elementor focus",
                "Email support (< 4hr response)",
                "Basic SEO optimization",
                "Client communication templates"
              ]}
              popular={false}
            />
            
            <RetainerPlanCard
              title="Growth Engine"
              price={{
                amount: "$4,500",
                period: "/month"
              }}
              description="Ideal for established agencies with consistent project flow"
              features={[
                "40 hours of development time",
                "All platforms (WordPress, React, etc.)",
                "Priority support (< 2hr response)",
                "Advanced SEO & performance optimization",
                "Slack integration for real-time updates",
                "Monthly strategy call"
              ]}
              popular={true}
            />
            
            <RetainerPlanCard
              title="Scale Master"
              price={{
                amount: "$7,500",
                period: "/month"
              }}
              description="For agencies handling multiple large projects simultaneously"
              features={[
                "70 hours of development time",
                "Dedicated developer relationship",
                "Immediate support (< 1hr response)",
                "Custom integrations & APIs",
                "White-label client presentations",
                "Weekly strategy calls",
                "Priority project scheduling"
              ]}
              popular={false}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-nebula-white/70 mb-6">
              Need more hours or a custom arrangement? Let's talk about enterprise options.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-nebula-violet text-white rounded-full font-semibold hover:bg-nebula-violet/90 transition-colors"
            >
              Discuss Custom Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-nebula-violet-5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nebula-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-nebula-white/80 max-w-3xl mx-auto">
              Streamlined, transparent, and designed to make you look great to your clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VerticalTimeline steps={[
              {
                number: 1,
                title: "Discovery & Planning",
                description: "We start by understanding your client's needs, brand, and goals.",
                details: [
                  "Requirements gathering session",
                  "Technical architecture planning",
                  "Timeline and milestone setup",
                  "Initial wireframes and mockups"
                ]
              },
              {
                number: 2,
                title: "Design & Development",
                description: "Our development team brings your vision to life with clean, efficient code.",
                details: [
                  "Custom design implementation",
                  "Responsive development",
                  "Content management system setup",
                  "Third-party integrations"
                ]
              },
              {
                number: 3,
                title: "Testing & Optimization",
                description: "Rigorous testing ensures everything works perfectly before launch.",
                details: [
                  "Cross-browser compatibility testing",
                  "Mobile responsiveness verification",
                  "Performance optimization",
                  "SEO foundation setup"
                ]
              },
              {
                number: 4,
                title: "Launch & Support",
                description: "We handle the technical deployment and provide ongoing support.",
                details: [
                  "Domain and hosting setup",
                  "SSL certificate installation",
                  "Analytics and tracking setup",
                  "Client training and documentation"
                ]
              }
            ]} />
          </div>
        </div>
      </section>

      {/* Coming Soon Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nebula-white mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-nebula-white/80 max-w-3xl mx-auto">
              We're constantly expanding our services. Here's what's in development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-nebula-black/30 backdrop-blur-sm rounded-2xl p-8 border border-nebula-purple-30 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-nebula-violet/20 text-nebula-violet px-3 py-1 rounded-full text-sm font-medium">
                  Q2 2024
                </span>
              </div>
              <div className="w-16 h-16 bg-nebula-violet/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-nebula-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-nebula-white mb-4">Advanced Analytics</h3>
              <p className="text-nebula-white/70 mb-6">
                Comprehensive performance tracking and reporting for all client websites. Monthly insights delivered automatically.
              </p>
              <ul className="text-sm text-nebula-white/60 space-y-2">
                <li>• Core Web Vitals monitoring</li>
                <li>• SEO performance tracking</li>
                <li>• Custom dashboard for clients</li>
                <li>• Automated monthly reports</li>
              </ul>
            </div>

            <div className="bg-nebula-black/30 backdrop-blur-sm rounded-2xl p-8 border border-nebula-purple-30 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-nebula-violet/20 text-nebula-violet px-3 py-1 rounded-full text-sm font-medium">
                  Q3 2024
                </span>
              </div>
              <div className="w-16 h-16 bg-nebula-violet/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-nebula-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-nebula-white mb-4">AI-Powered Tools</h3>
              <p className="text-nebula-white/70 mb-6">
                Leverage AI to speed up development cycles and improve client communication with automated updates and insights.
              </p>
              <ul className="text-sm text-nebula-white/60 space-y-2">
                <li>• Automated code reviews</li>
                <li>• Smart client updates</li>
                <li>• Performance optimization suggestions</li>
                <li>• Content generation assistance</li>
              </ul>
            </div>

            <div className="bg-nebula-black/30 backdrop-blur-sm rounded-2xl p-8 border border-nebula-purple-30 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-nebula-violet/20 text-nebula-violet px-3 py-1 rounded-full text-sm font-medium">
                  Q4 2024
                </span>
              </div>
              <div className="w-16 h-16 bg-nebula-violet/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-nebula-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-nebula-white mb-4">White-Label Dashboard</h3>
              <p className="text-nebula-white/70 mb-6">
                Complete project management platform branded for your agency. Clients see your brand, not ours.
              </p>
              <ul className="text-sm text-nebula-white/60 space-y-2">
                <li>• Branded client portal</li>
                <li>• Project timeline tracking</li>
                <li>• Automated invoicing</li>
                <li>• Resource library access</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-nebula-white/70 mb-6">
              Want early access to these features? Join our beta program.
            </p>
            <Link
              href="/contact?service=beta"
              className="inline-flex items-center px-8 py-4 bg-nebula-violet text-white rounded-full font-semibold hover:bg-nebula-violet/90 transition-colors"
            >
              Join Beta Program
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-nebula-violet-5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nebula-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-nebula-white/80 max-w-3xl mx-auto">
              Everything you need to know about working with Planet X Devs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}