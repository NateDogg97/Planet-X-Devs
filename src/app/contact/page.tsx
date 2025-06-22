import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact Planet X Devs | Your Agency's Technical Partner",
  description: "Get white-label web development, tech support, and SEO services for your marketing agency. Project quotes, quick consultations, and ongoing support available.",
  keywords: "contact planet x devs, web development quote, marketing agency partner, agency tech support, white label development, marketing agency web services, developer partnership",
  openGraph: {
    title: "Contact Planet X Devs | Your Agency's Technical Partner",
    description: "Professional web development and technical support for marketing agencies. Get your project quote today.",
    url: "https://planetxdevs.com/contact",
    siteName: "Planet X Devs",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Planet X Devs - Contact Us for Web Development Services'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Planet X Devs | Your Agency's Technical Partner",
    description: "Professional web development and technical support for marketing agencies.",
    images: ['/twitter-image.jpg']
  },
  alternates: {
    canonical: "https://planetxdevs.com/contact"
  }
};

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://planetxdevs.com/#organization",
        "name": "Planet X Devs",
        "alternateName": "Planet X Development Services",
        "url": "https://planetxdevs.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://planetxdevs.com/logo.png",
          "width": 400,
          "height": 400
        },
        "description": "Professional web development and technical support services for digital marketing agencies. White-label development, SEO services, and ongoing technical support.",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Remote",
          "addressCountry": "US"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-555-PLANET",
            "contactType": "customer service",
            "availableLanguage": "English",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00",
              "validFrom": "2024-01-01",
              "validThrough": "2025-12-31"
            }
          },
          {
            "@type": "ContactPoint",
            "email": "hello@planetxdevs.com",
            "contactType": "customer service",
            "availableLanguage": "English"
          }
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom website development and maintenance services for digital marketing agencies"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical Support",
                "description": "Ongoing technical support and maintenance for websites and digital platforms"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Services",
                "description": "Search engine optimization services to improve website visibility and rankings"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://planetxdevs.com/contact",
        "url": "https://planetxdevs.com/contact",
        "name": "Contact Planet X Devs | Your Agency's Technical Partner",
        "description": "Get white-label web development, tech support, and SEO services for your digital marketing agency. Project quotes, quick consultations, and ongoing support available.",
        "isPartOf": {
          "@id": "https://planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "mainEntity": {
          "@type": "ContactPage",
          "name": "Contact Planet X Devs"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://planetxdevs.com/contact#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you start on my project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I typically begin new projects within 3-5 business days after our initial consultation. For urgent requests, I offer expedited timelines."
            }
          },
          {
            "@type": "Question", 
            "name": "Do you work with agencies outside the US?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! I work with agencies worldwide. All communication is handled via email, Slack, or your preferred platform, making timezone differences manageable."
            }
          },
          {
            "@type": "Question",
            "name": "What if I need changes after the project is complete?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "I offer post-launch support packages and can handle ongoing maintenance. Small tweaks are often included, and larger changes are billed hourly or through a retainer."
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
      <ContactPageClient />
    </>
  );
}