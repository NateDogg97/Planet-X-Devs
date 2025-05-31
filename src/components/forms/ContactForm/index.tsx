'use client';

import { useState } from 'react';
import ContactInfoSection from './ContactInfoSection';
import ProjectDetailsSection from './ProjectDetailsSection';
import BudgetTimelineSection from './BudgetTimelineSection';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import { FormData, FormErrors } from '@/types';
import {
  validateContactForm,
  isFormValid,
  submitContactForm,
  getInitialFormData,
  scrollToFirstError,
  handleFieldChange
} from '@/utils';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(getInitialFormData());
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string>('');
  
  const handleChange = (field: string, value: string | boolean) => {
    handleFieldChange(field, value, setFormData, errors, setErrors);
    
    // Reset submit status when user starts editing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors = validateContactForm(formData);
    setErrors(newErrors);
    return isFormValid(newErrors);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      scrollToFirstError();
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your submission! We\'ll get back to you within 24 hours.');
      
      // Reset form to initial state
      setFormData(getInitialFormData());
      setErrors({});
      
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Check if error contains validation errors
      if (error instanceof Error) {
        try {
          const validationErrors = JSON.parse(error.message);
          if (typeof validationErrors === 'object') {
            setErrors(validationErrors);
            scrollToFirstError();
            setSubmitMessage('Please correct the errors and try again.');
          } else {
            setSubmitMessage(error.message || 'There was an error submitting your form. Please try again.');
          }
        } catch {
          setSubmitMessage(error.message || 'There was an error submitting your form. Please try again.');
        }
      } else {
        setSubmitMessage('There was an error submitting your form. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Project Intake Form
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <ContactInfoSection
          formData={{
            name: formData.name,
            email: formData.email,
            agency: formData.agency,
            phone: formData.phone,
            howHeard: formData.howHeard
          }}
          onChange={handleChange}
          errors={errors}
        />
        
        <div className="border-t dark:border-gray-700 pt-8">
          <ProjectDetailsSection
            formData={{
              projectType: formData.projectType,
              projectScope: formData.projectScope,
              additionalInfo: formData.additionalInfo,
              whiteLabel: formData.whiteLabel
            }}
            onChange={handleChange}
            errors={errors}
          />
        </div>
        
        <div className="border-t dark:border-gray-700 pt-8">
          <BudgetTimelineSection
            formData={{
              timeline: formData.timeline,
              budget: formData.budget
            }}
            onChange={handleChange}
            errors={errors}
          />
        </div>
        
        {submitStatus === 'success' && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4" role="alert">
            <div className="flex">
              <svg className="h-5 w-5 text-green-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="ml-3 text-green-800 dark:text-green-300">
                {submitMessage}
              </p>
            </div>
          </div>
        )}
        
        {submitStatus === 'error' && !Object.keys(errors).length && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4" role="alert">
            <div className="flex">
              <svg className="h-5 w-5 text-red-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div className="ml-3">
                <p className="text-red-800 dark:text-red-300">
                  {submitMessage}
                </p>
                <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                  You can also email directly at <a href="mailto:hello@planetxsolutions.com" className="underline">hello@planetxsolutions.com</a>
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            variant="primary"
            size="large"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
          </Button>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            * Required fields. I typically respond within 24 hours.
          </p>
        </div>
      </form>
    </Card>
  );
}