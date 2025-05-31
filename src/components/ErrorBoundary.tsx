'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Icon from './ui/Icon';

// Error logging service interface
interface ErrorLogger {
  logError: (error: Error, errorInfo?: ErrorInfo, context?: Record<string, any>) => void;
}

// Default console logger
const consoleLogger: ErrorLogger = {
  logError: (error: Error, errorInfo?: ErrorInfo, context?: Record<string, any>) => {
    console.group('🚨 ErrorBoundary caught an error');
    console.error('Error:', error);
    if (errorInfo) {
      console.error('Component Stack:', errorInfo.componentStack);
    }
    if (context) {
      console.error('Context:', context);
    }
    console.groupEnd();
  }
};

// Fallback UI variants
type FallbackVariant = 'default' | 'minimal' | 'inline' | 'custom';

interface FallbackUIProps {
  error: Error;
  resetError: () => void;
  variant: FallbackVariant;
  title?: string;
  message?: string;
  showRetry?: boolean;
  showDetails?: boolean;
  className?: string;
  customFallback?: (error: Error, resetError: () => void) => ReactNode;
}

// Fallback UI Component
function FallbackUI({
  error,
  resetError,
  variant,
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again.',
  showRetry = true,
  showDetails = process.env.NODE_ENV === 'development',
  className = '',
  customFallback
}: FallbackUIProps) {
  if (variant === 'custom' && customFallback) {
    return <>{customFallback(error, resetError)}</>;
  }

  if (variant === 'minimal') {
    return (
      <div className={`p-4 text-center text-red-600 dark:text-red-400 ${className}`}>
        <p className="text-sm">{message}</p>
        {showRetry && (
          <button
            onClick={resetError}
            className="mt-2 text-xs underline hover:no-underline"
          >
            Try again
          </button>
        )}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg ${className}`}>
        <Icon name="x-circle" className="w-5 h-5 text-red-500 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-red-800 dark:text-red-200">{message}</p>
        </div>
        {showRetry && (
          <button
            onClick={resetError}
            className="flex-shrink-0 px-3 py-1 text-xs font-medium text-red-800 dark:text-red-200 bg-red-100 dark:bg-red-800/50 rounded hover:bg-red-200 dark:hover:bg-red-700/50 transition-colors"
          >
            Retry
          </button>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
      {/* Error Icon */}
      <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
        <Icon name="x-circle" className="w-8 h-8 text-red-600 dark:text-red-400" />
      </div>

      {/* Error Message */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        {message}
      </p>

      {/* Error Details (Development only) */}
      {showDetails && (
        <details className="mb-6 w-full max-w-lg">
          <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Error Details
          </summary>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
            <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words">
              {error.name}: {error.message}
              {error.stack && (
                <>
                  {'\n\nStack trace:\n'}
                  {error.stack}
                </>
              )}
            </pre>
          </div>
        </details>
      )}

      {/* Retry Button */}
      {showRetry && (
        <button
          onClick={resetError}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Icon name="refresh" className="w-4 h-4" />
          Try again
        </button>
      )}
    </div>
  );
}

// ErrorBoundary Props
export interface ErrorBoundaryProps {
  children: ReactNode;
  
  // Fallback UI customization
  fallback?: FallbackVariant | ReactNode;
  title?: string;
  message?: string;
  showRetry?: boolean;
  showDetails?: boolean;
  className?: string;
  
  // Error handling options
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  logger?: ErrorLogger;
  resetOnPropsChange?: boolean;
  isolate?: boolean; // Prevent error from bubbling up
  
  // Additional context for logging
  context?: Record<string, any>;
  
  // Custom fallback renderer
  renderFallback?: (error: Error, resetError: () => void) => ReactNode;
}

// ErrorBoundary State
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private resetTimeoutId: number | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Generate a unique error ID for tracking
    const errorId = `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError, logger = consoleLogger, context } = this.props;

    // Log the error
    logger.logError(error, errorInfo, {
      ...context,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'unknown'
    });

    // Store error info in state
    this.setState({ errorInfo });

    // Call custom error handler
    if (onError) {
      try {
        onError(error, errorInfo);
      } catch (handlerError) {
        console.error('Error in onError handler:', handlerError);
      }
    }

    // Prevent error from bubbling up if isolate is true
    if (!this.props.isolate) {
      // Re-throw error to allow it to bubble up to parent boundaries
      setTimeout(() => {
        throw error;
      }, 0);
    }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    const { resetOnPropsChange } = this.props;
    const { hasError } = this.state;

    // Reset error state when props change (if enabled)
    if (hasError && resetOnPropsChange && prevProps.children !== this.props.children) {
      this.resetError();
    }
  }

  componentWillUnmount() {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  // Method to handle async errors
  handleAsyncError = (error: Error, context?: Record<string, any>) => {
    const { logger = consoleLogger } = this.props;
    
    // Log async error
    logger.logError(error, undefined, {
      ...this.props.context,
      ...context,
      type: 'async',
      errorId: `async_err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString()
    });

    // Update state to show error UI
    this.setState({
      hasError: true,
      error,
      errorInfo: null,
      errorId: `async_err_${Date.now()}`
    });
  };

  render() {
    const { hasError, error } = this.state;
    const {
      children,
      fallback = 'default',
      title,
      message,
      showRetry,
      showDetails,
      className,
      renderFallback
    } = this.props;

    if (hasError && error) {
      // Custom render fallback
      if (renderFallback) {
        return renderFallback(error, this.resetError);
      }

      // ReactNode fallback
      if (React.isValidElement(fallback)) {
        return fallback;
      }

      // String variant fallback
      if (typeof fallback === 'string') {
        return (
          <FallbackUI
            error={error}
            resetError={this.resetError}
            variant={fallback as FallbackVariant}
            title={title}
            message={message}
            showRetry={showRetry}
            showDetails={showDetails}
            className={className}
          />
        );
      }
    }

    return children;
  }
}

// Higher-order component for easier usage
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
}

// Hook for handling async errors within components
export function useErrorHandler() {
  const errorBoundaryRef = React.useRef<ErrorBoundary | null>(null);

  const handleError = React.useCallback((error: Error, context?: Record<string, any>) => {
    if (errorBoundaryRef.current) {
      errorBoundaryRef.current.handleAsyncError(error, context);
    } else {
      // Fallback: log error and throw to trigger nearest error boundary
      console.error('Async error (no ErrorBoundary ref):', error);
      throw error;
    }
  }, []);

  const ErrorBoundaryWrapper = React.useCallback(
    ({ children, ...props }: ErrorBoundaryProps) => (
      <ErrorBoundary ref={errorBoundaryRef} {...props}>
        {children}
      </ErrorBoundary>
    ),
    []
  );

  return { handleError, ErrorBoundary: ErrorBoundaryWrapper };
}

// Export default
export default ErrorBoundary;