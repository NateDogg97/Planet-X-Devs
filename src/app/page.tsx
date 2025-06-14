import Link from 'next/link';
import dynamic from 'next/dynamic';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/ui/ServiceCard';
import NebulaGraphic from '@/components/ui/NebulaGraphic';
import ProcessTimeline from '@/components/ui/ProcessTimeline';
import FloatingParticles from '@/components/ui/FloatingParticles';
import Icon from '@/components/ui/Icon';
import { services } from '@/constants/services';

const TestimonialCarousel = dynamic(
  () => import('@/components/ui/TestimonialCarousel'),
  { 
    loading: () => <div className="max-w-4xl mx-auto h-64 bg-nebula-violet-10 rounded-3xl animate-pulse" />,
    ssr: false 
  }
);

const FloatingParticlesDynamic = dynamic(
  () => import('@/components/ui/FloatingParticles'),
  { 
    loading: () => null,
    ssr: false 
  }
);

const testimonials = [
  {
    quote: "Finally, a developer who actually communicates! Updates without asking, realistic timelines, and work that exceeds expectations.",
    author: "Sarah M.",
    role: "Agency Owner"
  },
  {
    quote: "They transformed our client's dated site into something modern while keeping their brand personality intact. Our client was thrilled.",
    author: "Mike R.",
    role: "Creative Director"
  },
  {
    quote: "From solo projects to our enterprise clients, they scale with us. It's like having a senior developer on the team.",
    author: "Jessica L.",
    role: "Digital Marketing Director"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Your Agency's Secret Weapon for Premium Web Development"
        subtitle="White-label development partner who makes you look good. Custom designs, flawless execution, and communication that actually works."
        bullets={[]}
        actions={[
          {
            text: "View Services & Pricing",
            href: "/services",
            variant: "primary"
          },
          {
            text: "Schedule a No-Pressure Chat",
            href: "/contact",
            variant: "secondary"
          }
        ]}
      />

      {/* Services Section */}
      <section className="py-20 bg-nebula-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-purple">
            Your Development Mission Control
          </h2>
          <p className="text-xl text-center text-nebula-white/70 mb-16 max-w-3xl mx-auto">
            Comprehensive web development solutions designed to elevate your agency's capabilities
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={service.id}
                className="opacity-0 animate-fade-in-up will-change-transform motion-reduce:animate-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={<Icon name={service.icon} className="w-8 h-8 text-white" />}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-nebula-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-nebula-white mb-6">
                Your Technical Co-Pilot
              </h2>
              <p className="text-lg text-nebula-white/70 mb-6">
                After years of working with marketing agencies, I noticed a pattern: talented agencies were losing opportunities because they couldn't find reliable development partners.
              </p>
              <p className="text-lg text-nebula-white/70 mb-8">
                I created Planet X Devs to be the development partner I wish existed when I was on the agency side - reliable, communicative, and focused on making agencies look good.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-full bg-gradient-nebula text-white font-semibold shadow-glow hover:shadow-nebula-lg hover:scale-105 transition-all duration-300"
              >
                Start Partnership
              </Link>
            </div>
            <NebulaGraphic />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From discovery to launch, we follow a proven process that ensures success
            </p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* Benefits Section - Static HTML */}
      <Section background="gray">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Agencies Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Actually Easy to Work With
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No ego, no jargon, just clear communication and reliable delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Quality You Can Stake Your Reputation On
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We build websites that make your agency shine
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Flexible Solutions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Custom development, Elementor, WordPress - we adapt to your project needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      True White-Label Partnership
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your clients never know we exist unless you want them to
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Client Satisfaction Rate</p>
                
                <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Projects Delivered</p>
                
                <div className="text-5xl font-bold text-blue-600 mb-2">48hrs</div>
                <p className="text-gray-600 dark:text-gray-300">Average Response Time</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <section className="py-20 bg-nebula-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nebula-purple to-nebula-violet mb-4">
              What Agencies Say About Us
            </h2>
            <p className="text-xl text-nebula-white/70">
              Don't just take our word for it
            </p>
          </div>
          
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-gradient-radial-nebula overflow-hidden">
        <FloatingParticlesDynamic />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nebula-white mb-6">
            Ready to Launch Your Next Project?
          </h2>
          <p className="text-xl text-nebula-white/70 mb-10 max-w-2xl mx-auto">
            Let's discuss how I can help your agency deliver exceptional websites without the headaches
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 rounded-full bg-gradient-nebula text-white font-bold text-lg shadow-glow hover:shadow-nebula-lg hover:scale-105 transition-all duration-300 animate-pulse-slow"
          >
            Begin Your Mission
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}