import { Metadata } from 'next';
import ServicesPage from '@/features/services/ServicesPage';
import { services, agencyPartnershipPlans } from '@/constants/services';
import { servicesFAQs } from '@/constants/faq';
import { ORGANIZATION_ID, faqPageSchema, priceSpecification } from '@/utils/seo';

const PAGE_URL = 'https://www.planetxdevs.com/services';

export const metadata: Metadata = {
  title: "Web Development Services for Marketing Agencies | Planet X Devs",
  description: "White-label web development services for marketing agencies: custom website builds, e-commerce, performance optimization, SEO-safe migrations, plus WordPress support and maintenance. Deliver exceptional websites without the technical overhead.",
  keywords: "white label web development services, custom web development for agencies, agency development partner, marketing agency technical partner, custom website development, e-commerce development, website performance optimization, SEO-safe website migrations, WordPress support and maintenance",
  openGraph: {
    title: "White-Label Web Development Services for Marketing Agencies",
    description: "Custom website builds, e-commerce, performance, and SEO-safe migrations — plus WordPress support. Scale your marketing agency with a trusted development partner.",
    images: ['/images/og-image.jpg'],
    url: 'https://www.planetxdevs.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "White-Label Web Development Services for Marketing Agencies",
    description: "Custom builds, e-commerce, performance, and SEO-safe migrations — plus WordPress support and maintenance.",
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.planetxdevs.com/services',
  }
};

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.planetxdevs.com/services#webpage",
        "url": "https://www.planetxdevs.com/services",
        "name": "Web Development Services for Marketing Agencies | Planet X Devs",
        "isPartOf": {
          "@id": "https://www.planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "description": "Professional web development services and partnership plans for marketing agencies.",
        "breadcrumb": {
          "@id": "https://www.planetxdevs.com/services#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.planetxdevs.com/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.planetxdevs.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.planetxdevs.com/services"
          }
        ]
      },
      ...services.map((service) => ({
        "@type": "Service",
        "@id": `${PAGE_URL}#${service.id}`,
        "name": service.title,
        "description": service.description,
        "provider": { "@id": ORGANIZATION_ID },
        "areaServed": { "@type": "Place", "name": "Worldwide" },
        "offers": {
          "@type": "Offer",
          "priceSpecification": priceSpecification(service.price),
          "seller": { "@id": ORGANIZATION_ID }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${service.title}: what's included`,
          "itemListElement": service.features.map((feature) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": feature }
          }))
        }
      })),
      {
        "@type": "OfferCatalog",
        "@id": `${PAGE_URL}#partnership-plans`,
        "name": "Agency Partnership Plans",
        "itemListElement": agencyPartnershipPlans.map((plan) => ({
          "@type": "Offer",
          "name": plan.name,
          "description": `${plan.description}. Includes: ${plan.features.join('; ')}.`,
          "priceSpecification": priceSpecification(plan.price, "MONTH"),
          "seller": { "@id": ORGANIZATION_ID }
        }))
      },
      faqPageSchema(`${PAGE_URL}#faq`, servicesFAQs)
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
      <ServicesPage />
    </>
  );
}