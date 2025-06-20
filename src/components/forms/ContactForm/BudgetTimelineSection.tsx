import FormField from '../FormField';
import { timelines, budgetRanges } from '@/constants';

interface BudgetTimelineSectionProps {
  formData: {
    timeline: string;
    budget: string;
    monthlyHoursNeeded?: string;
  };
  onChange: (field: string, value: string) => void;
  errors?: Record<string, string>;
}

export default function BudgetTimelineSection({ 
  formData, 
  onChange, 
  errors = {} 
}: BudgetTimelineSectionProps) {
  return (
      <div className="space-y-6">
      <h3 className="text-lg font-semibold text-nebula-white">
        Budget & Partnership Details
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Project Timeline"
          name="timeline"
          type="select"
          required
          options={timelines}
          value={formData.timeline}
          onChange={(e) => onChange('timeline', e.target.value)}
          error={errors.timeline}
        />
        
        <FormField
          label="Project Budget"
          name="budget"
          type="select"
          required
          options={budgetRanges}
          value={formData.budget}
          onChange={(e) => onChange('budget', e.target.value)}
          error={errors.budget}
        />
      </div>
      
      <FormField
        label="Monthly Development Hours Needed (for ongoing partnerships)"
        name="monthlyHoursNeeded"
        type="select"
        options={[
          { value: 'not-applicable', label: 'Not applicable - one-time project' },
          { value: '10-20', label: '10-20 hours/month' },
          { value: '20-40', label: '20-40 hours/month' },
          { value: '40-60', label: '40-60 hours/month' },
          { value: '60-80', label: '60-80 hours/month' },
          { value: '80+', label: '80+ hours/month' }
        ]}
        value={formData.monthlyHoursNeeded || ''}
        onChange={(e) => onChange('monthlyHoursNeeded', e.target.value)}
        error={errors.monthlyHoursNeeded}
      />
      
      <div className="bg-nebula-cyan/10 border border-nebula-cyan/30 rounded-lg p-4">
        <p className="text-sm text-nebula-cyan">
          <strong>Note:</strong> These ranges help me provide accurate quotes. Final pricing depends on specific requirements and project scope.
        </p>
      </div>
    </div>
  );
}