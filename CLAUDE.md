# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Business Context

**Planet X Devs** is a web development agency that provides:
- Modern web application development (React, Next.js, Node.js)
- Full-stack JavaScript development services
- API development and integrations
- E-commerce solutions (headless commerce, custom platforms)
- WordPress development when specifically needed
- Technical support and maintenance
- Performance optimization services

### Target Audience
1. **Primary**: Digital marketing agencies needing technical development support
2. **Secondary**: Small businesses needing modern web solutions

### Brand Identity
- **Theme**: Deep Space / Distant Planet (nebula-inspired)
- **Colors**: Deep Space Black (#0A0A0B), Nebula Purple (#6B46C1), Cosmic Violet (#9333EA), Stellar Blue (#312E81)
- **Voice**: Professional yet approachable, technically competent without being intimidating
- **Tagline**: "Your Agency's Technical Partner"
- **Tech Focus**: JavaScript-first, modern web technologies

### Current Repositioning Project
**IMPORTANT**: We are transitioning from WordPress-focused messaging to modern JavaScript/full-stack development positioning. See `white-label-page-implementation-plan.md` for detailed conversion instructions. See `white-label-page-content.md` for exact text to be used.

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
- Content that updates frequently
- Layout elements that must be reused for each section (Containers, Sections)
- Animated elements (StarField, FloatingPlanet, ProcessTimeline)
- Form logic and validation

**USE STATIC HTML/CSS FOR:**
- Page sections that rarely change
- Content-heavy areas with minimal interactivity
- One-off layouts or designs
- Static content sections without animations
- Trust badges and simple info sections

## Current Task: White Label Page Conversion

### Reference Documentation
For detailed implementation instructions, see: `white-label-page-implementation-plan.md`
For deatiled text content and sections to be implemented, see `white-label-page-content.md`

### Key Objectives
1. Reposition from WordPress-specialist to modern web development
2. Lead with JavaScript technologies (React, Node.js, Next.js)
3. Maintain WordPress as a service option, not primary focus
4. Update all messaging, keywords, and service hierarchy

### Implementation Approach
- Work section by section as outlined in the implementation plan
- Create new sections before removing old ones
- Preserve valuable content by moving rather than deleting
- Test each section after implementation
- Maintain SEO value during transition

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
git checkout -b feature/white-label-modernization

# Commit message format
# type(scope): subject
# Example: feat(white-label): update hero to modern tech focus

# Before pushing
npm run lint
npm run build
git add .
git commit -m "feat(white-label): modernize service offerings section"
```

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
npx pa11y http://localhost:3000/white-label-web-development

# Performance audit
npx lighthouse http://localhost:3000/white-label-web-development

# SEO audit
npx @sitespeed.io/sitespeed.io http://localhost:3000/white-label-web-development
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

## State Management
- Use React's built-in useState for form state
- Consider useReducer for complex form logic
- No external state management libraries needed
- Persist form data in sessionStorage (not localStorage)

## Error Handling
- Client-side validation before submission
- Clear error messages next to fields
- Global error state for submission failures
- Fallback email link if form fails
- Log errors to monitoring service (if available)

## Mobile Considerations
- Touch-friendly form inputs (min 44x44px)
- Simplified navigation on mobile
- Single-column layout for forms
- Reduced animations on low-power devices
- Test on real devices, not just DevTools

## Future Enhancements
- Technology stack showcase page
- Interactive project portfolio
- Client portal for existing customers
- Advanced performance monitoring
- A/B testing for conversion optimization
- Multi-language support
- API documentation portal