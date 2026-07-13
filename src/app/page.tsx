import { Metadata } from 'next';
import HomePage from '@/features/home/HomePage';

export const metadata: Metadata = {
  title: "Planet X Devs | White-Label Web Development Partner for Agencies",
  description: "Your agency's technical partner. We build fast, custom websites your clients can manage themselves — plus WordPress support, performance, and maintenance — all white-label under your brand. True partnership without the overhead.",
  keywords: "white label web development, custom web development for agencies, agency development partner, marketing agency technical partner, custom website development, Next.js developer for agencies, headless CMS development, WordPress support and maintenance, agency overflow development",
  openGraph: {
    title: "Planet X Devs | Your Agency's Technical Partner",
    description: "Custom, easy-to-manage websites built under your agency's brand — plus WordPress support and maintenance. Scale your marketing agency without the overhead.",
    url: "https://www.planetxdevs.com",
    siteName: "Planet X Devs",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Planet X Devs - White-Label Web Development Partner for Marketing Agencies'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Planet X Devs | Technical Partner for Marketing Agencies",
    description: "Custom, easy-to-manage websites and ongoing support — white-label, exclusively for marketing agencies.",
    site: '@planetxdevs',
    creator: '@planetxdevs',
    images: ['/images/og-image.jpg']
  },
  alternates: {
    canonical: "https://www.planetxdevs.com"
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
        "@id": "https://www.planetxdevs.com/#website",
        "url": "https://www.planetxdevs.com",
        "name": "Planet X Devs",
        "description": "White-label web development partner for marketing agencies — custom websites, WordPress support, and maintenance under your brand.",
        "publisher": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.planetxdevs.com/#webpage",
        "url": "https://www.planetxdevs.com",
        "name": "Planet X Devs | Web Development Partner for Marketing Agencies",
        "isPartOf": {
          "@id": "https://www.planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.planetxdevs.com/images/logo.png",
          "width": 600,
          "height": 600
        },
        "description": "Your agency's technical partner. We build fast, custom websites clients can manage themselves, and support existing WordPress sites — all white-label under your brand.",
        "breadcrumb": {
          "@id": "https://www.planetxdevs.com/#breadcrumb"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2"]
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.planetxdevs.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.planetxdevs.com"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.planetxdevs.com/#services",
        "name": "Web Development Services",
        "description": "Professional web development services for marketing agencies",
        "url": "https://www.planetxdevs.com",
        "isPartOf": {
          "@id": "https://www.planetxdevs.com/#website"
        },
        "hasPart": [
          {
            "@type": "Service",
            "name": "Custom Website Development",
            "description": "Fast, custom websites built for agencies and their clients — easy to hand off and manage",
            "provider": {
              "@id": "https://www.planetxdevs.com/#organization"
            }
          },
          {
            "@type": "Service",
            "name": "Agency Development Partnership",
            "description": "Dedicated white-label technical partnership for marketing agencies",
            "provider": {
              "@id": "https://www.planetxdevs.com/#organization"
            }
          },
          {
            "@type": "Service",
            "name": "WordPress Support & Maintenance",
            "description": "Ongoing support, performance, and migrations for existing WordPress sites",
            "provider": {
              "@id": "https://www.planetxdevs.com/#organization"
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
      <HomePage />
    </>
  );
}