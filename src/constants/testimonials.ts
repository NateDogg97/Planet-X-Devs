export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Finally, a developer who actually communicates! Updates without asking, realistic timelines, and work that exceeds expectations.',
    author: 'Sarah M.',
    role: 'Agency Owner',
    rating: 5
  },
  {
    id: 'testimonial-2',
    quote: 'They transformed our client\'s dated site into something modern while keeping their brand personality intact. Our client was thrilled.',
    author: "Mike R.",
    role: "Creative Director",
    rating: 5
  },
  {
    id: 'testimonial-3',
    quote: 'They cover all the technical gaps for me. Nathaniel answers my questions with non-technical language which is perfect for me!',
    author: "Jessica L.",
    role: "Digital Marketing Director",
    rating: 5
  },
  {
    id: 'testimonial-4',
    quote: 'The white-label service is seamless. Our clients think we have an in-house dev team, and we get to focus on strategy and growth.',
    author: 'Marketing Agency CEO',
    company: 'Growth Digital',
    rating: 5
  },
  {
    id: 'testimonial-5',
    quote: 'We\'ve tried offshore teams and freelancers. Planet X Devs is the only partner that consistently delivers quality on time.',
    author: 'Project Manager',
    company: 'Creative Studios',
    rating: 5
  },
  {
    id: 'testimonial-6',
    quote: 'They speak our language. No confusing tech jargon, just clear updates we can share directly with clients.',
    author: 'Account Director',
    company: 'Brand Forward Agency',
    rating: 5
  }
];