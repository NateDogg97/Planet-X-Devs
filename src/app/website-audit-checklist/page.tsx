import { Metadata } from 'next';
import WebsiteAuditPage from '@/features/website-audit/WebsiteAuditPage';

const PAGE_URL = 'https://www.planetxdevs.com/website-audit-checklist';

export const metadata: Metadata = {
  title: 'Free Website Audit Checklist - Find Hidden Issues Instantly | Planet X Devs',
  description: 'Use our free 30-point website audit checklist to find issues affecting your speed, security, SEO, and conversions. Score your site instantly and get personalized recommendations.',
  keywords: 'website audit, website audit checklist, website analysis, site performance, SEO audit, website security, conversion optimization, web development audit',
  openGraph: {
    title: 'Free Website Audit Checklist - Find Hidden Issues Instantly',
    description: 'Use our free 30-point website audit checklist to find issues affecting your speed, security, SEO, and conversions.',
    url: PAGE_URL,
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Audit Checklist - Find Hidden Issues Instantly',
    description: 'Use our free 30-point website audit checklist to find issues affecting your speed, security, SEO, and conversions.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function WebsiteAuditChecklistPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${PAGE_URL}#tool`,
        name: 'Free Website Audit Checklist',
        url: PAGE_URL,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
          'A free, interactive 30-point website audit checklist that scores your site across performance, security, SEO, mobile experience, and conversions.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        provider: { '@id': 'https://www.planetxdevs.com/#organization' },
        isPartOf: { '@id': 'https://www.planetxdevs.com/#website' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.planetxdevs.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Website Audit Checklist',
            item: PAGE_URL,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a website audit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A website audit is a structured review of a site across performance, security, SEO, mobile experience, and conversion factors. It identifies issues that hurt search rankings, load speed, and the visitor experience so they can be prioritized and fixed.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many points are in the checklist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Planet X Devs website audit checklist covers 30 points across speed, security, SEO, and mobile usability. You check off each item and get an instant score with personalized recommendations.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the website audit checklist free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The 30-point website audit checklist is completely free to use, with no signup required to score your site.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <WebsiteAuditPage />
    </>
  );
}