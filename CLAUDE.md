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

### Services Page Implementation Priority
The services page is being implemented with the nebula/space theme. Key implementation tasks:
1. **Reuse Existing Components**: StarField, FloatingPlanet, Hero, Section, Container from homepage
2. **Create New Components**: ServiceDetailCard, RetainerPlanCard, VerticalTimeline
3. **Static Sections**: FAQ items, coming soon section, intro text
4. **Performance Focus**: Lazy load heavy components, optimize animations
5. **Clean Code**: Remove unused imports and components after refactoring

### Refactoring Priorities
1. Convert most `/src/components/sections/` to static JSX or HTML in page files (except animated ones)
2. Remove themed component variants (ThemedButton, ThemedCard) - use base components with className
3. Keep only essential components in `/src/components/ui/`
4. Optimize images and implement lazy loading
5. Implement proper animation performance optimizations

### Performance Goals
- Implement Core Web Vitals tracking
- Target scores:
  - LCP: < 2.5s
  - FID: < 100ms  
  - CLS: < 0.1
- Reduce JavaScript bundle by 50%+
- Ensure animations don't block initial render

## Services Page Specific Guidelines

### Component Reuse from Homepage
- `StarField` - For hero background
- `FloatingPlanet` - Remove from services page for performance
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
- Remove floating planets on this page
- Use CSS transforms only
- Add will-change property sparingly
- Implement intersection observer for scroll animations

## Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

### Environment Setup
Required environment variables:
- `RESEND_API_KEY` - API key for Resend email service
- `RESEND_FROM_EMAIL` - From email address for Resend
- `RESEND_TO_EMAIL` - To email address for contact form submissions

### Dependencies
Core dependencies for nebula theme:
- `framer-motion` - For hero text animations
- `react-countup` - For number animations
- `swiper` - For testimonial carousel (not needed on services page)