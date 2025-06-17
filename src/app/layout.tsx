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
  description: "Your secret weapon for premium web development. White-label WordPress, e-commerce, and custom web development services exclusively for marketing agencies.",
  keywords: "white label web development, marketing agency web developer, wordpress developer, ecommerce developer, agency partner",
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
  "@type": "ProfessionalService",
  "name": "Planet X Devs",
  "description": "White-label web development services for digital marketing agencies",
  "url": "https://planetxdevs.com",
  "email": "nathaniel@planetxdevs.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "priceRange": "$500-$20,000",
  "sameAs": [
    "https://linkedin.com/company/planetxdevs",
    "https://github.com/planetxdevs"
  ],
  "serviceType": ["Web Development", "E-commerce Development", "WordPress Development"],
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Website Development",
          "description": "Bespoke websites built from scratch",
          "price": "5000",
          "priceCurrency": "USD"
        }
      }
    ]
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
