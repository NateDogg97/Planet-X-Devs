import { Metadata } from 'next';
import WhiteLabelPageClient from './WhiteLabelPageClient';

export const metadata: Metadata = {
  title: "White Label Web Development for Digital Agencies | Planet X Devs",
  description: "WordPress powers 40% of the web. We power your agency's WordPress development. Add our expert developers to your team and scale without limits. Get quote in 24 hours.",
  keywords: "white label web development, WordPress agency partner, outsource WordPress development, private label WordPress, WordPress reseller program, wholesale website development, B2B WordPress development, WordPress fulfillment services, WordPress partner program",
  openGraph: {
    title: "White Label WordPress Development for Digital Agencies | Planet X Devs",
    description: "Unlimited WordPress projects. Unlimited revisions. No contracts. Your clients never know we exist. Join 500+ agencies scaling with our white label services.",
    url: "https://www.planetxdevs.com/white-label-web-development",
    siteName: "Planet X Devs",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Planet X Devs - White Label WordPress Development Services'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "White Label WordPress Development for Digital Agencies | Planet X Devs",
    description: "Scale your agency with professional white label WordPress development services.",
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
        "name": "White Label WordPress Development for Digital Agencies",
        "isPartOf": {
          "@id": "https://www.planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "description": "Professional white label WordPress development services for digital agencies. Unlimited projects, unlimited revisions, no contracts.",
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
            "name": "White Label WordPress Development",
            "item": "https://www.planetxdevs.com/white-label-web-development"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/white-label-web-development#service",
        "name": "White Label WordPress Development",
        "description": "Professional WordPress development services for digital agencies",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "WordPress Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Custom WordPress Development",
              "description": "Custom-coded WordPress websites delivered on time and to your exact specifications"
            },
            {
              "@type": "Offer", 
              "name": "WordPress Plugin Development",
              "description": "Custom plugins and extensions including membership systems, booking platforms, API integrations"
            },
            {
              "@type": "Offer",
              "name": "WordPress Maintenance",
              "description": "24/7 monitoring, security updates, daily backups, unlimited content edits"
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
            "name": "What is white label web development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "White label web development is when agencies outsource WordPress development to a partner who works under their brand. Your clients never know we exist - we're your invisible development team."
            }
          },
          {
            "@type": "Question",
            "name": "How does white label WordPress development work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You send us project requirements, we provide a quote within 24 hours, and upon approval, we build under your brand. All communication goes through you, we never contact your clients."
            }
          },
          {
            "@type": "Question",
            "name": "How much does white label development cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Project-based work starts at custom quotes delivered in 24 hours. Monthly plans begin at $699 for maintenance (15-20 hours), dedicated developers from $2,999/month (160 hours)."
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
      <WhiteLabelPageClient />
    </>
  );
}