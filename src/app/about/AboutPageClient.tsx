'use client';

import { useEffect, useRef, useState } from 'react';
import { theme } from '@/config/theme';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import ValueCard from '@/components/ui/ValueCard';
import TimelineItem from '@/components/ui/TimelineItem';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import Icon, { IconName } from '@/components/ui/Icon';

// Lazy load below-fold components
const FloatingParticles = dynamic(() => import('@/components/ui/FloatingParticles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

const Footer = dynamic(() => import('@/components/navigation/Footer'), {
  loading: () => (
    <div className="bg-nebula-black h-64 animate-pulse border-t border-nebula-purple-30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 bg-nebula-purple-30 rounded w-24"></div>
              <div className="space-y-2">
                <div className="h-4 bg-nebula-purple-20 rounded w-32"></div>
                <div className="h-4 bg-nebula-purple-20 rounded w-28"></div>
                <div className="h-4 bg-nebula-purple-20 rounded w-36"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
});

// Timeline data array
const timelineData = [
  {
    year: '2015',
    title: 'Started Web Development Journey',
    description: 'Began coding websites and quickly discovered a passion for solving complex technical challenges and creating seamless user experiences.'
  },
  {
    year: '2016', 
    title: 'First Agency Experience',
    description: 'Joined a digital marketing agency as a developer, learning firsthand the fast-paced environment and unique pressures agencies face.'
  },
  {
    year: '2020',
    title: 'Became Lead Developer', 
    description: 'Promoted to lead development teams across multiple high-profile accounts, mastering the art of balancing quality with tight deadlines.'
  },
  {
    year: '2022',
    title: 'Identified the Problem',
    description: 'After years of watching agencies struggle with unreliable freelancers and overpriced dev shops, realized there had to be a better way.'
  },
  {
    year: '2024',
    title: 'Launched Planet X Devs',
    description: 'Founded a white-label development service built specifically for agencies - combining technical excellence with the reliability agencies need.'
  }
];

// Values data array
const valuesData: Array<{
  icon: IconName;
  title: string;
  description: string;
}> = [
  {
    icon: 'shield-check',
    title: 'Reliability First',
    description: 'No more ghosting freelancers or missed deadlines. When I commit to your project, I deliver. Every time. Your clients trust you because you can trust me.'
  },
  {
    icon: 'users',
    title: 'Agency Native',
    description: 'Built by an agency veteran who gets it. I understand your workflows, speak your language, and know exactly how to make your team shine.'
  },
  {
    icon: 'lightning',
    title: 'Speed Without Sacrifice',
    description: 'Agency timelines are tight - I get it. My workflow is optimized for rapid delivery without cutting corners. Quality work, delivered when you need it.'
  },
  {
    icon: 'chat',
    title: 'Communication Clarity',
    description: 'No tech jargon or confusing updates. Clear progress reports, quick responses, and honest timelines. Communication that keeps projects on track.'
  },
  {
    icon: 'puzzle',
    title: 'Perfect Integration',
    description: 'I work as an extension of your team. White-label everything, adapt to your processes, and make you look great to your clients. Seamless collaboration.'
  },
  {
    icon: 'trending-up',
    title: 'Growth Partnership',
    description: 'When you win more clients and grow your agency, I grow too. I\'m invested in your long-term success, not just individual projects. Let\'s build something great together.'
  }
];

export default function AboutPageClient() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<Set<number>>(new Set());
  const [timelineLineVisible, setTimelineLineVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  
  const valuesRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const storyRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timelineObserverRef = useRef<IntersectionObserver | null>(null);
  const storyObserverRef = useRef<IntersectionObserver | null>(null);
  const teamObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    let pendingUpdates = new Set<number>();
    let updateTimeout: NodeJS.Timeout | null = null;

    const batchUpdateVisibleCards = () => {
      if (pendingUpdates.size > 0) {
        setVisibleCards(prev => new Set([...prev, ...pendingUpdates]));
        pendingUpdates.clear();
      }
      updateTimeout = null;
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && !visibleCards.has(index)) {
            pendingUpdates.add(index);
            
            // Batch updates to prevent excessive re-renders
            if (!updateTimeout) {
              updateTimeout = setTimeout(batchUpdateVisibleCards, 16); // ~1 frame
            }
          }
        }
      });
    }, observerOptions);

    // Only observe cards that exist and aren't already visible
    const currentRefs = cardRefs.current.filter(ref => ref !== null);
    currentRefs.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });

    // Cleanup function with comprehensive cleanup
    return () => {
      if (updateTimeout) {
        clearTimeout(updateTimeout);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      pendingUpdates.clear();
    };
  }, []); // Remove dependency to prevent re-creating observer

  // Timeline animations intersection observer
  useEffect(() => {
    const timelineObserverOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    // Timeline line animation observer
    const timelineLineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !timelineLineVisible) {
          setTimelineLineVisible(true);
          // Add CSS class to trigger line animation
          if (timelineRef.current) {
            timelineRef.current.classList.add('animate-line');
          }
        }
      });
    }, timelineObserverOptions);

    // Timeline items observer for sequential animation
    let animationTimeout: NodeJS.Timeout | null = null;
    
    timelineObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = timelineItemRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && !visibleTimelineItems.has(index)) {
            // Stagger animation with delay based on index
            const delay = index * 200; // 200ms delay between items
            
            animationTimeout = setTimeout(() => {
              setVisibleTimelineItems(prev => new Set([...prev, index]));
              
              // Add animation class to the timeline item
              if (timelineItemRefs.current[index]) {
                timelineItemRefs.current[index]!.classList.add('animate-in');
              }
            }, delay);
          }
        }
      });
    }, timelineObserverOptions);

    // Observe timeline container for line animation
    if (timelineRef.current) {
      timelineLineObserver.observe(timelineRef.current);
    }

    // Observe timeline items for sequential animation
    timelineItemRefs.current.forEach((ref) => {
      if (ref && timelineObserverRef.current) {
        timelineObserverRef.current.observe(ref);
      }
    });

    // Story section observer
    const storyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStoryVisible(true);
          storyObserver.disconnect();
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    if (storyRef.current) {
      storyObserver.observe(storyRef.current);
    }
    storyObserverRef.current = storyObserver;

    // Team section observer
    const teamObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTeamVisible(true);
          teamObserver.disconnect();
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    if (teamRef.current) {
      teamObserver.observe(teamRef.current);
    }
    teamObserverRef.current = teamObserver;

    // Cleanup
    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
      timelineLineObserver.disconnect();
      if (timelineObserverRef.current) {
        timelineObserverRef.current.disconnect();
        timelineObserverRef.current = null;
      }
      if (storyObserverRef.current) {
        storyObserverRef.current.disconnect();
        storyObserverRef.current = null;
      }
      if (teamObserverRef.current) {
        teamObserverRef.current.disconnect();
        teamObserverRef.current = null;
      }
    };
  }, []);
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (timelineObserverRef.current) {
        timelineObserverRef.current.disconnect();
      }
      if (storyObserverRef.current) {
        storyObserverRef.current.disconnect();
      }
      if (teamObserverRef.current) {
        teamObserverRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Your Agency's Technical Co-Pilot"
        subtitle="Built by an agency veteran who understands the unique challenges of delivering exceptional websites for demanding clients"
        showPlanets={false}
      />

      {/* Breadcrumbs */}
      <Section container spacing='xsmall' background='secondary'>
        <Breadcrumbs />
      </Section>

      {/* Story Section */}
      <Section container background='secondary'>
        <div 
          ref={storyRef}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              From Technical Frustration to Streamlined Solution
            </h2>
            <p className="text-lg text-text-primary/80 leading-relaxed">
              After years of working within digital marketing agencies, I witnessed a recurring problem: talented agencies losing opportunities because they couldn't find reliable development partners.
            </p>
            <p className="text-lg text-text-primary/80 leading-relaxed">
              Freelancers would disappear mid-project. Development shops would over-promise and under-deliver. In-house developers were too expensive to maintain. Agencies were stuck choosing between bad options.
            </p>
            <p className="text-lg text-text-primary/80 leading-relaxed">
              I created Planet X Devs to be the development partner I wished existed when I was on the agency side - reliable, communicative, and genuinely invested in making agencies successful.
            </p>
          </div>
          <div className="relative h-full flex items-center justify-center">
            {/* Floating nebula graphic with layered effects */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-nebula-purple/30 to-nebula-violet/30 rounded-full blur-3xl animate-pulse" />
              
              {/* Middle layer */}
              <div className="absolute inset-4 bg-gradient-to-tr from-stellar-blue/20 to-nebula-cyan/20 rounded-full blur-2xl animate-pulse" 
                    style={{ animationDelay: '1s' }} />
              
              {/* Core */}
              <div className="relative aspect-square bg-gradient-radial from-nebula-purple/40 via-nebula-violet/20 to-transparent rounded-full">
                {/* Floating particles effect using CSS */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute w-2 h-2 bg-nebula-cyan/50 rounded-full top-1/4 left-1/4 animate-float" />
                  <div className="absolute w-3 h-3 bg-nebula-purple/50 rounded-full top-3/4 right-1/3 animate-float-delayed" />
                  <div className="absolute w-2 h-2 bg-stellar-blue/50 rounded-full bottom-1/3 left-1/2 animate-float" 
                        style={{ animationDelay: '2s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Built on Agency-First Values
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Every aspect of Planet X Devs is designed to make agency life easier
          </p>
        </div>
        <div 
          ref={valuesRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {valuesData.map((value, index) => {
            const isVisible = visibleCards.has(index);
            const isAnimating = !isVisible; // Only use will-change when animating
            
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`transform transition-all duration-700 ease-out ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  // Only apply will-change during animation for performance
                  willChange: isAnimating ? 'transform, opacity' : 'auto'
                }}
              >
                <ValueCard 
                  icon={<Icon name={value.icon} className="w-8 h-8" />}
                  title={value.title}
                  description={value.description}
                />
              </div>
            );
          })}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section container background='secondary' spacing="xlarge">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The Journey to Planet X
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A decade of experience shaped by agency challenges and client demands
          </p>
        </div>
        <div 
          ref={timelineRef}
          className="timeline-container relative max-w-4xl mx-auto"
        >
          {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => { timelineItemRefs.current[index] = el; }}
              className="timeline-item-wrapper"
            >
              <TimelineItem
                year={item.year}
                title={item.title}
                description={item.description}
                position={index % 2 === 0 ? 'right' : 'left'}
                isFirst={index === 0}
                isLast={index === timelineData.length - 1}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nebula-white mb-4">
              Meet Your Developer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The person behind Planet X Devs who understands your agency challenges
            </p>
          </div>

          {/* Single Team Member - Centered Layout */}
          <div ref={teamRef} className="max-w-4xl mx-auto">
            <div className={`bg-nebula-black/70 backdrop-blur-sm border border-nebula-purple/20 rounded-3xl p-8 md:p-12 text-center transition-all duration-1000 ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Profile Avatar with Animated Border */}
              <div className="relative mb-8 flex justify-center">
                <div className="avatar-container relative group">
                  {/* Outer rotating gradient border */}
                  <div className="avatar-border absolute inset-0 rounded-full animate-spin-slow will-change-transform">
                    <div className="w-full h-full rounded-full bg-gradient-conic from-nebula-purple via-nebula-violet via-nebula-cyan via-stellar-blue to-nebula-purple p-1">
                      <div className="w-full h-full bg-nebula-black rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Inner glow effect */}
                  <div className="avatar-glow absolute inset-2 rounded-full bg-gradient-radial from-nebula-violet/20 via-nebula-purple/10 to-transparent animate-pulse-slow"></div>
                  
                  {/* Avatar content container */}
                  <div className="avatar-content relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-br from-nebula-purple/40 via-nebula-violet/30 to-stellar-blue/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {/* Profile image placeholder */}
                    <div className="avatar-image w-full h-full flex items-center justify-center text-5xl md:text-6xl filter hover:brightness-110 transition-all duration-300">
                      👨‍💻
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="avatar-overlay absolute inset-0 bg-nebula-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="avatar-particles absolute inset-0 pointer-events-none">
                    <div className="particle absolute w-1 h-1 bg-nebula-cyan rounded-full top-4 left-8 animate-float opacity-70"></div>
                    <div className="particle absolute w-1.5 h-1.5 bg-nebula-violet rounded-full top-12 right-6 animate-float-delayed opacity-60"></div>
                    <div className="particle absolute w-1 h-1 bg-stellar-blue rounded-full bottom-8 left-12 animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
                    <div className="particle absolute w-1 h-1 bg-nebula-purple rounded-full bottom-6 right-10 animate-float opacity-80" style={{ animationDelay: '6s' }}></div>
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-nebula-white mb-2">
                  Nathaniel Mays
                </h3>
                <p className="text-lg text-nebula-cyan font-semibold mb-3">
                  Founder & Lead Developer
                </p>
                <div className="flex justify-center space-x-4 text-sm text-gray-400">
                  <span>10+ Years Experience</span>
                  <span>•</span>
                  <span>Agency Veteran</span>
                  <span>•</span>
                  <span>Full-Stack Developer</span>
                </div>
              </div>

              {/* Bio */}
              <div className="text-center max-w-3xl mx-auto mb-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Hi, I'm Nathaniel. After spending years as a lead developer in fast-paced software companyies and digital marketing agencies, I witnessed a pattern: brilliant creative teams struggling with unreliable developers, missed deadlines, and technical bottlenecks that cost them clients.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I founded Planet X Devs to solve this exact problem. Having been in the trenches myself, I understand the pressure agencies face - the late-night client emergencies, the "can you make this work by tomorrow?" requests, and the need for a developer who just gets it.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Today, I partner with agencies as their dedicated technical expert, handling everything from complex e-commerce builds to quick landing pages. My goal? To be the developer you can count on, so you can focus on what you do best - creating amazing campaigns and growing your agency.
                </p>
              </div>

              {/* Skills & Expertise */}
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-nebula-purple/20 rounded-full flex items-center justify-center text-nebula-violet mx-auto">
                    <Icon name="code" className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-nebula-white">Technical Expertise</h4>
                  <p className="text-sm text-gray-400">React, Next.js, WordPress, Shopify & more</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-nebula-purple/20 rounded-full flex items-center justify-center text-nebula-violet mx-auto">
                    <Icon name="users" className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-nebula-white">Agency Experience</h4>
                  <p className="text-sm text-gray-400">Led teams, managed workflows, delivered results</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-nebula-purple/20 rounded-full flex items-center justify-center text-nebula-violet mx-auto">
                    <Icon name="lightning" className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-nebula-white">Fast Delivery</h4>
                  <p className="text-sm text-gray-400">Quick turnarounds without compromising quality</p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="mt-12 mb-8">
                <h4 className="text-lg font-semibold text-nebula-white mb-6 text-center">Technical Skills</h4>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                  {/* Frontend Technologies */}
                  <span className="px-4 py-2 bg-nebula-purple/20 border border-nebula-purple/30 rounded-full text-sm text-nebula-white hover:bg-nebula-purple/30 transition-colors duration-300">
                    React
                  </span>
                  <span className="px-4 py-2 bg-nebula-violet/20 border border-nebula-violet/30 rounded-full text-sm text-nebula-white hover:bg-nebula-violet/30 transition-colors duration-300">
                    Next.js
                  </span>
                  <span className="px-4 py-2 bg-nebula-cyan/20 border border-nebula-cyan/30 rounded-full text-sm text-nebula-white hover:bg-nebula-cyan/30 transition-colors duration-300">
                    TypeScript
                  </span>
                  <span className="px-4 py-2 bg-stellar-blue/20 border border-stellar-blue/30 rounded-full text-sm text-nebula-white hover:bg-stellar-blue/30 transition-colors duration-300">
                    JavaScript
                  </span>
                  <span className="px-4 py-2 bg-nebula-purple/20 border border-nebula-purple/30 rounded-full text-sm text-nebula-white hover:bg-nebula-purple/30 transition-colors duration-300">
                    HTML5/CSS3
                  </span>
                  <span className="px-4 py-2 bg-nebula-violet/20 border border-nebula-violet/30 rounded-full text-sm text-nebula-white hover:bg-nebula-violet/30 transition-colors duration-300">
                    Tailwind CSS
                  </span>
                  
                  {/* CMS & Platforms */}
                  <span className="px-4 py-2 bg-nebula-cyan/20 border border-nebula-cyan/30 rounded-full text-sm text-nebula-white hover:bg-nebula-cyan/30 transition-colors duration-300">
                    WordPress
                  </span>
                  <span className="px-4 py-2 bg-stellar-blue/20 border border-stellar-blue/30 rounded-full text-sm text-nebula-white hover:bg-stellar-blue/30 transition-colors duration-300">
                    Elementor
                  </span>
                  <span className="px-4 py-2 bg-nebula-purple/20 border border-nebula-purple/30 rounded-full text-sm text-nebula-white hover:bg-nebula-purple/30 transition-colors duration-300">
                    Shopify
                  </span>
                  <span className="px-4 py-2 bg-nebula-violet/20 border border-nebula-violet/30 rounded-full text-sm text-nebula-white hover:bg-nebula-violet/30 transition-colors duration-300">
                    WooCommerce
                  </span>
                  
                  {/* Tools & Services */}
                  <span className="px-4 py-2 bg-nebula-cyan/20 border border-nebula-cyan/30 rounded-full text-sm text-nebula-white hover:bg-nebula-cyan/30 transition-colors duration-300">
                    Git
                  </span>
                  <span className="px-4 py-2 bg-stellar-blue/20 border border-stellar-blue/30 rounded-full text-sm text-nebula-white hover:bg-stellar-blue/30 transition-colors duration-300">
                    Figma
                  </span>
                  <span className="px-4 py-2 bg-nebula-purple/20 border border-nebula-purple/30 rounded-full text-sm text-nebula-white hover:bg-nebula-purple/30 transition-colors duration-300">
                    SEO
                  </span>
                  <span className="px-4 py-2 bg-nebula-violet/20 border border-nebula-violet/30 rounded-full text-sm text-nebula-white hover:bg-nebula-violet/30 transition-colors duration-300">
                    Performance Optimization
                  </span>
                  <span className="px-4 py-2 bg-nebula-cyan/20 border border-nebula-cyan/30 rounded-full text-sm text-nebula-white hover:bg-nebula-cyan/30 transition-colors duration-300">
                    Responsive Design
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-nebula-purple/20">
                <p className="text-gray-400 mb-4">Ready to work together?</p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center space-x-2 text-nebula-cyan hover:text-nebula-violet transition-colors"
                  >
                    <Icon name="mail" className="w-5 h-5" />
                    <span>Get in touch</span>
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center space-x-2 text-nebula-cyan hover:text-nebula-violet transition-colors"
                  >
                    <Icon name="linkedin" className="w-5 h-5" />
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-radial-nebula overflow-hidden">
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nebula-white mb-6">
            Ready to Launch Your Next Project?
          </h2>
          <p className="text-xl text-nebula-white/70 mb-10 max-w-2xl mx-auto">
            Let's discuss how I can help your agency deliver exceptional websites without the headaches
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 rounded-full bg-gradient-nebula text-white font-bold text-lg shadow-glow hover:shadow-nebula-lg hover:scale-105 transition-all duration-300 animate-pulse-slow"
          >
            Begin Your Mission
          </Link>
        </div>

        <FloatingParticles />
      </section>

      <Footer />
    </div>
  );
}