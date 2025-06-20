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

export default function QuickConsultationForm() {
  const [formData, setFormData] = useState<FormData>(getInitialFormData('quick-consultation'));
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string>('');
  
  const consultationTypes = [
    { value: '', label: 'Select consultation type...' },
    { value: 'technical-feasibility', label: 'Technical Feasibility' },
    { value: 'platform-recommendation', label: 'Platform Recommendation' },
    { value: 'performance-optimization', label: 'Performance Issues' },
    { value: 'maintenance-planning', label: 'Maintenance Planning' },
    { value: 'team-augmentation', label: 'Team Augmentation' },
    { value: 'other', label: 'Other' }
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
        formType: 'quick_consultation' as const
      };
      
      await submitContactForm(submissionData);
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your consultation request! I\'ll reach out within 4-6 hours to schedule our call.');
      
      setFormData(getInitialFormData('quick-consultation'));
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
        <h3 className="text-2xl font-bold text-nebula-white mb-2">
          Quick Consultation
        </h3>
        <p className="text-nebula-white/70">
          Explore how we can work together. Let&apos;s schedule a brief consultation to discuss your agency&apos;s development needs.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            name="quick-name"
            type="text"
            label="Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
            required
          />
          
          <FormField
            name="quick-email"
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
            name="quick-company"
            type="text"
            label="Company (Optional)"
            value={formData.company || ''}
            onChange={(e) => handleChange('company', e.target.value)}
          />
          
          <FormField
            name="quick-comm-method"
            type="select"
            label="Preferred Communication Method"
            value={formData.preferredCommMethod || ''}
            onChange={(e) => handleChange('preferredCommMethod', e.target.value)}
            options={[
              { value: 'email', label: 'Email' },
              { value: 'slack', label: 'Slack' },
              { value: 'phone', label: 'Phone Call' },
              { value: 'video', label: 'Video Call (Zoom/Meet)' }
            ]}
            error={errors.preferredCommMethod}
          />
        </div>
        
        <FormField
          name="quick-interests"
          type="select"
          label="What do you need help with?"
          value={formData.interests || ''}
          onChange={(e) => handleChange('interests', e.target.value)}
          options={consultationTypes}
          error={errors.interests}
          required
        />
        
        <FormField
          name="quick-challenge"
          type="textarea"
          label="Tell me more about your situation"
          value={formData.challenge || ''}
          onChange={(e) => handleChange('challenge', e.target.value)}
          rows={4}
          placeholder="Describe your technical challenge, timeline, or what you're hoping to achieve..."
          error={errors.challenge}
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
            {isSubmitting ? 'Submitting...' : 'Request Consultation'}
          </Button>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            * Required fields. Quick consultations usually take 15-30 minutes.
          </p>
        </div>
      </form>
    </Card>
  );
}