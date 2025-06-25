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
  badge?: string;
}

export default function RetainerPlanCard({
  title,
  description,
  price,
  features,
  popular = false,
  ctaText = "Start Plan",
  ctaHref = "/contact",
  highlight,
  badge
}: RetainerPlanCardProps) {
  return (
    <div 
      className={`
        relative p-8 rounded-2xl border transition-all duration-300 flex flex-col
        ${popular 
          ? `
            glass-gradient-nebula
            border-nebula-violet 
            shadow-2xl shadow-nebula-violet/30 
            scale-105
            
            dark:glass-gradient-cyan
            dark:from-nebula-violet/20 dark:to-nebula-purple/20
            dark:border-nebula-violet
            dark:shadow-nebula-violet/30
          ` 
          : `
            bg-gradient-to-br from-gray-50 to-gray-100
            border-gray-300
            hover:border-nebula-purple 
            hover:shadow-xl hover:shadow-nebula-purple/20
            
            dark:from-gray-900 dark:to-nebula-black 
            dark:border-nebula-purple/30 
            dark:hover:border-nebula-purple/50 
            dark:hover:shadow-nebula-purple/10
          `
        }
      `}
    >
      {(popular || badge) && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-nebula-cyan to-nebula-violet text-white text-sm font-bold rounded-full shadow-lg">
          {badge || 'Most Popular'}
        </div>
      )}

      {highlight && (
        <div className={`
          mb-6 p-3 rounded-lg
          ${popular 
            ? 'bg-white/20 border border-white/30 dark:bg-nebula-violet/10 dark:border-nebula-violet/30'
            : 'bg-nebula-violet/10 border border-nebula-violet/30'
          }
        `}>
          <p className={`
            text-sm font-semibold text-center
            ${popular ? 'text-white dark:text-nebula-cyan' : 'text-nebula-cyan'}
          `}>
            {highlight}
          </p>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className={`
          text-2xl font-bold mb-3
          ${popular 
            ? 'text-text-primary' 
            : 'text-gray-900 dark:text-white'
          }
        `}>
          {title}
        </h3>
        <p className={`
          mb-6
          ${popular 
            ? 'text-text-secondary' 
            : 'text-gray-600 dark:text-gray-400'
          }
        `}>
          {description}
        </p>
        
        <div className="mb-4">
          <div className="flex items-baseline justify-center gap-1">
            <span 
              className={`
                text-5xl font-bold 
                ${popular 
                  ? 'bg-gradient-to-r from-nebula-cyan to-nebula-violet bg-clip-text text-transparent' 
                  : 'text-gray-900 dark:text-nebula-white'
                }
              `}
            >
              {price.amount}
            </span>
            <span className={`
              text-lg
              ${popular 
                ? 'text-text-secondary' 
                : 'text-gray-600 dark:text-gray-400'
              }
            `}>
              /{price.period}
            </span>
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
                className={popular ? 'text-text-accent dark:text-text-accent-alt' : 'text-nebula-cyan'}
              />
            </div>
            <span className={`
              ${popular 
                ? 'text-text-primary' 
                : 'text-gray-700 dark:text-gray-300'
              }
            `}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`
          block w-full text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 mt-auto
          ${popular
            ? `
              /* Light mode: White button on colored background */
              bg-white text-nebula-violet
              hover:bg-gray-100
              hover:shadow-lg hover:shadow-white/40 
              hover:scale-105
              
              /* Dark mode: Original gradient button */
              dark:bg-gradient-to-r dark:from-nebula-cyan dark:to-nebula-violet 
              dark:text-white 
              dark:hover:shadow-lg dark:hover:shadow-nebula-violet/40 
              dark:hover:scale-105
              dark:hover:bg-gray-100/0
            `
            : `
              /* Light mode: Solid button with border */
              bg-nebula-violet text-white
              border-2 border-nebula-violet
              hover:bg-nebula-purple 
              hover:border-nebula-purple
              hover:shadow-lg hover:shadow-nebula-purple/30
              
              /* Dark mode: Original transparent button */
              dark:bg-nebula-purple/20 
              dark:text-nebula-violet 
              dark:border-2 dark:border-nebula-purple/50 
              dark:hover:bg-nebula-purple/30 
              dark:hover:border-nebula-violet 
              dark:hover:shadow-lg dark:hover:shadow-nebula-purple/30
            `
          }
        `}
      >
        {ctaText}
      </a>
    </div>
  );
}