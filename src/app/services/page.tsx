import { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: "Web Development Services & Pricing | Planet X Devs",
  description: "Premium web development services for marketing agencies. Custom websites, e-commerce, WordPress development. White-label partnership starting at $2,500.",
  keywords: "white label web development, agency web developer, marketing agency websites, wordpress development, ecommerce development, retainer services",
  openGraph: {
    title: "Web Development Services & Pricing for Marketing Agencies",
    description: "Your technical co-pilot for premium web development. White-label services that make you look good.",
    images: ['/og-services.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function Services() {
  return <ServicesPageClient />;
}