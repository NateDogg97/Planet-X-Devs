'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/layout/Hero';
import ServiceCard from '@/components/ui/ServiceCard';
import NebulaGraphic from '@/components/ui/NebulaGraphic';
import ProcessTimeline from '@/components/ui/ProcessTimeline';
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
        title="Your Agency's Secret Weapon for Premium Web Development"
        subtitle="White-label development partner who makes you look good. Custom designs, flawless execution, and communication that actually works."
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
      <section className="py-20 bg-nebula-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-nebula-white">
            Your Development Mission Control
          </h2>
          <p className="text-xl text-center text-nebula-white/70 mb-16 max-w-3xl mx-auto">
            Comprehensive web development solutions designed to elevate your agency's capabilities
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Benefits Section - Nebula Theme */}
      <section className="py-20 bg-nebula-black relative overflow-hidden">
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
                      <h3 className="text-lg font-semibold text-nebula-white mb-2 transition-colors duration-300 group-hover:text-nebula-cyan">
                        Actually Easy to Work With
                      </h3>
                      <p className="text-nebula-white/70 transition-colors duration-300 group-hover:text-nebula-white/90">
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
                      <h3 className="text-lg font-semibold text-nebula-white mb-2 transition-colors duration-300 group-hover:text-nebula-cyan">
                        Quality You Can Stake Your Reputation On
                      </h3>
                      <p className="text-nebula-white/70 transition-colors duration-300 group-hover:text-nebula-white/90">
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
                      <h3 className="text-lg font-semibold text-nebula-white mb-2 transition-colors duration-300 group-hover:text-nebula-cyan">
                        Flexible Solutions
                      </h3>
                      <p className="text-nebula-white/70 transition-colors duration-300 group-hover:text-nebula-white/90">
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
                      <h3 className="text-lg font-semibold text-nebula-white mb-2 transition-colors duration-300 group-hover:text-nebula-cyan">
                        True White-Label Partnership
                      </h3>
                      <p className="text-nebula-white/70 transition-colors duration-300 group-hover:text-nebula-white/90">
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
                    <p className="text-nebula-white/70 mt-2">Client Satisfaction Rate</p>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.75s' }}>
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-nebula-cyan blur-2xl opacity-50 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                      <div className="relative text-5xl font-bold bg-gradient-to-r from-nebula-cyan to-nebula-violet bg-clip-text text-transparent">
                        200+
                      </div>
                    </div>
                    <p className="text-nebula-white/70 mt-2">Projects Delivered</p>
                  </div>
                  
                  {/* Stat 3 */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-nebula-cyan blur-2xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }} />
                      <div className="relative text-5xl font-bold bg-gradient-to-r from-nebula-cyan to-nebula-violet bg-clip-text text-transparent">
                        48hrs
                      </div>
                    </div>
                    <p className="text-nebula-white/70 mt-2">Average Response Time</p>
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-nebula-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nebula-white mb-4">
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
        <FloatingParticles />
        
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