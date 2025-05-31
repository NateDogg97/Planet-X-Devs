'use client';

import { useEffect } from 'react';
import Icon from '@/components/ui/Icon';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log error details for monitoring/debugging
    console.error('Global error caught:', error);
    
    // You can integrate with error monitoring services here
    // Example: Sentry, LogRocket, etc.
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            {/* Error Icon */}
            <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
              <Icon 
                name="x-circle" 
                className="w-8 h-8 text-red-600 dark:text-red-400" 
              />
            </div>

            {/* Error Message */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Something went wrong
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We encountered an unexpected error. This has been logged and we&apos;re working to fix it.
            </p>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Error Details:
                </h3>
                <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words">
                  {error.message}
                  {error.digest && (
                    <>
                      {'\n\nError ID: '}
                      {error.digest}
                    </>
                  )}
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* Try Again Button */}
              <button
                onClick={reset}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Icon name="refresh" className="w-5 h-5 mr-2" />
                Try again
              </button>

              {/* Go Home Button */}
              <button
                onClick={() => window.location.href = '/'}
                className="w-full flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
              >
                <Icon name="arrow-right" className="w-5 h-5 mr-2 rotate-180" />
                Go to homepage
              </button>
            </div>

            {/* Contact Support */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                If this problem persists, please contact support
              </p>
              <button
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
              >
                <Icon name="mail" className="w-4 h-4 mr-1" />
                Contact us
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}