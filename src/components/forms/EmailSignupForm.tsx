'use client';

import { useState, FormEvent } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

export interface EmailSignupFormProps {
  // Form Configuration
  formId?: string;
  apiEndpoint?: string;
  submitButtonText?: string;
  placeholder?: string;
  successMessage?: string;
  errorMessage?: string;
  
  // Form Data
  tags?: string[];
  
  // Events
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
  beforeSubmit?: (email: string) => void;
  
  // GTM Events
  gtmEventName?: string;
  gtmEventData?: Record<string, any>;
  gtmErrorEventName?: string;
  gtmErrorEventData?: Record<string, any>;
  
  // Resend Configuration
  sendResendNotification?: boolean;
  resendFormType?: string;
  resendMessage?: string;
  
  // Layout
  layout?: 'horizontal' | 'vertical';
}

export default function EmailSignupForm({
  formId,
  apiEndpoint = '/api/convertkit-subscribe',
  submitButtonText = 'Subscribe',
  placeholder = 'your@email.com',
  successMessage = 'Thanks! Check your email for confirmation.',
  errorMessage = 'Sorry, there was an error. Please try again.',
  tags = [],
  onSuccess,
  onError,
  beforeSubmit,
  gtmEventName = 'email_subscription',
  gtmEventData = {},
  gtmErrorEventName = 'form_error',
  gtmErrorEventData = {},
  sendResendNotification = false,
  resendFormType = 'email-signup',
  resendMessage,
  layout = 'horizontal'
}: EmailSignupFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);

    if (beforeSubmit) {
      beforeSubmit(email);
    }

    try {
      // Subscribe to email service
      const subscribeData = {
        email,
        formId,
        tags
      };

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscribeData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      // Send GTM event for successful subscription
      if (gtmEventName) {
        sendGTMEvent({
          event: gtmEventName,
          value: {
            ...gtmEventData,
            email_list: formId || 'default',
            email: email
          }
        });
      }

      // Optionally send Resend notification
      if (sendResendNotification) {
        try {
          await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              formType: resendFormType,
              email: email,
              message: resendMessage || `New email signup: ${email}`
            }),
          });
        } catch (resendError) {
          console.error('Resend notification error:', resendError);
          // Don't fail the main flow if Resend fails
        }
      }

      setShowSuccess(true);
      setEmail('');
      
      if (onSuccess) {
        onSuccess(data);
      }

    } catch (error) {
      console.error('Error submitting email:', error);
      setShowError(true);
      
      // Send GTM error event
      if (gtmErrorEventName) {
        sendGTMEvent({
          event: gtmErrorEventName,
          value: {
            ...gtmErrorEventData,
            error_type: 'email_subscription_error',
            form_type: formId || 'default',
            error_message: error instanceof Error ? error.message : 'Unknown error'
          }
        });
      }
      
      if (onError) {
        onError(error instanceof Error ? error : new Error('Unknown error'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 p-4 rounded-lg">
        {successMessage}
      </div>
    );
  }

  const formClasses = layout === 'horizontal' 
    ? 'flex flex-col sm:flex-row gap-4'
    : 'flex flex-col gap-4';

  return (
    <>
      <form onSubmit={handleSubmit} className={formClasses}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={isLoading}
          className="flex-1 min-w-0 px-4 py-3 border-2 border-border-primary rounded-lg text-text-primary bg-bg-primary focus:outline-none focus:border-text-accent transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-gradient-nebula text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Submitting...' : submitButtonText}
        </button>
      </form>
      
      {showError && (
        <div className="mt-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 p-4 rounded-lg">
          {errorMessage}
        </div>
      )}
    </>
  );
}