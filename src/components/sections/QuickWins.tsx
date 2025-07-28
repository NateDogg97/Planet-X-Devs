import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Section from '@/components/layout/Section';
import { quickWinServices } from '@/constants';

export default function QuickWins() {
  return (
    <Section background="secondary" container className="relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-nebula-violet rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Quick Wins Under $1,000
          </h2>
          <p className="text-xl text-text-primary/70 max-w-2xl mx-auto">
            Need something fixed fast? Get immediate results without the big commitment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {quickWinServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-nebula-violet-10 dark:bg-space-darker/50 backdrop-blur-sm border border-nebula-violet-20 dark:border-nebula-violet-30 rounded-2xl p-6 hover:border-nebula-violet dark:hover:border-nebula-violet transition-all duration-300 transform hover:scale-105"
              style={{
                animation: 'fade-in-up 0.6s ease-out forwards',
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-nebula-violet/20 to-nebula-purple/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative">
                {/* Icon and Title/Price Row */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-nebula rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Icon name={service.icon} className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Title and Price */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-nebula-purple dark:text-nebula-white mb-1 transition-colors duration-300 group-hover:text-nebula-violet dark:group-hover:text-nebula-cyan">
                      {service.title}
                    </h3>
                    <p className="text-xl font-bold bg-gradient-to-r from-nebula-cyan to-nebula-violet bg-clip-text text-transparent">
                      {service.price}
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-sm text-text-primary/70 transition-colors duration-300 group-hover:text-text-primary/90 mb-4">
                  {service.description}
                </p>
                
                {/* CTA */}
                <Link
                  href={`/contact?form=quick-win`}
                  className="inline-flex items-center text-sm font-semibold text-nebula-cyan hover:text-nebula-violet transition-colors duration-300"
                >
                  Get Started
                  <Icon name="arrow-right" className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 px-4">
          <p className="text-text-primary/60 mb-4">
            Need something bigger? Check out our{' '}
            <Link href="/services" className="text-nebula-cyan hover:text-nebula-violet transition-colors duration-300">
              full service offerings
            </Link>
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Section>
  );
}