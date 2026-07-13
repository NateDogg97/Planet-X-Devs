import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { PerformanceProvider } from "@/components/providers/PerformanceProvider";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.planetxdevs.com'),
  title: "Planet X Devs | White-Label Web Development Partner for Agencies",
  description: "White-label web development partner for marketing agencies in Austin, TX. We build fast, custom websites your clients can manage themselves — plus WordPress support, performance, and maintenance. You keep the client relationship; we handle the code.",
  keywords: "white label web development, custom web development for agencies, agency development partner, marketing agency technical partner, custom website development, Next.js developer for agencies, React developer for agencies, headless CMS development, WordPress support and maintenance, agency overflow development",
  applicationName: "Planet X Devs",
  authors: [{ name: "Nathaniel Mays", url: "https://www.planetxdevs.com/about" }],
  creator: "Nathaniel Mays",
  publisher: "Planet X Devs",
  category: "Web Development",
  icons: {
    icon: '/images/brand/favicon/512x512_white_3.png',
    shortcut: '/images/brand/favicon/512x512_white_3.png',
    apple: '/images/brand/favicon/512x512_white_3.png',
  },
  openGraph: {
    title: "White-Label Web Development Partner for Marketing Agencies",
    description: "Custom, easy-to-manage websites built under your agency's brand — plus WordPress support, performance optimization, and maintenance. Scale your agency without hiring.",
    images: ['/images/og-image.jpg'],
    url: 'https://www.planetxdevs.com',
    siteName: 'Planet X Devs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "White-Label Web Development Partner for Marketing Agencies",
    description: "Custom, easy-to-manage websites built under your agency's brand — plus WordPress support and maintenance.",
    site: '@planetxdevs',
    creator: '@planetxdevs',
    images: ['/images/og-image.jpg'],
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
  alternates: {
    canonical: 'https://www.planetxdevs.com',
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.planetxdevs.com/#organization",
  "name": "Planet X Devs",
  "alternateName": "Planet X Development Services",
  "description": "White-label web development partner for marketing agencies. We build fast, custom websites that clients can manage themselves, and provide WordPress support, performance optimization, and ongoing maintenance — all under your agency's brand.",
  "slogan": "Your agency's technical partner.",
  "knowsAbout": [
    "Custom Web Development",
    "White-Label Web Development",
    "Next.js Development",
    "React Development",
    "Headless CMS Development",
    "E-commerce Development",
    "Website Performance Optimization",
    "Technical SEO",
    "WordPress Support and Maintenance",
    "Website Migrations"
  ],
  "url": "https://www.planetxdevs.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.planetxdevs.com/images/logo.png",
    "width": 600,
    "height": 600
  },
  "image": "https://www.planetxdevs.com/images/og-image.jpg",
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Nathaniel Mays",
    "jobTitle": "Founder & Lead Developer"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lakeway",
    "addressRegion": "TX",
    "addressCountry": "US",
    "postalCode": "78734"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.3641",
    "longitude": "-97.9725"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-512-789-8844",
    "contactType": "Customer Service",
    "email": "nathaniel@planetxdevs.com",
    "availableLanguage": ["English"],
    "areaServed": "Worldwide"
  },
  "sameAs": [
    "https://linkedin.com/company/planetxdevs",
    "https://github.com/NateDogg97",
    "https://x.com/planetxdevs"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Custom Website Development",
        "description": "Fast, custom websites built for marketing agencies and their clients — hand-coded or on a client-friendly CMS that's easy to hand off and manage."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Agency Development Partnership",
        "description": "Become your marketing agency's dedicated technical partner. We handle the development while you focus on strategy and client relationships."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "WordPress Support & Maintenance",
        "description": "Ongoing support, performance optimization, security, and migrations for existing WordPress sites your agency manages."
      }
    }
  ]
};

// Separate LocalBusiness schema for local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.planetxdevs.com/#localbusiness",
  "name": "Planet X Devs",
  "description": "Web development services for marketing agencies in the Lakeway/Austin area and worldwide.",
  "url": "https://www.planetxdevs.com",
  "telephone": "+1-512-789-8844",
  "email": "nathaniel@planetxdevs.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lakeway",
    "addressRegion": "TX",
    "addressCountry": "US",
    "postalCode": "78734"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.3641",
    "longitude": "-97.9725"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "22:00"
  },
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Lakeway"
    },
    {
      "@type": "City", 
      "name": "Austin"
    },
    {
      "@type": "City",
      "name": "Bee Cave"
    },
    {
      "@type": "Country",
      "name": "United States"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceProvider enabled={true}>
          <GoogleTagManager gtmId="GTM-WCRL2WXZ"/>
          <Header />
          <main className="pt-24">{children}</main>
          <Footer />
        </PerformanceProvider>
      </body>
    </html>
  );
}