// Example usage of the ErrorBoundary component
// This file demonstrates various ways to use the ErrorBoundary

import React, { useState } from 'react';
import ErrorBoundary, { withErrorBoundary, useErrorHandler } from './ErrorBoundary';

// Example 1: Basic usage with default fallback
function BasicExample() {
  return (
    <ErrorBoundary>
      <div>Your component content here</div>
    </ErrorBoundary>
  );
}

// Example 2: Custom error handling with logging
function CustomLoggerExample() {
  const customLogger = {
    logError: (error: Error, errorInfo?: any, context?: Record<string, any>) => {
      // Send to your error monitoring service (e.g., Sentry, LogRocket)
      console.log('Sending error to monitoring service:', { error, errorInfo, context });
      
      // You could integrate with services like:
      // Sentry.captureException(error, { contexts: { errorInfo, ...context } });
    }
  };

  return (
    <ErrorBoundary
      logger={customLogger}
      context={{ page: 'contact-form', userId: '12345' }}
      onError={(error, errorInfo) => {
        // Additional error handling
        console.log('Custom error handler called');
      }}
    >
      <div>Component that might throw errors</div>
    </ErrorBoundary>
  );
}

// Example 3: Different fallback variants
function FallbackVariantsExample() {
  return (
    <div className="space-y-8">
      {/* Minimal fallback */}
      <ErrorBoundary fallback="minimal">
        <div>Component with minimal error UI</div>
      </ErrorBoundary>

      {/* Inline fallback */}
      <ErrorBoundary fallback="inline">
        <div>Component with inline error UI</div>
      </ErrorBoundary>

      {/* Custom fallback */}
      <ErrorBoundary
        fallback="custom"
        renderFallback={(error, resetError) => (
          <div className="p-4 bg-purple-100 rounded-lg">
            <h3>Custom Error UI</h3>
            <p>Something went wrong: {error.message}</p>
            <button onClick={resetError} className="mt-2 px-4 py-2 bg-purple-600 text-white rounded">
              Try Again
            </button>
          </div>
        )}
      >
        <div>Component with custom error UI</div>
      </ErrorBoundary>
    </div>
  );
}

// Example 4: Using the HOC (Higher-Order Component)
const MyComponent = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};

const MyComponentWithErrorBoundary = withErrorBoundary(MyComponent, {
  fallback: 'inline',
  title: 'Component Error',
  message: 'This component failed to render properly.'
});

// Example 5: Handling async errors with the hook
function AsyncErrorExample() {
  const { handleError, ErrorBoundary: ErrorBoundaryWrapper } = useErrorHandler();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      // This will trigger the ErrorBoundary UI
      handleError(error as Error, { 
        action: 'fetchData',
        timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <ErrorBoundaryWrapper fallback="inline">
      <div>
        <button onClick={fetchData}>Fetch Data</button>
        {data && <div>Data: {JSON.stringify(data)}</div>}
      </div>
    </ErrorBoundaryWrapper>
  );
}

// Example 6: Form with error boundary
function FormWithErrorBoundary() {
  return (
    <ErrorBoundary
      fallback="inline"
      title="Form Error"
      message="There was an error with the form. Please try again."
      resetOnPropsChange={true}
      context={{ formType: 'contact' }}
    >
      <form className="space-y-4">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-2 border rounded" 
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </ErrorBoundary>
  );
}

// Example 7: Component that throws an error (for testing)
function BuggyComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('This is a test error from BuggyComponent');
  }
  return <div>Everything is working fine!</div>;
}

function TestErrorBoundary() {
  const [shouldThrow, setShouldThrow] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setShouldThrow(!shouldThrow)}
        className="mb-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        {shouldThrow ? 'Fix Component' : 'Break Component'}
      </button>

      <ErrorBoundary
        fallback="default"
        resetOnPropsChange={true}
        showDetails={true}
      >
        <BuggyComponent shouldThrow={shouldThrow} />
      </ErrorBoundary>
    </div>
  );
}

// Export examples for documentation
export {
  BasicExample,
  CustomLoggerExample,
  FallbackVariantsExample,
  MyComponentWithErrorBoundary,
  AsyncErrorExample,
  FormWithErrorBoundary,
  TestErrorBoundary
};