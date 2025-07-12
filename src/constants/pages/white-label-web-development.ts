// White Label Web Development Page Constants

// White-label page specific type definitions
export interface WhiteLabelStat {
  number: string;
  label: string;
}

export interface WhiteLabelFeature {
  title: string;
  description: string;
}

export interface WhiteLabelService {
  title: string;
  description: string;
}

export interface WhiteLabelPlan {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

export interface WhiteLabelStep {
  number: string;
  title: string;
  description: string;
}

export interface WhiteLabelTestimonial {
  quote: string;
  author: string;
}

export interface WhiteLabelCaseStudy {
  title: string;
  description: string;
  services: string;
}

export interface WhiteLabelFAQ {
  question: string;
  answer: string;
}

// Agency statistics
export const whiteLabelStats: WhiteLabelStat[] = [
  { number: "500+", label: "Agency Partners" },
  { number: "12+", label: "Years Experience" },
  { number: "10,000+", label: "Projects Delivered" },
  { number: "100+", label: "Web Applications Built" }
];

// Main feature highlights
export const whiteLabelFeatures: WhiteLabelFeature[] = [
  {
    title: "Complete White Label Partnership",
    description: "Your brand, your client relationships, my code. I work invisibly behind the scenes, delivering professional web development under your agency's name. Every deliverable carries your branding, every communication reinforces your expertise."
  },
  {
    title: "Flexible Development Solutions",
    description: "From React to Node.js, simple sites to complex applications, I adapt to your project needs, not the other way around. White label web design and development services that speak fluent JavaScript and whatever else your project requires."
  },
  {
    title: "Agency-Friendly Process",
    description: "Clear communication without the technical jargon, regular updates you can share directly with clients, and realistic timelines that account for revisions and approvals. I understand agency workflows and make white label web development actually easy to manage."
  }
];

// Modern web application development services  
export const modernWebServices: WhiteLabelService[] = [
  {
    title: "React Development",
    description: "For React development, I build single-page applications (SPAs), Progressive Web Apps (PWAs), and component library development. I handle state management with Redux or Context API, implement real-time features with WebSockets, and integrate with headless CMS platforms for modern content management."
  },
  {
    title: "Next.js Solutions", 
    description: "My Next.js solutions include server-side rendering (SSR) for SEO optimization, static site generation (SSG) for blazing-fast performance, API routes and serverless functions, performance optimization, SEO-friendly applications, and e-commerce with Next.js Commerce."
  },
  {
    title: "Full-Stack Capabilities",
    description: "I also provide full-stack capabilities including Node.js backend development, RESTful API design, GraphQL implementation, database design with MySQL, PostgreSQL, or MongoDB, authentication systems, and cloud deployment on AWS, Vercel, or Netlify."
  }
];

// Custom web solutions
export const customWebServices: WhiteLabelService[] = [
  {
    title: "API Development & Integration",
    description: "RESTful and GraphQL APIs, third-party integrations, webhook implementations, and microservices architecture. Connect your clients' systems seamlessly."
  },
  {
    title: "Database Architecture",
    description: "Schema design, optimization, migration strategies, and NoSQL solutions. Build robust data foundations that support business growth."
  },
  {
    title: "Real-time Applications",
    description: "WebSocket implementations, live chat systems, collaborative tools, and real-time dashboards. Create engaging, interactive user experiences."
  },
  {
    title: "Cloud-Native Development",
    description: "Serverless functions, containerized applications, CI/CD pipelines, and scalable architectures. Future-proof your clients' digital infrastructure."
  }
];

// E-commerce development services
export const eCommerceServices: WhiteLabelService[] = [
  {
    title: "Headless Commerce Solutions",
    description: "API-first implementations, custom shopping cart solutions, advanced inventory systems, and B2B portal development. Modern e-commerce that adapts to any frontend."
  },
  {
    title: "Custom E-commerce Development",
    description: "Built-from-scratch online stores with unique business logic, custom checkout flows, and integration with ERPs and CRMs. No platform limitations."
  },
  {
    title: "Shopify Development",
    description: "Theme customization and development, private app development, Shopify Plus implementations, multi-channel setup, and headless Shopify builds."
  },
  {
    title: "WooCommerce Solutions",
    description: "Custom store setup and configuration, payment gateway integration, shipping method configuration, and product variation management when WordPress is the right fit."
  }
];

// WordPress development services
export const wordpressServices: WhiteLabelService[] = [
  {
    title: "Custom WordPress Development",
    description: "Custom theme development, plugin creation, and complex functionality. Built from the ground up to meet your clients' specific needs with clean, maintainable code."
  },
  {
    title: "WordPress Performance & Security",
    description: "Speed optimization, security hardening, and reliability improvements. Keep WordPress sites fast, secure, and running smoothly with expert maintenance."
  },
  {
    title: "WordPress Migrations & Integrations",
    description: "Seamless site migrations, API integrations, and third-party service connections. Move sites safely and connect WordPress to any external system."
  },
  {
    title: "WooCommerce Development",
    description: "Complete e-commerce solutions built on WordPress. Custom checkout flows, payment integrations, and store optimizations that drive sales."
  }
];

// WordPress development services (LEGACY - TO BE REMOVED)
export const whiteLabelServices: WhiteLabelService[] = [
  {
    title: "Custom WordPress Development",
    description: "Custom-coded WordPress websites delivered on time and to your exact specifications. We build everything from corporate sites to complex web applications, ensuring clean code, mobile responsiveness, and optimal performance."
  },
  {
    title: "WordPress Plugin Development", 
    description: "Custom plugins and extensions including membership systems, booking platforms, API integrations, custom post types, advanced forms, and automation tools."
  },
  {
    title: "Performance Optimization",
    description: "Core Web Vitals optimization, advanced caching strategies, CDN implementation, database optimization, and image compression. We ensure your sites load in under 3 seconds."
  },
  {
    title: "WordPress Security Hardening",
    description: "Enterprise-level security including firewalls, malware scanning, brute force protection, SSL certificates, daily backups, and 99.9% uptime guarantee."
  },
  {
    title: "WordPress Multisite Management",
    description: "Complex multisite networks for franchises, universities, and enterprise clients. Centralized management, user role distribution, and network-wide updates."
  },
  {
    title: "Theme Customization",
    description: "Child theme development, custom post types, advanced custom fields, Gutenberg block development, and complete theme overhauls."
  }
];

// Content writing services
export const whiteLabelContentServices: WhiteLabelService[] = [
  {
    title: "Blog Post Packages",
    description: "SEO-optimized blog posts from 500-2000 words. Industry-specific content with keyword research, meta descriptions, and internal linking strategies."
  },
  {
    title: "SEO Content Calendars",
    description: "Strategic monthly content plans targeting high-value keywords. Complete editorial calendars with topics, keywords, and publishing schedules."
  },
  {
    title: "Technical Documentation",
    description: "User guides, API documentation, help centers, and knowledge bases. Clear, structured content that reduces support tickets."
  },
  {
    title: "Email Campaign Copy",
    description: "Conversion-focused email sequences, newsletters, and automated campaigns. A/B tested subject lines and compelling CTAs."
  },
  {
    title: "Landing Page Copy",
    description: "High-converting sales copy using proven frameworks. Hero sections, benefit-driven features, social proof, and irresistible CTAs."
  },
  {
    title: "Social Media Content",
    description: "Platform-specific content for LinkedIn, Twitter, Facebook, and Instagram. Engaging posts, stories, and campaigns that build brand awareness."
  }
];

// Pricing plans
export const whiteLabelPricingPlans: WhiteLabelPlan[] = [
  {
    name: "Project-Based Pricing",
    price: "Custom Quote",
    features: [
      "Clear quotes for defined projects",
      "No hourly tracking hassles",
      "Includes development, testing, revisions",
      "Mark up 50-100% to wholesale rates"
    ]
  },
  {
    name: "Monthly Partnership Plans",
    price: "Better Rates",
    features: [
      "Reserve dedicated hours monthly",
      "Unused hours roll over",
      "Scale up or down with 30 days notice",
      "Perfect for predictable costs"
    ],
    featured: true
  },
  {
    name: "Emergency Support",
    price: "Fixed Rates",
    features: [
      "Priority support for partners",
      "24-hour response guarantee",
      "Fixed-rate interventions",
      "Protect client relationships"
    ]
  }
];

// Process workflow steps
export const whiteLabelProcessSteps: WhiteLabelStep[] = [
  {
    number: "1",
    title: "Project Discovery & Quote",
    description: "Share your project requirements - rough scope is fine. I'll ask the right questions to understand technical needs, timeline, and budget. Whether you have detailed specs or just a general idea, I translate client needs into actionable development plans. You receive a detailed quote within 24 hours with clear deliverables and timeline."
  },
  {
    number: "2", 
    title: "Seamless Onboarding",
    description: "Once approved, we establish communication preferences. Slack, email, project management tools - I adapt to your workflow. You'll receive a project kickoff document outlining milestones, communication schedule, and everything needed from your end. No lengthy contracts, just a simple agreement that protects both parties."
  },
  {
    number: "3",
    title: "Development & Updates",
    description: "I build while keeping you informed. Regular updates in your preferred format - technical for those who want details, simplified for easy client sharing. Access to staging environments throughout development. Unlimited revisions within scope because pixel-perfect matters."
  },
  {
    number: "4",
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing across devices and browsers. Performance optimization built into every project. Security scanning and hardening. Accessibility compliance checking. Your clients receive a polished product that works flawlessly from day one."
  },
  {
    number: "5",
    title: "Launch & Handoff",
    description: "Smooth deployment to production with zero downtime. Comprehensive documentation for your team. Video walkthroughs if requested. 30-day post-launch support included. Everything you need to confidently support your client moving forward."
  }
];

// Client testimonials
export const whiteLabelTestimonials: WhiteLabelTestimonial[] = [
  {
    quote: "In 6 months working with their team, we've increased our output by 30% while exceeding our clients' standards. They truly function as an extension of our team.",
    author: "Sarah M., Digital Agency Owner"
  },
  {
    quote: "We've trusted them entirely, and they've delivered like clockwork. The team's communication, professionalism & execution are all top-notch.",
    author: "Michael R., Marketing Agency CEO"
  },
  {
    quote: "For over 20 years I did almost everything in my agency myself. Now I can focus more on sales and growing my business. Their white label services have been a game-changer.",
    author: "David L., Agency Founder"
  }
];

// Success stories and case studies
export const whiteLabelCaseStudies: WhiteLabelCaseStudy[] = [
  {
    title: "Digital Agency Increases Revenue 300%",
    description: "By partnering with us, a 5-person agency went from turning down WordPress projects to accepting everything. Result: $2M to $6M annual revenue in 18 months.",
    services: "Dedicated developers, WordPress maintenance"
  },
  {
    title: "Marketing Firm Adds Web Development Overnight", 
    description: "A traditional marketing agency added WordPress development to their services without hiring. Now web development represents 45% of their revenue.",
    services: "Project-based development, white label SEO"
  },
  {
    title: "Solo Consultant Scales to 50+ Clients",
    description: "One-person consultancy now manages 50+ WordPress sites with our maintenance plans. Monthly recurring revenue increased from $5k to $75k.",
    services: "WordPress maintenance, content writing"
  }
];

// White label specific FAQs
export const whiteLabelFAQs: WhiteLabelFAQ[] = [
  {
    question: "What technologies do you specialize in?",
    answer: "My core expertise is in JavaScript and modern web technologies: React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and the broader JavaScript ecosystem. I also work with WordPress, PHP, and other technologies when they're the right fit for the project. I adapt to your client's needs rather than forcing specific solutions."
  },
  {
    question: "How quickly can you start on a project?",
    answer: "Most projects begin within 48-72 hours of approval. Rush projects can start same-day depending on current workload. I maintain availability for partner agencies and can scale up quickly when you land big projects. Emergency support is available 24/7 for critical issues."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Absolutely. I sign your NDA before reviewing any project details. All work is 100% confidential. I never showcase agency projects in my portfolio or mention client names. Your clients remain yours forever, with no exceptions."
  },
  {
    question: "What if I need technologies you don't know?",
    answer: "I learn fast and have a network of specialists. If a project requires specific expertise I don't have, I'll either quickly skill up or bring in a trusted specialist under NDA. You still work only with me, maintaining single-point accountability. My quote includes any learning curve."
  },
  {
    question: "How do you handle revisions?",
    answer: "Reasonable revisions are included in every quote. I understand clients change their minds and new requirements emerge. We'll establish a revision process that works for your agency. Major scope changes are quoted separately but I'm flexible and focus on making you successful."
  },
  {
    question: "Can you work directly with my clients?",
    answer: "If you prefer, yes. Some agencies want me to join client calls or handle technical discussions directly. Others prefer complete separation. I adapt to your preference and always reinforce that I'm part of your team. Your client relationships remain under your control."
  },
  {
    question: "What about ongoing maintenance?",
    answer: "I offer flexible maintenance plans but they're optional. Some agencies handle maintenance internally using my documentation. Others want me to manage everything. Monthly maintenance can include updates, monitoring, backups, and minor content changes. You choose what works for your business model."
  },
  {
    question: "How do you ensure code quality?",
    answer: "Every project follows development best practices: version control, code comments, modular architecture, and comprehensive testing. I provide documentation that allows any developer to understand and maintain the code. Sites are built with performance, security, and scalability in mind. You own all code and intellectual property."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "No contracts required. Work with me project by project or establish an ongoing partnership - whatever suits your agency best. Monthly partnerships offer better rates and priority scheduling but can be adjusted or cancelled with 30 days notice. My goal is to be helpful when you need me, not lock you into commitments."
  },
  {
    question: "What makes you different from other white label providers?",
    answer: "Direct communication with the actual developer, not a project manager. Based in Austin, TX with native English and US business hours. No minimum commitments or retainer requirements. True wholesale pricing you can mark up. Focus on modern technologies and best practices. Small enough to care, experienced enough to deliver."
  }
];