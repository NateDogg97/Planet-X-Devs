import { Metadata } from 'next';
import Footer from '@/components/navigation/Footer';
import ContactForm from '@/components/forms/ContactForm';
import ContactInfo from '@/components/forms/ContactForm/ContactInfo';
import SocialLinks from '@/components/forms/ContactForm/SocialLinks';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Hero from '@/components/layout/Hero';
import Button from '@/components/ui/Button';

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

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Let's Build Something Great Together"
        subtitle="Whether you're a solo freelancer or an established agency, let's talk about how I can help you deliver exceptional websites without the development headaches."
        showPlanets={false}
      />

      {/* Contact Form and Social Links */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - 2/3 width */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info & Social Links - 1/3 width */}
            <div className="lg:col-span-1 space-y-8">
              <ContactInfo />
              <SocialLinks />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ CTA */}
      <Section background="gray">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Check out our services page for detailed information about our offerings and pricing
            </p>
            <Button href="/services" size="large">
              View Services & Pricing
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}