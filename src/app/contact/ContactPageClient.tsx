'use client';

import dynamic from 'next/dynamic';
import ContactForm from '@/components/forms/ContactForm';
import ContactInfo from '@/components/forms/ContactForm/ContactInfo';
import SocialLinks from '@/components/forms/ContactForm/SocialLinks';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Hero from '@/components/layout/Hero';
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

export default function ContactPageClient() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://planetxdevs.com/#organization",
        "name": "Planet X Devs",
        "alternateName": "Planet X Development Services",
        "url": "https://planetxdevs.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://planetxdevs.com/logo.png",
          "width": 400,
          "height": 400
        },
        "description": "Professional web development and technical support services for digital marketing agencies. White-label development, SEO services, and ongoing technical support.",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Remote",
          "addressCountry": "US"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-555-PLANET",
            "contactType": "customer service",
            "availableLanguage": "English",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00",
              "validFrom": "2024-01-01",
              "validThrough": "2025-12-31"
            }
          },
          {
            "@type": "ContactPoint",
            "email": "hello@planetxdevs.com",
            "contactType": "customer service",
            "availableLanguage": "English"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom website development and maintenance services for digital marketing agencies"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical Support",
                "description": "Ongoing technical support and maintenance for websites and digital platforms"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Services",
                "description": "Search engine optimization services to improve website visibility and rankings"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://planetxdevs.com/contact",
        "url": "https://planetxdevs.com/contact",
        "name": "Contact Planet X Devs | Your Agency's Technical Partner",
        "description": "Get white-label web development, tech support, and SEO services for your digital marketing agency. Project quotes, quick consultations, and ongoing support available.",
        "isPartOf": {
          "@id": "https://planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "mainEntity": {
          "@type": "ContactPage",
          "name": "Contact Planet X Devs"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://planetxdevs.com/contact#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you start on my project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I typically begin new projects within 3-5 business days after our initial consultation. For urgent requests, I offer expedited timelines."
            }
          },
          {
            "@type": "Question", 
            "name": "Do you work with agencies outside the US?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! I work with agencies worldwide. All communication is handled via email, Slack, or your preferred platform, making timezone differences manageable."
            }
          },
          {
            "@type": "Question",
            "name": "What if I need changes after the project is complete?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "I offer post-launch support packages and can handle ongoing maintenance. Small tweaks are often included, and larger changes are billed hourly or through a retainer."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      {/* Hero with StarField */}
      <div className="relative">
        <div className="absolute inset-0">
          <StarField />
        </div>
        <Hero
          title="Let's Build Something Great Together"
          subtitle="Whether you're a solo freelancer or an established agency, let's talk about how I can help you deliver exceptional websites without the development headaches."
          showPlanets={false}
        />
      </div>

      {/* Breadcrumbs */}
      <section className="py-4 bg-nebula-black">
        <Container>
          <Breadcrumbs />
        </Container>
      </section>

      {/* Main Contact Section with Grid Layout */}
      <Section className="relative" id="contact-form">
        <Container>
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
        </Container>
      </Section>

      {/* Trust Badges / Testimonials Section */}
      <Section className="bg-nebula-violet-5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nebula-white mb-6">
              Trusted by Agencies & Freelancers Worldwide
            </h2>
            <p className="text-lg text-nebula-white/80 max-w-3xl mx-auto">
              Join the growing network of agencies who've discovered the power of reliable, white-label development partnerships.
            </p>
          </div>

          {/* Trust Indicators Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Projects Delivered */}
            <div className="group bg-nebula-black/30 backdrop-blur-sm rounded-2xl p-8 border border-nebula-purple-30 hover:border-nebula-violet transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-nebula-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="check-circle" className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-nebula-white mb-2">200+</div>
              <div className="text-nebula-white/70 font-medium">Projects Delivered</div>
              <div className="text-sm text-nebula-white/50 mt-2">On time, every time</div>
            </div>

            {/* Agencies Served */}
            <div className="group bg-nebula-black/30 backdrop-blur-sm rounded-2xl p-8 border border-nebula-purple-30 hover:border-nebula-violet transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-nebula-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="users" className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-nebula-white mb-2">50+</div>
              <div className="text-nebula-white/70 font-medium">Agencies Served</div>
              <div className="text-sm text-nebula-white/50 mt-2">From startups to enterprises</div>
            </div>

            {/* Platforms Mastered */}
            <div className="group bg-nebula-black/30 backdrop-blur-sm rounded-2xl p-8 border border-nebula-purple-30 hover:border-nebula-violet transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-nebula-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="code" className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-nebula-white mb-2">10+</div>
              <div className="text-nebula-white/70 font-medium">Platforms Mastered</div>
              <div className="text-sm text-nebula-white/50 mt-2">WordPress to React & beyond</div>
            </div>

            {/* Response Time */}
            <div className="group bg-nebula-black/30 backdrop-blur-sm rounded-2xl p-8 border border-nebula-purple-30 hover:border-nebula-violet transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-nebula-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="clock" className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-nebula-white mb-2">&lt; 4hrs</div>
              <div className="text-nebula-white/70 font-medium">Response Time</div>
              <div className="text-sm text-nebula-white/50 mt-2">Usually within 2 hours</div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-nebula-black/50 backdrop-blur-sm rounded-2xl p-8 border border-nebula-purple-30">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-nebula-violet rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h4 className="text-nebula-white font-semibold">Sarah Chen</h4>
                  <p className="text-nebula-white/60 text-sm">Creative Director, Digital Boost Agency</p>
                </div>
              </div>
              <blockquote className="text-nebula-white/90 italic">
                "Finally found a developer who actually communicates! Nathaniel delivers exactly what we need, when we need it. Our clients love the results."
              </blockquote>
            </div>

            <div className="bg-nebula-black/50 backdrop-blur-sm rounded-2xl p-8 border border-nebula-purple-30">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-nebula-violet rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h4 className="text-nebula-white font-semibold">Marcus Rodriguez</h4>
                  <p className="text-nebula-white/60 text-sm">Founder, Apex Marketing Solutions</p>
                </div>
              </div>
              <blockquote className="text-nebula-white/90 italic">
                "Working with Planet X Devs has transformed how we deliver websites. No more missed deadlines or excuses - just quality work, delivered on time."
              </blockquote>
            </div>
          </div>
        </Container>
      </Section>

      {/* Form Selection Guide */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nebula-white mb-6">
              Not Sure Which Form to Use?
            </h2>
            <p className="text-lg text-nebula-white/80 max-w-2xl mx-auto">
              Choose the option that best matches your current needs. Don't worry - we'll figure out the details together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                 onClick={() => window.location.href = CONTACT_FORM_URLS.PROJECT_INQUIRY}>
              <Card className="hover:border-nebula-violet transition-all duration-300">
                <div className="w-16 h-16 bg-nebula-violet rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="briefcase" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-nebula-white mb-4 text-center">New Project</h3>
                <p className="text-nebula-white/70 text-center mb-6">
                  Ready to start a new website or development project? Let's discuss scope, timeline, and budget.
                </p>
                <div className="text-center">
                  <Button variant="outline" size="small" className="group-hover:bg-nebula-violet group-hover:text-white transition-colors">
                    Start Project Discussion
                  </Button>
                </div>
              </Card>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                 onClick={() => window.location.href = CONTACT_FORM_URLS.QUICK_CONSULTATION}>
              <Card className="hover:border-nebula-violet transition-all duration-300">
                <div className="w-16 h-16 bg-nebula-violet rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="message-circle" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-nebula-white mb-4 text-center">Quick Chat</h3>
                <p className="text-nebula-white/70 text-center mb-6">
                  Have questions about our services or want to explore how we might work together? Let's talk.
                </p>
                <div className="text-center">
                  <Button variant="outline" size="small" className="group-hover:bg-nebula-violet group-hover:text-white transition-colors">
                    Schedule Consultation
                  </Button>
                </div>
              </Card>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                 onClick={() => window.location.href = CONTACT_FORM_URLS.SUPPORT_MAINTENANCE}>
              <Card className="hover:border-nebula-violet transition-all duration-300">
                <div className="w-16 h-16 bg-nebula-violet rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="tool" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-nebula-white mb-4 text-center">Support & Updates</h3>
                <p className="text-nebula-white/70 text-center mb-6">
                  Need help with an existing website or ongoing maintenance? We've got you covered.
                </p>
                <div className="text-center">
                  <Button variant="outline" size="small" className="group-hover:bg-nebula-violet group-hover:text-white transition-colors">
                    Get Support
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Preview Section */}
      <Section className="bg-nebula-violet-5">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nebula-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-nebula-white/80">
              Quick answers to common questions. Need more details? Just ask!
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {contactFAQs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section>
        <Container>
          <div className="text-center bg-nebula-black/50 backdrop-blur-sm rounded-3xl p-12 border border-nebula-purple-30">
            <h2 className="text-4xl font-bold text-nebula-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-nebula-white/80 mb-8 max-w-2xl mx-auto">
              Join the agencies who've discovered the power of reliable development partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="large" href="#contact-form">
                Get Started Today
              </Button>
              <Button variant="outline" size="large" href="/services">
                View Our Services
              </Button>
            </div>

            <div className="text-sm text-nebula-white/60">
              <p>Typical response time: Less than 4 hours • Free project consultation • No obligation quotes</p>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}