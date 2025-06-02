import { Metadata } from 'next';
import Footer from '@/components/navigation/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WorkStyleSection from '@/components/sections/WorkStyleSection';
import AboutStorySection from '@/components/sections/AboutStorySection';
import CoreValuesSection from '@/components/sections/CoreValuesSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: "About Planet X Devs | Your White-Label Development Partner",
  description: "Learn about Planet X Devs - Your reliable white-label web development partner helping marketing agencies deliver exceptional websites without the overhead.",
  keywords: "about planet x devs, white label developer, agency partner, web development partner",
  openGraph: {
    title: "About Planet X Devs | Your White-Label Development Partner",
    description: "Experienced developer helping marketing agencies scale their web development capacity with reliable white-label services.",
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function About() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="About Planet X Devs"
        subtitle="Your trusted white-label development partner for delivering exceptional websites"
      />

      <WorkStyleSection />

      <AboutStorySection />

      <CoreValuesSection />

      <CTASection
        title="Ready to Work with a Development Partner Who Gets It?"
        subtitle="Let's talk about how I can help your agency deliver exceptional websites without the headaches"
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