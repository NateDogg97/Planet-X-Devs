# ErrorBoundary Integration Guide

This guide shows how to integrate the ErrorBoundary component into different parts of the Planet X Devs website.

## Quick Start

```tsx
import ErrorBoundary from '@/components/ErrorBoundary';

// Wrap any component that might throw errors
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

## Integration Examples

### 1. Wrap Form Components

```tsx
// In ContactForm/index.tsx
import ErrorBoundary from '../../ErrorBoundary';

export default function ContactForm() {
  return (
    <ErrorBoundary
      fallback="inline"
      title="Form Error"
      message="There was an error processing the form. Please try again."
      context={{ component: 'ContactForm' }}
    >
      {/* Existing form content */}
    </ErrorBoundary>
  );
}
```

### 2. Wrap Section Components

```tsx
// In sections/ServicesSection.tsx
import ErrorBoundary from '../ErrorBoundary';

export default function ServicesSection() {
  return (
    <ErrorBoundary
      fallback="default"
      title="Services Loading Error"
      message="We couldn't load the services section. Please refresh the page."
      resetOnPropsChange={true}
    >
      {/* Existing services content */}
    </ErrorBoundary>
  );
}
```

### 3. Wrap API-dependent Components

```tsx
// For components that fetch data
import ErrorBoundary, { useErrorHandler } from '@/components/ErrorBoundary';

function DataComponent() {
  const { handleError, ErrorBoundary: ErrorWrapper } = useErrorHandler();
  
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) throw new Error('Failed to fetch');
      // handle success
    } catch (error) {
      handleError(error as Error, { endpoint: '/api/data' });
    }
  };

  return (
    <ErrorWrapper fallback="inline">
      {/* Component content */}
    </ErrorWrapper>
  );
}
```

### 4. Layout-level Error Boundaries

```tsx
// In app/layout.tsx - wrap sections that might fail
import ErrorBoundary from '@/components/ErrorBoundary';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        
        <ErrorBoundary
          fallback="default"
          title="Page Error"
          message="This page encountered an error. Please try refreshing."
          isolate={true} // Prevent error from bubbling to global-error.tsx
        >
          {children}
        </ErrorBoundary>
        
        <Footer />
      </body>
    </html>
  );
}
```

### 5. Component-specific Error Boundaries

```tsx
// For the TestimonialCard component
import ErrorBoundary from '../ErrorBoundary';

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <ErrorBoundary
      fallback="minimal"
      message="Unable to load testimonial"
      showRetry={false}
    >
      {/* Existing testimonial content */}
    </ErrorBoundary>
  );
}
```

## Error Logging Integration

### With External Services

```tsx
// Create a custom logger for your monitoring service
const sentryLogger = {
  logError: (error: Error, errorInfo?: any, context?: Record<string, any>) => {
    // Sentry integration
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundary', true);
      scope.setContext('errorInfo', errorInfo);
      scope.setContext('customContext', context);
      Sentry.captureException(error);
    });
  }
};

// Use with ErrorBoundary
<ErrorBoundary logger={sentryLogger}>
  <YourComponent />
</ErrorBoundary>
```

### Development vs Production

```tsx
const isDevelopment = process.env.NODE_ENV === 'development';

<ErrorBoundary
  showDetails={isDevelopment}
  logger={isDevelopment ? consoleLogger : productionLogger}
  fallback={isDevelopment ? 'default' : 'minimal'}
>
  <YourComponent />
</ErrorBoundary>
```

## Best Practices

1. **Granular Boundaries**: Place error boundaries around logical component groups
2. **User-friendly Messages**: Customize error messages for different contexts
3. **Logging Context**: Include relevant context for debugging
4. **Fallback Variants**: Use appropriate fallback UI for the component's role
5. **Testing**: Test error scenarios in development

## Error Boundary Hierarchy

```
Global Error (app/global-error.tsx)           // Catastrophic failures
├── Page Error (app/error.tsx)                // Page-level errors
├── Layout Error Boundaries                   // Layout section errors
│   ├── Header ErrorBoundary                 // Navigation errors
│   ├── Main Content ErrorBoundary           // Page content errors
│   └── Footer ErrorBoundary                 // Footer errors
└── Component Error Boundaries               // Individual component errors
    ├── Form ErrorBoundary
    ├── Section ErrorBoundary
    └── Widget ErrorBoundary
```

This hierarchy ensures that errors are caught at the most appropriate level and don't crash the entire application.