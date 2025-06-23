import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: "About Planet X Devs | Web Development Partner for Marketing Agencies",
  description: "Meet Nathaniel Mays, founder of Planet X Devs - your trusted marketing agency partner. Creating reliable technical partnerships that help agencies deliver exceptional websites without the overhead.",
  keywords: "white label web development, marketing agency partner, agency developer, Nathaniel Mays, Planet X Devs, web development for agencies, reliable developer partner, agency technical partner, WordPress developer for agencies, React developer for agencies",
  openGraph: {
    title: "About Planet X Devs | Your Agency's Technical Partner",
    description: "Planet X Devs is the technical partnership that helps marketing agencies deliver exceptional websites. True white-label service from an experienced developer.",
    images: ['/images/og-image.jpg'],
    type: 'website',
    url: 'https://planetxdevs.com/about'
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Planet X Devs | Technical Partner for Marketing Agencies",
    description: "Meet the developer behind Planet X Devs - your reliable technical partner for delivering exceptional websites.",
    images: ['/images/og-image.jpg']
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
        "@type": "WebPage",
        "@id": "https://planetxdevs.com/about#webpage",
        "url": "https://planetxdevs.com/about",
        "name": "About Planet X Devs | Web Development Partner for Marketing Agencies",
        "isPartOf": {
          "@id": "https://planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://planetxdevs.com/#organization"
        },
        "description": "Learn about Planet X Devs and how we help marketing agencies deliver exceptional websites through reliable technical partnerships.",
        "breadcrumb": {
          "@id": "https://planetxdevs.com/about#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://planetxdevs.com/about#breadcrumb",
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
      },
      {
        "@type": "ProfilePage",
        "@id": "https://planetxdevs.com/about#profile",
        "dateCreated": "2024-01-01",
        "dateModified": "2024-01-01",
        "about": {
          "@type": "Person",
          "@id": "https://planetxdevs.com/#nathaniel-mays",
          "name": "Nathaniel Mays",
          "givenName": "Nathaniel",
          "familyName": "Mays",
          "jobTitle": "Founder & Lead Developer",
          "description": "Technical partner for marketing agencies. Founder of Planet X Devs, providing white-label development services and agency partnerships.",
          "url": "https://planetxdevs.com/about",
          "image": {
            "@type": "ImageObject",
            "url": "https://planetxdevs.com/images/nathaniel-mays.webp",
            "width": 600,
            "height": 600
          },
          "worksFor": {
            "@id": "https://planetxdevs.com/#organization"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lakeway",
            "addressRegion": "TX",
            "addressCountry": "US"
          },
          "email": "nathaniel@planetxdevs.com",
          "telephone": "+1-512-789-8844",
          "sameAs": [
            "https://linkedin.com/company/planetxdevs",
            "https://github.com/NateDogg97"
          ],
          "knowsAbout": [
            "Web Development",
            "JavaScript",
            "React",
            "Next.js",
            "WordPress Development",
            "E-commerce Development",
            "White-label Services",
            "Marketing Agency Operations",
            "Technical SEO",
            "Performance Optimization"
          ]
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://planetxdevs.com/about#timeline",
        "name": "Professional Journey",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "2014",
            "description": "Started web development journey"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "2016",
            "description": "Joined first marketing agency"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "2018",
            "description": "Became lead developer at agency"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "2020",
            "description": "Founded Planet X Devs"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "2024",
            "description": "Expanding agency partnerships"
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
      <AboutPageClient />
    </>
  );
}