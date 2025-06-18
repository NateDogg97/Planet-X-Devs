import { Metadata } from 'next';
import Footer from '@/components/navigation/Footer';
import ContactForm from '@/components/forms/ContactForm';
import ContactInfo from '@/components/forms/ContactForm/ContactInfo';
import SocialLinks from '@/components/forms/ContactForm/SocialLinks';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Hero from '@/components/layout/Hero';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Card from '@/components/ui/Card';
import FAQItem from '@/components/ui/FAQItem';
import StarField from '@/components/ui/StarField';
import { CONTACT_FORM_URLS } from '@/utils';

export const metadata: Metadata = {
  title: "Contact Planet X Devs | Get a Quote for Your Web Project",
  description: "Ready to start your web development project? Contact Planet X Devs for white-label web development services. Get a quote within 24 hours.",
  keywords: "contact planet x devs, web development quote, hire web developer, agency web development",
  openGraph: {
    title: "Contact Planet X Devs | Get a Quote for Your Web Project",
    description: "Let's discuss your next web development project. White-label services for marketing agencies.",
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  }
};

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

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero with StarField */}
      <div className="relative">
        <StarField className="absolute inset-0" />
        <Hero
          title="Let's Build Something Great Together"
          subtitle="Whether you're a solo freelancer or an established agency, let's talk about how I can help you deliver exceptional websites without the development headaches."
          showPlanets={false}
        />
      </div>

      {/* Main Contact Section with Grid Layout */}
      <Section className="relative" id="contact-form">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: TabInterface with forms - 2/3 width */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Right: ContactInfo + SocialLinks - 1/3 width */}
            <div className="lg:col-span-1 space-y-8">
              <ContactInfo />
              <SocialLinks />
              
              {/* Quick Response Promise */}
              <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
                <div className="flex items-start">
                  <Icon name="clock" className="text-purple-600 dark:text-purple-400 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">
                      Quick Response Time
                    </h3>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      I typically respond within 2-4 hours during business days. Urgent requests are prioritized.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Badges Section */}
      <Section background="gray" className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Agencies Trust Planet X Devs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join dozens of marketing agencies who rely on my expertise for their web development needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="shield-check" className="text-green-600 dark:text-green-400" size="large" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">100% White Label</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your brand, your client relationships. I work behind the scenes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="users" className="text-blue-600 dark:text-blue-400" size="large" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">50+ Happy Agencies</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Trusted by agencies across the US for reliable development.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="zap" className="text-purple-600 dark:text-purple-400" size="large" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fast Turnaround</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Most projects delivered in 2-4 weeks, not months.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="trending-up" className="text-orange-600 dark:text-orange-400" size="large" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Scalable Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                From small fixes to full builds, I scale with your needs.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Form Selection Guide */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Not Sure Which Form to Use?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here's a quick guide to help you choose the right option
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Icon name="briefcase" className="text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Start a Project
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For new websites, redesigns, or major development projects. Get a detailed proposal with timeline and pricing.
              </p>
              <Button href={CONTACT_FORM_URLS.PROJECT_INQUIRY} variant="primary" size="small">
                Start Project Form
              </Button>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Icon name="message-circle" className="text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quick Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Need technical advice or have questions? Perfect for exploring options before committing to a project.
              </p>
              <Button href={CONTACT_FORM_URLS.QUICK_CONSULTATION} variant="secondary" size="small">
                Get Consultation
              </Button>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Icon name="tool" className="text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Support & Maintenance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For existing websites needing fixes, updates, or ongoing maintenance. Quick turnaround for urgent issues.
              </p>
              <Button href={CONTACT_FORM_URLS.SUPPORT_MAINTENANCE} variant="secondary" size="small">
                Request Support
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ Preview */}
      <Section background="gray" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {contactFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Button href="/services#faq" variant="secondary">
                View All FAQs
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Modern CTA */}
      <Section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-10 dark:opacity-20" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Elevate Your Agency's Web Development?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how I can help you deliver exceptional websites to your clients without the technical headaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact-form" size="large" variant="primary">
                Start a Conversation
              </Button>
              <Button href="/services" size="large" variant="secondary">
                Explore Services
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Icon name="check-circle" className="text-green-500 mr-2" size="small" />
                <span>No contracts required</span>
              </div>
              <div className="flex items-center">
                <Icon name="check-circle" className="text-green-500 mr-2" size="small" />
                <span>White-label friendly</span>
              </div>
              <div className="flex items-center">
                <Icon name="check-circle" className="text-green-500 mr-2" size="small" />
                <span>24-hour response time</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}