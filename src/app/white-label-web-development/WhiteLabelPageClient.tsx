'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import StarField from '@/components/ui/StarField';
import {
  whiteLabelStats,
  whiteLabelFeatures,
  modernWebServices,
  customWebServices,
  eCommerceServices,
  wordpressServices,
  whiteLabelServices,
  whiteLabelContentServices,
  whiteLabelPricingPlans,
  whiteLabelProcessSteps,
  whiteLabelTestimonials,
  whiteLabelFAQs
} from '@/constants';
import Icon from '@/components/ui/Icon';

// Lazy load footer
const Footer = dynamic(() => import('@/components/navigation/Footer'), {
  loading: () => <div className="bg-nebula-black h-64 animate-pulse" />
});

const FloatingParticles = dynamic(() => import('@/components/ui/FloatingParticles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

const FAQItem = dynamic(() => import('@/components/ui/FAQItem'), {
  loading: () => (
    <div className="border border-stellar-blue/10 rounded-lg p-6 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-100 rounded w-full"></div>
        <div className="h-4 bg-gray-100 rounded w-5/6"></div>
      </div>
    </div>
  )
});


export default function WhiteLabelPageClient() {

  // Icon mapping for WordPress services
  const serviceIcons = {
    "Custom WordPress Development": "wordpress",
    "WordPress Plugin Development": "plugin", 
    "Performance Optimization": "performance",
    "WordPress Security Hardening": "shield-security",
    "WordPress Multisite Management": "multisite",
    "Theme Customization": "theme"
  } as const;


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section container background="dark" className="relative bg-gradient-to-br from-nebula-purple to-cosmic-violet pt-24 pb-20">
        <div className="absolute inset-0">
          <StarField />
        </div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nebula-white mb-6 leading-tight">
              White Label Web Development for Marketing Agencies
            </h1>
            <p className="text-xl lg:text-2xl text-nebula-white/90 mb-6">
              Your Agency's Technical Partner in Austin, TX
            </p>
            <p className="text-lg text-nebula-white/80 mb-8">
              Professional white label web development that makes your agency shine. From modern JavaScript applications to full-stack solutions, I work behind the scenes while you take all the credit. No contracts, no minimums, just reliable technical partnership when you need it.
            </p>
            <Button size="large" href="/contact" variant="secondary">
              Get a custom quote in 24 hours
            </Button>
            <p className="mt-6 text-nebula-white/80 italic">Get a Quote in 24 Hours • Project-Based or Ongoing • 100% White Label</p>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-stellar-blue/20 to-nebula-black/40 rounded-2xl border border-nebula-cyan/30 backdrop-blur-sm">
              <div className="absolute inset-4 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 border border-nebula-cyan/20">
                  <div className="w-full h-4 bg-nebula-cyan/30 rounded mb-2"></div>
                  <div className="w-3/4 h-3 bg-white/20 rounded mb-1"></div>
                  <div className="w-1/2 h-3 bg-white/20 rounded"></div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-nebula-cyan/20">
                  <div className="w-full h-4 bg-cosmic-violet/30 rounded mb-2"></div>
                  <div className="w-2/3 h-3 bg-white/20 rounded mb-1"></div>
                  <div className="w-3/4 h-3 bg-white/20 rounded"></div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-nebula-cyan/20">
                  <div className="w-full h-4 bg-nebula-purple/30 rounded mb-2"></div>
                  <div className="w-4/5 h-3 bg-white/20 rounded mb-1"></div>
                  <div className="w-1/3 h-3 bg-white/20 rounded"></div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-nebula-cyan/20">
                  <div className="w-full h-4 bg-stellar-blue/30 rounded mb-2"></div>
                  <div className="w-3/5 h-3 bg-white/20 rounded mb-1"></div>
                  <div className="w-4/5 h-3 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section container background="gradient-radial">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            White Label Web Development That Grows Your Agency
          </h2>
          <p className="text-lg text-text-secondary max-w-4xl mx-auto">
            Marketing agencies face a constant dilemma: turn down technical projects or risk unreliable freelancers. As your white label web development partner, I provide the technical expertise your agency needs to confidently take on any web project.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {whiteLabelFeatures.map((feature, index) => (
            <div key={index} className="glass glass-hover p-8 rounded-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-text-primary mb-4">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Modern Web Application Development */}
      <Section container background="secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Modern Web Application Development
          </h2>
          <h3 className="text-xl font-semibold text-text-primary mb-4">JavaScript Framework Expertise</h3>
          <p className="text-lg text-text-secondary">
            White label web development using cutting-edge technologies. I build modern applications that set your agency apart.
          </p>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="glass p-8 rounded-xl">
            <p className="text-text-secondary mb-6">
              For React development, I build single-page applications (SPAs), Progressive Web Apps (PWAs), and component library development. I handle state management with Redux or Context API, implement real-time features with WebSockets, and integrate with headless CMS platforms for modern content management.
            </p>
            <p className="text-text-secondary mb-6">
              My Next.js solutions include server-side rendering (SSR) for SEO optimization, static site generation (SSG) for blazing-fast performance, API routes and serverless functions, performance optimization, SEO-friendly applications, and e-commerce with Next.js Commerce.
            </p>
            <p className="text-text-secondary">
              I also provide full-stack capabilities including Node.js backend development, RESTful API design, GraphQL implementation, database design with MySQL, PostgreSQL, or MongoDB, authentication systems, and cloud deployment on AWS, Vercel, or Netlify.
            </p>
          </div>
        </div>
      </Section>

      {/* Custom Web Solutions */}
      <Section container background="primary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Custom Web Solutions
          </h2>
          <h3 className="text-xl font-semibold text-text-primary mb-4">Tailored Development for Any Need</h3>
          <p className="text-lg text-text-secondary">
            Beyond frameworks, I create custom solutions that solve specific business problems:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="glass glass-hover p-8 rounded-xl">
            <h4 className="text-lg font-bold text-text-primary mb-3">API Development & Integration</h4>
            <p className="text-text-secondary">RESTful and GraphQL APIs, third-party integrations, webhook implementations, and microservices architecture</p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl">
            <h4 className="text-lg font-bold text-text-primary mb-3">Database Architecture</h4>
            <p className="text-text-secondary">Schema design, optimization, migration strategies, and NoSQL solutions</p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl">
            <h4 className="text-lg font-bold text-text-primary mb-3">Real-time Applications</h4>
            <p className="text-text-secondary">WebSocket implementations, live chat systems, collaborative tools, and real-time dashboards</p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl">
            <h4 className="text-lg font-bold text-text-primary mb-3">Cloud-Native Development</h4>
            <p className="text-text-secondary">Serverless functions, containerized applications, CI/CD pipelines, and scalable architectures</p>
          </div>
        </div>
      </Section>

      {/* E-Commerce Development */}
      <Section container background="secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            E-Commerce Development
          </h2>
          <h3 className="text-xl font-semibold text-text-primary mb-4">Complete Online Store Solutions</h3>
          <p className="text-lg text-text-secondary">
            White label web development for e-commerce that converts browsers into buyers. I build online stores that are fast, secure, and easy to manage:
          </p>
        </div>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="glass p-8 rounded-xl">
            <p className="text-text-secondary mb-6">
              For custom e-commerce projects, I create headless commerce architectures, API-first implementations, custom shopping cart solutions, advanced inventory systems, B2B portal development, and integration with ERPs and CRMs.
            </p>
            <p className="text-text-secondary mb-6">
              My Shopify solutions encompass theme customization and development, private app development, Shopify Plus implementations, multi-channel setup, custom checkout for Shopify Plus stores, app integration and configuration, migration from other platforms, and headless Shopify builds.
            </p>
            <p className="text-text-secondary">
              I also work with WooCommerce when it's the right fit: custom store setup and configuration, payment gateway integration, shipping method configuration, and product variation management.
            </p>
          </div>
        </div>
      </Section>

      {/* WordPress Development */}
      <Section container background="primary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            WordPress Development (When Needed)
          </h2>
          <h3 className="text-xl font-semibold text-text-primary mb-4">Professional WordPress Solutions</h3>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-xl">
            <p className="text-text-secondary">
              While not my primary focus, I do provide WordPress development when it's the right tool for the job. This includes custom theme development, plugin creation, performance optimization, and migrations. I work with all major page builders and can handle complex WordPress projects when your clients specifically need this platform.
            </p>
          </div>
        </div>
      </Section>

      {/* Technical Support & Maintenance */}
      <Section container background="secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Technical Support & Maintenance
          </h2>
        </div>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="glass p-8 rounded-xl">
            <p className="text-text-secondary mb-6">
              When client sites break, I'm your rapid response team. White label web development includes being there when things go wrong. My 24-hour emergency support covers site down troubleshooting, security breach response, performance crisis resolution, database corruption fixes, server migration assistance, SSL certificate issues, domain and DNS problems, and backup restoration. I understand that when a client's site is down, every minute costs money and damages relationships.
            </p>
            <p className="text-text-secondary">
              Keep client sites running smoothly with proactive maintenance. Monthly maintenance includes security monitoring, performance monitoring, uptime monitoring, daily backups, monthly reports, and content updates within agreed limits. This proactive approach prevents problems before they impact your clients.
            </p>
          </div>
        </div>
      </Section>

      {/* Performance Optimization */}
      <Section container background="primary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Performance Optimization
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-xl">
            <p className="text-text-secondary">
              Slow sites kill conversions. My white label web development services include comprehensive performance optimization. I conduct thorough performance audits addressing Core Web Vitals optimization, PageSpeed Insights improvements, and GTmetrix score enhancement. This includes image optimization and lazy loading, critical CSS implementation, JavaScript optimization, database optimization, caching strategy implementation, CDN setup and configuration, and third-party script optimization.
            </p>
          </div>
        </div>
      </Section>

      {/* Content Writing Services */}
      <Section container background="secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Content Writing Services
          </h2>
          <p className="text-lg text-text-secondary">
            Professional content that drives traffic, engagement, and conversions for your clients
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whiteLabelContentServices.map((service, index) => (
            <div key={index} className="glass glass-hover p-8 rounded-xl transition-all duration-300">
              <h4 className="text-lg font-bold text-text-primary mb-4">{service.title}</h4>
              <p className="text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>


      {/* Pricing Section */}
      <Section container background="primary" id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Pricing That Makes Sense for Agencies
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whiteLabelPricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 text-center transition-all duration-300 rounded-xl ${
                plan.featured 
                  ? 'glass-violet glass-strong shadow-2xl shadow-nebula-violet/20 scale-105' 
                  : 'glass glass-hover'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-br from-nebula-violet to-nebula-purple text-white text-sm font-bold rounded-lg shadow-lg transform rotate-12 border-2 border-white/20">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-text-primary mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold text-text-primary mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-text-secondary">✓ {feature}</li>
                ))}
              </ul>
              <Button 
                href="/contact" 
                variant="primary"
              >
                {plan.name === "Project-Based Pricing" ? "Get Quote" : plan.name === "Monthly Partnership Plans" ? "Start Partnership" : "Learn More"}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Pricing Details */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="glass p-8 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Project-Based Pricing</h3>
            <p className="text-text-secondary">
              Clear quotes for defined projects. No hourly tracking hassles or budget surprises. My quotes include development, testing, revisions, and deployment. Mark up as much as you want - most agencies add 50-100% to my wholesale rates.
            </p>
          </div>
          
          <div className="glass p-8 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Monthly Partnership Plans</h3>
            <p className="text-text-secondary">
              For agencies with ongoing needs, monthly partnerships offer better rates and priority scheduling. Reserve dedicated hours each month at discounted rates. Unused hours roll over, scale up or down with 30 days notice. Perfect for agencies wanting predictable costs.
            </p>
          </div>
          
          <div className="glass p-8 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Emergency Support</h3>
            <p className="text-text-secondary">
              When client sites go down, I'm your emergency response team. Priority support for existing partners. 24-hour response guarantee. Fixed-rate emergency interventions. Because your client relationships matter.
            </p>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section container background="secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            How White Label Web Development Works
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whiteLabelProcessSteps.map((step, index) => (
            <div key={index} className="glass glass-hover p-6 rounded-xl text-center transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-nebula-purple to-cosmic-violet text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-4">{step.title}</h4>
              <p className="text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Special Offer Section */}
      <Section container background="dark" className="bg-gradient-to-br from-nebula-cyan to-stellar-blue">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Special Offer for New Agency Partners
          </h2>
          <p className="text-xl text-nebula-white/90 mb-12">
            🎯 Try our services risk-free and see why 500+ agencies trust us
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">✓ Free Trial Project</h4>
              <p className="text-white/80">Test our quality with a small project at no cost</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">✓ 50% Off First Month</h4>
              <p className="text-white/80">Half price on any monthly plan for new partners</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">✓ Dedicated Onboarding</h4>
              <p className="text-white/80">Personal account manager to ensure success</p>
            </div>
          </div>
          <Button size="large" href="/contact" variant="secondary">
            Start Your Free Trial
          </Button>
          <p className="text-white/90 mt-6">
            Limited time offer • No credit card required • Instant access
          </p>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section container background="gradient-radial">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            What Agency Owners Say
          </h2>
        </div>
        <div className="space-y-8 max-w-4xl mx-auto">
          {whiteLabelTestimonials.map((testimonial, index) => (
            <div key={index} className="glass-elevated border-l-4 border-text-accent p-8 rounded-lg">
              <p className="text-lg text-text-secondary italic mb-4">"{testimonial.quote}"</p>
              <p className="text-text-primary font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </Section>


            {/* Features Highlights */}
            <Section container background="gradient-radial">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Why Choose Our White Label Services?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="glass glass-hover p-8 rounded-xl text-center transition-all duration-300">
            <h3 className="text-lg font-bold text-text-primary mb-4">White Label Guarantee</h3>
            <p className="text-text-secondary">We never contact your clients. All work delivered under your brand. Complete NDA protection.</p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl text-center transition-all duration-300">
            <h3 className="text-lg font-bold text-text-primary mb-4">Expert WordPress Team</h3>
            <p className="text-text-secondary">100+ certified developers with 12+ years experience. Native English project managers.</p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl text-center transition-all duration-300">
            <h3 className="text-lg font-bold text-text-primary mb-4">Unlimited Revisions</h3>
            <p className="text-text-secondary">We work until you're 100% satisfied. No hidden fees. Quality guarantee on all deliverables.</p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl text-center transition-all duration-300">
            <h3 className="text-lg font-bold text-text-primary mb-4">Global Presence</h3>
            <p className="text-text-secondary">Teams on both sides of the globe ensure 24/7 coverage and faster turnaround.</p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl text-center transition-all duration-300">
            <h3 className="text-lg font-bold text-text-primary mb-4">Complete NDA Protection</h3>
            <p className="text-text-secondary">All work is 100% confidential. Full ownership of code and intellectual property.</p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl text-center transition-all duration-300">
            <h3 className="text-lg font-bold text-text-primary mb-4">12+ Years WordPress Focus</h3>
            <p className="text-text-secondary">Deep expertise in WordPress ecosystem, best practices, and performance optimization.</p>
          </div>
        </div>
      </Section>

      {/* Industry Expertise Section */}
      <Section container background="secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Industry Expertise & Compliance
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass glass-hover p-8 rounded-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-text-primary mb-4">Security & Compliance</h3>
            <p className="text-text-secondary">ISO 27001 compliant processes, GDPR-ready solutions, HIPAA-compliant hosting available, PCI DSS for e-commerce, daily encrypted backups, and enterprise security protocols.</p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-text-primary mb-4">Industry Specialization</h3>
            <p className="text-text-secondary">Healthcare, finance, education, e-commerce, SaaS, non-profits, government, and enterprise. Specialized WordPress solutions for regulated industries with compliance requirements.</p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-text-primary mb-4">Performance Guarantees</h3>
            <p className="text-text-secondary">99.9% uptime SLA, &lt;3 second load times, 90+ PageSpeed scores, 24/7 monitoring, automatic scaling, and CDN optimization. Your sites will outperform the competition.</p>
          </div>
        </div>
      </Section>

      {/* Why Agencies Choose Planet X Devs */}
      <Section container background="primary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Why Agencies Choose Planet X Devs
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass glass-hover p-8 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Technical Excellence Without the Overhead
            </h3>
            <p className="text-text-secondary">
              Skip the $150K+ salary, benefits, and management overhead of senior developers. Get the same expertise on-demand at wholesale rates. Scale up for big projects, scale down during quiet periods. No fixed costs eating into your margins.
            </p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              True White Label Partnership
            </h3>
            <p className="text-text-secondary">
              I've been behind the scenes for agencies since 2019. I understand that your reputation is everything. That's why I stay invisible, deliver on time, and make you look like the hero. Your brand on everything, your success is my success.
            </p>
          </div>
          <div className="glass glass-hover p-8 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              One Developer, Full Accountability
            </h3>
            <p className="text-text-secondary">
              No project manager telephone games or offshore communication issues. You work directly with me - the person actually writing the code. Questions answered immediately, changes implemented quickly, problems solved before they become issues.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section container background="secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know about our white label web development services
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {whiteLabelFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section container background="dark" className="bg-gradient-to-br from-nebula-purple to-cosmic-violet">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Add Technical Capabilities to Your Agency?
          </h2>
          <p className="text-lg text-nebula-white/90 max-w-3xl mx-auto mb-12">
            Stop turning down profitable projects. Stop dealing with unreliable freelancers. Start delivering exceptional web development under your brand.
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Discuss Your Next Project</h3>
            <p className="text-lg text-nebula-white/90 mb-8">
              <strong>Free Consultation</strong> • <strong>Quote in 24 Hours</strong> • <strong>No Obligations</strong>
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <p className="text-white font-semibold">Email</p>
                <p className="text-nebula-white/90">hello@planetxdevs.com</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Phone</p>
                <p className="text-nebula-white/90">(512) 555-0100</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Based in</p>
                <p className="text-nebula-white/90">Austin, TX</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Serving</p>
                <p className="text-nebula-white/90">Agencies Nationwide</p>
              </div>
            </div>
            
            <Button size="large" href="/contact" variant="secondary" className="mb-8">
              Start Your Free Consultation
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-6">Quick Start Options:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-3">1. Test Project</h4>
                <p className="text-white/90">Try me out with a small project</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-3">2. Current Project</h4>
                <p className="text-white/90">Jump into your active development needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-3">3. Partnership Discussion</h4>
                <p className="text-white/90">Explore ongoing collaboration</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-nebula-white/80 italic mb-2">
              Planet X Devs - Professional White Label Web Development for Marketing Agencies
            </p>
            <p className="text-nebula-white/70 text-sm">
              Serving agencies nationwide from Austin, TX • Flexible partnerships • No contracts required • Your success is my success
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}