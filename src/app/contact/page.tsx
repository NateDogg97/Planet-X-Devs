import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact Planet X Devs | Your Agency's Technical Partner",
  description: "Get white-label web development and technical support for your marketing agency. Custom WordPress development, agency partnerships, and ongoing support available.",
  keywords: "contact planet x devs, web development quote, marketing agency partner, agency tech support, white label development, marketing agency web services, developer partnership",
  openGraph: {
    title: "Contact Planet X Devs | Your Agency's Technical Partner",
    description: "Professional web development and technical support for marketing agencies. Get your project quote today.",
    url: "https://www.planetxdevs.com/contact",
    siteName: "Planet X Devs",
    images: [
      {
        url: '/images/og-image.jpg',
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
    images: ['/images/og-image.jpg']
  },
  alternates: {
    canonical: "https://www.planetxdevs.com/contact"
  }
};

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.planetxdevs.com/contact#webpage",
        "url": "https://www.planetxdevs.com/contact",
        "name": "Contact Planet X Devs | Your Agency's Technical Partner",
        "isPartOf": {
          "@id": "https://www.planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "description": "Contact Planet X Devs for white-label web development, technical partnerships, and support services for marketing agencies.",
        "breadcrumb": {
          "@id": "https://www.planetxdevs.com/contact#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.planetxdevs.com/contact#breadcrumb",
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
            "name": "Contact",
            "item": "https://www.planetxdevs.com/contact"
          }
        ]
      },
      {
        "@type": "ContactPage",
        "@id": "https://www.planetxdevs.com/contact#contact-form",
        "name": "Contact Planet X Devs",
        "description": "Multiple ways to connect with Planet X Devs for your marketing agency's web development needs.",
        "url": "https://www.planetxdevs.com/contact",
        "mainEntity": {
          "@id": "https://www.planetxdevs.com/#organization"
        }
      },
      {
        "@type": "ContactPoint",
        "@id": "https://www.planetxdevs.com/contact#contactpoint",
        "contactType": "Customer Service",
        "telephone": "+1-512-789-8844",
        "email": "nathaniel@planetxdevs.com",
        "url": "https://www.planetxdevs.com/contact",
        "availableLanguage": ["English"],
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "22:00"
        },
        "contactOption": ["TollFree"]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.planetxdevs.com/contact#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you start on my project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For new partners, I can typically start within 3-5 business days. Marketing agency partners with active plans get priority scheduling with 24-48 hour response times. Rush projects are available based on current capacity."
            }
          },
          {
            "@type": "Question", 
            "name": "Do you work with agencies outside the US?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! I work with marketing agencies worldwide. All communication is handled via email, Slack, or your preferred platform, making timezone differences manageable."
            }
          },
          {
            "@type": "Question",
            "name": "What if I need changes after the project is complete?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "I offer post-launch support through our partnership plans. Small tweaks are often included in the initial project scope, and ongoing changes can be handled through our monthly partnership plans or hourly rates."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Planet X Devs different from other developers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I focus exclusively on marketing agency partnerships, not competing for direct clients. With experience in both development and agency operations, I understand the unique challenges you face and deliver accordingly."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer white-label services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! All our services are 100% white-label. Your clients never know we exist unless you want them to. All work is delivered under your agency's brand."
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