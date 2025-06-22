'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';
import ServiceCard from '@/components/ui/ServiceCard';
import NebulaGraphic from '@/components/ui/NebulaGraphic';
import Icon from '@/components/ui/Icon';
import { services } from '@/constants/services';

const TestimonialCarousel = dynamic(() => import('@/components/ui/TestimonialCarousel'), {
  ssr: false,
  loading: () => (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -top-8 -left-4 text-6xl text-nebula-violet-30 animate-pulse-slow">"</div>
      <div className="bg-nebula-violet-10 rounded-3xl p-8 md:p-12">
        <div className="text-center animate-pulse">
          <div className="h-6 bg-nebula-violet-20 rounded mx-auto mb-4 max-w-3xl"></div>
          <div className="h-6 bg-nebula-violet-20 rounded mx-auto mb-6 max-w-2xl"></div>
          <div className="h-4 bg-nebula-violet-20 rounded mx-auto max-w-xs"></div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-8 h-2 bg-nebula-violet rounded-full"></div>
          <div className="w-2 h-2 bg-nebula-violet-30 rounded-full"></div>
          <div className="w-2 h-2 bg-nebula-violet-30 rounded-full"></div>
        </div>
      </div>
    </div>
  )
});

const FloatingParticles = dynamic(() => import('@/components/ui/FloatingParticles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

const ProcessTimeline = dynamic(() => import('@/components/ui/ProcessTimeline'), {
  loading: () => (
    <div className="space-y-12 animate-pulse">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-start gap-6">
          <div className="w-16 h-16 bg-nebula-violet rounded-full flex-shrink-0"></div>
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-nebula-purple-20 rounded w-1/3"></div>
            <div className="space-y-2">
              <div className="h-4 bg-nebula-purple-10 rounded w-full"></div>
              <div className="h-4 bg-nebula-purple-10 rounded w-5/6"></div>
              <div className="h-4 bg-nebula-purple-10 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      ))}
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

// Only show featured services on homepage for better performance
const featuredServices = services.slice(0, 6);

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Your Agency's Technical Partner"
        subtitle="Professional white-label development that makes your agency shine. Custom designs, flawless execution, and communication that actually works."
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
        showPlanets={false}
      />

      {/* Services Section */}
      <Section background="secondary" container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-text-primary">
          Your Development Mission Control
        </h2>
        <p className="text-xl text-center text-text-primary/70 mb-16 max-w-3xl mx-auto">
          Comprehensive web development solutions designed to elevate your agency's capabilities
        </p>
        
        {/* Mobile: Flex layout, Desktop: Grid layout with equal heights */}
        <div className="flex flex-col gap-8 md:hidden">
          {featuredServices.map((service, index) => (
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
        
        {/* Desktop: Grid layout with equal heights */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className="opacity-0 animate-fade-in-up will-change-transform motion-reduce:animate-none flex"
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
      </Section>

      {/* Partnership Section */}
      <Section background="secondary" container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Your Technical Co-Pilot
            </h2>
            <p className="text-lg text-text-primary/70 mb-6">
              After years of working with digital marketing agencies, I noticed a pattern: talented agencies were losing opportunities because they couldn't find reliable development partners.
            </p>
            <p className="text-lg text-text-primary/70 mb-8">
              I created Planet X Devs to be the perfect development partner for effective marketing agencies without fulltime developers - reliable, communicative, and focused on making agencies look good.
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
      </Section>

      {/* Process Section */}
      <Section background="secondary" container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Mission Process
            </h2>
            <p className="text-xl text-text-primary/70 max-w-2xl mx-auto">
              From discovery to launch, we follow a proven process that ensures success
            </p>
          </div>
          <ProcessTimeline />
      </Section>

      {/* Benefits Section - Nebula Theme */}
      <Section background="secondary" container className="relative">
        {/* Background nebula effect */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-nebula-violet-20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-nebula-purple-20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nebula-cyan to-nebula-violet mb-8">
                Why Agencies Choose Us
              </h2>
              
              <div className="space-y-6">
                {/* Benefit 1 */}
                <div className="group relative">
                  <div className="absolute -inset-2 bg-nebula-violet-10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="absolute inset-0 bg-nebula-violet rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 bg-gradient-nebula rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <Icon name="chat" className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-nebula-purple dark:text-nebula-white mb-2 transition-colors duration-300 group-hover:text-nebula-violet dark:group-hover:text-nebula-cyan">
                        Actually Easy to Work With
                      </h3>
                      <p className="text-text-primary/70 transition-colors duration-300 group-hover:text-text-primary/90">
                        No ego, no jargon, just clear communication and reliable delivery
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="group relative">
                  <div className="absolute -inset-2 bg-nebula-violet-10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="absolute inset-0 bg-nebula-violet rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 bg-gradient-nebula rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <Icon name="badge-check" className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-nebula-purple dark:text-nebula-white mb-2 transition-colors duration-300 group-hover:text-nebula-violet dark:group-hover:text-nebula-cyan">
                        Quality You Can Stake Your Reputation On
                      </h3>
                      <p className="text-text-primary/70 transition-colors duration-300 group-hover:text-text-primary/90">
                        We build websites that make your agency shine
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="group relative">
                  <div className="absolute -inset-2 bg-nebula-violet-10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="absolute inset-0 bg-nebula-violet rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 bg-gradient-nebula rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <Icon name="refresh" className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-nebula-purple dark:text-nebula-white mb-2 transition-colors duration-300 group-hover:text-nebula-violet dark:group-hover:text-nebula-cyan">
                        Flexible Solutions
                      </h3>
                      <p className="text-text-primary/70 transition-colors duration-300 group-hover:text-text-primary/90">
                        Custom development, Elementor, WordPress - we adapt to your project needs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="group relative">
                  <div className="absolute -inset-2 bg-nebula-violet-10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="absolute inset-0 bg-nebula-violet rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 bg-gradient-nebula rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <Icon name="eye-off" className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-nebula-purple dark:text-nebula-white mb-2 transition-colors duration-300 group-hover:text-nebula-violet dark:group-hover:text-nebula-cyan">
                        True White-Label Partnership
                      </h3>
                      <p className="text-text-primary/70 transition-colors duration-300 group-hover:text-text-primary/90">
                        Your clients never know we exist unless you want them to
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="relative">
              {/* Orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[400px] h-[400px] border border-nebula-violet-20 rounded-full animate-orbit" />
                <div className="absolute w-[500px] h-[500px] border border-nebula-purple-20 rounded-full animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
              </div>
              
              <div className="relative bg-gradient-to-br from-nebula-purple/20 to-nebula-violet/20 backdrop-blur-sm border border-nebula-violet-30 p-8 rounded-3xl shadow-nebula">
                <div className="text-center space-y-8">
                  {/* Stat 1 */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-nebula-cyan blur-2xl opacity-50 animate-pulse-slow" />
                      <div className="relative text-5xl font-bold bg-gradient-to-r from-nebula-cyan to-nebula-violet bg-clip-text text-transparent">
                        95%
                      </div>
                    </div>
                    <p className="text-text-primary/70 mt-2">Client Satisfaction Rate</p>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.75s' }}>
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-nebula-cyan blur-2xl opacity-50 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                      <div className="relative text-5xl font-bold bg-gradient-to-r from-nebula-cyan to-nebula-violet bg-clip-text text-transparent">
                        200+
                      </div>
                    </div>
                    <p className="text-text-primary/70 mt-2">Projects Delivered</p>
                  </div>
                  
                  {/* Stat 3 */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-nebula-cyan blur-2xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }} />
                      <div className="relative text-5xl font-bold bg-gradient-to-r from-nebula-cyan to-nebula-violet bg-clip-text text-transparent">
                        48hrs
                      </div>
                    </div>
                    <p className="text-text-primary/70 mt-2">Average Response Time</p>
                  </div>
                </div>
                
                {/* Floating particles inside card */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  <div className="absolute w-2 h-2 bg-nebula-cyan rounded-full animate-float" style={{ top: '20%', left: '10%' }} />
                  <div className="absolute w-1.5 h-1.5 bg-nebula-violet rounded-full animate-float" style={{ top: '60%', right: '20%', animationDelay: '1s' }} />
                  <div className="absolute w-2 h-2 bg-nebula-purple rounded-full animate-float" style={{ bottom: '30%', left: '30%', animationDelay: '2s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="secondary" container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What Agencies Say About Us
          </h2>
          <p className="text-xl text-text-primary/70">
            Don't just take our word for it
          </p>
        </div>
        
        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      {/* Final CTA Section */}
      <Section container className="overflow-hidden bg-gradient-radial-nebula relative" background='dark'>
        <div className="relative z-10 text-center">
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

        <FloatingParticles />
      </Section>

      <Footer />
    </div>
  );
}