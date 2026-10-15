export const faqItems = [
  {
    id: 'faq-1',
    question: 'How quickly can you start on my project?',
    answer: 'For new clients, we can typically start within 3-5 business days. Retainer clients get priority scheduling and can have urgent requests addressed within 24-48 hours. Rush projects are available for an additional fee.'
  },
  {
    id: 'faq-2',
    question: 'Do you work directly with my clients?',
    answer: 'Only if you want us to. By default this is a true white-label partnership: all communication goes through you, and all work is delivered under your agency\'s brand. Your clients will never know we exist unless you want them to.'
  },
  {
    id: 'faq-3',
    question: 'What if I need more hours than my plan includes?',
    answer: 'No problem! Additional hours are billed at $100/hour for all retainer clients. You can also upgrade your plan at any time, and unused hours roll over for up to 60 days.'
  },
  {
    id: 'faq-4',
    question: 'What platforms and technologies do you work with?',
    answer: 'We build custom sites with React and Next.js, and on client-friendly CMS platforms when a non-technical client needs to manage their own content. We handle e-commerce on Shopify and WooCommerce, and provide ongoing support and maintenance for existing WordPress sites. We adapt to your preferred stack rather than forcing one solution.'
  },
  {
    id: 'faq-5',
    question: 'How do you handle project communication and updates?',
    answer: 'We provide regular updates through your preferred channel (email, Slack, or project management tool). Retainer clients get weekly status reports, and all clients receive milestone updates throughout their projects.'
  },
  {
    id: 'faq-6',
    question: 'What\'s included in "website maintenance"?',
    answer: 'Maintenance includes security updates, plugin/theme updates, performance monitoring, regular backups, uptime monitoring, and minor content updates. For larger changes or new features, we\'ll use your retainer hours or quote separately.'
  },
  {
    id: 'faq-7',
    question: 'Do you offer any guarantees on your work?',
    answer: 'Absolutely. All development work comes with a 30-day bug-fix guarantee. If any issues arise from our code within 30 days of delivery, we\'ll fix them at no charge. We also commit to delivering projects on time, and we agree on milestones up front so you always know where things stand.'
  },
  {
    id: 'faq-8',
    question: 'Can you handle emergency fixes or urgent updates?',
    answer: 'Yes! Retainer clients get a 4-hour response on emergencies, and every request gets a response within 24 hours. For project-based clients, rush work is available at a 50% premium. We understand that sometimes things need to be fixed yesterday.'
  },
  {
    id: 'faq-9',
    question: 'Do you provide hosting services?',
    answer: 'While we don\'t provide hosting directly, we can recommend reliable hosting providers and handle all the technical setup. We\'ll also manage migrations, DNS configuration, and ensure optimal server settings for your sites.'
  },
  {
    id: 'faq-10',
    question: 'How do you handle revisions and feedback?',
    answer: 'Each project includes 2 rounds of revisions. We provide staging environments for review, and you can consolidate feedback from your clients before sending it to us. Additional revision rounds are billed hourly or can use retainer hours.'
  }
];

/** The subset shown on /services (and marked up as its FAQPage). */
export const servicesFAQs = faqItems.slice(0, 5);

export const contactFAQs = [
  {
    question: 'How quickly can you start on my project?',
    answer: 'We typically begin new projects within 3-5 business days after our initial consultation. For urgent requests, we offer expedited timelines.',
  },
  {
    question: 'Do you work with agencies outside the US?',
    answer: 'Absolutely! We work with agencies worldwide. All communication is handled via email or your preferred platform, making timezone differences manageable.',
  },
  {
    question: 'What if I need changes after the project is complete?',
    answer: 'We offer post-launch support packages and can handle ongoing maintenance. Small tweaks are often included, and larger changes are billed hourly or through a retainer.',
  },
  {
    question: 'Do you offer white-label services?',
    answer: 'Yes! All our services are 100% white-label. Your clients never know we exist unless you want them to. All work is delivered under your agency\'s brand.',
  },
  {
    question: 'What makes Planet X Devs different from other developers?',
    answer: 'We focus exclusively on marketing agency partnerships, not competing for direct clients. You work directly with the developers writing your code, every request gets a response within 24 hours, and emergencies get a response within 4 hours.',
  },
];

export const websiteAuditFAQs = [
  {
    question: 'What is a website audit?',
    answer: 'A website audit is a structured review of a site across performance, security, SEO, mobile experience, and conversion factors. It identifies issues that hurt search rankings, load speed, and the visitor experience so they can be prioritized and fixed.',
  },
  {
    question: 'How many points are in the checklist?',
    answer: 'The Planet X Devs website audit checklist covers 30 points across speed, security, SEO, and mobile usability. You check off each item and get an instant score with personalized recommendations.',
  },
  {
    question: 'Is the website audit checklist free?',
    answer: 'Yes. The 30-point website audit checklist is completely free to use, with no signup required to score your site.',
  },
];

// White label specific FAQs (imported from page constants)
export { whiteLabelFAQs } from './pages/white-label-web-development';