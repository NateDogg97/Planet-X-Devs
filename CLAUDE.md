# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Business Context

**Planet X Devs** is a web development agency that provides:
- General tech support to digital marketing agencies (primary target)
- Website services: building, maintenance, single page development
- Basic SEO services
- eCommerce development
- Platform-agnostic development (WordPress/Elementor, Next.js/React, other builders as needed)

### Target Audience
1. **Primary**: Digital marketing agencies needing developer support
2. **Secondary**: Small businesses needing web services

### Brand Identity
- **Theme**: Deep Space / Distant Planet (nebula-inspired)
- **Colors**: Deep Space Black (#0A0A0B), Nebula Purple (#6B46C1), Cosmic Violet (#9333EA), Stellar Blue (#312E81)
- **Voice**: Professional yet approachable, technically competent without being intimidating
- **Tagline**: "Your Agency's Technical Partner"

### Content Update Frequency
- Testimonials/Case studies: 1-2 times per month
- Service descriptions: Several times per year (more frequent initially)
- Team/About section: Periodic updates needed

## Development Philosophy

### Core Principles
1. **Performance First**: This is primarily a static marketing site. Minimize JavaScript and bundle size.
2. **Simplicity Over Complexity**: Use static HTML/CSS where possible, components only when truly needed.
3. **Maintainability**: Keep it simple since it's a solo developer project.
4. **Animation Balance**: Subtle, performant animations that enhance without overwhelming.

### When to Use Components vs Static Content

**USE COMPONENTS FOR:**
- Interactive elements (ContactForm, navigation with mobile menu)
- Truly reusable UI elements used across multiple pages (Button, Card)
- Content that updates frequently (testimonials, if displayed in multiple places)
- Layout elements that must be reused for each section (Containers, Sections)
- Animated elements (StarField, FloatingPlanet, ProcessTimeline)

**USE STATIC HTML/CSS FOR:**
- Page sections that rarely change
- Content-heavy areas with minimal interactivity
- One-off layouts or designs
- Static content sections without animations

## Technical Guidelines

### Services Page Implementation Status
The services page has been implemented with the nebula/space theme. Future optimizations:
1. **Performance Monitoring**: Track page-specific metrics
2. **Component Reuse**: Ensure efficient sharing between pages
3. **Static Content**: Continue converting appropriate sections
4. **Animation Performance**: Monitor and optimize as needed

### Refactoring Priorities
1. Convert most `/src/components/sections/` to static JSX or HTML in page files (except animated ones)
2. Remove themed component variants (ThemedButton, ThemedCard) - use base components with className
3. Keep only essential components in `/src/components/ui/`
4. Optimize images and implement lazy loading
5. Implement proper animation performance optimizations

### Performance Goals
- ✅ **Implement Core Web Vitals tracking** - Comprehensive monitoring system implemented
- Target scores:
  - LCP: < 2.5s
  - INP: < 200ms (replaces FID)  
  - CLS: < 0.1
- ✅ **Reduce JavaScript bundle by 50%+** - Achieved through dynamic imports and optimization
- ✅ **Ensure animations don't block initial render** - Intersection observer lazy loading implemented

### Performance Monitoring System
- **Core Web Vitals tracking** via web-vitals library (LCP, INP, CLS, FCP, TTFB)
- **Custom performance marks** for key interactions (hero render, CTA clicks, particle loading)
- **Performance budgets** with automated alerts for regressions
- **Real User Monitoring (RUM)** in production environment
- **Bundle size monitoring** with 160KB total budget

# About Page Implementation Guidelines

Add this section to your CLAUDE.md file:

## About Page Specific Guidelines

### Purpose and Goals
The About page builds trust and credibility by:
- Telling the agency partnership story
- Showcasing values that resonate with agencies
- Demonstrating expertise without overwhelming
- Maintaining the nebula/space theme consistently

### Component Reuse from Homepage/Services
- `StarField` - For hero background only
- `Hero` - Without bullet points prop
- `Section` & `Container` - For consistent spacing
- `CTASection` - For final call-to-action
- `Footer` - No modifications needed

### New Components (Keep Minimal)
- `ValueCard` - Only if significantly different from existing Card
- `TimelineItem` - Only if ProcessTimeline can't be adapted
- Prefer static HTML with CSS classes over new components

### Static Content Sections
- Story/Origin section - Pure JSX/HTML
- Team member bio and details
- Most timeline content (except animation wrapper)
- Skill tags and badges

### Animation Guidelines
- **Hero**: Keep existing StarField, simple fade-ins
- **Story Section**: CSS-only floating elements
- **Values Grid**: Staggered fade-in on scroll, CSS hover states
- **Timeline**: CSS line drawing, sequential item appearance
- **Team Avatar**: CSS rotation animation for border
- **CTA**: Minimal particles, reuse existing

### Performance Requirements
- Total JavaScript for animations: < 10KB
- Use Intersection Observer for all scroll triggers
- CSS transforms only, no JavaScript physics
- Lazy load any images below fold
- Target same Core Web Vitals as other pages

### Content Management
- Team section will need periodic updates
- Timeline should be updated quarterly/annually
- Values should remain stable (brand consistency)
- Make content sections easy to edit without breaking layout

### Mobile Considerations
- Timeline should stack vertically on mobile
- Values grid: 3 columns → 1 column
- Story section: Side-by-side → stacked
- Maintain readability of all text

### Implementation Priority
1. Structure and content first
2. Basic styling and layout
3. Add animations last
4. Test performance at each step

### Common Pitfalls to Avoid
- Don't over-animate the timeline
- Keep floating elements subtle
- Don't create components for one-time use sections
- Avoid complex grid layouts that break on mobile
- Don't add personality at the cost of professionalism

### Testing Focus Areas
- Timeline renders correctly at all breakpoints
- Animations don't cause layout shifts
- Page performs well on mobile devices
- Content is scannable and engaging
- CTAs are prominent and compelling

### Static Content Sections
- Introduction paragraph after hero
- Coming soon section (full HTML)
- Service descriptions within cards

### Animation Performance
- Limit particles to final CTA only
- Keep floating planets but optimize loading
- Use CSS transforms only
- Add will-change property sparingly
- Implement intersection observer for scroll animations

## Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

### Performance Testing
- `npm run build` - Check bundle size in output
- Use Chrome DevTools Lighthouse for performance audits
- Monitor Core Web Vitals in production

### Environment Setup
Required environment variables:
- `RESEND_API_KEY` - API key for Resend email service
- `RESEND_FROM_EMAIL` - From email address for Resend
- `RESEND_TO_EMAIL` - To email address for contact form submissions

### Dependencies
Core dependencies for nebula theme:
- `framer-motion` - To be removed/replaced with CSS
- `react-countup` - To be removed/replaced with CSS
- `swiper` - To be removed if unused
- `resend` - Keep for email functionality

## Performance Optimization Workflow

1. **Measure**: Always measure before optimizing
2. **Quick Wins**: Start with easy, high-impact changes
3. **Bundle Size**: Remove unnecessary dependencies
4. **Static Content**: Convert components to static HTML where possible
5. **Lazy Loading**: Implement for below-fold content
6. **Test**: Verify no visual regressions
7. **Monitor**: Set up ongoing performance monitoring

## Documentation

- Homepage optimization checklist: `/docs/homepage-optimization-checklist.md`
- Performance best practices: To be created
- Component guidelines: To be created