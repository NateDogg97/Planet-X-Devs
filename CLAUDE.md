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

### Current Issues to Address
1. **Bundle Size**: Too large for a marketing site, affecting load speeds
2. **Over-componentization**: Many section components should be static HTML
3. **Redundant Theming**: Themed component variants add unnecessary complexity
4. **Homepage Performance**: Multiple animation-heavy components affecting Core Web Vitals

### Homepage Performance Optimization Priority
The homepage requires immediate performance optimization. A comprehensive checklist has been created at `/docs/homepage-optimization-checklist.md` for systematic improvements. Key areas:
1. **Optimize Animations**: Make FloatingPlanets non-render-blocking, simplify particle effects
2. **Reduce Dependencies**: Remove/replace framer-motion, react-countup, swiper
3. **Static Conversion**: Convert non-interactive sections to static HTML
4. **Lazy Loading**: Implement for below-fold components
5. **Bundle Optimization**: Code splitting and tree shaking

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

## Homepage Specific Guidelines

### Components to Optimize
- `StarField` - Reduce star count, optimize animations
- `FloatingPlanet` - Make non-render-blocking, add fade-in animation
- `Hero` - Replace framer-motion with CSS animations
- `ProcessTimeline` - Simplify particle effects
- `TestimonialCarousel` - Lazy load below fold

### Dependencies to Remove/Replace
- `framer-motion` - Replace with CSS animations
- `react-countup` - Use CSS counters or vanilla JS
- `swiper` - Remove if unused

### Static Content Candidates
- Benefits section
- Partnership section
- Footer content
- Any section without interactivity

## Services Page Specific Guidelines

### Component Reuse from Homepage
- `StarField` - For hero background
- `FloatingPlanet` - Optimize performance but keep for visual appeal
- `Hero` - Modify to accept bullets prop
- `Section` & `Container` - For consistent spacing
- `ProcessTimeline` - Convert to vertical layout
- `CTASection` - Reuse for final CTA
- `TestimonialCarousel` - Not needed on services page

### New Components Needed
- `ServiceDetailCard` - For detailed service offerings with pricing
- `RetainerPlanCard` - For monthly retainer options
- `VerticalTimeline` - Modified process timeline
- `FAQItem` - Expandable FAQ component

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