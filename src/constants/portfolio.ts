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
 * Images: each project page has three image areas, all driven from here.
 * Until real assets land in /public/images/portfolio, the page renders labeled
 * placeholders using the `mediaPlan` guidance (what to capture, and how many):
 *   - `logo`      → client logo in the header      (guided by mediaPlan.logo)
 *   - `heroImage` → large hero/feature image       (guided by mediaPlan.hero)
 *   - `gallery`   → slideshow screenshots          (guided by mediaPlan.gallery)
 * Add the matching field ({ src, alt }, or an array for `gallery`) and the
 * placeholder for that slot is replaced by the real image automatically.
 * `image` is still used for the archive card + Open Graph preview.
 * ------------------------------------------------------------------
 */

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'sws-landscape-architecture',
    title: 'SWS Landscape Architecture',
    tagline: 'A custom, animation-rich WordPress site built from scratch for a premium Florida landscape architecture firm',
    client: 'SWS Landscape Architecture',
    clientType: 'Landscape Architecture Firm',
    location: "Florida's Gulf Coast",
    summary:
      'A fully custom WordPress site — coded from scratch, not from a page builder — with GSAP-driven scroll animations and an editorial problem/solution narrative for a high-end Florida landscape architecture firm.',
    clientDescription:
      "SWS Landscape Architecture (SWSLA) is a landscape architecture firm serving Florida's Gulf Coast, with three decades of work (since 1992) on resorts, master-planned communities, and high-end residential landscapes. They came to me for a website that matched the caliber of their work and stood apart from every template-built competitor in their market.",
    projectDescription: [
      "This was a fully custom WordPress build, coded from scratch rather than assembled in a page builder, so every section could be tailored to the brand and animated exactly the way I wanted. Working from inspiration the client provided, I designed and built something distinct and firmly within their budget: an editorial, magazine-style experience that opens on a premium hero, walks through a problem/solution narrative about Florida's disappearing native landscapes, and moves into a filmstrip portfolio slider, a journal/blog, and a long-form FAQ written for developers, HOAs, and discerning homeowners.",
      "Animation is a big part of what makes it feel high-end: I used GSAP for scroll-triggered reveals, parallax, and transitions that give the whole site a considered, cinematic pace instead of a static template feel.",
      "The client stepped away partway through the engagement for reasons outside our control, so there's no public live site to link here. Everything shown was designed and built by us, and we delivered exactly what we committed to — on scope and on budget.",
    ],
    highlights: [
      'Fully custom WordPress theme built from scratch (no page builder) for complete control over design and animation',
      'GSAP scroll animations — reveals, parallax, and transitions — that give the site a cinematic, premium pace',
      "Editorial problem/solution narrative around Florida's disappearing native landscapes, aimed at an emotional, brand-driven sale",
      'Filmstrip portfolio slider and a journal/blog to showcase marquee projects and firm expertise',
      'Long-form FAQ written for a sophisticated buyer (developers, HOA boards, homeowners)',
      'Designed from client-provided inspiration into something unique — and delivered within budget',
    ],
    services: [
      'Custom WordPress Development',
      'Web Design & UX',
      'GSAP Animation',
      'Brand Voice & Copy',
    ],
    techStack: ['WordPress', 'GSAP'],
    image: {
      src: '/images/portfolio/swsla/Homepage Hero.webp',
      alt: 'SWS Landscape Architecture homepage hero: “Creating World-Class Outdoor Spaces That Are Pure Florida,” over a modern Florida building framed by palms.',
      width: 2832,
      height: 1606,
    },
    logo: {
      src: '/images/portfolio/swsla/logo.webp',
      alt: 'SWS Landscape Architecture (Stewart Washmuth Sollars) circular logo',
      width: 500,
      height: 500,
    },
    heroImage: {
      src: '/images/portfolio/swsla/Homepage Hero.webp',
      alt: 'SWS Landscape Architecture homepage hero: “Creating World-Class Outdoor Spaces That Are Pure Florida — 32 years of thriving landscapes,” over a modern Florida building framed by palms.',
      width: 2832,
      height: 1606,
    },
    gallery: [
      {
        src: '/images/portfolio/swsla/More Info Section.webp',
        alt: 'The Problem section, “The Florida That’s At Risk,” with an antique Florida etching and copy on native landscapes being paved over.',
        width: 2818,
        height: 1670,
      },
      {
        src: '/images/portfolio/swsla/Marketing Paragraph.webp',
        alt: 'The Solution section, “Build Florida Without Erasing Florida,” pairing a landscaped entrance render with editorial copy.',
        width: 2806,
        height: 1560,
      },
      {
        src: '/images/portfolio/swsla/Portfolio Archive.webp',
        alt: 'The filmstrip portfolio slider, “Florida Landscapes The World Comes To Find,” featuring projects like the Oriole Drive Residence in Sarasota.',
        width: 2812,
        height: 1572,
      },
      {
        src: '/images/portfolio/swsla/Blogs Showcase.webp',
        alt: 'The “Field Notes” journal section with a three-up grid of article cards.',
        width: 2762,
        height: 1696,
      },
      {
        src: '/images/portfolio/swsla/FAQs.webp',
        alt: 'The long-form FAQ, “Your Landscape Architecture Questions, Answered,” with an accordion of buyer questions.',
        width: 2420,
        height: 1572,
      },
    ],
    mediaPlan: {
      gallery: [
        'The editorial Problem section, “The Florida That’s At Risk,” about native landscapes being paved over.',
        'The Solution section, “Build Florida Without Erasing Florida.”',
        'The GSAP-powered filmstrip portfolio slider of marquee Florida projects.',
        'The “Field Notes” journal/blog grid.',
        'The long-form FAQ written for developers, HOAs, and homeowners.',
      ],
    },
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
      'Because this is a lead-generation-first business, the build prioritizes conversion mechanics: click-to-call buttons, a multi-step intake quiz, an FAQ section addressing common objections, and consistent contact CTAs across every service page. The whole site is built to be ADA-compliant, so it stays accessible to every patient and lowers the legal exposure that comes with running a medical practice online.',
      "The clinic treats both men and women, but it competes in a heavily male-dominated category, so the core brand leans bold and masculine — high-contrast, storm-and-warrior energy. To make sure women feel genuinely catered to rather than like an afterthought, I gave the women's-health pages a completely different design language: softer palette, calmer typography, and copy written directly to them. The build also leans on custom scroll and hover animations throughout to keep the pages feeling premium and alive — the Anti-Aging for Men page is the one I'm most proud of.",
    ],
    highlights: [
      'Service-line page architecture (hormone therapy, weight loss, sexual health, sports medicine) for clear patient journeys',
      'ADA-compliant build so the site stays accessible to every patient and reduces legal risk for the practice',
      "A distinct, softer design system for the women's-health pages, so female patients feel catered to in a male-dominated category",
      'Custom scroll and hover animations across the site — the Anti-Aging for Men page is a personal favorite',
      'Lead-capture quiz and consultation CTAs placed for maximum conversion',
      'Founder-story homepage section used to build trust for a brand-new, unproven local practice',
      'Mobile-first design, since most local health searches happen on a phone',
    ],
    services: [
      'Web Design & Development',
      'ADA-Compliant Development',
      'Custom Animation',
      'Conversion Rate Optimization',
      'Lead-Generation Funnel',
      'Elementor Development',
    ],
    techStack: ['WordPress', 'Elementor'],
    image: {
      src: '/images/portfolio/ppmc/Homepage Preview.webp',
      alt: 'Peak Performance Medical Center homepage hero: “Functional Medicine for Optimal Health at Every Age,” with a Book Your Appointment call to action.',
      width: 2724,
      height: 1836,
    },
    logo: {
      src: '/images/portfolio/ppmc/logo.png',
      alt: 'Peak Performance Medical Center logo',
      width: 512,
      height: 512,
    },
    heroImage: {
      src: '/images/portfolio/ppmc/Homepage Preview.webp',
      alt: 'Peak Performance Medical Center homepage hero: “Functional Medicine for Optimal Health at Every Age — Proven Hormone, Weight Loss & Vitality Therapies,” with a Book Your Appointment call to action.',
      width: 2724,
      height: 1836,
    },
    gallery: [
      {
        src: '/images/portfolio/ppmc/Path to Results.webp',
        alt: 'The “Your Path to Results” process section: Consultation, Custom Plan, Weekly Support, and Transform.',
        width: 2574,
        height: 1270,
      },
      {
        src: '/images/portfolio/ppmc/Anti Aging for Men.webp',
        alt: 'The Anti-Aging for Men page hero, “Unleash the Warrior Within,” with a stormy sky and classical statues — the section I built with custom animation.',
        width: 2784,
        height: 1322,
        link: {
          href: 'https://peakperformancemedicalcenter.com/anti-aging-for-men/',
          label: 'See live animation',
        },
      },
      {
        src: '/images/portfolio/ppmc/Female Themed Section.webp',
        alt: "A women's-health page, “Signs You Might Need Hormone Replacement Therapy,” using the softer, calmer design made specifically for female patients.",
        width: 2400,
        height: 1254,
      },
      {
        src: '/images/portfolio/ppmc/ADA-compliant Contact Form.webp',
        alt: 'The ADA-compliant contact section, “How to Contact Our Men’s & Women’s Health Clinic,” with an accessible lead-capture form.',
        width: 2750,
        height: 1396,
      },
      {
        src: '/images/portfolio/ppmc/Blog Showcase.webp',
        alt: 'The blog, “Expert Insights on Health & Wellness,” with articles on testosterone, nutrition, and hormone optimization.',
        width: 2414,
        height: 1512,
      },
    ],
    mediaPlan: {
      gallery: [
        'The “Your Path to Results” process — Consultation, Custom Plan, Weekly Support, and Transform — that demystifies starting care.',
        'The Anti-Aging for Men page, “Unleash the Warrior Within.” It’s built with custom animation, so it’s best seen live.',
        'One of the women’s-health pages, using a completely different, softer design so female patients feel catered to in a male-dominated category.',
        'The ADA-compliant contact section and accessible lead-capture form.',
        'The blog, with evidence-based articles on hormones, anti-aging, and functional medicine.',
      ],
    },
    featured: true,
  },
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
    image: {
      src: '/images/portfolio/american-biochar/Homepage Preview.webp',
      alt: 'American BioChar Company homepage hero: “Biochar Solutions for a Thriving Future,” over an aerial photo of greenhouse crop rows.',
      width: 2842,
      height: 1620,
    },
    logo: {
      src: '/images/portfolio/american-biochar/AmBiochar-logo.webp',
      alt: 'American BioChar Company logo',
      width: 792,
      height: 230,
    },
    heroImage: {
      src: '/images/portfolio/american-biochar/Homepage Preview.webp',
      alt: 'American BioChar Company homepage hero: “Biochar Solutions for a Thriving Future,” with a “We are Committed to the Soil” call to action over an aerial photo of greenhouse crop rows.',
      width: 2842,
      height: 1620,
    },
    gallery: [
      {
        src: '/images/portfolio/american-biochar/Industries Showcase.webp',
        alt: 'Multi-industry section, “Nourishing Diverse Crops Through Healthier Soil,” with cards for Crops & Livestock, Cannabis Grows, Turf & Sports Fields, and Trees & Orchards.',
        width: 2724,
        height: 1352,
      },
      {
        src: '/images/portfolio/american-biochar/Products Showcase.webp',
        alt: 'Product line section, “Biochar Solutions for Modern Growers,” featuring the VITAL Blend, NAKED Char, and GRATEFUL Blend products.',
        width: 2682,
        height: 1574,
      },
      {
        src: '/images/portfolio/american-biochar/Shopify Store Preview.webp',
        alt: 'The connected Shopify storefront showing a VITAL Blend 5M liquid soil amendment product page with size options and add-to-cart.',
        width: 2746,
        height: 1610,
      },
      {
        src: '/images/portfolio/american-biochar/Certifications.webp',
        alt: 'Trust section, “Certified Quality You Can Trust,” detailing the OMRI Listed (Certified Organic) and IBI Certified (Rigorously Tested) credentials.',
        width: 2678,
        height: 1614,
      },
      {
        src: '/images/portfolio/american-biochar/About the Owners.webp',
        alt: 'Founders section, “30 Years of Proven Expertise,” with photos of owners Mark and Laurie Mann in their product warehouse.',
        width: 2614,
        height: 1602,
      },
      {
        src: '/images/portfolio/american-biochar/Contact Form.webp',
        alt: 'The “Contact Us” lead-capture section with a support-focused inquiry form.',
        width: 2678,
        height: 1620,
      },
    ],
    mediaPlan: {
      gallery: [
        'The multi-industry section — Crops & Livestock, Cannabis Grows, Turf & Sports Fields, and Trees & Orchards — so one product line speaks to five very different buyers.',
        'The product line: the VITAL Blend, NAKED Char, and GRATEFUL Blend soil amendments.',
        'The connected Shopify storefront, where a product page keeps the e-commerce handoff on-brand.',
        'The certifications section (OMRI Listed and IBI Certified) that builds trust with commercial buyers.',
        'The founders’ story — Mark and Laurie Mann, with three decades of soil and biochar expertise.',
        'The contact / lead-capture section connecting buyers and distributors with the team.',
      ],
    },
    featured: true,
  },
  {
    slug: 'start-where-we-are-festival',
    title: 'Start Where We Are Festival',
    tagline: 'A pro-bono, custom Next.js site for a Boston-area music & sustainability festival',
    client: 'Start Where We Are (SWWA) — Earth Music Festival',
    clientType: 'Music & Sustainability Festival',
    location: 'Somerville, MA',
    url: 'https://www.swwafestival.com/',
    summary:
      'A pro-bono, custom Next.js and React site for a grassroots Boston-area music and sustainability festival, with GiveButter, Google Maps, and Kit (formerly ConvertKit) integrations so a volunteer-run team can run the whole event online.',
    clientDescription:
      'Start Where We Are (SWWA) is a grassroots music and sustainability festival in the Boston area — the Earth Music Festival, held at Bow Market in Somerville, Massachusetts. Founded by a musician who wanted to build a real event around live performances and climate action, this volunteer-run organization needed an online home that could sell tickets, recruit performers, attract sponsors, drive donations, and give a young event instant legitimacy.',
    projectDescription: [
      "I designed and built the festival's site from scratch in Next.js and React, contributed pro-bono as my part in a grassroots, volunteer-run event I believe in. It functions as the festival's entire online presence: a full-bleed video hero (“Can we Heal the Earth with music?”) sets the tone, and the site moves through the venue and location, a call for performers, sponsors and partners, press coverage, and a live donation drive.",
      "Because a volunteer team has to run everything without a developer on call, the build leans on a few key integrations: GiveButter powers ticketing and the live donation drive (with a running fundraising goal), Google Maps embeds the venue (Upstairs at Bow, in Bow Market, Somerville) with directions, and Kit (formerly ConvertKit) handles email marketing and audience signups. The result is a fast, modern, self-serve site the founder can keep running on her own.",
    ],
    highlights: [
      'Custom Next.js + React build, coded from scratch for a fast, modern festival site',
      'Contributed pro-bono to a grassroots, volunteer-run Boston-area festival',
      'GiveButter integration for ticketing and a live donation drive with a running goal',
      'Google Maps venue embed with directions to Bow Market, Somerville',
      'Kit (formerly ConvertKit) email marketing for audience and newsletter signups',
      "Video-first hero, performer application, sponsor showcase, and press section — the festival's full online presence in one site",
    ],
    services: [
      'Web Design & Development',
      'Next.js & React Development',
      'Third-Party Integrations',
      'Pro Bono / Nonprofit',
    ],
    techStack: ['Next.js', 'React', 'GiveButter', 'Google Maps', 'Kit'],
    image: {
      src: '/images/portfolio/swwa-festival/Homepage Preview.webp',
      alt: 'Start Where We Are festival homepage hero: “Can we Heal the Earth with music?” over an aerial forest video still.',
      width: 2814,
      height: 1642,
    },
    logo: {
      src: '/images/portfolio/swwa-festival/logo.webp',
      alt: 'Start Where We Are — Earth Music Festival logo',
      width: 384,
      height: 110,
    },
    heroImage: {
      src: '/images/portfolio/swwa-festival/Homepage Preview.webp',
      alt: 'Start Where We Are festival homepage hero: “Can we Heal the Earth with music?” with Get Tickets and Donate calls to action over an aerial forest video still.',
      width: 2814,
      height: 1642,
    },
    gallery: [
      {
        src: '/images/portfolio/swwa-festival/Map Section.webp',
        alt: 'The “Find Us in Somerville” location section with an embedded Google Map pinned to Bow Market, Somerville, MA.',
        width: 2748,
        height: 1674,
      },
      {
        src: '/images/portfolio/swwa-festival/Give Butter Integration.webp',
        alt: 'The “Help us meet our goal!” GiveButter donation drive, showing a live progress bar toward a $3,000 goal with a Donate button.',
        width: 2108,
        height: 882,
      },
      {
        src: '/images/portfolio/swwa-festival/Musicians Apply.webp',
        alt: 'The “Calling Musicians to Apply to Perform at 2026 Festival” section with a lineup carousel and open application slots.',
        width: 2794,
        height: 1694,
      },
      {
        src: '/images/portfolio/swwa-festival/Sponsors.webp',
        alt: 'The “Our Sponsors & Partners” section featuring Life Alive, Berklee College of Music, Berklee Global Jazz Institute, Bow Market, and Jazz Without Patriarchy.',
        width: 2238,
        height: 828,
      },
      {
        src: '/images/portfolio/swwa-festival/Press and Media.webp',
        alt: 'The “Press & Media” section featuring a Canvas Rebel interview, “Meet Sofia Villarreal,” the festival founder.',
        width: 2692,
        height: 1618,
      },
    ],
    mediaPlan: {
      gallery: [
        'The “Find Us in Somerville” location section, with a Google Maps embed pinned to Bow Market.',
        'The GiveButter donation drive, with a live progress bar toward the fundraising goal.',
        'The “Calling Musicians to Apply to Perform” section and lineup carousel.',
        'The sponsors & partners showcase (Berklee, Life Alive, Bow Market, and more).',
        'The Press & Media section with the founder’s Canvas Rebel interview.',
      ],
    },
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
    image: {
      src: '/images/portfolio/high-meadow/Hero_Image.webp',
      alt: 'High Meadow Digital homepage hero: “Helping Outstanding Health & Wellness Providers Pack Their Calendars And Improve More Lives.”',
      width: 2834,
      height: 1672,
    },
    logo: {
      src: '/images/portfolio/high-meadow/Logo.png',
      alt: 'High Meadow Digital logo',
      width: 360,
      height: 120,
    },
    heroImage: {
      src: '/images/portfolio/high-meadow/Hero_Image.webp',
      alt: 'High Meadow Digital homepage hero: “Helping Outstanding Health & Wellness Providers Pack Their Calendars And Improve More Lives,” over a photo of a wellness workshop.',
      width: 2834,
      height: 1672,
    },
    gallery: [
      {
        src: '/images/portfolio/high-meadow/How_It_Works.webp',
        alt: 'Three-step “Here’s How It Works” process section: The Routine Physical, The Diagnosis & Strategy, and The Results.',
        width: 2298,
        height: 1850,
      },
      {
        src: '/images/portfolio/high-meadow/Growth_Plan.webp',
        alt: '“Your Business Growth Plan” services grid — Get Local (SEO), Wellness Website Design, and SEO Web Copy.',
        width: 2552,
        height: 1814,
      },
      {
        src: '/images/portfolio/high-meadow/True_Story.webp',
        alt: '“True Story” case study with a traffic-over-time chart, describing a client whose traffic grew 867% into $20k+ months.',
        width: 2450,
        height: 1422,
      },
      {
        src: '/images/portfolio/high-meadow/Blog.webp',
        alt: '“Business Tips” blog index listing wellness-marketing articles with a searchable All Articles sidebar.',
        width: 2594,
        height: 1796,
      },
    ],
    mediaPlan: {
      gallery: [
        'The three-step “Here’s How It Works” process — Routine Physical, Diagnosis & Strategy, and Results — that demystifies a marketing engagement.',
        'The “Your Business Growth Plan” services grid: local SEO, wellness website design, and SEO web copy.',
        'The “True Story” case study — a client whose traffic grew 867% into $20k+ months after the rebuild.',
        'The “Business Tips” blog and content hub, with searchable wellness-marketing articles.',
      ],
    },
  },
];

/**
 * Shown next to the "Visit the live site" link on each project page. Clients
 * own and fully control their sites after launch, so the live version can drift
 * from the screenshots captured here — this makes that clear so later edits (or
 * the occasional broken section) aren't mistaken for the original build.
 */
export const liveSiteDisclaimer =
  'Heads up: once a site launches, the client owns it and can edit everything themselves — and not every client is a web designer. Some of these sites have been changed since we handed them off, so the live version may not match the screenshots on this page. Any later edits, or sections that look broken, generally aren’t part of the work we delivered.';

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
