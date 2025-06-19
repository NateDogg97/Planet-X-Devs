import FormField from '../FormField';

interface ContactInfoSectionProps {
  formData: {
    name: string;
    email: string;
    agency: string;
    phone: string;
    howHeard: string;
    preferredCommMethod?: string;
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
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-nebula-white">
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
      
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="How did you hear about us?"
          name="howHeard"
          type="text"
          placeholder="Google, referral, social media, etc."
          value={formData.howHeard}
          onChange={(e) => onChange('howHeard', e.target.value)}
        />
        
        <FormField
          label="Preferred Communication Method"
          name="preferredCommMethod"
          type="select"
          options={[
            { value: 'email', label: 'Email' },
            { value: 'slack', label: 'Slack' },
            { value: 'phone', label: 'Phone Call' },
            { value: 'video', label: 'Video Call (Zoom/Meet)' },
            { value: 'project-management', label: 'Project Management Tool' }
          ]}
          value={formData.preferredCommMethod || ''}
          onChange={(e) => onChange('preferredCommMethod', e.target.value)}
          error={errors.preferredCommMethod}
        />
      </div>
    </div>
  );
}