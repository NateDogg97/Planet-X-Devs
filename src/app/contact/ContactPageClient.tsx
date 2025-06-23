'use client';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import ContactForm from '@/components/forms/ContactForm';
import ContactInfo from '@/components/forms/ContactForm/ContactInfo';
import SocialLinks from '@/components/forms/ContactForm/SocialLinks';
import Section from '@/components/layout/Section';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Card from '@/components/ui/Card';
import StarField from '@/components/ui/StarField';
import { CONTACT_FORM_URLS } from '@/utils';

// Lazy load below-fold components
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
    answer: "Absolutely! I work with agencies worldwide. All communication is handled via email, Slack, or your preferred platform, making timezone differences manageable.",
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
        <div className="max-w-3xl">
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
            <SocialLinks />
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

      <Footer />
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