import Icon, { type IconName } from './Icon';

interface ServiceFeature {
  text: string;
  included: boolean;
}

interface ServiceDetailCardProps {
  title: string;
  description: string;
  icon: IconName;
  price?: {
    amount: string;
    period?: string;
  };
  features: ServiceFeature[];
  timeline?: string;
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export default function ServiceDetailCard({
  title,
  description,
  icon,
  price,
  features,
  timeline,
  popular = false,
  ctaText = "Get Started",
  ctaHref = "/contact"
}: ServiceDetailCardProps) {
  return (
    <div 
      className={`
        relative p-8 rounded-2xl border transition-all duration-300
        ${popular 
          ? 'bg-nebula-violet/10 border-nebula-violet shadow-2xl shadow-nebula-violet/20 scale-105' 
          : 'bg-nebula-black/50 border-nebula-purple/30 hover:border-nebula-purple/50 hover:shadow-xl hover:shadow-nebula-purple/10'
        }
      `}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-nebula-violet text-white text-sm font-semibold rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-nebula-purple/20 text-nebula-violet">
          <Icon name={icon} size="large" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>

      {price && (
        <div className="mb-6 pb-6 border-b border-nebula-purple/20">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-nebula-white">{price.amount}</span>
            {price.period && (
              <span className="text-gray-400">/{price.period}</span>
            )}
          </div>
          {timeline && (
            <p className="text-sm text-gray-500 mt-2">{timeline}</p>
          )}
        </div>
      )}

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li 
            key={index}
            className={`flex items-start gap-3 ${!feature.included && 'opacity-50'}`}
          >
            <Icon 
              name={feature.included ? 'check' : 'x'} 
              size="small" 
              className={feature.included ? 'text-nebula-cyan mt-0.5' : 'text-gray-600 mt-0.5'}
            />
            <span className={feature.included ? 'text-gray-300' : 'text-gray-500 line-through'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`
          block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200
          ${popular
            ? 'bg-nebula-violet text-white hover:bg-nebula-violet/90 hover:shadow-lg hover:shadow-nebula-violet/30'
            : 'bg-nebula-purple/20 text-nebula-violet border border-nebula-purple/50 hover:bg-nebula-purple/30 hover:border-nebula-purple'
          }
        `}
      >
        {ctaText}
      </a>
    </div>
  );
}