import { Metadata } from 'next';
import PortfolioPageClient from './PortfolioPageClient';
import { portfolioProjects } from '@/constants/portfolio';

const BASE_URL = 'https://www.planetxdevs.com';
const PAGE_URL = `${BASE_URL}/portfolio`;

export const metadata: Metadata = {
  title: 'Portfolio — Websites We\'ve Designed & Built | Planet X Devs',
  description:
    "See a selection of websites Planet X Devs has designed and built for agencies and their clients — custom WordPress builds, performance rescues, and ground-up redesigns, with the tech used and the results delivered.",
  keywords:
    'web development portfolio, wordpress portfolio, agency web development examples, website case studies, white label development portfolio, web design examples',
  openGraph: {
    title: "Portfolio — Websites We've Designed & Built",
    description:
      'Real websites Planet X Devs has delivered for marketing agencies and their clients, with the technologies used and measurable results.',
    images: ['/images/og-image.jpg'],
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Portfolio — Websites We've Designed & Built",
    description:
      'Real websites Planet X Devs has delivered for marketing agencies and their clients.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function Portfolio() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Portfolio — Websites We've Designed & Built | Planet X Devs",
        isPartOf: { '@id': `${BASE_URL}/#website` },
        about: { '@id': `${BASE_URL}/#organization` },
        description:
          "A selection of websites Planet X Devs has designed and built for marketing agencies and their clients.",
        breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: BASE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: PAGE_URL,
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${PAGE_URL}#projects`,
        name: 'Planet X Devs Portfolio',
        numberOfItems: portfolioProjects.length,
        itemListElement: portfolioProjects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${PAGE_URL}/${project.slug}`,
          item: {
            '@type': 'CreativeWork',
            '@id': `${PAGE_URL}/${project.slug}#project`,
            url: `${PAGE_URL}/${project.slug}`,
            name: project.title,
            description: project.summary,
            ...(project.year && { dateCreated: project.year }),
            creator: { '@id': `${BASE_URL}/#organization` },
            ...(project.image && {
              image: `${BASE_URL}${project.image.src}`,
            }),
            ...(project.techStack.length > 0 && {
              keywords: project.techStack.join(', '),
            }),
            about: project.clientType,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioPageClient />
    </>
  );
}
