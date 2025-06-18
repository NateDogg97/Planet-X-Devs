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

export default function SupportMaintenanceForm() {
  const [formData, setFormData] = useState<FormData>(getInitialFormData('support-maintenance'));
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string>('');
  
  const issueTypes = [
    { value: '', label: 'Select issue type...' },
    { value: 'bug-fix', label: 'Bug Fix' },
    { value: 'performance', label: 'Performance Issue' },
    { value: 'security', label: 'Security Concern' },
    { value: 'content-update', label: 'Content Update' },
    { value: 'feature-request', label: 'Feature Request' },
    { value: 'hosting', label: 'Hosting/Server Issue' },
    { value: 'seo', label: 'SEO Optimization' },
    { value: 'other', label: 'Other' }
  ];
  
  const priorities = [
    { value: '', label: 'Select priority...' },
    { value: 'urgent', label: 'Urgent (Site Down/Critical)' },
    { value: 'high', label: 'High (Affects Business)' },
    { value: 'medium', label: 'Medium (Needs Attention)' },
    { value: 'low', label: 'Low (When Convenient)' }
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
        formType: 'support_maintenance' as const
      };
      
      await submitContactForm(submissionData);
      setSubmitStatus('success');
      
      const priority = formData.priority || 'medium';
      const responseTime = priority === 'urgent' ? '2-4 hours' : 
                          priority === 'high' ? '24 hours' : '48 hours';
      
      setSubmitMessage(`Your support request has been received! I'll respond within ${responseTime}.`);
      
      setFormData(getInitialFormData('support-maintenance'));
      setErrors({});
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Support & Maintenance
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Need help with an existing website? Report issues, request updates, or get ongoing support.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            name="support-name"
            type="text"
            label="Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
            required
          />
          
          <FormField
            name="support-email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={errors.email}
            required
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            name="support-company"
            type="text"
            label="Company/Agency"
            value={formData.company || ''}
            onChange={(e) => handleChange('company', e.target.value)}
          />
          
          <FormField
            name="support-website"
            type="text"
            label="Website URL"
            value={formData.websiteUrl || ''}
            onChange={(e) => handleChange('websiteUrl', e.target.value)}
            placeholder="https://example.com"
            error={errors.websiteUrl}
            required
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            name="support-issue-type"
            type="select"
            label="Issue Type"
            value={formData.supportType || ''}
            onChange={(e) => handleChange('supportType', e.target.value)}
            options={issueTypes}
            error={errors.supportType}
            required
          />
          
          <FormField
            name="support-priority"
            type="select"
            label="Priority Level"
            value={formData.priority || ''}
            onChange={(e) => handleChange('priority', e.target.value)}
            options={priorities}
            error={errors.priority}
            required
          />
        </div>
        
        <FormField
          name="support-platform"
          type="text"
          label="Platform/CMS (Optional)"
          value={formData.platform || ''}
          onChange={(e) => handleChange('platform', e.target.value)}
          placeholder="WordPress, React, Shopify, etc."
        />
        
        <FormField
          name="support-description"
          type="textarea"
          label="Describe the issue or request"
          value={formData.issueDescription || ''}
          onChange={(e) => handleChange('issueDescription', e.target.value)}
          rows={5}
          placeholder="Please provide as much detail as possible, including:
• What's not working correctly?
• When did you first notice the issue?
• What steps have you already tried?
• Any error messages you've seen?"
          error={errors.issueDescription}
          required
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
                  For urgent issues, call or text: <span className="font-semibold">(555) 123-4567</span><br />
                  Email: <a href="mailto:nathaniel@planetxdevs.com" className="underline">nathaniel@planetxdevs.com</a>
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
            {isSubmitting ? 'Submitting...' : 'Submit Support Request'}
          </Button>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            * Required fields. Response time varies by priority level.
          </p>
        </div>
      </form>
    </Card>
  );
}