interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function ValueCard({
  icon,
  title,
  description,
  className = ''
}: ValueCardProps) {
  return (
    <div className={`value-card group relative p-8 rounded-2xl bg-nebula-black/50 backdrop-blur-sm border border-nebula-purple/20 transition-all duration-300 hover:border-nebula-violet/40 hover:bg-nebula-purple/10 hover:transform hover:scale-105 ${className}`}>
      <div className="relative z-10">
        <div className="value-card-icon w-16 h-16 mb-6 rounded-full bg-nebula-purple/20 flex items-center justify-center text-nebula-violet transition-all duration-300 group-hover:bg-nebula-violet/20 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-nebula-white mb-3">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-nebula-purple/10 to-nebula-violet/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}