# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Business Context

**Planet X Devs** is a web development service focused on helping marketing agencies with technical implementation. Primary services include WordPress development, performance optimization, and maintenance.

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (minimize usage)
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Hosting**: Vercel
- **Languages**: TypeScript, JavaScript

## Development Guidelines

### Component Architecture
```
src/
  components/
    ui/           # Reusable UI components (Button, Card, etc.)
    sections/     # Page sections (Hero, Services, etc.)
    forms/        # Form components with validation
    animations/   # Animation components (use sparingly)
```

### Performance Requirements
- **Target**: 95+ Lighthouse score
- **Load Time**: <3s on 3G
- **Bundle Size**: Keep main bundle under 150KB
- **Images**: Use next/image with proper sizing
- **Fonts**: Subset and preload critical fonts

### Code Style
```typescript
// Import order
import { useState } from 'react';              // React
import Image from 'next/image';                // Next.js
import { motion } from 'framer-motion';        // External libs
import { Button } from '@/components/ui';      // Internal components
import type { ServiceProps } from '@/types';   // Types

// Component structure
export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // State and hooks first
  const [state, setState] = useState(false);
  
  // Event handlers
  const handleClick = () => {};
  
  // Render
  return <div>...</div>;
}
```

### CSS/Tailwind Guidelines
- Use Tailwind classes for styling
- Avoid custom CSS unless absolutely necessary
- Responsive design: mobile-first approach
- Common breakpoints: sm (640px), md (768px), lg (1024px)

### SEO Checklist
- [ ] Unique meta title/description per page
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Image alt text
- [ ] Structured data for local business
- [ ] XML sitemap
- [ ] Canonical URLs

### Form Implementation
```typescript
// Use React Hook Form + Zod
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});
```

### Environment Variables
```bash
# Required
RESEND_API_KEY=
RESEND_FROM_EMAIL=
RESEND_TO_EMAIL=

# Optional
NEXT_PUBLIC_GA_ID=
```

## Common Tasks

### Update Hero Content
```typescript
// Location: src/app/page.tsx
<Hero
  title="Short, punchy headline"
  subtitle="Longer descriptive text with key benefits and details"
  actions={[...]}
/>
```

### Add New Service
1. Update `src/constants/services.ts`
2. Add to pricing table if needed
3. Update sitemap
4. Add schema markup

### Deploy Changes
```bash
git add .
git commit -m "feat: update hero messaging"
git push origin main
# Vercel auto-deploys from main
```

## Testing Commands
```bash
npm run dev          # Local development
npm run build        # Test production build
npm run lint         # Check for issues
npm run type-check   # TypeScript validation
```

## Performance Monitoring
- Use Vercel Analytics for Web Vitals
- Check GTmetrix weekly
- Monitor form submission success rate
- Track Core Web Vitals in Search Console

## Quick Fixes

### Reduce Bundle Size
- Check with `npm run analyze`
- Remove unused dependencies
- Lazy load below-fold components
- Use dynamic imports for heavy components

### Improve Load Speed
- Optimize images (WebP format)
- Reduce font weights
- Remove unused CSS
- Minimize third-party scripts

### Better Conversions
- Clear CTAs above fold
- Reduce form fields
- Add trust indicators
- Show pricing transparently