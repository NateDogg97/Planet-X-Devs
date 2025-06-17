import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: "About Planet X Devs | White-Label Web Development for Agencies",
  description: "Meet Nathaniel Gonzalez, founder of Planet X Devs. After 10+ years in agencies, I created the reliable development partnership agencies desperately need. No more missed deadlines or ghosting freelancers.",
  keywords: "white label web development, agency developer, Nathaniel Gonzalez, Planet X Devs, web development for agencies, reliable developer partner, agency technical partner, WordPress developer for agencies, React developer for agencies",
  openGraph: {
    title: "About Planet X Devs | Your Agency's Reliable Developer",
    description: "Built by an agency veteran who gets it. Planet X Devs is the white-label development partner that helps agencies deliver exceptional websites without the headaches.",
    images: ['/og-about.jpg'],
    type: 'website',
    url: 'https://planetxdevs.com/about'
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Planet X Devs | White-Label Development Partner",
    description: "Meet the agency veteran behind Planet X Devs - your reliable technical partner for delivering exceptional websites.",
    images: ['/og-about.jpg']
  },
  alternates: {
    canonical: 'https://planetxdevs.com/about'
  }
};

export default function AboutPage() {
  return <AboutPageClient />;
}