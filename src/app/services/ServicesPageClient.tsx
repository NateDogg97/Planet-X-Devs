'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import ServiceDetailCard from '@/components/ui/ServiceDetailCard';
import RetainerPlanCard from '@/components/ui/RetainerPlanCard';
import Section from '@/components/layout/Section';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { services, agencyPartnershipPlans, developmentProcessSteps } from '@/constants/services';
import { faqItems } from '@/constants/faq';
import StarField from '@/components/ui/StarField';

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

const FloatingParticles = dynamic(() => import('@/components/ui/FloatingParticles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
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
      {/* Compact Page Header */}
      <Section container className="relative" background='dark' spacing='medium'>
        <div className="absolute inset-0">
          <StarField />
        </div>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Web Development Services
          </h1>
          <p className="text-xl text-nebula-white/80">
            White-label development partnerships that make your agency look great. From WordPress to React, we've got the technical expertise you need.
          </p>
        </div>
      </Section>

      {/* Breadcrumbs */}
      <Section container spacing='xsmall' background='secondary'>
        <Breadcrumbs />
      </Section>

      {/* Services Overview */}
      <Section container background='secondary'>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            What We Build
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From simple landing pages to complex web applications, we deliver the technical solutions your clients need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceDetailCard 
              key={index} 
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features.map(feature => ({
                text: feature,
                included: true
              }))}
              timeline={service.timeline}
              popular={service.popular}
            />
          ))}
        </div>
      </Section>

      {/* Agency Partnership Plans */}
      <Section background='primary' container id='partnership-plans'>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Agency Partnership Plans
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            True white-label partnerships designed specifically for digital marketing agencies. Your clients never know we exist unless you want them to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {agencyPartnershipPlans.map((plan) => (
            <RetainerPlanCard
              key={plan.id}
              title={plan.name}
              price={{
                amount: plan.price,
                period: plan.period
              }}
              description={plan.description || ''}
              features={plan.features}
              popular={plan.highlighted || false}
              badge={plan.badge}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            Need more hours or a custom arrangement? Let&apos;s talk about enterprise options.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-nebula-violet text-white rounded-full font-semibold hover:bg-nebula-violet/90 transition-colors"
          >
            Discuss Custom Plan
          </Link>
        </div>
      </Section>

      {/* Development Process */}
      <Section container background='secondary'>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Our Development Process
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Streamlined, transparent, and designed to make you look great to your clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <VerticalTimeline steps={developmentProcessSteps} />
        </div>
      </Section>

      {/* Coming Soon Section - Updated with Old Styling */}
      <Section container className="bg-gradient-to-br relative overflow-hidden from-bg-primary via-nebula-purple/10 to-bg-primary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 bg-violet-400/20 rounded-full blur-xl animate-pulse" />
              <span className="relative inline-block px-4 py-2 bg-violet-400/20 text-violet-400 rounded-full text-sm font-semibold border border-violet-400/40">
                COMING SOON
              </span>
              <div className="absolute -inset-1 border-2 border-violet-400/20 rounded-full animate-rotate motion-reduce:animate-none" style={{ borderStyle: 'dashed' }} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Exciting New Services on the Horizon
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              We&apos;re constantly expanding our capabilities to better serve your agency. 
              Here&apos;s what&apos;s coming next to help you deliver even more value to your clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Advanced Analytics */}
            <div className="glass rounded-lg p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10">
                Advanced Analytics Setup
              </h3>
              <p className="text-text-secondary relative z-10">
                Comprehensive performance tracking and reporting for all client websites. Custom dashboards, conversion tracking, and automated monthly insights.
              </p>
            </div>
            
            {/* AI-Powered Tools */}
            <div className="glass rounded-lg p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10">
                AI-Powered Development Tools
              </h3>
              <p className="text-text-secondary relative z-10">
                Leverage AI to speed up development cycles and improve client communication with automated updates and intelligent code generation.
              </p>
            </div>
            
            {/* Full Website Management */}
            <div className="glass rounded-lg p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10">
                Complete Website Management
              </h3>
              <p className="text-text-secondary relative z-10">
                Full-service website care from hosting to maintenance. Let us handle everything while you focus on growing your agency.
              </p>
            </div>
            
            {/* Progressive Web Apps */}
            <div className="glass rounded-lg p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10">
                Progressive Web Apps (PWA)
              </h3>
              <p className="text-text-secondary relative z-10">
                Build web apps that work offline, send push notifications, and feel like native apps on mobile devices.
              </p>
            </div>
            
            {/* API Development */}
            <div className="glass rounded-lg p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10">
                Custom API Development
              </h3>
              <p className="text-text-secondary relative z-10">
                RESTful APIs and GraphQL endpoints for complex integrations and headless architecture implementations.
              </p>
            </div>
            
            {/* Conversion Rate Optimization */}
            <div className="glass rounded-lg p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10">
                Conversion Rate Optimization
              </h3>
              <p className="text-text-secondary relative z-10">
                A/B testing, heat mapping, and user behavior analysis to maximize your clients&apos; website conversions.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-text-secondary mb-6">
              Want early access to these services or have a specific need?
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-nebula-cyan to-nebula-purple text-nebula-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Early Access
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-nebula-violet/10 rounded-full blur-3xl" />
      </Section>

      {/* FAQ Section */}
      <Section background='secondary' id='faq'>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to know about working with Planet X Devs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqItems.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background='dark' className="relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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