import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import type { PortfolioProject } from '@/types';

/**
 * ProjectSummaryCard — compact card used on the /portfolio archive. Links to
 * the full project page at /portfolio/[slug].
 */
export default function ProjectSummaryCard({
  project,
}: {
  project: PortfolioProject;
}) {
  const { slug, title, tagline, clientType, location, techStack, image } =
    project;
  const href = `/portfolio/${slug}`;

  return (
    <article className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-nebula-purple/10">
      <Link href={href} className="flex flex-col h-full" aria-label={`View the ${title} project`}>
        {/* Preview image / placeholder */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-nebula-purple/20 to-nebula-violet/20">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="px-5 text-center text-lg font-semibold text-text-primary/70">
                {title}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-muted mb-2">
            <span className="font-semibold text-nebula-violet dark:text-nebula-cyan">
              {clientType}
            </span>
            {location && (
              <>
                <span aria-hidden="true">·</span>
                <span>{location}</span>
              </>
            )}
          </div>

          <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-text-secondary mb-4">{tagline}</p>

          {techStack.length > 0 && (
            <ul className="flex flex-wrap gap-2 list-none p-0 mb-5">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="px-2.5 py-0.5 rounded-full text-xs bg-nebula-purple/10 text-text-secondary border border-nebula-purple/20"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          <span className="mt-auto inline-flex items-center gap-2 font-semibold text-nebula-violet dark:text-nebula-cyan">
            View project
            <Icon
              name="arrow-right"
              size="small"
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
