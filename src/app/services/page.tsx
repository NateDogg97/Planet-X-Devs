import { Metadata } from 'next';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/layout/Hero';
import ServiceDetailCard from '@/components/ui/ServiceDetailCard';
import RetainerPlanCard from '@/components/ui/RetainerPlanCard';
import VerticalTimeline from '@/components/ui/VerticalTimeline';
import FAQItem from '@/components/ui/FAQItem';
import CTASection from '@/components/sections/CTASection';
import FloatingParticles from '@/components/ui/FloatingParticles';
import { services } from '@/constants/services';
import { faqItems } from '@/constants/faq';

export const metadata: Metadata = {
  title: "Web Development Services & Pricing | Planet X Devs",
  description: "Premium web development services for marketing agencies. Custom websites, e-commerce, WordPress development. White-label partnership starting at $2,500.",
  keywords: "white label web development, agency web developer, marketing agency websites, wordpress development, ecommerce development, retainer services",
  openGraph: {
    title: "Web Development Services & Pricing for Marketing Agencies",
    description: "Your technical co-pilot for premium web development. White-label services that make you look good.",
    images: ['/og-services.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function Services() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Web Development Services & Pricing"
        subtitle="Premium development services designed specifically for marketing agencies. From single projects to ongoing partnerships."
        bullets={[
          "White-label partnership - your clients never know we exist",
          "48-hour response time with clear project updates",
          "Fixed pricing with no hidden fees or scope creep",
          "Platform expertise: Custom code, WordPress, Elementor"
        ]}
        actions={[
          {
            text: "View Pricing Plans",
            href: "#pricing",
            variant: "primary"
          },
          {
            text: "Start a Project",
            href: "/contact",
            variant: "secondary"
          }
        ]}
        centered={true}
        showPlanets={false}
      />

      {/* Introduction Section */}
      <section className="py-16 bg-nebula-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-nebula-white/80 leading-relaxed">
            Whether you&apos;re a solo consultant or a 50-person agency, your reputation is on the line with every project. 
            I don&apos;t do cheap, cookie-cutter work. Every website is crafted to reflect your client&apos;s unique brand 
            while incorporating modern design principles that convert.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-nebula-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nebula-white mb-4">
              Development Services
            </h2>
            <p className="text-xl text-nebula-white/70 max-w-3xl mx-auto">
              Fixed-price projects with clear deliverables and timelines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              // Only animate first 3 cards (above the fold), lazy load others
              const isAboveFold = index < 3;
              const animationDelay = isAboveFold ? `${index * 0.1}s` : `${0.3 + (index - 3) * 0.05}s`;
              
              return (
                <div
                  key={service.id}
                  className={`opacity-0 motion-reduce:animate-none ${
                    isAboveFold 
                      ? 'animate-fade-in-up' 
                      : 'animate-fade-in-up'
                  }`}
                  style={{ 
                    animationDelay,
                    animationFillMode: 'forwards'
                  }}
                >
                  <ServiceDetailCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    price={{ amount: service.price, period: "project" }}
                    features={service.features.map(feature => ({ text: feature, included: true }))}
                    timeline={service.timeline}
                    ctaText="Get Started"
                    ctaHref="/contact"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Retainer Plans Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-nebula-black via-nebula-blue/10 to-nebula-black relative overflow-hidden">
        {/* Background gradient enhancement */}
        <div className="absolute inset-0 bg-gradient-radial-nebula opacity-20 pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-violet mb-6">
              Monthly Retainer Plans
            </h2>
            <p className="text-xl text-nebula-white/80 leading-relaxed">
              Predictable monthly pricing with priority support and faster turnarounds. 
              Choose the plan that scales with your agency&apos;s growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              className="opacity-0 animate-fade-in-up motion-reduce:animate-none"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <RetainerPlanCard
                title="Starter Plan"
                description="Perfect for agencies getting started with ongoing development needs"
                price={{ amount: "$1,500", period: "month" }}
                features={[
                  "15 hours of development per month",
                  "Email support (48hr response)",
                  "Basic website maintenance",
                  "Monthly performance report",
                  "Hours rollover for 60 days"
                ]}
                ctaText="Start Plan"
                ctaHref="/contact"
              />
            </div>
            
            <div
              className="opacity-0 animate-fade-in-up motion-reduce:animate-none"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <RetainerPlanCard
                title="Growth Plan"
                description="Ideal for growing agencies with regular development projects"
                price={{ amount: "$3,000", period: "month" }}
                features={[
                  "30 hours of development per month",
                  "Priority support (24hr response)",
                  "Unlimited small updates",
                  "Bi-weekly strategy calls",
                  "Performance monitoring",
                  "SEO optimization included"
                ]}
                popular={true}
                highlight="Best Value for Growing Agencies"
                ctaText="Start Partnership"
                ctaHref="/contact"
              />
            </div>
            
            <div
              className="opacity-0 animate-fade-in-up motion-reduce:animate-none"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <RetainerPlanCard
                title="Scale Plan"
                description="For agencies with complex, ongoing development needs"
                price={{ amount: "$5,500", period: "month" }}
                features={[
                  "60 hours of development per month",
                  "Dedicated project manager",
                  "Custom development projects",
                  "Weekly strategy sessions",
                  "Advanced analytics",
                  "White-label client presentations"
                ]}
                ctaText="Contact Sales"
                ctaHref="/contact"
              />
            </div>
          </div>
          
          <div className="text-center mt-16 max-w-2xl mx-auto">
            <p className="text-nebula-white/60 text-lg">
              All retainer hours roll over for up to 60 days • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 bg-nebula-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nebula-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-nebula-white/70 max-w-3xl mx-auto">
              A proven workflow that delivers results on time, every time
            </p>
          </div>
          
          <VerticalTimeline 
            steps={[
              {
                number: 1,
                title: "Discovery & Planning",
                description: "We start with a comprehensive briefing to understand your client&apos;s needs and goals.",
                details: [
                  "Requirements gathering",
                  "Technical specification",
                  "Timeline establishment",
                  "Resource allocation"
                ]
              },
              {
                number: 2,
                title: "Design & Development",
                description: "Bringing your vision to life with clean code and modern design principles.",
                details: [
                  "Wireframing & mockups",
                  "Frontend development",
                  "Backend integration",
                  "Mobile responsiveness"
                ]
              },
              {
                number: 3,
                title: "Review & Testing",
                description: "Rigorous quality assurance to ensure everything works perfectly.",
                details: [
                  "Cross-browser testing",
                  "Performance optimization",
                  "Security checks",
                  "Client feedback rounds"
                ]
              },
              {
                number: 4,
                title: "Launch & Support",
                description: "Smooth deployment and ongoing support to keep everything running.",
                details: [
                  "Production deployment",
                  "DNS configuration",
                  "Post-launch monitoring",
                  "30-day warranty support"
                ]
              }
            ]}
            className="max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* Coming Soon Section - Static HTML */}
      <section className="py-20 bg-gradient-to-br from-nebula-black via-nebula-purple/10 to-nebula-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
                <span className="relative inline-block px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-400/40">
                  COMING SOON
                </span>
                <div className="absolute -inset-1 border-2 border-yellow-400/20 rounded-full animate-rotate motion-reduce:animate-none" style={{ borderStyle: 'dashed' }} />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nebula-white mb-6">
                Exciting New Services on the Horizon
              </h2>
              <p className="text-xl text-nebula-white/70 max-w-3xl mx-auto mb-8">
                We&apos;re constantly expanding our capabilities to better serve your agency. 
                Here&apos;s what&apos;s coming next to help you deliver even more value to your clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Coming Soon Item 1 */}
              <div className="bg-nebula-white/5 rounded-lg p-6 border border-nebula-white/10 relative overflow-hidden group">
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-nebula-white mb-3 relative z-10">
                  AI-Powered Content Generation
                </h3>
                <p className="text-nebula-white/60 relative z-10">
                  Automated blog posts, product descriptions, and SEO content tailored to your clients&apos; brands.
                </p>
              </div>
              
              {/* Coming Soon Item 2 */}
              <div className="bg-nebula-white/5 rounded-lg p-6 border border-nebula-white/10 relative overflow-hidden group">
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-nebula-white mb-3 relative z-10">
                  Performance Auditing Service
                </h3>
                <p className="text-nebula-white/60 relative z-10">
                  Comprehensive website speed analysis with actionable recommendations and implementation.
                </p>
              </div>
              
              {/* Coming Soon Item 3 */}
              <div className="bg-nebula-white/5 rounded-lg p-6 border border-nebula-white/10 relative overflow-hidden group">
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-nebula-white mb-3 relative z-10">
                  Mobile App Development
                </h3>
                <p className="text-nebula-white/60 relative z-10">
                  React Native and Flutter apps to extend your clients&apos; reach to mobile platforms.
                </p>
              </div>
              
              {/* Coming Soon Item 4 */}
              <div className="bg-nebula-white/5 rounded-lg p-6 border border-nebula-white/10 relative overflow-hidden group">
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-nebula-white mb-3 relative z-10">
                  Advanced Analytics Setup
                </h3>
                <p className="text-nebula-white/60 relative z-10">
                  Custom dashboards, conversion tracking, and data visualization for deeper insights.
                </p>
              </div>
              
              {/* Coming Soon Item 5 */}
              <div className="bg-nebula-white/5 rounded-lg p-6 border border-nebula-white/10 relative overflow-hidden group">
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-nebula-white mb-3 relative z-10">
                  Email Template Development
                </h3>
                <p className="text-nebula-white/60 relative z-10">
                  Custom HTML email templates that work across all major email clients.
                </p>
              </div>
              
              {/* Coming Soon Item 6 */}
              <div className="bg-nebula-white/5 rounded-lg p-6 border border-nebula-white/10 relative overflow-hidden group">
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-nebula-white mb-3 relative z-10">
                  Headless CMS Integration
                </h3>
                <p className="text-nebula-white/60 relative z-10">
                  Strapi, Contentful, and Sanity implementations for modern content management.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-nebula-white/60 mb-6">
                Want early access to these services or have a specific need?
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-nebula-black font-bold rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-200 transform hover:scale-105"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-nebula-violet/10 rounded-full blur-3xl" />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-nebula-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nebula-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-nebula-white/70 max-w-3xl mx-auto">
              Everything you need to know about partnering with Planet X Devs
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className="opacity-0 animate-fade-in-up motion-reduce:animate-none"
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <FAQItem
                  question={item.question}
                  answer={item.answer}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-nebula-white/60 mb-6">
              Still have questions? Let&apos;s talk about your specific needs.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-nebula-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <div className="relative">
        <FloatingParticles />
        <CTASection
          title="Ready to Elevate Your Agency&apos;s Technical Capabilities?"
          subtitle="Join the agencies that trust Planet X Devs as their white-label development partner. Get started with a project or explore our retainer plans."
          buttons={[
            {
              text: "Start Your First Project",
              href: "/contact",
              variant: "primary"
            },
            {
              text: "View Retainer Plans",
              href: "#pricing",
              variant: "secondary"
            }
          ]}
          className="relative z-10"
        />
      </div>

      <Footer />
    </div>
  );
}