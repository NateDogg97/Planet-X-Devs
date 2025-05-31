// Test file to verify ErrorBoundary functionality
// Note: This is for demonstration - actual testing would require Jest/React Testing Library

import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

// Test component that throws an error
function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error message');
  }
  return <div>No error here!</div>;
}

// Test component for async errors
function AsyncErrorComponent() {
  const simulateAsyncError = () => {
    setTimeout(() => {
      throw new Error('Async error');
    }, 100);
  };

  return (
    <div>
      <button onClick={simulateAsyncError}>Trigger Async Error</button>
    </div>
  );
}

// Test: Basic Error Boundary
export function TestBasicErrorBoundary() {
  return (
    <ErrorBoundary>
      <ThrowError shouldThrow={true} />
    </ErrorBoundary>
  );
}

// Test: Custom Error Handler
export function TestCustomErrorHandler() {
  const handleError = (error: Error, errorInfo: any) => {
    console.log('Custom error handler called:', error.message);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <ThrowError shouldThrow={true} />
    </ErrorBoundary>
  );
}

// Test: Different Fallback Variants
export function TestFallbackVariants() {
  return (
    <div>
      <h3>Minimal Fallback</h3>
      <ErrorBoundary fallback="minimal">
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>

      <h3>Inline Fallback</h3>
      <ErrorBoundary fallback="inline">
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>

      <h3>Default Fallback</h3>
      <ErrorBoundary fallback="default">
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    </div>
  );
}

// Test: Custom Logger
export function TestCustomLogger() {
  const customLogger = {
    logError: (error: Error, errorInfo?: any, context?: Record<string, any>) => {
      console.log('🔍 Custom Logger:', {
        message: error.message,
        stack: error.stack,
        errorInfo,
        context
      });
    }
  };

  return (
    <ErrorBoundary 
      logger={customLogger}
      context={{ testId: 'custom-logger-test' }}
    >
      <ThrowError shouldThrow={true} />
    </ErrorBoundary>
  );
}

// Test: Reset on Props Change
export function TestResetOnPropsChange() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Change Props (Count: {count})
      </button>
      <ErrorBoundary resetOnPropsChange={true}>
        <ThrowError shouldThrow={count % 2 === 1} />
      </ErrorBoundary>
    </div>
  );
}

// Test: HOC Usage
const TestComponent = ({ message }: { message: string }) => {
  if (message === 'error') {
    throw new Error('HOC test error');
  }
  return <div>Message: {message}</div>;
};

import { withErrorBoundary } from '../ErrorBoundary';

export const TestComponentWithErrorBoundary = withErrorBoundary(TestComponent, {
  fallback: 'inline',
  title: 'HOC Error',
  message: 'Error in wrapped component'
});

// Demo page component
export function ErrorBoundaryTestPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">ErrorBoundary Test Page</h1>
      
      <section>
        <h2 className="text-lg font-semibold mb-4">1. Basic Error Boundary</h2>
        <TestBasicErrorBoundary />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">2. Fallback Variants</h2>
        <TestFallbackVariants />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">3. Reset on Props Change</h2>
        <TestResetOnPropsChange />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">4. HOC Usage</h2>
        <TestComponentWithErrorBoundary message="normal" />
        <TestComponentWithErrorBoundary message="error" />
      </section>
    </div>
  );
}

export default ErrorBoundaryTestPage;