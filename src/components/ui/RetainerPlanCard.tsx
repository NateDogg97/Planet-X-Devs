import Icon from './Icon';

interface RetainerPlanCardProps {
  title: string;
  description: string;
  price: {
    amount: string;
    period: string;
  };
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
  highlight?: string;
}

export default function RetainerPlanCard({
  title,
  description,
  price,
  features,
  popular = false,
  ctaText = "Start Plan",
  ctaHref = "#contact",
  highlight
}: RetainerPlanCardProps) {
  return (
    <div 
      className={`
        relative p-8 rounded-2xl border transition-all duration-300
        ${popular 
          ? 'bg-gradient-to-br from-nebula-violet/20 to-nebula-purple/20 border-nebula-violet shadow-2xl shadow-nebula-violet/30 scale-105' 
          : 'bg-nebula-black/60 border-nebula-purple/30 hover:border-nebula-purple/50 hover:shadow-xl hover:shadow-nebula-purple/10'
        }
      `}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-nebula-cyan to-nebula-violet text-white text-sm font-bold rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      {highlight && (
        <div className="mb-6 p-3 bg-nebula-violet/10 border border-nebula-violet/30 rounded-lg">
          <p className="text-nebula-cyan text-sm font-semibold text-center">{highlight}</p>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <div className="mb-4">
          <div className="flex items-baseline justify-center gap-1">
            <span 
              className={`
                text-5xl font-bold 
                ${popular 
                  ? 'bg-gradient-to-r from-nebula-cyan to-nebula-violet bg-clip-text text-transparent' 
                  : 'text-nebula-violet'
                }
              `}
            >
              {price.amount}
            </span>
            <span className="text-gray-400 text-lg">/{price.period}</span>
          </div>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <Icon 
                name="check" 
                size="small" 
                className="text-nebula-cyan"
              />
            </div>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`
          block w-full text-center py-4 px-6 rounded-xl font-bold transition-all duration-300
          ${popular
            ? 'bg-gradient-to-r from-nebula-cyan to-nebula-violet text-white hover:shadow-lg hover:shadow-nebula-violet/40 hover:scale-105'
            : 'bg-nebula-purple/20 text-nebula-violet border-2 border-nebula-purple/50 hover:bg-nebula-purple/30 hover:border-nebula-violet hover:shadow-lg hover:shadow-nebula-purple/30'
          }
        `}
      >
        {ctaText}
      </a>
    </div>
  );
}