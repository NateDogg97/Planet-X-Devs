import FormField from '../FormField';
import { projectTypes } from '@/constants';

interface ProjectDetailsSectionProps {
  formData: {
    projectType: string;
    projectScope: string;
    additionalInfo: string;
    whiteLabel: boolean;
  };
  onChange: (field: string, value: string | boolean) => void;
  errors?: Record<string, string>;
}

export default function ProjectDetailsSection({ 
  formData, 
  onChange, 
  errors = {} 
}: ProjectDetailsSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Project Details
      </h3>
      
      <FormField
        label="Project Type"
        name="projectType"
        type="select"
        required
        options={projectTypes}
        value={formData.projectType}
        onChange={(e) => onChange('projectType', e.target.value)}
        error={errors.projectType}
      />
      
      <FormField
        label="Project Scope & Requirements"
        name="projectScope"
        type="textarea"
        required
        placeholder="Please describe your project requirements, features needed, and any specific technical requirements..."
        value={formData.projectScope}
        onChange={(e) => onChange('projectScope', e.target.value)}
        error={errors.projectScope}
      />
      
      <FormField
        label="Additional Information"
        name="additionalInfo"
        type="textarea"
        rows={3}
        placeholder="Any other details, special requirements, or questions?"
        value={formData.additionalInfo}
        onChange={(e) => onChange('additionalInfo', e.target.value)}
      />
      
      <FormField
        label="I need white-label services (work will be presented as our agency's)"
        name="whiteLabel"
        type="checkbox"
        value={formData.whiteLabel}
        onChange={(e) => onChange('whiteLabel', (e.target as HTMLInputElement).checked)}
      />
    </div>
  );
}