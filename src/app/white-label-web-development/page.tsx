import { Metadata } from 'next';
import WhiteLabelPage from '@/features/white-label/WhiteLabelPage';

export const metadata: Metadata = {
  title: "White-Label Web Development for Agencies | Planet X Devs",
  description: "Your agency's invisible development team. We build fast, custom websites — React, Next.js, headless CMS, and e-commerce — under your brand, plus WordPress support and maintenance. Project-based or ongoing. Get a quote in 24 hours.",
  keywords: "white label web development, white label web development for agencies, outsource web development, custom web development for agencies, white label React development, white label Next.js development, wholesale website development, agency development partner, white label WordPress support",
  openGraph: {
    title: "White-Label Web Development for Agencies | Planet X Devs",
    description: "Custom websites built under your brand — React, Next.js, headless CMS, and e-commerce — plus WordPress support. No contracts. Your clients never know we exist.",
    url: "https://www.planetxdevs.com/white-label-web-development",
    siteName: "Planet X Devs",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Planet X Devs - White-Label Web Development for Agencies'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "White-Label Web Development for Agencies | Planet X Devs",
    description: "Scale your agency with professional white-label custom web development, e-commerce, and WordPress support.",
    images: ['/images/og-image.jpg']
  },
  alternates: {
    canonical: "https://www.planetxdevs.com/white-label-web-development"
  }
};

export default function WhiteLabelWebDevelopment() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.planetxdevs.com/white-label-web-development#webpage",
        "url": "https://www.planetxdevs.com/white-label-web-development",
        "name": "White-Label Web Development for Agencies",
        "isPartOf": {
          "@id": "https://www.planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "description": "White-label web development for marketing and digital agencies: custom React and Next.js builds, headless CMS, e-commerce, and WordPress support — all under your brand. No contracts.",
        "breadcrumb": {
          "@id": "https://www.planetxdevs.com/white-label-web-development#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.planetxdevs.com/white-label-web-development#breadcrumb",
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "White-Label Web Development",
            "item": "https://www.planetxdevs.com/white-label-web-development"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/white-label-web-development#service",
        "name": "White-Label Web Development",
        "description": "White-label web development for digital agencies — custom builds, e-commerce, and ongoing support under your brand",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "White-Label Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Custom Website Development",
              "description": "Custom-coded and CMS-based websites built to your specifications and easy for clients to manage"
            },
            {
              "@type": "Offer",
              "name": "React & Next.js Development",
              "description": "Modern web applications, SPAs, and fast, SEO-friendly sites built with React and Next.js"
            },
            {
              "@type": "Offer",
              "name": "E-Commerce Development",
              "description": "Shopify, WooCommerce, and headless commerce builds and migrations"
            },
            {
              "@type": "Offer",
              "name": "WordPress Support & Maintenance",
              "description": "Monitoring, security, updates, and performance for existing WordPress sites"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.planetxdevs.com/white-label-web-development#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is white-label web development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "White-label web development is when an agency outsources website builds and technical work to a partner who works entirely under the agency's brand. Your clients never know we exist — we're your invisible development team."
            }
          },
          {
            "@type": "Question",
            "name": "How does white-label web development work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You send us project requirements, we provide a quote within 24 hours, and upon approval we build under your brand. All communication goes through you — we never contact your clients directly."
            }
          },
          {
            "@type": "Question",
            "name": "How much does white-label web development cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Project-based work is quoted per project, with quotes delivered within 24 hours. Monthly partnership plans start at $900–1,100/month for 25 hours of white-label development, with larger plans for agencies that need more capacity."
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
      <WhiteLabelPage />
    </>
  );
}