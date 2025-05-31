import Footer from '@/components/navigation/Footer';
import Hero from '@/components/layout/Hero';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Your Agency's Secret Weapon for Premium Web Development"
        subtitle="White-label development partner who makes you look good. Custom designs, flawless execution, and communication that actually works."
        bullets={[
          "From single-person agencies to large teams",
          "Custom code or page builders - whatever works best",
          "Your brand, your client relationships, our expertise"
        ]}
        actions={[
          {
            text: "View Services & Pricing",
            href: "/services",
            variant: "primary"
          },
          {
            text: "Schedule a No-Pressure Chat",
            href: "/contact",
            variant: "secondary"
          }
        ]}
      />

      <FeaturesSection />

      <BenefitsSection />

      <TestimonialsSection />

      <CTASection
        title="Ready to Elevate Your Agency's Web Development?"
        subtitle="Let's discuss how I can help you deliver exceptional websites to your clients"
        buttons={[
          {
            text: "Let's Discuss Your Project",
            href: "/contact",
            variant: "secondary"
          },
          {
            text: "View Services & Pricing",
            href: "/services",
            variant: "primary"
          }
        ]}
      />

      <Footer />
    </div>
  );
}