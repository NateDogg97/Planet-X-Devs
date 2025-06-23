import Icon, { type IconName } from './Icon';

interface ServiceFeature {
  text: string;
  included: boolean;
}

interface ServiceDetailCardProps {
  id: string;
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
  id,
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
        relative p-8 rounded-2xl transition-all duration-300 flex flex-col
        ${popular 
          ? 'glass-violet glass-strong shadow-2xl shadow-nebula-violet/20' 
          : 'glass glass-hover hover:shadow-xl hover:shadow-nebula-purple/10'
        }
      `}
      id={id}
    >
      {popular && (
        <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-br from-nebula-violet to-nebula-purple text-white text-sm font-bold rounded-lg shadow-lg transform rotate-12 border-2 border-white/20">
          Most Popular
        </div>
      )}
      
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-nebula-purple/20 to-nebula-violet/20 border border-nebula-purple/30">
          <Icon name={icon} size="large" className="text-nebula-violet" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-text-secondary">{description}</p>
        </div>
      </div>

      {price && (
        <div className="mb-6 pb-6 border-b border-border-primary">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-text-primary">{price.amount}</span>
            {price.period && (
              <span className="text-text-secondary">/{price.period}</span>
            )}
          </div>
          {timeline && (
            <p className="text-sm text-text-muted mt-2">{timeline}</p>
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
              className={feature.included ? 'text-nebula-cyan mt-0.5' : 'text-text-muted mt-0.5'}
            />
            <span className={feature.included ? 'text-text-secondary' : 'text-text-muted line-through'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <div className='mt-auto'>
        <a
          href={ctaHref}
          className={`
            block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200
            ${popular
              ? 'bg-gradient-to-r from-nebula-violet to-nebula-purple text-white hover:from-nebula-purple hover:to-nebula-violet hover:shadow-lg hover:shadow-nebula-violet/30'
              : 'bg-surface-primary border border-nebula-purple/30 text-nebula-violet hover:bg-nebula-purple/10 hover:border-nebula-purple/50 dark:bg-surface-secondary dark:hover:bg-nebula-purple/20'
            }
          `}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}