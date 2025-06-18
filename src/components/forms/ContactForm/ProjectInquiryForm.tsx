'use client';

import { useState } from 'react';
import ContactInfoSection from './ContactInfoSection';
import ProjectDetailsSection from './ProjectDetailsSection';
import BudgetTimelineSection from './BudgetTimelineSection';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Icon from '../../ui/Icon';
import { FormData, FormErrors } from '@/types';
import {
  validateContactForm,
  isFormValid,
  submitContactForm,
  getInitialFormData,
  scrollToFirstError,
  handleFieldChange
} from '@/utils';

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState<FormData>(getInitialFormData('project-inquiry'));
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string>('');
  
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
        formType: 'project-inquiry'
      };
      
      const response = await submitContactForm(submissionData);
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your project inquiry! I\'ll get back to you within 24 hours with a detailed proposal.');
      
      setFormData(getInitialFormData('project-inquiry'));
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
          Start Your Project
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Tell us about your project and we'll provide a detailed proposal with timeline and pricing.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <ContactInfoSection
          formData={{
            name: formData.name,
            email: formData.email,
            agency: formData.agency || '',
            phone: formData.phone || '',
            howHeard: formData.howHeard || ''
          }}
          onChange={handleChange}
          errors={errors}
        />
        
        <div className="border-t dark:border-gray-700 pt-8">
          <ProjectDetailsSection
            formData={{
              projectType: formData.projectType || '',
              projectScope: formData.projectScope || '',
              additionalInfo: formData.additionalInfo || '',
              whiteLabel: formData.whiteLabel || false
            }}
            onChange={handleChange}
            errors={errors}
          />
        </div>
        
        <div className="border-t dark:border-gray-700 pt-8">
          <BudgetTimelineSection
            formData={{
              timeline: formData.timeline || '',
              budget: formData.budget || ''
            }}
            onChange={handleChange}
            errors={errors}
          />
        </div>
        
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
        
        {submitStatus === 'error' && !Object.keys(errors).length && (
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