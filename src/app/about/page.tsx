import { Metadata } from 'next';
import AboutPage from '@/features/about/AboutPage';
import { timelineData } from '@/constants/about';

export const metadata: Metadata = {
  title: "About Planet X Devs | Web Development Partner for Marketing Agencies",
  description: "Meet Nathaniel Mays and Sebastian Perrone, the developers behind Planet X Devs — a white-label web development partner for marketing agencies, building custom Next.js sites and supporting the WordPress sites agencies already manage.",
  keywords: "white label web development, marketing agency partner, agency developer, Nathaniel Mays, Sebastian Perrone, Planet X Devs, custom web development for agencies, reliable developer partner, agency technical partner, Next.js developer for agencies, React developer for agencies",
  openGraph: {
    title: "About Planet X Devs | Your Agency's Technical Partner",
    description: "Planet X Devs is the technical partnership that helps marketing agencies deliver exceptional websites. True white-label service from two experienced developers.",
    images: ['/images/og-image.jpg'],
    type: 'website',
    url: 'https://www.planetxdevs.com/about'
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Planet X Devs | Technical Partner for Marketing Agencies",
    description: "Meet the developers behind Planet X Devs - your reliable technical partner for delivering exceptional websites.",
    images: ['/images/og-image.jpg']
  },
  alternates: {
    canonical: 'https://www.planetxdevs.com/about'
  }
};

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.planetxdevs.com/about#webpage",
        "url": "https://www.planetxdevs.com/about",
        "name": "About Planet X Devs | Web Development Partner for Marketing Agencies",
        "isPartOf": {
          "@id": "https://www.planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "description": "Learn about Planet X Devs and how we help marketing agencies deliver exceptional websites through reliable technical partnerships.",
        "breadcrumb": {
          "@id": "https://www.planetxdevs.com/about#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.planetxdevs.com/about#breadcrumb",
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
            "name": "About",
            "item": "https://www.planetxdevs.com/about"
          }
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://www.planetxdevs.com/about#profile",
        "dateCreated": "2025-01-01",
        "dateModified": "2026-10-15",
        "about": {
          "@type": "Person",
          "@id": "https://www.planetxdevs.com/#nathaniel-mays",
          "name": "Nathaniel Mays",
          "givenName": "Nathaniel",
          "familyName": "Mays",
          "jobTitle": "Founder & Lead Developer",
          "description": "Senior web developer with 4+ years of experience and founder of Planet X Devs. Builds custom Next.js websites and supports existing WordPress sites for marketing agencies, white-label.",
          "url": "https://www.planetxdevs.com/about",
          "image": {
            "@type": "ImageObject",
            "url": "https://www.planetxdevs.com/images/nathaniel-mays.webp",
            "width": 600,
            "height": 600
          },
          "worksFor": {
            "@id": "https://www.planetxdevs.com/#organization"
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
            "Custom Web Development",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "GSAP Animation",
            "Headless CMS Development",
            "E-commerce Development",
            "White-label Services",
            "WordPress Support and Maintenance",
            "SEO-Safe Migrations",
            "Performance Optimization"
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.planetxdevs.com/#sebastian-perrone",
        "name": "Sebastian Perrone",
        "givenName": "Sebastian",
        "familyName": "Perrone",
        "jobTitle": "Frontend Developer",
        "description": "Frontend developer with 4+ years of experience building conversion-focused web components, templates, and layouts for Planet X Devs.",
        "image": "https://www.planetxdevs.com/images/SebastianProfilePic.webp",
        "worksFor": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "knowsAbout": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "UI/UX Design", "Conversion Optimization"]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.planetxdevs.com/about#timeline",
        "name": "Professional Journey",
        "itemListElement": timelineData.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `${item.year}: ${item.title}`,
          "description": item.description
        }))
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
      <AboutPage />
    </>
  );
}