import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact Planet X Devs | Your Agency's Technical Partner",
  description: "Get white-label web development, tech support, and SEO services for your marketing agency. Project quotes, quick consultations, and ongoing support available.",
  keywords: "contact planet x devs, web development quote, marketing agency partner, agency tech support, white label development, marketing agency web services, developer partnership",
  openGraph: {
    title: "Contact Planet X Devs | Your Agency's Technical Partner",
    description: "Professional web development and technical support for marketing agencies. Get your project quote today.",
    url: "https://planetxdevs.com/contact",
    siteName: "Planet X Devs",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Planet X Devs - Contact Us for Web Development Services'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Planet X Devs | Your Agency's Technical Partner",
    description: "Professional web development and technical support for marketing agencies.",
    images: ['/twitter-image.jpg']
  },
  alternates: {
    canonical: "https://planetxdevs.com/contact"
  }
};

export default function Contact() {
  return <ContactPageClient />;
}