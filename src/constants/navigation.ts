export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Services',
    href: '/services'
  },
  {
    label: 'Contact',
    href: '/contact',
    isButton: true
  }
];

export const footerNavigation = {
  services: [
    {
      label: 'White Label Development',
      href: '/white-label-web-development'
    },
    {
      label: 'E-Commerce Development',
      href: '/services#ecommerce'
    },
    {
      label: 'WordPress Development',
      href: '/services#wordpress'
    },
    {
      label: 'Technical SEO',
      href: '/services#seo'
    },
    {
      label: 'Performance Optimization',
      href: '/services#performance'
    },
    {
      label: 'Retainer Plans',
      href: '/services#retainer'
    }
  ],
  quickLinks: [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Services & Pricing',
      href: '/services'
    },
    {
      label: 'Contact',
      href: '/contact'
    },
  ]
};

export const ctaButtons = {
  primary: {
    text: "Let's Discuss Your Project",
    href: '/contact'
  },
  secondary: {
    text: 'View Services & Pricing',
    href: '/services'
  },
  hero: {
    text: 'Schedule a No-Pressure Chat',
    href: '/contact'
  }
};