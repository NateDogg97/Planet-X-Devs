'use client';

interface Option {
  value: string;
  label: string;
}

interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'checkbox';
  required?: boolean;
  options?: Option[];
  placeholder?: string;
  value?: string | boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
  error?: string;
}

export default function FormField({
  label,
  name,
  type,
  required = false,
  options = [],
  placeholder,
  value,
  onChange,
  rows = 4,
  className = '',
  error
}: FormFieldProps) {
  const baseInputStyles = 'w-full px-4 py-3 border border-nebula-purple/30 rounded-lg focus:outline-none focus:border-nebula-violet bg-nebula-black/80 text-nebula-white';
  const errorStyles = error ? 'border-red-500 focus:border-red-500' : '';
  
  if (type === 'checkbox') {
    return (
      <div className={`flex items-start ${className}`}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={value as boolean}
          onChange={onChange}
          className="mt-1 mr-3"
        />
        <label htmlFor={name} className="text-sm text-nebula-white/70">
          {label}
        </label>
      </div>
    );
  }
  
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-nebula-white mb-2">
        {label} {required && '*'}
      </label>
      
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          required={required}
          value={value as string}
          onChange={onChange}
          className={`${baseInputStyles} ${errorStyles}`}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          value={value as string}
          onChange={onChange}
          className={`${baseInputStyles} ${errorStyles}`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value as string}
          onChange={onChange}
          className={`${baseInputStyles} ${errorStyles}`}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}