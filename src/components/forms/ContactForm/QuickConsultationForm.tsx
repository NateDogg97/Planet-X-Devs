'use client';

import { useState } from 'react';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Icon from '../../ui/Icon';
import FormField from '../FormField';

interface QuickFormData {
  name: string;
  email: string;
  agency: string;
  consultationType: string;
  message: string;
}

interface QuickFormErrors {
  [key: string]: string;
}

export default function QuickConsultationForm() {
  const [formData, setFormData] = useState<QuickFormData>({
    name: '',
    email: '',
    agency: '',
    consultationType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<QuickFormErrors>({});
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
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: QuickFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.consultationType) {
      newErrors.consultationType = 'Please select a consultation type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe what you need help with';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Please provide more details (at least 10 characters)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const submissionData = {
        ...formData,
        formType: 'quick-consultation'
      };
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setSubmitStatus('success');
      setSubmitMessage('Thanks for reaching out! I\'ll get back to you within a few hours to discuss your consultation needs.');
      
      setFormData({
        name: '',
        email: '',
        agency: '',
        consultationType: '',
        message: ''
      });
      setErrors({});
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('There was an error submitting your request. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Quick Consultation
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Need quick advice or have technical questions? Let's schedule a brief consultation.
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
        
        <FormField
          name="quick-agency"
          type="text"
          label="Agency/Company (Optional)"
          value={formData.agency}
          onChange={(e) => handleChange('agency', e.target.value)}
        />
        
        <FormField
          name="quick-consultation-type"
          type="select"
          label="What do you need help with?"
          value={formData.consultationType}
          onChange={(e) => handleChange('consultationType', e.target.value)}
          options={consultationTypes}
          error={errors.consultationType}
          required
        />
        
        <FormField
          name="quick-message"
          type="textarea"
          label="Tell me more about your situation"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={4}
          placeholder="Describe your technical challenge, timeline, or what you're hoping to achieve..."
          error={errors.message}
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