import { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Heading from '@/components/ui/Heading';

export const metadata: Metadata = {
  title: 'Privacy Policy | Planet X Devs',
  description: 'Privacy Policy for Planet X Devs. Learn how we protect and handle your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Section container spacing="xlarge">
        <div className="max-w-4xl mx-auto">
          <Heading as={'h1'} className="text-center mb-8">
            Privacy Policy
          </Heading>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-text-primary text-lg mb-8">
              <strong>Effective Date:</strong> January 14, 2025
            </p>

            <section className="mb-8">
              <Heading as={'h2'} className="mb-4">
                1. Information We Collect
              </Heading>
              <p className="text-text-primary mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="text-text-primary space-y-2 mb-4">
                <li>Fill out contact forms on our website</li>
                <li>Subscribe to our email newsletter</li>
                <li>Communicate with us via email or phone</li>
                <li>Request quotes or consultations</li>
              </ul>
              <p className="text-text-primary">
                This may include your name, email address, phone number, company information, 
                project details, and any other information you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <Heading as={'h2'} className="mb-4">
                2. How We Use Your Information
              </Heading>
              <p className="text-text-primary mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-text-primary space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <Heading as={'h2'} className="mb-4">
                3. Information Sharing
              </Heading>
              <p className="text-text-primary">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information with:
              </p>
              <ul className="text-text-primary space-y-2 mt-4">
                <li>Service providers who assist us in operating our website and conducting business</li>
                <li>Legal authorities when required by law or to protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <Heading as={'h2'} className="mb-4">
                4. Data Security
              </Heading>
              <p className="text-text-primary">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <Heading as={'h2'} className="mb-4">
                5. Cookies and Tracking
              </Heading>
              <p className="text-text-primary">
                Our website may use cookies and similar technologies to enhance your experience. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <Heading as={'h2'} className="mb-4">
                6. Third-Party Services
              </Heading>
              <p className="text-text-primary">
                Our website may contain links to third-party websites or use third-party services. 
                We are not responsible for the privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <Heading as={'h2'} className="mb-4">
                7. Your Rights
              </Heading>
              <p className="text-text-primary mb-4">
                You have the right to:
              </p>
              <ul className="text-text-primary space-y-2">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request information about how we use your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <Heading as={'h2'} className="mb-4">
                8. Changes to This Policy
              </Heading>
              <p className="text-text-primary">
                We may update this Privacy Policy from time to time. We will notify you of any 
                significant changes by posting the new policy on this page with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <Heading as={'h2'} className="mb-4">
                9. Contact Us
              </Heading>
              <p className="text-text-primary">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 text-text-primary">
                <p><strong>Planet X Devs</strong></p>
                <p>Email: <a href="mailto:nathaniel@planetxdevs.com" className="text-nebula-violet hover:underline">nathaniel@planetxdevs.com</a></p>
                <p>Website: <a href="https://planetxdevs.com/cotnact" className="text-nebula-violet hover:underline">planetxdevs.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </Section>

    </main>
  );
}