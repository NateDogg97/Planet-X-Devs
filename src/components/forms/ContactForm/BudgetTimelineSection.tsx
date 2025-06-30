import FormField from '../FormField';
import { timelines, budgetRanges, monthlyHours } from '@/constants';

interface BudgetTimelineSectionProps {
  formData: {
    timeline: string;
    budget: string;
    monthlyHours?: string;
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
      <h3 className="text-lg font-semibold text-text-primary">
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
        options={monthlyHours}
        value={formData.monthlyHours || ''}
        onChange={(e) => onChange('monthlyHoursNeeded', e.target.value)}
        error={errors.monthlyHours}
      />
      
      <div className="bg-nebula-cyan/10 border border-nebula-cyan/30 rounded-lg p-4">
        <p className="text-sm text-nebula-cyan">
          <strong>Note:</strong> These ranges help me provide accurate quotes. Final pricing depends on specific requirements and project scope.
        </p>
      </div>
    </div>
  );
}