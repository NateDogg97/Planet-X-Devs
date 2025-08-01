'use client';

import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import StarField from '@/components/ui/StarField';
import HowItWorksSection from './HowItWorks';
import FAQItem from '@/components/ui/FAQItem';
import {
  whiteLabelFeatures,
  whiteLabelFAQs
} from '@/constants';
import Link from 'next/link';

export default function WhiteLabelPageClient() {

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

      {/* Comprehensive White Label Services */}
      <Section container background="secondary" className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Comprehensive White Label Services
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Scrollable Content Area */}
          <div className="lg:col-span-2 space-y-12 pr-4">
            {/* Modern Web Application Development */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                1. Modern Web Application Development
              </h3>
              <h4 className="text-xl font-semibold text-text-primary mb-4">JavaScript Framework Expertise</h4>
              <p className="text-lg text-text-secondary mb-6">
                White label web development using cutting-edge technologies. I build modern applications that set your agency apart.
              </p>
              <div className="px-6 border-l-2 border-nebula-violet-2 border-nebula-violet">
                <p className="text-text-primary mb-4">
                  For React development, I build single-page applications (SPAs), Progressive Web Apps (PWAs), and component library development. I handle state management with Redux or Context API, implement real-time features with WebSockets, and integrate with headless CMS platforms for modern content management.
                </p>
                <p className="text-text-primary mb-4">
                  My Next.js solutions include server-side rendering (SSR) for SEO optimization, static site generation (SSG) for blazing-fast performance, API routes and serverless functions, performance optimization, SEO-friendly applications, and e-commerce with Next.js Commerce.
                </p>
                <p className="text-text-primary">
                  I also provide full-stack capabilities including Node.js backend development, RESTful API design, GraphQL implementation, database design with MySQL, PostgreSQL, or MongoDB, authentication systems, and cloud deployment on AWS, Vercel, or Netlify.
                </p>
              </div>
            </div>

            {/* Custom Web Solutions */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                2. Custom Web Solutions
              </h3>
              <h4 className="text-xl font-semibold text-text-primary mb-4">Tailored Development for Any Need</h4>
              <p className="text-lg text-text-secondary mb-6">
                Beyond frameworks, I create custom solutions that solve specific business problems:
              </p>
              <div className="grid gap-4 border-l-2 border-nebula-violet-2 border-nebula-violet">
                <div className="p-4 rounded-xl">
                  <h5 className="font-bold text-text-primary mb-2">API Development & Integration</h5>
                  <p className="text-text-primary text-sm">RESTful and GraphQL APIs, third-party integrations, webhook implementations, and microservices architecture</p>
                </div>
                <div className="p-4 rounded-xl">
                  <h5 className="font-bold text-text-primary mb-2">Database Architecture</h5>
                  <p className="text-text-primary text-sm">Schema design, optimization, migration strategies, and NoSQL solutions</p>
                </div>
                <div className="p-4 rounded-xl">
                  <h5 className="font-bold text-text-primary mb-2">Real-time Applications</h5>
                  <p className="text-text-primary text-sm">WebSocket implementations, live chat systems, collaborative tools, and real-time dashboards</p>
                </div>
                <div className="p-4 rounded-xl">
                  <h5 className="font-bold text-text-primary mb-2">Cloud-Native Development</h5>
                  <p className="text-text-primary text-sm">Serverless functions, containerized applications, CI/CD pipelines, and scalable architectures</p>
                </div>
              </div>
            </div>

            {/* E-Commerce Development */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                3. E-Commerce Development
              </h3>
              <h4 className="text-xl font-semibold text-text-primary mb-4">Complete Online Store Solutions</h4>
              <p className="text-lg text-text-secondary mb-6">
                White label web development for e-commerce that converts browsers into buyers. I build online stores that are fast, secure, and easy to manage:
              </p>
              <div className="px-6 border-l-2 border-nebula-violet">
                <p className="text-text-primary mb-4">
                  For custom e-commerce projects, I create headless commerce architectures, API-first implementations, custom shopping cart solutions, advanced inventory systems, B2B portal development, and integration with ERPs and CRMs.
                </p>
                <p className="text-text-primary mb-4">
                  My Shopify solutions encompass theme customization and development, private app development, Shopify Plus implementations, multi-channel setup, custom checkout for Shopify Plus stores, app integration and configuration, migration from other platforms, and headless Shopify builds.
                </p>
                <p className="text-text-primary">
                  I also work with WooCommerce when it's the right fit: custom store setup and configuration, payment gateway integration, shipping method configuration, and product variation management.
                </p>
              </div>
            </div>

            {/* WordPress Development */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                4. WordPress Development
              </h3>
              <h4 className="text-xl font-semibold text-text-primary mb-4">Enterprise WordPress Solutions - A Core Competency</h4>
              <div className="px-6 border-l-2 border-nebula-violet">
                <p className="text-text-primary mb-4">
                  WordPress powers 43% of the web, and it's one of our native languages. While we lead with modern JavaScript frameworks, WordPress remains an integral part of our agency's service offering. We've been building WordPress solutions since 2012, and our deep expertise means we can handle everything from simple business sites to complex enterprise applications.
                </p>
                <p className="text-text-primary mb-4">
                  Our WordPress development services include custom theme development from design files (Figma, Adobe XD, Sketch), advanced plugin development for custom functionality, WooCommerce and e-commerce solutions, multisite networks for franchises and enterprises, performance optimization and Core Web Vitals, security hardening and compliance (GDPR, HIPAA), and seamless migrations from any platform.
                </p>
                <p className="text-text-primary mb-4">
                  We're fluent in all major WordPress ecosystems: Gutenberg block development and full site editing, Advanced Custom Fields (ACF) implementation, page builders (Elementor, Divi, Beaver Builder) when required, WordPress REST API for headless implementations, membership and learning management systems (LMS), and multilingual sites with WPML or Polylang.
                </p>
                <p className="text-text-primary">
                  What sets us apart is our hybrid approach - we can build traditional WordPress sites when that's the best solution, create headless WordPress backends with React frontends, or integrate WordPress with modern JavaScript applications. This flexibility means your clients get the best tool for their specific needs, not a one-size-fits-all solution.
                </p>
              </div>
            </div>

            {/* Technical Support & Maintenance */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                5. Technical Support & Maintenance
              </h3>
              <div className="px-6 border-l-2 border-nebula-violet">
                <p className="text-text-primary mb-4">
                  When client sites break, I'm your rapid response team. White label web development includes being there when things go wrong. My 24-hour emergency support covers site down troubleshooting, security breach response, performance crisis resolution, database corruption fixes, server migration assistance, SSL certificate issues, domain and DNS problems, and backup restoration. I understand that when a client's site is down, every minute costs money and damages relationships.
                </p>
                <p className="text-text-primary">
                  Keep client sites running smoothly with proactive maintenance. Monthly maintenance includes security monitoring, performance monitoring, uptime monitoring, daily backups, monthly reports, and content updates within agreed limits. This proactive approach prevents problems before they impact your clients.
                </p>
              </div>
            </div>

            {/* Performance Optimization */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                6. Performance Optimization
              </h3>
              <div className="px-6 border-l-2 border-nebula-violet">
                <p className="text-text-primary mb-4">
                  Slow sites kill conversions. My white label web development services include comprehensive performance optimization. I conduct thorough performance audits addressing Core Web Vitals optimization, PageSpeed Insights improvements, and GTmetrix score enhancement. This includes image optimization and lazy loading, critical CSS implementation, JavaScript optimization, database optimization, caching strategy implementation, CDN setup and configuration, and third-party script optimization.
                </p>
                <p className="text-text-primary">
                  Want to see how your current site measures up? Check out our <Link href="/website-audit-checklist" className="text-nebula-cyan hover:underline">free 30-point website audit checklist</Link> to identify areas for improvement.
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Image Area */}
          <div className="relative lg:sticky lg:top-28 h-fit">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-nebula-purple/20 via-cosmic-violet/15 to-nebula-cyan/20 rounded-3xl blur-xl transform scale-110 animate-pulse"></div>
            
            <div className="relative w-full h-[600px] bg-gradient-to-br from-stellar-blue/20 to-nebula-black/40 rounded-2xl border border-nebula-cyan/30 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-nebula-cyan/20 rounded-full mx-auto mb-4 animate-pulse"></div>
                <p className="text-nebula-white/60 text-lg">Service Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section container background="secondary">
        <HowItWorksSection />
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

      {/* Pricing Section */}
      <Section container background="secondary" id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Pricing That Makes Sense for Agencies
          </h2>
        </div>
        
        {/* Three Pricing Options */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Project-Based Pricing */}
          <div className="glass glass-hover p-8 rounded-xl flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Project-Based Pricing</h3>
              <div className="text-4xl font-bold text-nebula-purple mb-2">Custom Quote</div>
              <p className="text-text-secondary">Per Project</p>
            </div>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>Clear quotes for defined projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>No hourly tracking hassles</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>Includes development, testing, revisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>Mark up 50-100% to wholesale rates</span>
              </li>
            </ul>
            <div className="border-t border-gray-200 pt-6 mb-8 flex-grow">
              <p className="text-text-secondary text-sm leading-relaxed">
                Clear quotes for defined projects. No hourly tracking hassles or budget surprises. My quotes include development, testing, revisions, and deployment. Mark up as much as you want - most agencies add 50-100% to my wholesale rates.
              </p>
            </div>
            <Button href="/contact" variant="primary" className="w-full mt-auto">
              Get Quote
            </Button>
          </div>

          {/* Monthly Partnership Plans */}
          <div className="glass-violet glass-strong p-8 rounded-xl relative transform scale-105 shadow-2xl shadow-nebula-violet/20 flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Monthly Partnership Plans</h3>
              <div className="text-4xl font-bold text-nebula-violet mb-2">Better Rates</div>
              <p className="text-text-secondary">Monthly Retainer</p>
            </div>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>Reserve dedicated hours monthly</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>Unused hours roll over</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>Scale up or down with 30 days notice</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>Perfect for predictable costs</span>
              </li>
            </ul>
            <div className="border-t border-nebula-violet/20 pt-6 mb-8 flex-grow">
              <p className="text-text-secondary text-sm leading-relaxed">
                For agencies with ongoing needs, monthly partnerships offer better rates and priority scheduling. Reserve dedicated hours each month at discounted rates. Unused hours roll over, scale up or down with 30 days notice. Perfect for agencies wanting predictable costs.
              </p>
            </div>
            <Button href="/contact" variant="secondary" className="w-full mt-auto">
              Start Partnership
            </Button>
          </div>

          {/* Emergency Support */}
          <div className="glass glass-hover p-8 rounded-xl flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Emergency Support</h3>
              <div className="text-4xl font-bold text-stellar-blue mb-2">Fixed Rates</div>
              <p className="text-text-secondary">24/7 Available</p>
            </div>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>Priority support for partners</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>24-hour response guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>Fixed-rate interventions</span>
              </li>
              <li className="flex items-start">
                <span className="text-nebula-cyan mr-2">✓</span>
                <span>Protect client relationships</span>
              </li>
            </ul>
            <div className="border-t border-gray-200 pt-6 mb-8 flex-grow">
              <p className="text-text-secondary text-sm leading-relaxed">
                When client sites go down, I'm your emergency response team. Priority support for existing partners. 24-hour response guarantee. Fixed-rate emergency interventions. Because your client relationships matter.
              </p>
            </div>
            <Button href="/contact" variant="primary" className="w-full mt-auto">
              Learn More
            </Button>
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
                <p className="text-nebula-white/90">nathaniel@planetxdevs.com</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Phone</p>
                <p className="text-nebula-white/90">(512) 789-8844</p>
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

    </div>
  );
}