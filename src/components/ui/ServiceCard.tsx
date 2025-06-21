interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="relative group h-full">
      {/* Orbit ring */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 border border-nebula-violet-20 rounded-full animate-orbit pointer-events-none will-change-transform motion-reduce:animate-none" />
      
      <div className="relative glass-violet border border-nebula-violet-30 rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300 will-change-transform h-full flex flex-col">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-nebula rounded-full flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-3">{title}</h3>
        <p className="text-text-primary/70 flex-grow">{description}</p>
      </div>
    </div>
  );
}