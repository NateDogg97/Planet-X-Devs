import { PortfolioProject } from '@/types';

/**
 * portfolio.ts — Portfolio project data
 * ------------------------------------------------------------------
 * Single source of truth for the portfolio. The /portfolio archive lists
 * every entry, and each renders a full page at /portfolio/[slug]. Entries
 * are also emitted as CreativeWork nodes in structured data.
 *
 * Written for AI search / summary tools: keep `summary`, `highlights`, and
 * `techStack` concrete and factual — those are the fields LLM-based search
 * surfaces first.
 *
 * Screenshots: add an `image` ({ src, alt }) once assets are dropped into
 * /public/images/portfolio. Until then pages render a branded placeholder.
 * ------------------------------------------------------------------
 */

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'american-biochar',
    title: 'American BioChar Company',
    tagline: "Full site build for one of North America's largest biochar distributors",
    client: 'American BioChar Company',
    clientType: 'Biochar Producer & Distributor',
    location: 'North America',
    url: 'https://ambiochar.com/',
    summary:
      'A full WordPress build combining brand storytelling, multi-industry product education, and Shopify e-commerce for one of North America\'s largest biochar distributors.',
    clientDescription:
      'American BioChar Company produces and distributes OMRI-listed and IBI-certified biochar and biochar blends used by farmers, arborists, turf managers, cannabis growers, and home gardeners across North America. As one of the largest players in the space, they needed a site that could speak credibly to both backyard hobbyists and large-scale agricultural distributors at the same time.',
    projectDescription: [
      "I built a full WordPress site that combines brand storytelling, product education, and e-commerce into one cohesive experience. The homepage carries the founders' story (an agronomist and a chemist who set out to fix depleted soil) while dedicated landing pages break down biochar's use case by industry: turf and sports fields, cannabis grows, trees and orchards, lawns and gardens, and crops and livestock. Each page is written to match how that specific audience searches and buys.",
      'The site connects directly into a Shopify storefront for product sales, and includes a distributor directory, a certifications section (OMRI/IBI) to build trust with commercial buyers, and an ongoing blog used for SEO and grower education.',
    ],
    highlights: [
      'Multi-industry landing page structure so one product line speaks to five very different buyers',
      "Integrated e-commerce handoff to a Shopify shop without breaking the site's visual identity",
      'Trust-building content blocks: certifications, distributor partners, testimonials, and impact stats',
      'SEO-driven blog architecture supporting ongoing organic content publishing',
      'Built on WordPress for a non-technical team to manage products and posts independently',
    ],
    services: [
      'Custom WordPress Development',
      'E-Commerce (Shopify) Integration',
      'SEO Content Architecture',
      'Multi-Industry Landing Pages',
    ],
    techStack: ['WordPress', 'Shopify'],
    featured: true,
  },
  {
    slug: 'peak-performance-medical',
    title: 'Peak Performance Medical Center',
    tagline: "Website and lead-generation funnel for a new men's health clinic in Florida",
    client: 'Peak Performance Medical Center',
    clientType: 'Functional Medicine Clinic',
    location: 'Largo & Palm Harbor, FL',
    url: 'https://peakperformancemedicalcenter.com/',
    summary:
      'A conversion-focused Elementor site with dedicated service-line pages and a lead-capture funnel for a new Florida men\'s and women\'s health clinic.',
    clientDescription:
      "Peak Performance Medical Center is a functional medicine clinic serving the Largo and Palm Harbor, Florida area, focused on men's and women's hormone health, weight loss, and sexual performance therapies (TRT, BHRT, peptides, and medical weight loss programs). As a new practice competing against established “big box” hormone clinics, the site needed to earn trust fast and convert visitors into booked consultations.",
    projectDescription: [
      "I designed and built a conversion-focused site on Elementor, structured around the clinic's core service lines: hormone replacement, sexual performance therapy, medical weight loss, and sports medicine, each with its own dedicated page. The homepage leads with the founder's personal story (a patient turned owner) to build immediate credibility, backed by press mentions, provider bios, and clear calls to book a consultation at every scroll depth.",
      'Because this is a lead-generation-first business, the build prioritizes conversion mechanics: click-to-call buttons, a multi-step intake quiz, an FAQ section addressing common objections, and consistent contact CTAs across every service page.',
    ],
    highlights: [
      'Service-line page architecture (hormone therapy, weight loss, sexual health, sports medicine) for clear patient journeys',
      'Founder-story homepage section used to build trust for a brand-new, unproven local practice',
      'Lead-capture quiz and consultation CTAs placed for maximum conversion',
      'Provider bio section establishing clinical credibility for the full care team',
      'Mobile-first design, since most local health searches happen on a phone',
    ],
    services: [
      'Web Design & Development',
      'Conversion Rate Optimization',
      'Lead-Generation Funnel',
      'Elementor Development',
    ],
    techStack: ['WordPress', 'Elementor'],
    featured: true,
  },
  {
    slug: 'high-meadow-digital',
    title: 'High Meadow Digital',
    tagline: 'One of my earliest professional builds — a marketing agency site for wellness-industry clients',
    client: 'High Meadow Digital',
    clientType: 'Digital Marketing Agency',
    url: 'https://highmeadowdigital.com/',
    summary:
      'A WordPress + Elementor site that carries a wellness brand voice through a full conversion funnel for a marketing agency serving health and fitness businesses.',
    clientDescription:
      'High Meadow Digital is a digital marketing agency built around a simple niche: helping health, fitness, and wellness businesses (originally with a strong focus on yoga studios and holistic health practices) get found online and fill their calendars. The brand needed a site that practiced what it preached — clean, conversion-minded, and unmistakably in the wellness space.',
    projectDescription: [
      "This was one of my first professional website builds, and it's a project I still like showing because of how the whole site leans into a consistent fitness-and-wellness metaphor (“Is your business in shape?”) from headline copy through to the services layout. I built the full site in WordPress with Elementor, translating the founder's voice into a structured funnel: problem framing, a three-step process explainer, service breakdowns, testimonials, and an FAQ built to handle real client objections about marketing spend.",
    ],
    highlights: [
      'Full brand voice carried through layout and copy structure, not just the homepage hero',
      'Clear three-step "how it works" process section to demystify a marketing engagement',
      'Testimonial and social-proof sections placed to support a service-based, trust-driven sale',
      'FAQ section written to pre-answer objections before a prospect ever reaches out',
      'Early proof of my ability to turn a niche brand voice into a working, on-brand website',
    ],
    services: [
      'Web Design & Development',
      'Brand Voice & Copy Structure',
      'Conversion Funnel',
      'Elementor Development',
    ],
    techStack: ['WordPress', 'Elementor'],
  },
  {
    slug: 'start-where-we-are-festival',
    title: 'Start Where We Are Festival',
    tagline: 'Event site for a Boston music and sustainability festival, built from the ground up',
    client: 'Start Where We Are (SWWA)',
    clientType: 'Music & Sustainability Festival',
    location: 'Somerville, MA',
    url: 'https://www.swwafestival.com/',
    summary:
      'A video-first event site and box office with Eventbrite ticketing and Google Forms performer intake, built so a non-technical founder can run the whole festival online.',
    clientDescription:
      'Start Where We Are (SWWA) is a grassroots music and sustainability festival in Somerville, Massachusetts, founded by a musician who wanted to build a real event around live performances and climate action. Starting from essentially nothing, the project needed an online home that could sell tickets, recruit performers, attract sponsors, and give a brand-new event instant legitimacy.',
    projectDescription: [
      "I built the festival's site to function as its entire online presence and box office. A full-bleed video hero sets the tone immediately, followed by sections covering the venue (Bow Market), the festival's story and mission, sponsor and partner logos, and a donation drive for the volunteer-run organization. The site integrates directly with Eventbrite for ticketing and Google Forms for performer applications, so the founder can run ticket sales and lineup logistics without needing a developer involved.",
    ],
    highlights: [
      "Video-first homepage hero to sell the festival's energy in the first few seconds",
      'Direct Eventbrite ticketing integration and a Google Forms performer application flow',
      'Sponsor and partner logo showcase to help a first-year event look established',
      'Embedded venue map, newsletter signup, and donation integration in one lightweight site',
      "Built to let a non-technical founder run the entire event's online presence solo",
    ],
    services: [
      'Web Design & Development',
      'Ticketing & Registration Integration',
      'Event / Box-Office Site',
    ],
    techStack: ['Eventbrite', 'Google Forms'],
  },
  {
    slug: 'sws-landscape-architecture',
    title: 'SWS Landscape Architecture',
    tagline: 'Homepage design concept for a Florida landscape architecture firm',
    client: 'SWS Landscape Architecture',
    clientType: 'Landscape Architecture Firm',
    location: "Florida's Gulf Coast",
    url: 'https://nathanielm11.sg-host.com/',
    summary:
      'A premium homepage design concept — visual identity, problem/solution storytelling, and a long-form FAQ — for a high-end Florida landscape architecture firm.',
    clientDescription:
      "SWS Landscape Architecture is a landscape architecture firm serving Florida's Gulf Coast, with three decades of work on resorts, master-planned communities, and high-end residential landscapes. This project came to me for a full website redesign, and this homepage was the first phase delivered.",
    projectDescription: [
      "This page is a design showcase rather than a full site build. The client ultimately went a different direction after this first phase, but I'm including it because the homepage does exactly what I wanted it to: sell a premium, design-forward brand for a firm working at the top end of Florida landscape architecture. It leads with a strong visual identity and problem/solution storytelling around Florida's disappearing native landscapes, moves into a project showcase, and closes with firm credibility (three decades in business, marquee project names) and a detailed FAQ aimed at developers and HOA decision-makers.",
      'Since only the homepage was completed, this project is presented here specifically to demonstrate web design and UX thinking: layout, visual hierarchy, and narrative flow for a high-end B2B and B2C audience.',
    ],
    highlights: [
      'Problem/solution narrative structure to sell an emotional, brand-driven story to a technical audience',
      'Premium visual layout suited to a firm competing for luxury resort and residential contracts',
      'Long-form FAQ section written for a sophisticated buyer (developers, HOA boards, project managers)',
      'Built in Elementor/WordPress as a scalable foundation for future site phases',
      'A pure design and UX exercise — showcased here on that basis, independent of project outcome',
    ],
    services: ['Web Design', 'UX & Homepage Concept', 'Elementor Development'],
    techStack: ['WordPress', 'Elementor'],
  },
];

/** Look up a single project by slug. */
export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}

/** Copy for the /portfolio archive header and intro. Kept here so the page
 *  component stays presentational. */
export const portfolioPageContent = {
  eyebrow: 'Our Work',
  title: 'Portfolio',
  intro:
    "A selection of websites we've designed and built — from custom WordPress builds and e-commerce integrations to lead-generation funnels and event box offices. Every project below is real work we delivered, with the tech we used and what it was built to do.",
  emptyState:
    "We're curating our latest projects for this page. In the meantime, see what we can build for you.",
  ctaTitle: 'Have a project like these?',
  ctaSubtitle:
    "Tell us what you're building and we'll show you how we'd approach it — no pressure, no jargon.",
};
