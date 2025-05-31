import FormField from '../FormField';
import ErrorBoundary from '../../ErrorBoundary';

interface ContactInfoSectionProps {
  formData: {
    name: string;
    email: string;
    agency: string;
    phone: string;
    howHeard: string;
  };
  onChange: (field: string, value: string) => void;
  errors?: Record<string, string>;
}

export default function ContactInfoSection({ 
  formData, 
  onChange, 
  errors = {} 
}: ContactInfoSectionProps) {
  return (
    <ErrorBoundary
      fallback="inline"
      title="Contact Info Error"
      message="Unable to load contact information section."
      context={{ component: 'ContactInfoSection' }}
    >
      <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Contact Information
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Your Name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          error={errors.name}
        />
        
        <FormField
          label="Email Address"
          name="email"
          type="email"
          required
          placeholder="john@agency.com"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          error={errors.email}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Agency Name (or 'Freelancer' if solo)"
          name="agency"
          type="text"
          required
          placeholder="Digital Marketing Agency or Freelancer"
          value={formData.agency}
          onChange={(e) => onChange('agency', e.target.value)}
          error={errors.agency}
        />
        
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          error={errors.phone}
        />
      </div>
      
      <FormField
        label="How did you hear about us?"
        name="howHeard"
        type="text"
        placeholder="Google, referral, social media, etc."
        value={formData.howHeard}
        onChange={(e) => onChange('howHeard', e.target.value)}
      />
    </div>
    </ErrorBoundary>
  );
}