import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: "About Planet X Devs | White-Label Web Development for Agencies",
  description: "Meet Nathaniel mays, founder of Planet X Devs - your trusted digital marketing agency partner. After 10+ years in agencies, I created the reliable white-label development partnership agencies desperately need.",
  keywords: "white label web development, digital marketing agency partner, agency developer, Nathaniel mays, Planet X Devs, web development for agencies, reliable developer partner, agency technical partner, WordPress developer for agencies, React developer for agencies",
  openGraph: {
    title: "About Planet X Devs | Your Agency's Reliable Developer",
    description: "Built by an agency veteran who gets it. Planet X Devs is the white-label development partner that helps agencies deliver exceptional websites without the headaches.",
    images: ['/og-about.jpg'],
    type: 'website',
    url: 'https://planetxdevs.com/about'
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Planet X Devs | White-Label Development Partner",
    description: "Meet the agency veteran behind Planet X Devs - your reliable technical partner for delivering exceptional websites.",
    images: ['/og-about.jpg']
  },
  alternates: {
    canonical: 'https://planetxdevs.com/about'
  }
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://planetxdevs.com/#nathaniel-mays",
        "name": "Nathaniel Mays",
        "givenName": "Nathaniel",
        "familyName": "Mays",
        "jobTitle": "Founder & Lead Developer",
        "description": "Agency veteran with 10+ years of experience in digital marketing and web development. Founder of Planet X Devs, providing white-label development services to digital marketing agencies.",
        "url": "https://planetxdevs.com/about",
        "image": {
          "@type": "ImageObject",
          "url": "https://planetxdevs.com/nathaniel-mays.jpg",
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://linkedin.com/in/nathaniel-mays",
          "https://github.com/nathaniel-mays"
        ],
        "worksFor": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "knowsAbout": [
          "Web Development",
          "React",
          "Next.js",
          "WordPress",
          "eCommerce Development",
          "SEO",
          "Digital Marketing",
          "White-label Development",
          "Agency Operations"
        ]
      },
      {
        "@type": "Organization",
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
        "description": "White-label web development partner for digital marketing agencies. We handle the technical work so agencies can focus on strategy and client relationships.",
        "founder": {
          "@id": "https://planetxdevs.com/#nathaniel-mays"
        },
        "foundingDate": "2023",
        "foundingLocation": {
          "@type": "Place",
          "name": "United States"
        },
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": 1
        },
        "slogan": "Your Agency's Technical Partner",
        "knowsAbout": [
          "Web Development",
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
                "name": "White-label Web Development",
                "description": "Custom website development services for digital marketing agencies"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical Support & Maintenance",
                "description": "Ongoing support and maintenance for agency client websites"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "eCommerce Development",
                "description": "Custom eCommerce solutions for agency clients"
              }
            }
          ]
        }
      },
      {
        "@type": "AboutPage",
        "@id": "https://planetxdevs.com/about",
        "url": "https://planetxdevs.com/about",
        "name": "About Planet X Devs | Your Agency's Technical Partner",
        "description": "Learn about Planet X Devs and founder Nathaniel mays. We're the white-label development partner that helps digital marketing agencies deliver exceptional websites.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://planetxdevs.com/#website",
          "url": "https://planetxdevs.com",
          "name": "Planet X Devs",
          "description": "White-label web development services for digital marketing agencies"
        },
        "about": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "mainEntity": {
          "@id": "https://planetxdevs.com/#nathaniel-mays"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://planetxdevs.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": "https://planetxdevs.com/about"
            }
          ]
        }
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
      <AboutPageClient />
    </>
  );
}