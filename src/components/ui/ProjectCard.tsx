import Image from 'next/image';
import Icon from './Icon';
import type { PortfolioProject } from '@/types';

/**
 * ProjectCard — a single portfolio entry rendered as a self-contained
 * <article>. Written to be legible to both people and AI summary tools:
 * clear heading hierarchy, factual meta, and concrete results up top.
 */
export default function ProjectCard({ project }: { project: PortfolioProject }) {
  const {
    slug,
    title,
    client,
    clientType,
    location,
    year,
    url,
    summary,
    services,
    techStack,
    challenge,
    solution,
    results,
    testimonial,
    image,
  } = project;

  return (
    <article
      id={slug}
      className="glass glass-hover rounded-2xl overflow-hidden scroll-mt-28 transition-all duration-300 hover:shadow-xl hover:shadow-nebula-purple/10"
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Preview image */}
        {image && (
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-full bg-nebula-purple/10">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}

        {/* Details */}
        <div className={`p-8 md:p-10 ${!image ? 'lg:col-span-2' : ''}`}>
          {/* Meta line */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted mb-3">
            <span className="font-semibold text-nebula-violet dark:text-nebula-cyan">
              {clientType}
            </span>
            {location && (
              <>
                <span aria-hidden="true">·</span>
                <span>{location}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{year}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
            {title}
          </h3>
          <p className="text-text-secondary mb-4">
            for <span className="font-medium text-text-primary">{client}</span>
          </p>

          <p className="text-lg text-text-secondary mb-6">{summary}</p>

          {/* Challenge & Solution */}
          {(challenge || solution) && (
            <div className="space-y-4 mb-6">
              {challenge && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-1">
                    The challenge
                  </h4>
                  <p className="text-text-secondary">{challenge}</p>
                </div>
              )}
              {solution && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-1">
                    What we did
                  </h4>
                  <p className="text-text-secondary">{solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Results */}
          {results && results.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-2">
                Results
              </h4>
              <ul className="space-y-2">
                {results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon
                      name="trending-up"
                      size="small"
                      className="text-nebula-cyan mt-1 flex-shrink-0"
                    />
                    <span className="text-text-secondary">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Testimonial */}
          {testimonial && (
            <blockquote className="border-l-2 border-nebula-violet dark:border-nebula-cyan pl-4 my-6">
              <p className="text-text-secondary italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-2 text-sm text-text-muted">
                — {testimonial.author}
                {testimonial.role && `, ${testimonial.role}`}
              </footer>
            </blockquote>
          )}

          {/* Services */}
          {services.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-2">
                Services
              </h4>
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

          {/* Tech stack */}
          {techStack.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-2">
                Built with
              </h4>
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

          {/* Live link */}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-nebula-violet dark:text-nebula-cyan hover:underline"
            >
              Visit the live site
              <Icon name="external-link" size="small" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
