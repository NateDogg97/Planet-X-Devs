'use client';

import { useEffect } from 'react';
import Icon from '@/components/ui/Icon';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error details for monitoring/debugging
    console.error('Page error caught:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mx-auto w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mb-6">
          <Icon 
            name="x-circle" 
            className="w-8 h-8 text-yellow-600 dark:text-yellow-400" 
          />
        </div>

        {/* Error Message */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! Something went wrong
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We couldn&apos;t load this page. Please try again or go back to the homepage.
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
      </div>
    </div>
  );
}