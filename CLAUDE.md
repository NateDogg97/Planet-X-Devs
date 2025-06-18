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
- Contact forms: May need updates based on business needs

## Development Philosophy

### Core Principles
1. **Performance First**: This is primarily a static marketing site. Minimize JavaScript and bundle size.
2. **Simplicity Over Complexity**: Use static HTML/CSS where possible, components only when truly needed.
3. **Maintainability**: Keep it simple since it's a solo developer project.
4. **Animation Balance**: Subtle, performant animations that enhance without overwhelming.
5. **SEO Focus**: Implement best practices for search engine visibility.

### When to Use Components vs Static Content

**USE COMPONENTS FOR:**
- Interactive elements (ContactForm, TabInterface, navigation with mobile menu)
- Truly reusable UI elements used across multiple pages (Button, Card)
- Content that updates frequently (testimonials, if displayed in multiple places)
- Layout elements that must be reused for each section (Containers, Sections)
- Animated elements (StarField, FloatingPlanet, ProcessTimeline)
- Form logic and validation

**USE STATIC HTML/CSS FOR:**
- Page sections that rarely change
- Content-heavy areas with minimal interactivity
- One-off layouts or designs
- Static content sections without animations
- Trust badges and simple info sections

## Contact Page Implementation Guidelines

### Page Structure
The contact page will use a three-form tabbed interface to segment different user intents:
1. **Project Inquiry Form** - Primary revenue driver
2. **Quick Consultation Form** - Low-friction lead capture
3. **Support/Maintenance Form** - Existing client support

### Key Components to Implement

#### 1. TabInterface Component
- Manages switching between three forms
- CSS-based transitions, no heavy JavaScript
- Accessible keyboard navigation
- Mobile-responsive (converts to accordion on small screens)

#### 2. Enhanced ContactForm Components
- Split existing form into three distinct variations
- Implement conditional field visibility
- Add form-specific validation rules
- Maintain existing email integration

#### 3. SocialLinks Component (Existing)
- Keep current implementation
- Ensure it works in new sidebar layout

### Performance Requirements
- **Initial Load**: < 3s on 3G
- **Form Interactions**: Instant feedback (< 100ms)
- **Tab Switching**: CSS transitions only
- **Bundle Size**: Keep form JavaScript under 50KB

### SEO Optimization
1. **Meta Tags**:
   - Unique title for each form type (consider URL params)
   - Rich snippets for contact information
   - Local business schema markup

2. **Content Structure**:
   - H1: Clear value proposition
   - H2s: Form types and trust indicators
   - Alt text for all decorative elements

3. **Performance SEO**:
   - Lazy load below-fold content
   - Optimize critical rendering path
   - Implement proper caching headers

### Accessibility Requirements
- **WCAG 2.1 AA Compliance**
- Tab navigation for all interactive elements
- ARIA labels for form fields and tabs
- Error messages announced to screen readers
- Color contrast ratio of at least 4.5:1

### Form Analytics & Tracking
Implement tracking for:
- Form views by type
- Field abandonment rates
- Submission success/failure
- Time to complete each form
- Source/medium attribution

### Testing Strategy

#### Terminal-Based Testing
```bash
# TypeScript compilation
npx tsc --noEmit

# ESLint checks
npm run lint

# Build size analysis
npm run build && npm run analyze

# Accessibility testing
npx pa11y http://localhost:3000/contact

# SEO testing
npx lighthouse http://localhost:3000/contact --only-categories=seo

# Bundle size check
npx bundlephobia ./out/_next/static/chunks/*.js
```

#### Visual Testing
- Use browser DevTools for responsive testing
- Test tab keyboard navigation manually
- Verify form validation messages appear correctly
- Check animations at different frame rates

### Implementation Phases

#### Phase 1: Structure & Layout
- Create tab interface component
- Set up three form variations
- Implement responsive grid layout
- Add social links to sidebar

#### Phase 2: Form Logic
- Implement field validation
- Add conditional logic
- Set up form submission handlers
- Test email integration

#### Phase 3: Polish & Optimize
- Add animations and transitions
- Implement lazy loading
- Optimize images and assets
- Add analytics tracking

#### Phase 4: SEO & Performance
- Run full performance audit
- Implement SEO improvements
- Add schema markup
- Test and optimize Core Web Vitals

### State Management
- Use React's built-in useState for form state
- Consider useReducer for complex form logic
- No external state management libraries needed
- Persist form data in sessionStorage (not localStorage)

### Error Handling
- Client-side validation before submission
- Clear error messages next to fields
- Global error state for submission failures
- Fallback email link if form fails
- Log errors to monitoring service (if available)

### Mobile Considerations
- Touch-friendly form inputs (min 44x44px)
- Simplified navigation on mobile
- Single-column layout for forms
- Reduced animations on low-power devices
- Test on real devices, not just DevTools

## Technical Guidelines

### Code Quality Standards
1. **Type Safety**: Full TypeScript coverage, no `any` types
2. **Component Size**: Keep under 200 lines, split if larger
3. **Function Complexity**: Max cyclomatic complexity of 10
4. **Import Order**: React → Next → External → Internal → Types → Styles
5. **Naming Conventions**: 
   - Components: PascalCase
   - Functions/variables: camelCase
   - Constants: UPPER_SNAKE_CASE
   - CSS classes: kebab-case

### Performance Optimization Checklist
- [ ] Images optimized and using next/image
- [ ] Fonts subset and preloaded
- [ ] Critical CSS inlined
- [ ] JavaScript code-split appropriately
- [ ] Third-party scripts loaded asynchronously
- [ ] Animations use CSS transforms only
- [ ] No layout shifts from lazy-loaded content

### Git Workflow
```bash
# Feature branch naming
git checkout -b feature/contact-page-redesign

# Commit message format
# type(scope): subject
# Example: feat(contact): add tabbed form interface

# Before pushing
npm run lint
npm run build
git add .
git commit -m "feat(contact): implement three-form tab interface"
```

### Monitoring & Analytics
- Set up Google Analytics 4 events for form interactions
- Monitor Core Web Vitals in Google Search Console
- Track form conversion rates by type
- Set up alerts for form submission failures
- Monitor 404s and other errors

### Documentation Requirements
- Update this file with any new patterns
- Document complex form logic inline
- Add JSDoc comments to utility functions
- Create user guide for form management
- Document email template variables

## Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint checks
npm run type-check   # Run TypeScript compiler check
```

### Testing & Analysis
```bash
# Bundle analysis
npm run build && npm run analyze

# Accessibility audit
npx pa11y http://localhost:3000/contact

# Performance audit
npx lighthouse http://localhost:3000/contact

# SEO audit
npx @sitespeed.io/sitespeed.io http://localhost:3000/contact
```

### Deployment
```bash
# Pre-deployment checklist
npm run preflight    # Runs lint, type-check, and build

# Deploy to production
npm run deploy       # Platform-specific deployment command
```

## Environment Variables
```bash
# Email Service
RESEND_API_KEY=          # Resend API key
RESEND_FROM_EMAIL=       # From email address
RESEND_TO_EMAIL=         # To email address for form submissions

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=       # Google Analytics ID
NEXT_PUBLIC_GTM_ID=      # Google Tag Manager ID

# Feature Flags (Optional)
NEXT_PUBLIC_ENABLE_CHAT= # Enable/disable chat widget
```

## Troubleshooting Guide

### Common Issues

#### Form Not Submitting
1. Check browser console for errors
2. Verify environment variables are set
3. Check network tab for failed requests
4. Ensure CORS is properly configured

#### Poor Performance Scores
1. Run `npm run analyze` to check bundle size
2. Look for large dependencies
3. Ensure images are optimized
4. Check for render-blocking resources

#### TypeScript Errors
1. Run `npx tsc --noEmit` for detailed errors
2. Check for missing type definitions
3. Ensure all imports have proper types
4. Update @types packages if needed

## Future Enhancements
- A/B testing for form variations
- Progressive form disclosure
- Appointment scheduling integration
- Live chat integration
- Multi-language support
- Advanced analytics dashboard
- Automated lead scoring
- CRM integration