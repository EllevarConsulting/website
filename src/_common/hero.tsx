interface HeroProps {
  className?: string;
  children: React.ReactNode;
}

export const Hero = ({ className, children }: HeroProps) => {
  return <div className={`w-full h-[calc(100vh-96px)] bg-cover bg-center !inline-flex flex-col items-center justify-center gap-4 px-16 text-center ${className}`}>
    {children}
  </div>
}