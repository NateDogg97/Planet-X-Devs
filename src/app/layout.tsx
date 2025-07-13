import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
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
  title: "Planet X Devs - Your Agency Development Partner in Austin, TX",
  description: "Your trusted agency development partner in Austin, TX for white-label web services. We handle the technical work so you focus on campaigns.",
  keywords: "agency development partner, custom wordpress development, white label web development, marketing agency technical partner, wordpress developer for agencies, web development partnership, agency overflow support",
  icons: {
    icon: '/images/brand/favicon/512x512_white_3.png',
    shortcut: '/images/brand/favicon/512x512_white_3.png',
    apple: '/images/brand/favicon/512x512_white_3.png',
  },
  openGraph: {
    title: "Technical Development Partner for Marketing Agencies",
    description: "Expert WordPress development and technical partnership services. Scale your marketing agency with a trusted development partner.",
    images: ['/images/og-image.jpg'],
    url: 'https://www.planetxdevs.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technical Development Partner for Marketing Agencies",
    description: "Expert WordPress development and technical partnership services.",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
  "description": "Professional web development partner for marketing agencies. Custom WordPress development, white-label services, and technical expertise.",
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
        "name": "Agency Development Partnership",
        "description": "Become your marketing agency's dedicated technical partner. We handle the development while you focus on strategy and client relationships."
      }
    },
    {
      "@type": "Offer", 
      "itemOffered": {
        "@type": "Service",
        "name": "Custom WordPress Development",
        "description": "Professional WordPress development tailored to your marketing agency's needs. Custom themes, plugins, performance optimization."
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
        </PerformanceProvider>
      </body>
    </html>
  );
}