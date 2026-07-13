'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import ImagePlaceholder from './ImagePlaceholder';
import type { PortfolioImage } from '@/types';

const isExternal = (href: string) => /^https?:\/\//.test(href);

/**
 * A single slide: either a captured screenshot (`image`) or, until then, a
 * `caption` describing the screenshot we still need to grab.
 */
export interface GallerySlide {
  image?: PortfolioImage;
  caption: string;
}

/**
 * ProjectGallery — a lightweight, dependency-free slideshow for the project
 * pages. No carousel library: just local state, prev/next controls, and dot
 * indicators. Slides without a real image render an ImagePlaceholder so the
 * page still shows how many screenshots to capture and what each one is.
 */
export default function ProjectGallery({
  slides,
  label = 'Screenshot',
}: {
  slides: GallerySlide[];
  label?: string;
}) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  const count = slides.length;
  const current = slides[index];
  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl glass">
        {current.image ? (
          <Image
            src={current.image.src}
            alt={current.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        ) : (
          <ImagePlaceholder
            label={`${label} ${index + 1} of ${count}`}
            caption={current.caption}
            icon="images"
            className="absolute inset-0 h-full w-full !rounded-none border-0"
          />
        )}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full glass text-text-primary shadow-md transition-transform duration-200 hover:scale-110 hover:text-nebula-violet dark:hover:text-nebula-cyan"
            >
              <Icon name="chevron-left" size="medium" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full glass text-text-primary shadow-md transition-transform duration-200 hover:scale-110 hover:text-nebula-violet dark:hover:text-nebula-cyan"
            >
              <Icon name="chevron-right" size="medium" />
            </button>
          </>
        )}
      </div>

      {/* Caption + optional call-to-action for the current image slide */}
      {current.image && (current.caption || current.image.link) && (
        <div className="mt-3 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          {current.caption && (
            <p className="text-sm text-text-muted">{current.caption}</p>
          )}
          {current.image.link && (
            <a
              href={current.image.link.href}
              target={isExternal(current.image.link.href) ? '_blank' : undefined}
              rel={isExternal(current.image.link.href) ? 'noopener noreferrer' : undefined}
              className="inline-flex flex-shrink-0 items-center gap-1.5 text-sm font-semibold text-nebula-violet dark:text-nebula-cyan hover:underline"
            >
              {current.image.link.label}
              <Icon name="external-link" size="small" aria-hidden="true" />
            </a>
          )}
        </div>
      )}

      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all duration-200 ${
                i === index
                  ? 'w-6 bg-nebula-violet dark:bg-nebula-cyan'
                  : 'w-2.5 bg-text-muted/40 hover:bg-text-muted/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
