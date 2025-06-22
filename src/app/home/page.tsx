import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: "Planet X Devs | White-Label Web Development for Marketing Agencies",
  description: "Your agency's technical partner. Premium white-label web development, maintenance, and support services that make you look great. From WordPress to React, we've got you covered.",
  keywords: "white label web development, marketing agency partner, agency web developer, digital marketing technical partner, wordpress development for agencies, react developer for agencies, web development partnership, agency technical support",
  openGraph: {
    title: "Planet X Devs | Your Agency's Technical Partner",
    description: "Premium white-label web development that makes your agency shine. Expert WordPress, React, and eCommerce development with true partnership.",
    url: "https://planetxdevs.com",
    siteName: "Planet X Devs",
    images: [
      {
        url: '/og-image.jpg',
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
    title: "Planet X Devs | White-Label Development Partner",
    description: "Premium web development services exclusively for marketing agencies. Your technical co-pilot.",
    site: '@planetxdevs',
    creator: '@planetxdevs',
    images: ['/twitter-image.jpg']
  },
  alternates: {
    canonical: "https://planetxdevs.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  }
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://planetxdevs.com/#organization",
        "name": "Planet X Devs",
        "alternateName": "Planet X Development Services",
        "url": "https://planetxdevs.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://planetxdevs.com/#logo",
          "url": "https://planetxdevs.com/logo.png",
          "contentUrl": "https://planetxdevs.com/logo.png",
          "width": 400,
          "height": 400,
          "caption": "Planet X Devs Logo"
        },
        "image": {
          "@id": "https://planetxdevs.com/#logo"
        },
        "description": "White-label web development partner for digital marketing agencies. We handle the technical work so agencies can focus on strategy and client relationships.",
        "founder": {
          "@type": "Person",
          "name": "Nathaniel Mays",
          "jobTitle": "Founder & Lead Developer"
        },
        "foundingDate": "2023",
        "slogan": "Your Agency's Technical Partner",
        "email": "hello@planetxdevs.com",
        "telephone": "+1-512-789-8844",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Remote",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://linkedin.com/company/planetxdevs",
          "https://github.com/planetxdevs",
          "https://twitter.com/planetxdevs"
        ],
        "knowsAbout": [
          "Web Development",
          "WordPress Development",
          "React Development",
          "Next.js",
          "eCommerce Development",
          "White-label Services",
          "Agency Partnerships",
          "Technical Support"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "White-Label Web Development",
                "description": "Complete web development services under your agency's brand"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "WordPress Development",
                "description": "Custom WordPress sites, themes, and plugin development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "React & Next.js Development",
                "description": "Modern web applications with React and Next.js"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "eCommerce Development",
                "description": "Online stores with WooCommerce, Shopify, and custom solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical Support & Maintenance",
                "description": "Ongoing support and maintenance for agency client websites"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://planetxdevs.com/#website",
        "url": "https://planetxdevs.com",
        "name": "Planet X Devs",
        "description": "White-label web development services for digital marketing agencies",
        "publisher": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://planetxdevs.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://planetxdevs.com/#webpage",
        "url": "https://planetxdevs.com",
        "name": "Planet X Devs | White-Label Web Development for Marketing Agencies",
        "isPartOf": {
          "@id": "https://planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "primaryImageOfPage": {
          "@id": "https://planetxdevs.com/#logo"
        },
        "description": "Your agency's technical partner. Premium white-label web development services that make you look great.",
        "breadcrumb": {
          "@id": "https://planetxdevs.com/#breadcrumb"
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://planetxdevs.com"]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://planetxdevs.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://planetxdevs.com"
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://planetxdevs.com/#professional-service",
        "name": "Planet X Devs",
        "image": "https://planetxdevs.com/logo.png",
        "url": "https://planetxdevs.com",
        "telephone": "+1-512-789-8844",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Remote",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.7128,
          "longitude": -74.0060
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "22:00"
        },
        "priceRange": "$$",
        "servesCuisine": "Web Development Services"
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
      <HomePageClient />
    </>
  );
}