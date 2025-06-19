import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import { PerformanceProvider } from "@/components/providers/PerformanceProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Planet X Devs - White-Label Web Development for Marketing Agencies",
  description: "Your trusted digital marketing agency partner for premium web development. White-label WordPress, e-commerce, and custom development services that make your agency shine.",
  keywords: "white label web development, digital marketing agency partner, marketing agency web developer, wordpress developer, ecommerce developer, agency technical partner",
  openGraph: {
    title: "Planet X Devs - White-Label Web Development for Marketing Agencies",
    description: "Premium white-label web development services that make your agency look good. Custom designs, flawless execution, starting at $2,000.",
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Planet X Devs",
  "alternateName": "Planet X Development Services",
  "description": "White-label web development and technical support services for digital marketing agencies. Based in Austin/Lakeway area, serving agencies worldwide.",
  "url": "https://planetxdevs.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://planetxdevs.com/logo.png",
    "width": 400,
    "height": 400
  },
  "image": "https://planetxdevs.com/og-image.jpg",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Nathaniel Gonzalez",
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
    "latitude": 30.3641,
    "longitude": -97.9725
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-555-PLANET",
      "contactType": "customer service",
      "email": "nathaniel@planetxdevs.com",
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
      "contactType": "emergency support",
      "email": "emergency@planetxdevs.com",
      "description": "24-hour emergency response for critical website issues"
    }
  ],
  "priceRange": "$500-$15,000",
  "currenciesAccepted": "USD",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "PayPal"],
  "sameAs": [
    "https://linkedin.com/company/planetxdevs",
    "https://github.com/planetxdevs",
    "https://twitter.com/planetxdevs"
  ],
  "serviceType": ["Web Development", "E-commerce Development", "WordPress Development", "Technical SEO", "Emergency Support"],
  "areaServed": [
    {
      "@type": "Place",
      "name": "Austin-Round Rock Metropolitan Area"
    },
    {
      "@type": "Place", 
      "name": "Lakeway, Texas"
    },
    {
      "@type": "Place",
      "name": "Worldwide (Remote Services)"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "White-Label Development Partnership",
        "description": "Complete white-label development partnership for digital marketing agencies",
        "serviceType": "Web Development"
      },
      "price": "2000-15000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer", 
      "itemOffered": {
        "@type": "Service",
        "name": "Platform Selection Consultation",
        "description": "Expert guidance for choosing the right platform for each client project",
        "serviceType": "Consulting"
      },
      "price": "500-1000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service", 
        "name": "Emergency Support & Fixes",
        "description": "24-hour emergency response for critical website issues",
        "serviceType": "Technical Support"
      },
      "price": "500-2000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Website Development",
          "description": "White-label custom websites built from scratch with unique functionality",
          "serviceType": "Web Development"
        },
        "price": "5000-15000",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-Commerce Development",
          "description": "Professional e-commerce solutions on Shopify, WooCommerce, and custom platforms",
          "serviceType": "E-commerce Development"
        },
        "price": "3000-12000",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "WordPress Development",
          "description": "Custom WordPress development with themes, plugins, and advanced functionality",
          "serviceType": "WordPress Development"
        },
        "price": "1500-8000",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical SEO Implementation",
          "description": "Complete technical SEO overhaul including schema markup and performance optimization",
          "serviceType": "SEO Services"
        },
        "price": "1000-4000", 
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Optimization",
          "description": "Comprehensive site speed analysis and optimization for better user experience",
          "serviceType": "Web Optimization"
        },
        "price": "500-1500",
        "priceCurrency": "USD"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceProvider enabled={false}>
          <Header />
          <main className="pt-[72px]">{children}</main>
        </PerformanceProvider>
      </body>
    </html>
  );
}
