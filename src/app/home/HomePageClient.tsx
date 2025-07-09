'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';
import ServiceCard from '@/components/ui/ServiceCard';
import NebulaGraphic from '@/components/ui/NebulaGraphic';
import Icon from '@/components/ui/Icon';
import { services, testimonials, processSteps } from '@/constants/index';

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

const VerticalTimeline = dynamic(() => import('@/components/ui/VerticalTimeline'), {
  loading: () => (
    <div className="space-y-12 animate-pulse">
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

// Only show featured services on homepage for better performance
const featuredServices = services.slice(0, 6);

export default function HomePageClient() {
  // Animation state
  const [visibleServices, setVisibleServices] = useState<Set<number>>(new Set());
  const [partnershipVisible, setPartnershipVisible] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [testimonialVisible, setTestimonialVisible] = useState(false);
  
  // Refs for sections
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const partnershipRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  // Intersection observers
  const servicesObserverRef = useRef<IntersectionObserver | null>(null);
  const sectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Lower threshold for better mobile detection
      rootMargin: '0px 0px -20px 0px', // Smaller margin for mobile
    };

    // Services observer with batched updates
    const pendingServiceUpdates = new Set<number>();
    let updateTimeout: NodeJS.Timeout | null = null;

    const batchUpdateVisibleServices = () => {
      if (pendingServiceUpdates.size > 0) {
        setVisibleServices(prev => new Set([...prev, ...pendingServiceUpdates]));
        pendingServiceUpdates.clear();
      }
      updateTimeout = null;
    };

    servicesObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = serviceRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && !visibleServices.has(index)) {
            pendingServiceUpdates.add(index);
            
            if (!updateTimeout) {
              updateTimeout = setTimeout(batchUpdateVisibleServices, 50);
            }
            
            servicesObserverRef.current?.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    // Section observer for other animations
    sectionObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === partnershipRef.current) {
            setPartnershipVisible(true);
            sectionObserverRef.current?.unobserve(entry.target);
          } else if (entry.target === processRef.current) {
            setProcessVisible(true);
            sectionObserverRef.current?.unobserve(entry.target);
          } else if (entry.target === statsRef.current) {
            setStatsVisible(true);
            sectionObserverRef.current?.unobserve(entry.target);
          } else if (entry.target === testimonialRef.current) {
            setTestimonialVisible(true);
            sectionObserverRef.current?.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    // Delay observation to ensure refs are populated
    const observeElements = () => {
      // Start observing service cards
      serviceRefs.current.forEach(ref => {
        if (ref && servicesObserverRef.current) {
          servicesObserverRef.current.observe(ref);
        }
      });

      // Start observing section elements
      if (partnershipRef.current && sectionObserverRef.current) {
        sectionObserverRef.current.observe(partnershipRef.current);
      }
      if (processRef.current && sectionObserverRef.current) {
        sectionObserverRef.current.observe(processRef.current);
      }
      if (statsRef.current && sectionObserverRef.current) {
        sectionObserverRef.current.observe(statsRef.current);
      }
      if (testimonialRef.current && sectionObserverRef.current) {
        sectionObserverRef.current.observe(testimonialRef.current);
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(observeElements);

    // Fallback: show services after 3 seconds if intersection observer hasn't triggered
    const fallbackTimeout = setTimeout(() => {
      if (visibleServices.size === 0) {
        setVisibleServices(new Set(featuredServices.map((_, index) => index)));
      }
    }, 3000);

    // Cleanup
    return () => {
      if (updateTimeout) clearTimeout(updateTimeout);
      clearTimeout(fallbackTimeout);
      if (servicesObserverRef.current) servicesObserverRef.current.disconnect();
      if (sectionObserverRef.current) sectionObserverRef.current.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Hero
        title="Your Agency's Development Partner"
        subtitle="Web development agency partner based in Austin, TX specializing in white-label solutions for marketing agencies. Skip the hiring, keep the quality."
        actions={[
          {
            text: "View Services & Pricing",
            href: "/services#breadcrumb",
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

      {/* Partnership Section */}
      <Section background="secondary" container>
        <div 
          ref={partnershipRef}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            partnershipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            willChange: !partnershipVisible ? 'transform, opacity' : 'auto'
          }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Web Development Partner for Marketing Agencies
            </h2>
            <p className="text-lg text-text-primary/70 mb-6">
              Hiring full-time developers is expensive and time-consuming for growing agencies. Planet X Devs offers a flexible alternative - seasoned development talent when you need it.
            </p>
            <p className="text-lg text-text-primary/70 mb-8">
              We work directly with marketing agencies to oversee their tech projects, from custom sites to web applications, so you can expand your services without expanding your payroll.
            </p>
            <Link
              href="/contact#contact-form"
              className="inline-block px-8 py-4 rounded-full bg-gradient-nebula text-white font-semibold shadow-glow hover:shadow-nebula-lg hover:scale-105 transition-all duration-300"
            >
              Start Partnership
            </Link>
          </div>
          <NebulaGraphic />
        </div>
      </Section>

      {/* Services Section */}
      <Section background="secondary" container>
        <div ref={servicesRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-text-primary">
            Your Development Mission Control
          </h2>
          <p className="text-xl text-center text-text-primary/70 mb-16 max-w-3xl mx-auto">
            Comprehensive web development solutions designed to elevate your agency's capabilities
          </p>
          
          {/* Unified responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:items-stretch">
            {featuredServices.map((service, index) => {
              const isVisible = visibleServices.has(index);
              const isAnimating = !isVisible;
              
              return (
                <div
                  key={service.id}
                  ref={(el) => { serviceRefs.current[index] = el; }}
                  className={`transform transition-all duration-700 ease-out md:flex ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    willChange: isAnimating ? 'transform, opacity' : 'auto'
                  }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={<Icon name={service.icon} className="w-8 h-8 text-white" />}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section background="secondary" container>
        <div 
          ref={processRef}
          className={`transition-all duration-1000 ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            willChange: !processVisible ? 'transform, opacity' : 'auto'
          }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Mission Process
            </h2>
            <p className="text-xl text-text-primary/70 max-w-2xl mx-auto">
              From discovery to launch, we follow a proven process that ensures success
            </p>
          </div>
          <VerticalTimeline steps={processSteps} layout="horizontal" />
        </div>
      </Section>

      {/* Benefits Section - Nebula Theme */}
      <Section background="secondary" container className="relative">
        {/* Background nebula effect */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-nebula-violet-20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-nebula-purple-20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div 
          ref={statsRef}
          className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            willChange: !statsVisible ? 'transform, opacity' : 'auto'
          }}
        >
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
                        We don't settle when it comes to quality. A job well done is the only acceptible criteria.
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
                        We work with any platform so we can easily adjust our strategy to fit your project needs
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
                        100+
                      </div>
                    </div>
                    <p className="text-text-primary/70 mt-2">Projects Delivered</p>
                  </div>
                  
                  {/* Stat 3 */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-nebula-cyan blur-2xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }} />
                      <div className="relative text-5xl font-bold bg-gradient-to-r from-nebula-cyan to-nebula-violet bg-clip-text text-transparent">
                        24hrs
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
        <div 
          ref={testimonialRef}
          className={`transition-all duration-1000 ${
            testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            willChange: !testimonialVisible ? 'transform, opacity' : 'auto'
          }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What Agencies Say About Us
            </h2>
            <p className="text-xl text-text-primary/70">
              Don't just take our word for it
            </p>
          </div>
          
          <TestimonialCarousel testimonials={testimonials.slice(0, 3)} />
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section container className="overflow-hidden relative" background='dark'>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nebula-white mb-6">
              Ready to Launch Your Next Project?
          </h2>
          <p className="text-xl text-nebula-white/70 mb-10 max-w-2xl mx-auto">
              Let's discuss how I can help your agency deliver exceptional websites without the headaches
          </p>
          <Link
              href="/contact?form=agency-partnership"
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