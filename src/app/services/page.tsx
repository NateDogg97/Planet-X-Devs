import { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: "Web Development Services & Pricing | Planet X Devs",
  description: "Premium web development services for digital marketing agencies. Your trusted technical partner for custom websites, e-commerce, and WordPress development. White-label partnership starting at $2,500.",
  keywords: "white label web development, digital marketing agency partner, agency web developer, marketing agency websites, wordpress development, ecommerce development, retainer services",
  openGraph: {
    title: "Web Development Services & Pricing for Marketing Agencies",
    description: "Your technical co-pilot for premium web development. White-label services that make you look good.",
    images: ['/og-services.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://planetxdevs.com/services#white-label-development",
        "name": "White-Label Development Partnership",
        "description": "Complete white-label development partnership that makes your agency unstoppable. From strategy to launch, we work invisibly behind the scenes while you take all the credit.",
        "provider": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "2000-15000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "serviceType": "Web Development",
        "areaServed": "Worldwide"
      },
      {
        "@type": "Service",
        "@id": "https://planetxdevs.com/services#platform-consultation", 
        "name": "Platform Selection Consultation",
        "description": "Expert guidance to help your agency choose the perfect platform for each client project. Avoid costly mistakes and recommend solutions that actually fit the client's needs.",
        "provider": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "500-1000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "serviceType": "Consulting",
        "areaServed": "Worldwide"
      },
      {
        "@type": "Service",
        "@id": "https://planetxdevs.com/services#emergency-support",
        "name": "Emergency Support & Fixes", 
        "description": "When your client's website breaks and they're breathing down your neck, we've got you covered. 24-hour response time to save your reputation and their business.",
        "provider": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "500-2000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "serviceType": "Technical Support",
        "areaServed": "Worldwide"
      },
      {
        "@type": "FAQPage",
        "@id": "https://planetxdevs.com/services#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you start on my project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For new clients, I can typically start within 3-5 business days. Retainer clients get priority scheduling and can have urgent requests addressed within 24-48 hours. Rush projects are available for an additional fee."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work directly with my clients?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "Never. This is a true white-label partnership. All communication goes through you, and all work is delivered under your agency's brand. Your clients will never know I exist unless you want them to."
            }
          },
          {
            "@type": "Question",
            "name": "What if I need more hours than my retainer includes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No problem! Additional hours are billed at $100/hour for all retainer clients. You can also upgrade your plan at any time, and unused hours roll over for up to 60 days."
            }
          },
          {
            "@type": "Question",
            "name": "What platforms and technologies do you work with?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I specialize in WordPress (including Elementor, Divi, and custom themes), React/Next.js applications, and popular e-commerce platforms like WooCommerce and Shopify. I also work with various page builders and can adapt to your preferred tech stack."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle project communication and updates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I provide regular updates through your preferred channel (email, Slack, or project management tool). Retainer clients get weekly status reports, and all clients receive milestone updates throughout their projects."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <ServicesPageClient />
    </>
  );
}