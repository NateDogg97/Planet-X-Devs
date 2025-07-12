import Icon from '@/components/ui/Icon';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Project Discovery & Quote",
      description: "Share your project requirements - rough scope is fine. I'll ask the right questions to understand technical needs, timeline, and budget. Whether you have detailed specs or just a general idea, I translate client needs into actionable development plans. You receive a detailed quote within 24 hours with clear deliverables and timeline.",
      timeline: "24 hour turnaround",
      tags: ["No contracts required", "Flexible communication"],
      iconName: "chat" as const
    },
    {
      number: 2,
      title: "Seamless Onboarding",
      description: "Once approved, we establish communication preferences. Slack, email, project management tools - I adapt to your workflow. You'll receive a project kickoff document outlining milestones, communication schedule, and everything needed from your end. No lengthy contracts, just a simple agreement that protects both parties.",
      timeline: "Same day setup",
      tags: ["Wholesale pricing", "Mark up as you wish"],
      iconName: "clipboard" as const
    },
    {
      number: 3,
      title: "Development & Updates",
      description: "I build while keeping you informed. Regular updates in your preferred format - technical for those who want details, simplified for easy client sharing. Access to staging environments throughout development. Unlimited revisions within scope because pixel-perfect matters.",
      timeline: "2-6 weeks typical",
      tags: ["100% white label", "Your brand only"],
      iconName: "code" as const
    },
    {
      number: 4,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing across devices and browsers. Performance optimization built into every project. Security scanning and hardening. Accessibility compliance checking. Your clients receive a polished product that works flawlessly from day one.",
      timeline: "Unlimited revisions",
      tags: ["Agency-friendly updates", "No technical jargon"],
      iconName: "shield-check" as const
    },
    {
      number: 5,
      title: "Launch & Handoff",
      description: "Smooth deployment to production with zero downtime. Comprehensive documentation for your team. Video walkthroughs if requested. 30-day post-launch support included. Everything you need to confidently support your client moving forward.",
      timeline: "Same-day delivery",
      tags: ["Full code ownership", "Post-launch support"],
      iconName: "rocket" as const
    }
  ];

  return (
    <>
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 relative inline-block">
          How White Label Web Development Works
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-8">
          From initial contact to project delivery, experience a seamless partnership that makes your agency shine
        </p>
      </div>

      {/* Process Steps - Timeline Layout */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Timeline Line */}
        <div 
            className="absolute left-1 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nebula-purple via-cosmic-violet to-nebula-cyan"
            style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
        />
        
        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className={`relative flex items-start ${index === steps.length - 1 ? 'bg-gray-50 dark:bg-gray-900' : ''}`}>
              {/* Step Number Circle - Overlays Timeline */}
              <div className="absolute -left-5 md:left-2 w-12 h-12 bg-gradient-to-br from-nebula-purple to-nebula-violet text-nebula-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10 transition-transform duration-300">
                {step.number}
              </div>
              
              {/* Card Content */}
              <div className="ml-10 md:ml-20 flex-1">
                <div className="glass glass-hover rounded-xl p-8 transition-all duration-300 border-2 border-transparent hover:border-nebula-purple/50 group">
                  {/* Icon and Title Row */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Icon */}
                    <div className="w-12 h-12 text-nebula-cyan transition-transform duration-300 group-hover:scale-110 flex-shrink-0 mt-1">
                      <Icon name={step.iconName} className="w-full h-full" />
                    </div>
                    
                    {/* Title and Timeline */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2 text-nebula-cyan font-medium text-sm">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span>{step.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-text-secondary/10 text-text-secondary px-3 py-1.5 rounded-full text-xs transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};