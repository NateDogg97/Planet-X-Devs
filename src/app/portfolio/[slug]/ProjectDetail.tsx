import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import StarField from '@/components/ui/StarField';
import Icon from '@/components/ui/Icon';
import type { PortfolioProject } from '@/types';

/**
 * ProjectDetail — full page layout for a single portfolio project at
 * /portfolio/[slug]. Server component: all content is static and factual,
 * ordered so people and AI summary tools reach the concrete details fast.
 */
export default function ProjectDetail({ project }: { project: PortfolioProject }) {
  const {
    title,
    tagline,
    client,
    clientType,
    location,
    year,
    url,
    clientDescription,
    projectDescription,
    highlights,
    services,
    techStack,
    results,
    testimonial,
    image,
  } = project;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Section container className="relative" background="dark" spacing="medium">
        <div className="absolute inset-0">
          <StarField />
        </div>
        <div className="max-w-3xl relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-nebula-cyan mb-3">
            {clientType}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-nebula-white/80 mb-6">{tagline}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-nebula-white/70">
            <span>
              <span className="text-nebula-white/50">Client:</span>{' '}
              <span className="font-medium text-nebula-white">{client}</span>
            </span>
            {location && (
              <span>
                <span className="text-nebula-white/50">Location:</span> {location}
              </span>
            )}
            {year && (
              <span>
                <span className="text-nebula-white/50">Year:</span> {year}
              </span>
            )}
          </div>

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-nebula-cyan to-nebula-violet text-white font-semibold hover:shadow-nebula-lg hover:scale-105 transition-all duration-300"
            >
              Visit the live site
              <Icon name="external-link" size="small" aria-hidden="true" />
            </a>
          )}
        </div>
      </Section>

      {/* Breadcrumbs */}
      <Section container spacing="xsmall" background="secondary" id="breadcrumb">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Portfolio', href: '/portfolio' },
            { name: title, href: `/portfolio/${project.slug}` },
          ]}
        />
      </Section>

      {/* Screenshot */}
      {image && (
        <Section container background="secondary" spacing="small">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden glass">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 1600}
              height={image.height ?? 1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </Section>
      )}

      {/* Body */}
      <Section container background="secondary" spacing="medium">
        <div className="max-w-3xl mx-auto">
          {/* The Client */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              The Client
            </h2>
            <p className="text-lg text-text-secondary">{clientDescription}</p>
          </div>

          {/* The Project */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              The Project
            </h2>
            <div className="space-y-4">
              {projectDescription.map((paragraph, i) => (
                <p key={i} className="text-lg text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Design &amp; Development Highlights
              </h2>
              <ul className="space-y-3">
                {highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon
                      name="check-circle"
                      size="small"
                      className="text-nebula-cyan mt-1 flex-shrink-0"
                    />
                    <span className="text-lg text-text-secondary">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results */}
          {results && results.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Results
              </h2>
              <ul className="space-y-3">
                {results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon
                      name="trending-up"
                      size="small"
                      className="text-nebula-cyan mt-1 flex-shrink-0"
                    />
                    <span className="text-lg text-text-secondary">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Testimonial */}
          {testimonial && (
            <blockquote className="border-l-2 border-nebula-violet dark:border-nebula-cyan pl-5 my-12">
              <p className="text-xl text-text-secondary italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-3 text-text-muted">
                — {testimonial.author}
                {testimonial.role && `, ${testimonial.role}`}
              </footer>
            </blockquote>
          )}

          {/* Services & Tech */}
          <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border-primary">
            {services.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">
                  Services
                </h3>
                <ul className="flex flex-wrap gap-2 list-none p-0">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="px-3 py-1 rounded-full text-sm bg-nebula-violet/10 text-nebula-violet dark:text-nebula-cyan border border-nebula-violet/20"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {techStack.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">
                  Built with
                </h3>
                <ul className="flex flex-wrap gap-2 list-none p-0">
                  {techStack.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-nebula-purple/10 text-text-secondary border border-nebula-purple/20"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-semibold text-nebula-violet dark:text-nebula-cyan hover:underline"
            >
              <Icon name="arrow-right" size="small" className="rotate-180" aria-hidden="true" />
              Back to all projects
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" className="relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want a site like this?
          </h2>
          <p className="text-xl text-nebula-white/70 mb-10 max-w-2xl mx-auto">
            Tell us what you&apos;re building and we&apos;ll show you how we&apos;d
            approach it — no pressure, no jargon.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 rounded-full bg-gradient-nebula text-white font-bold text-lg shadow-glow hover:shadow-nebula-lg hover:scale-105 transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </Section>
    </div>
  );
}
