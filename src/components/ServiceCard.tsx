interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: ServiceFeature[];
  timeline?: string;
  icon: React.ReactNode;
  className?: string;
}

export default function ServiceCard({
  title,
  price,
  description,
  features,
  timeline,
  icon,
  className = ""
}: ServiceCardProps) {
  return (
    <div className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-blue-600 font-semibold text-lg">{price}</p>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
          {icon}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {description}
      </p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
          </li>
        ))}
      </ul>
      {timeline && (
        <div className="border-t pt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Timeline:</strong> {timeline}
          </p>
        </div>
      )}
    </div>
  );
}