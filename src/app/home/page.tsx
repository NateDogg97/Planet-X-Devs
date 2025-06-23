import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: "Planet X Devs | Web Development Partner for Marketing Agencies",
  description: "Your agency's technical partner. Professional WordPress development and white-label web services that make your agency shine. True partnership without the overhead.",
  keywords: "marketing agency web developer, white label web development, agency development partner, custom wordpress development, marketing agency technical partner, web development partnership, agency overflow support",
  openGraph: {
    title: "Planet X Devs | Your Agency's Technical Partner",
    description: "Expert WordPress development and technical partnership services. Scale your marketing agency with a trusted development partner.",
    url: "https://planetxdevs.com",
    siteName: "Planet X Devs",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Planet X Devs - Web Development Partner for Marketing Agencies'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Planet X Devs | Technical Partner for Marketing Agencies",
    description: "Professional WordPress development and white-label services exclusively for marketing agencies.",
    site: '@planetxdevs',
    creator: '@planetxdevs',
    images: ['/images/og-image.jpg'] 
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
    // google: 'google-site-verification-code', 
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-verification-code',
  }
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://planetxdevs.com/#website",
        "url": "https://planetxdevs.com",
        "name": "Planet X Devs",
        "description": "Professional web development partner for marketing agencies",
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
        "name": "Planet X Devs | Web Development Partner for Marketing Agencies",
        "isPartOf": {
          "@id": "https://planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://planetxdevs.com/images/logo.png",
          "width": 600,
          "height": 600
        },
        "description": "Your agency's technical partner. Professional WordPress development and white-label services that make your marketing agency shine.",
        "breadcrumb": {
          "@id": "https://planetxdevs.com/#breadcrumb"
        },
        "inLanguage": "en-US"
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
        "@type": "CollectionPage",
        "@id": "https://planetxdevs.com/#services",
        "name": "Web Development Services",
        "description": "Professional web development services for marketing agencies",
        "url": "https://planetxdevs.com",
        "isPartOf": {
          "@id": "https://planetxdevs.com/#website"
        },
        "hasPart": [
          {
            "@type": "Service",
            "name": "Agency Development Partnership",
            "description": "Dedicated technical partnership for marketing agencies",
            "provider": {
              "@id": "https://planetxdevs.com/#organization"
            }
          },
          {
            "@type": "Service",
            "name": "Custom WordPress Development",
            "description": "Professional WordPress development tailored to your agency's needs",
            "provider": {
              "@id": "https://planetxdevs.com/#organization"
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
      <HomePageClient />
    </>
  );
}