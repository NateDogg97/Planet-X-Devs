'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import ContactForm from '@/components/forms/ContactForm';
import ContactInfo from '@/components/forms/ContactForm/ContactInfo';
import Section from '@/components/layout/Section';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Card from '@/components/ui/Card';
import StarField from '@/components/ui/StarField';
import { CONTACT_FORM_URLS } from '@/utils';


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

// Sample FAQs for the preview section
const contactFAQs = [
  {
    question: "How quickly can you start on my project?",
    answer: "I typically begin new projects within 3-5 business days after our initial consultation. For urgent requests, I offer expedited timelines.",
  },
  {
    question: "Do you work with agencies outside the US?",
    answer: "Absolutely! I work with agencies worldwide. All communication is handled via email or your preferred platform, making timezone differences manageable.",
  },
  {
    question: "What if I need changes after the project is complete?",
    answer: "I offer post-launch support packages and can handle ongoing maintenance. Small tweaks are often included, and larger changes are billed hourly or through a retainer.",
  },
];

function ContactPageContent() {
  const searchParams = useSearchParams();
  
  // Auto-scroll to contact form when query parameters exist
  useEffect(() => {
    const hasQueryParams = searchParams.toString().length > 0;
    if (hasQueryParams) {
      // Small delay to ensure the component is rendered
      setTimeout(() => {
        const contactFormElement = document.getElementById('contact-form');
        if (contactFormElement) {
          contactFormElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    }
  }, [searchParams]);
  
  return (
    <div className="min-h-screen">
      {/* Compact Page Header */}
      <Section container background='dark' className="relative bg-gradient-adaptive pt-24 pb-12">
        <div className="absolute inset-0">
          <StarField />
        </div>
        <div className="max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something Great Together
          </h1>
          <p className="text-xl text-nebula-white/80">
            Whether you're a solo freelancer or an established agency, let's talk about how I can help you deliver exceptional websites without the development headaches.
          </p>
        </div>
      </Section>

      {/* Breadcrumbs */}
      <Section spacing='xsmall' container background='secondary'>
        <Breadcrumbs />
      </Section>

      {/* Main Contact Section with Grid Layout */}
      <Section container className="relative" background='secondary' spacing="xlarge" id="contact-form">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: TabInterface with forms - 2/3 width */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Right: Contact Info and Social - 1/3 width */}
          <div className="space-y-8">
            <ContactInfo />
            
            {/* Process Overview */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-text-primary">Our Proven Development Process</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-nebula-violet to-nebula-purple flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold">1</span>
                    <div>
                      <h4 className="font-medium text-text-primary mb-1">Discovery & Strategy Session</h4>
                      <p className="text-sm text-text-secondary">Free 30-minute consultation where we deep-dive into your project goals, technical requirements, and business objectives. We'll provide honest feedback and actionable recommendations, even if we're not the right fit.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-nebula-violet to-nebula-purple flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold">2</span>
                    <div>
                      <h4 className="font-medium text-text-primary mb-1">Transparent Project Proposal</h4>
                      <p className="text-sm text-text-secondary">Within 48 hours, receive a detailed scope document with fixed pricing, realistic timelines, and clear deliverables. No hidden fees, no surprise costs – everything laid out upfront for your peace of mind.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-nebula-violet to-nebula-purple flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold">3</span>
                    <div>
                      <h4 className="font-medium text-text-primary mb-1">Agile Development & Communication</h4>
                      <p className="text-sm text-text-secondary">Weekly progress updates with live demos and milestone-based development. You'll always know exactly where your project stands with our transparent project management approach.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-nebula-violet to-nebula-purple flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold">4</span>
                    <div>
                      <h4 className="font-medium text-text-primary mb-1">Launch Support & Partnership</h4>
                      <p className="text-sm text-text-secondary">30 days of post-launch support included with every project. We handle bug fixes, minor adjustments, and provide training documentation. Plus, ongoing maintenance packages to keep your site running smoothly.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Trust Indicators */}
              <div className="space-y-4 pt-6 border-t border-white/10 dark:border-white/10">
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Why Agencies Choose Planet X Devs</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="shield" className="w-5 h-5 text-nebula-cyan flex-shrink-0" />
                    <p className="text-sm text-text-secondary">
                      <span className="font-medium text-text-primary">100% Project Completion Rate</span> – Every project we start gets delivered on time and on budget
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="clock" className="w-5 h-5 text-nebula-cyan flex-shrink-0" />
                    <p className="text-sm text-text-secondary">
                      <span className="font-medium text-text-primary">4-Hour Response Guarantee</span> – Critical issues addressed immediately, standard requests within one business day
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="code" className="w-5 h-5 text-nebula-cyan flex-shrink-0" />
                    <p className="text-sm text-text-secondary">
                      <span className="font-medium text-text-primary">Modern Tech Stack</span> – Next.js, React, TypeScript, and enterprise-grade solutions that scale with your business
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="users" className="w-5 h-5 text-nebula-cyan flex-shrink-0" />
                    <p className="text-sm text-text-secondary">
                      <Link href="/white-label-web-development" className="font-medium text-text-primary hover:underline">White-Label Ready</Link> – We work behind the scenes, letting you maintain client relationships while we handle the technical execution
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Proof Alternative */}
              <div className="bg-gradient-to-br from-nebula-purple/10 to-nebula-violet/10 rounded-lg p-4 border border-nebula-purple/20">
                <p className="text-sm text-text-secondary italic">
                  "As a newly launched agency partner, we're offering <span className="text-text-primary font-medium">20% off your first project</span> to demonstrate our commitment to quality and build lasting partnerships. Let's grow together!"
                </p>
                <p className="text-xs text-text-tertiary mt-2">– Nathaniel, Founder of Planet X Devs</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Form Selection Guide */}
      <Section container background='secondary'>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Not Sure Which Form to Use?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the option that best matches your current needs. Don't worry - we'll figure out the details together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => window.location.href = CONTACT_FORM_URLS.AGENCY_PARTNERSHIP}>
            <Card className="glass-violet h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-nebula-violet to-nebula-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="briefcase" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4 text-center">New Project</h3>
              <p className="text-text-secondary text-center mb-6">
                Ready to start a new website or development project? Let's discuss scope, timeline, and budget.
              </p>
              <div className="text-center">
                <div className="inline-block px-4 py-2 text-sm font-semibold rounded-lg border-2 border-nebula-violet dark:border-nebula-cyan bg-white dark:bg-nebula-black text-nebula-violet dark:text-nebula-cyan group-hover:bg-nebula-violet dark:group-hover:bg-nebula-cyan group-hover:text-white dark:group-hover:text-nebula-black transition-all duration-300 cursor-pointer">
                  Start Project Discussion
                </div>
              </div>
            </Card>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => window.location.href = CONTACT_FORM_URLS.QUICK_CONSULTATION}>
            <Card className="glass-violet h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-nebula-cyan to-stellar-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="message-circle" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4 text-center">Quick Chat</h3>
              <p className="text-text-secondary text-center mb-6">
                Have questions about our services or want to explore how we might work together? Let's talk.
              </p>
              <div className="text-center">
                <div className="inline-block px-4 py-2 text-sm font-semibold rounded-lg border-2 border-nebula-cyan dark:border-nebula-violet text-nebula-cyan dark:text-nebula-violet bg-white dark:bg-nebula-black group-hover:bg-nebula-cyan dark:group-hover:bg-nebula-violet group-hover:text-white dark:group-hover:text-nebula-black transition-all duration-300 cursor-pointer">
                  Schedule Consultation
                </div>
              </div>
            </Card>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => window.location.href = CONTACT_FORM_URLS.SUPPORT_MAINTENANCE}>
            <Card className="glass-violet h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-nebula-purple to-nebula-violet rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name="exclamation-circle" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4 text-center">Emergency Support</h3>
              <p className="text-text-secondary text-center mb-6">
                Need help with an existing website or ongoing maintenance? We've got you covered.
              </p>
              <div className="text-center">
                <div className="inline-block px-4 py-2 text-sm font-semibold rounded-lg border-2 border-nebula-purple dark:border-stellar-blue text-nebula-purple dark:text-stellar-blue bg-white dark:bg-nebula-black group-hover:bg-nebula-purple dark:group-hover:bg-stellar-blue group-hover:text-white dark:group-hover:text-nebula-black transition-all duration-300 cursor-pointer">
                  Get Support
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Preview Section */}
      <Section container background='secondary' id='faq'>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Quick answers to common questions. Need more details? Just ask!
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {contactFAQs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section container background='secondary'>
        <div className="text-center bg-nebula-black backdrop-blur-sm rounded-3xl p-12 relative">
          <div className="relative z-10">

            <h2 className="text-4xl font-bold mb-6 text-nebula-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-nebula-white/80 mb-8 max-w-2xl mx-auto">
              Join the agencies who've discovered the power of reliable development partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="large" href="#contact-form" className="bg-gradient-to-r from-nebula-cyan to-nebula-violet hover:shadow-nebula-lg hover:scale-105">
                Get Started Today
              </Button>
              <Button variant="outline" size="large" href="/services">
                View Our Services
              </Button>
            </div>

            <div className="text-sm text-text-tertiary">
              <p>Typical response time: Less than 4 hours • Free project consultation • No obligation quotes</p>
            </div>
          </div>

          <FloatingParticles />
        </div>
      </Section>

    </div>
  );
}

export default function ContactPageClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg-primary">Loading...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}