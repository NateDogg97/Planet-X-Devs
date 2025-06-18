# Contact Form Deep Linking Demo

## Available URLs

### Default (Project Inquiry)
- **URL**: `/contact`
- **Description**: Loads the default "Start a Project" form
- **Use Case**: General project inquiries, main CTA buttons

### Quick Consultation
- **URL**: `/contact?form=quick-consultation`
- **Description**: Loads the streamlined consultation request form
- **Use Case**: Blog CTAs, "Get advice" buttons, consultation requests

### Support & Maintenance
- **URL**: `/contact?form=support-maintenance`
- **Description**: Loads the support request form for existing clients
- **Use Case**: Client portal links, support documentation, help desk

## Implementation Examples

### HTML Links
```html
<!-- Default project inquiry -->
<a href="/contact">Start a Project</a>

<!-- Quick consultation -->
<a href="/contact?form=quick-consultation">Get Quick Advice</a>

<!-- Support request -->
<a href="/contact?form=support-maintenance">Request Support</a>
```

### React/Next.js Links
```jsx
import Link from 'next/link';
import { CONTACT_FORM_URLS } from '@/utils';

// Using utility constants
<Link href={CONTACT_FORM_URLS.PROJECT_INQUIRY}>Start Project</Link>
<Link href={CONTACT_FORM_URLS.QUICK_CONSULTATION}>Get Consultation</Link>
<Link href={CONTACT_FORM_URLS.SUPPORT_MAINTENANCE}>Request Support</Link>

// Using utility function
<Link href={getContactFormUrl('quick-consultation')}>
  Schedule Consultation
</Link>
```

### JavaScript Navigation
```javascript
// Navigate programmatically
window.location.href = '/contact?form=quick-consultation';

// Using Next.js router
import { useRouter } from 'next/navigation';
const router = useRouter();
router.push('/contact?form=support-maintenance');
```

## URL Behavior

### Features
- ✅ **Deep Linking**: Direct links to specific forms work immediately
- ✅ **Browser History**: Back/forward buttons work correctly
- ✅ **Bookmarking**: Users can bookmark specific forms
- ✅ **Sharing**: URLs can be shared with specific forms active
- ✅ **SEO Friendly**: Clean URLs that search engines can index
- ✅ **Fallback Handling**: Invalid form types default to project inquiry

### URL Updates
- **Tab Clicks**: URL updates automatically when users switch tabs
- **Default Behavior**: Default tab doesn't add query parameter (clean URLs)
- **Invalid Parameters**: Unknown form types fall back to default
- **History Management**: Uses `router.replace()` to avoid cluttering history

## Use Cases

### Marketing Campaigns
```html
<!-- Email campaign for consultations -->
<a href="https://planetxdevs.com/contact?form=quick-consultation">
  Get Your Free Technical Consultation
</a>

<!-- Blog CTA for project inquiries -->
<a href="https://planetxdevs.com/contact">
  Ready to Start Your Project?
</a>
```

### Client Portal Integration
```html
<!-- Support portal integration -->
<a href="/contact?form=support-maintenance">
  Report an Issue
</a>

<!-- Quick help button -->
<a href="/contact?form=quick-consultation">
  Need Quick Help?
</a>
```

### Social Media & Content
- **Twitter**: "Need quick web dev advice? [link to consultation form]"
- **LinkedIn**: "Ready to start your project? [link to project form]"
- **Documentation**: Support links directly to maintenance form

## Testing URLs

Visit these URLs to test the functionality:

1. http://localhost:3000/contact
2. http://localhost:3000/contact?form=quick-consultation  
3. http://localhost:3000/contact?form=support-maintenance
4. http://localhost:3000/contact?form=invalid-form (should fallback to default)

## Performance Notes

- **SSR Compatibility**: Forms render correctly during server-side rendering
- **Client Hydration**: URL parameters activate correct tabs after hydration
- **Bundle Size**: Contact page: 9.75 kB (minimal increase for URL functionality)
- **SEO**: All forms are indexable and have proper meta tags