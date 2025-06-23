import Image from 'next/image';

export default function NebulaGraphic() {
  return (
    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nebula-violet-30 via-nebula-purple-20 to-nebula-blue/20 animate-pulse-slow" />
      
      {/* Subtle background logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <Image
          src="/images/brand/favicon/512x512_white_4.png"
          alt=""
          width={512}
          height={512}
          className="w-auto"
          aria-hidden="true"
        />
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-nebula-violet-20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-nebula-purple-20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
}