import FormField from '../FormField';
import { timelines, budgetRanges } from '@/constants/faqs';

interface BudgetTimelineSectionProps {
  formData: {
    timeline: string;
    budget: string;
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
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Budget & Timeline
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
      
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-300">
          <strong>Note:</strong> These ranges help me provide accurate quotes. Final pricing depends on specific requirements and project scope.
        </p>
      </div>
    </div>
  );
}