import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/features/portfolio/ProjectDetail';
import { portfolioProjects, getProjectBySlug } from '@/constants/portfolio';

const BASE_URL = 'https://www.planetxdevs.com';

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found | Planet X Devs' };
  }

  const pageUrl = `${BASE_URL}/portfolio/${project.slug}`;
  const title = `${project.title} — ${project.clientType} | Planet X Devs Portfolio`;
  const images = project.image
    ? [`${BASE_URL}${project.image.src}`]
    : ['/images/og-image.jpg'];

  return {
    title,
    description: project.summary,
    keywords: [
      project.title,
      project.clientType,
      ...project.services,
      ...project.techStack,
      'web development portfolio',
    ].join(', '),
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.summary,
      images,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Planet X Devs`,
      description: project.summary,
      images,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/portfolio/${project.slug}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${pageUrl}#project`,
        name: project.title,
        headline: project.tagline,
        description: project.summary,
        url: pageUrl,
        ...(project.year && { dateCreated: project.year }),
        creator: { '@id': `${BASE_URL}/#organization` },
        provider: { '@id': `${BASE_URL}/#organization` },
        about: project.clientType,
        ...(project.techStack.length > 0 && {
          keywords: project.techStack.join(', '),
        }),
        ...(project.url && {
          workExample: {
            '@type': 'WebSite',
            url: project.url,
            name: project.client,
          },
        }),
        isPartOf: { '@id': `${BASE_URL}/portfolio#projects` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: `${BASE_URL}/portfolio`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: pageUrl,
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
      <ProjectDetail project={project} />
    </>
  );
}
