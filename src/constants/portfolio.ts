import { PortfolioProject } from '@/types';

/**
 * portfolio.ts — Portfolio archive data
 * ------------------------------------------------------------------
 * Single source of truth for the /portfolio archive page. Each entry
 * renders as a rich, anchored card (/portfolio#slug) and is emitted as a
 * CreativeWork inside the page's CollectionPage JSON-LD.
 *
 * Written for AI search / summary tools: keep `summary`, `results`, and
 * `techStack` concrete and factual — those are the fields LLM-based search
 * surfaces first. Prefer measurable outcomes ("cut load time from 6s to
 * 1.2s") over adjectives ("much faster").
 *
 * To add a project, append a PortfolioProject object below. See the
 * PortfolioProject type in src/types for the full field reference.
 * ------------------------------------------------------------------
 */

export const portfolioProjects: PortfolioProject[] = [
  // Projects are added here. Example shape:
  // {
  //   slug: 'acme-law',
  //   title: 'Acme Law Firm Website',
  //   client: 'Acme Law',
  //   clientType: 'Law Firm',
  //   location: 'Austin, TX',
  //   year: '2025',
  //   url: 'https://example.com',
  //   summary: 'A fast, accessible marketing site that doubled consultation requests.',
  //   services: ['Custom WordPress Development', 'Performance Optimization', 'Technical SEO'],
  //   techStack: ['WordPress', 'PHP', 'Tailwind CSS'],
  //   challenge: 'Their old site was slow and rarely converted visitors into calls.',
  //   solution: 'Rebuilt on a hand-tuned WordPress theme with a streamlined intake flow.',
  //   results: ['Load time cut from 6s to 1.2s', 'Consultation requests up 112%'],
  //   testimonial: { quote: '…', author: 'Jane Doe', role: 'Managing Partner' },
  //   image: { src: '/images/portfolio/acme-law.webp', alt: 'Acme Law homepage' },
  //   featured: true,
  // },
];

/** Copy for the /portfolio page header and intro. Kept here so the page
 *  component stays presentational. */
export const portfolioPageContent = {
  eyebrow: 'Our Work',
  title: 'Portfolio',
  intro:
    "A selection of websites we've designed and built for agencies and their clients — from custom WordPress builds to performance rescues and ground-up redesigns. Every project below is real work we delivered, with the tech we used and the results it produced.",
  emptyState:
    "We're curating our latest projects for this page. In the meantime, see what we can build for you.",
  ctaTitle: 'Have a project like these?',
  ctaSubtitle:
    "Tell us what you're building and we'll show you how we'd approach it — no pressure, no jargon.",
};
