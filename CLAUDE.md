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

### Content Update Frequency
- Testimonials/Case studies: 1-2 times per month
- Service descriptions: Several times per year (more frequent initially)
- Team/About section: Periodic updates needed

## Development Philosophy

### Core Principles
1. **Performance First**: This is primarily a static marketing site. Minimize JavaScript and bundle size.
2. **Simplicity Over Complexity**: Use static HTML/CSS where possible, components only when truly needed.
3. **Maintainability**: Keep it simple since it's a solo developer project.

### When to Use Components vs Static Content

**USE COMPONENTS FOR:**
- Interactive elements (ContactForm)
- Truly reusable UI elements used across multiple pages (Button, Card)
- Content that updates frequently (testimonials, if displayed in multiple places)
- Layout elements that must be reused for each section (Containers, Sections)`

**USE STATIC HTML/CSS FOR:**
- Page sections that rarely change
- Content-heavy areas with minimal interactivity
- One-off layouts or designs
- Hero sections, about content, service descriptions

## Technical Guidelines

### Current Issues to Address
1. **Bundle Size**: Too large for a marketing site, affecting load speeds
2. **Over-componentization**: Many section components should be static HTML
3. **Redundant Theming**: Themed component variants add unnecessary complexity

### Refactoring Priorities
1. Convert most `/src/components/sections/` to static JSX or HTML in page files
2. Remove themed component variants (ThemedButton, ThemedCard) - use base components with className
3. Keep only essential components in `/src/components/ui/`
4. Optimize images and implement lazy loading

### Performance Goals
- Implement Core Web Vitals tracking
- Target scores:
  - LCP: < 2.5s
  - FID: < 100ms  
  - CLS: < 0.1
- Reduce JavaScript bundle by 50%+

## Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

### Environment Setup
Required environment variable:
- `RESEND_API_KEY` - API key for Resend email service

## Architecture Overview

### Essential Features
1. **Contact Form**: Keep React-based with validation and Resend integration
2. **Error Boundaries**: Production-ready error handling
3. **Email System**: Current implementation is appropriate

### Planned Features
1. **Portfolio Section**: Plan for static generation with MDX
2. **Blog**: Consider MDX or markdown-based content
3. **Core Web Vitals Tracking**: Implement monitoring

### Simplification Opportunities
1. **Remove**: Themed component system
2. **Convert to Static**: Most section components
3. **Optimize**: Image loading and bundle splitting
4. **Consider**: MDX for content pages to separate content from code

## Best Practices for This Project

1. **Before creating a component, ask**: "Will this be reused? Does it need interactivity?"
2. **Prefer inline styles or Tailwind classes** over complex theme systems
3. **Write content directly in page files** unless it needs to be shared
4. **Measure performance impact** before adding new dependencies
5. **Document why** when adding JavaScript functionality

## Content Management Strategy

Since only developers update the site:
- Keep content in code for now (no CMS needed)
- Consider MDX for blog/portfolio when added
- Use TypeScript interfaces for content structure
- Keep testimonials in a simple data file

## DO NOT:
- Add unnecessary abstractions
- Create components for single-use layouts  
- Implement features "just in case"
- Over-optimize for non-existent scale
- Add complex state management
- Use heavy animation libraries

## DO:
- Write clear, maintainable code
- Optimize for page speed
- Use semantic HTML
- Implement proper SEO tags
- Keep accessibility in mind
- Test on real devices