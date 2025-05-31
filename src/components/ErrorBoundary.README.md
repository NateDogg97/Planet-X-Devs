# ErrorBoundary Component

A comprehensive, reusable React Error Boundary component that provides robust error handling for both rendering errors and async errors with customizable fallback UI and logging capabilities.

## Features

### ✅ **Core Functionality**
- **React Error Boundary**: Catches JavaScript errors in component trees
- **Async Error Handling**: Handle async errors with `useErrorHandler` hook
- **Error Logging**: Configurable logging with context information
- **Fallback UI**: Multiple built-in fallback variants
- **Recovery**: "Try again" functionality with automatic retry

### ✅ **Customization Options**
- **4 Fallback Variants**: `default`, `minimal`, `inline`, `custom`
- **Custom Fallback Renderer**: Complete control over error UI
- **Error Context**: Add custom context for debugging
- **Configurable Logging**: Integrate with monitoring services
- **Development Features**: Detailed error information in development

### ✅ **Advanced Features**
- **HOC Support**: `withErrorBoundary` higher-order component
- **Props Change Reset**: Automatically reset on prop changes
- **Error Isolation**: Prevent errors from bubbling up
- **Unique Error IDs**: Track specific error instances
- **TypeScript Support**: Full type safety

## Quick Usage

```tsx
import ErrorBoundary from '@/components/ErrorBoundary';

// Basic usage
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>

// With custom fallback
<ErrorBoundary 
  fallback="inline"
  title="Custom Error"
  message="Something went wrong with this component."
>
  <YourComponent />
</ErrorBoundary>

// With async error handling
function MyComponent() {
  const { handleError, ErrorBoundary: ErrorWrapper } = useErrorHandler();
  
  const fetchData = async () => {
    try {
      // API call
    } catch (error) {
      handleError(error as Error, { context: 'fetchData' });
    }
  };

  return (
    <ErrorWrapper fallback="inline">
      <div>Content</div>
    </ErrorWrapper>
  );
}
```

## API Reference

### ErrorBoundary Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Components to protect |
| `fallback` | `FallbackVariant \| ReactNode` | `'default'` | Fallback UI variant or custom element |
| `title` | `string` | `'Something went wrong'` | Error title |
| `message` | `string` | `'An unexpected error occurred...'` | Error message |
| `showRetry` | `boolean` | `true` | Show "Try again" button |
| `showDetails` | `boolean` | `process.env.NODE_ENV === 'development'` | Show error details |
| `className` | `string` | `''` | Additional CSS classes |
| `onError` | `(error: Error, errorInfo: ErrorInfo) => void` | - | Custom error handler |
| `logger` | `ErrorLogger` | `consoleLogger` | Error logging service |
| `resetOnPropsChange` | `boolean` | `false` | Reset error on props change |
| `isolate` | `boolean` | `false` | Prevent error bubbling |
| `context` | `Record<string, any>` | - | Additional logging context |
| `renderFallback` | `(error: Error, resetError: () => void) => ReactNode` | - | Custom fallback renderer |

### Fallback Variants

- **`default`**: Full error page with icon, title, message, and retry button
- **`minimal`**: Simple text message with optional retry link
- **`inline`**: Compact inline error with icon and retry button
- **`custom`**: Use `renderFallback` prop for complete customization

### Error Logger Interface

```tsx
interface ErrorLogger {
  logError: (
    error: Error, 
    errorInfo?: ErrorInfo, 
    context?: Record<string, any>
  ) => void;
}
```

## Integration Examples

See `ErrorBoundary.integration.md` for detailed integration examples and `ErrorBoundary.example.tsx` for usage patterns.

## Testing

See `__tests__/ErrorBoundary.test.tsx` for test examples and component verification.

## Files

- `ErrorBoundary.tsx` - Main component
- `ErrorBoundary.example.tsx` - Usage examples
- `ErrorBoundary.integration.md` - Integration guide
- `ErrorBoundary.test.tsx` - Test examples
- `ErrorBoundary.README.md` - This documentation