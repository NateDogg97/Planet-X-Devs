import Footer from '@/components/navigation/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WorkStyleSection from '@/components/sections/WorkStyleSection';
import AboutStorySection from '@/components/sections/AboutStorySection';
import CoreValuesSection from '@/components/sections/CoreValuesSection';
import CTASection from '@/components/sections/CTASection';

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