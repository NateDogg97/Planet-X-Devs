'use client';

import { useState } from 'react';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Icon from '../../ui/Icon';
import FormField from '../FormField';
import { FormData, FormErrors } from '@/types';
import {
  validateContactForm,
  isFormValid,
  submitContactForm,
  getInitialFormData,
  scrollToFirstError,
  handleFieldChange
} from '@/utils';

export default function QuickWinContactForm() {
  const [formData, setFormData] = useState<FormData>(getInitialFormData('quick-win'));
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string>('');
  
  const quickWinProjectTypes = [
    { value: 'performance-audit', label: 'Performance Audit ($299)' },
    { value: 'quick-fixes', label: '2-Hour Quick Fixes ($199)' },
    { value: 'landing-page-update', label: 'Landing Page Updates ($499)' },
    { value: 'mobile-responsiveness', label: 'Mobile Responsiveness Fix ($399)' },
    { value: 'other', label: 'Other Quick Win' }
  ];
  
  const handleChange = (field: string, value: string | boolean) => {
    handleFieldChange(field, value, setFormData, errors, setErrors);
    
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
      // Add form type to submission data
      const submissionData = {
        ...formData,
        formType: 'quick-win' as const
      };
      
      await submitContactForm(submissionData);
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your Quick Win request! I\'ll reach out within 4-6 hours with next steps and timeline.');
      
      setFormData(getInitialFormData('quick-win'));
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
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
    <Card rounded={false} className={"md:rounded-2xl"}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Quick Win Request
        </h3>
        <p className="text-lg font-medium text-text-accent mb-2">
          Fast results under $1,000
        </p>
        <p className="text-text-secondary">
          Need something fixed fast? Get immediate results without the big commitment. Most Quick Wins are completed within 1-3 business days.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            name="quickwin-name"
            type="text"
            label="Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
            required
          />
          
          <FormField
            name="quickwin-email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={errors.email}
            required
          />
        </div>
        
        <FormField
          name="quickwin-project-type"
          type="select"
          label="What Quick Win do you need?"
          value={formData.projectType || ''}
          onChange={(e) => handleChange('projectType', e.target.value)}
          options={quickWinProjectTypes}
          error={errors.projectType}
          required
        />
        
        <FormField
          name="quickwin-details"
          type="textarea"
          label="Project Details (Optional)"
          value={formData.projectScope || ''}
          onChange={(e) => handleChange('projectScope', e.target.value)}
          rows={4}
          placeholder="Any specific details about what you need? Website URL, specific issues, etc."
          error={errors.projectScope}
        />
        
        {submitStatus === 'success' && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4" role="alert">
            <div className="flex">
              <Icon name="check-circle" className="h-5 w-5 text-green-400 mt-0.5" />
              <p className="ml-3 text-green-800 dark:text-green-300">
                {submitMessage}
              </p>
            </div>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4" role="alert">
            <div className="flex">
              <Icon name="x-circle" className="h-5 w-5 text-red-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-red-800 dark:text-red-300">
                  {submitMessage}
                </p>
                <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                  You can also email directly at <a href="mailto:nathaniel@planetxdevs.com" className="underline">nathaniel@planetxdevs.com</a>
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
            className="bg-gradient-to-r from-nebula-cyan to-nebula-violet hover:shadow-nebula-lg hover:scale-105"
          >
            {isSubmitting ? 'Submitting...' : 'Request Quick Win'}
          </Button>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            * Most Quick Wins are completed within 1-3 business days.
          </p>
        </div>
      </form>
    </Card>
  );
}