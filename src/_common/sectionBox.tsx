interface SectionBoxProps {
  title: string;
  description: string;
  className: string;
}

export const SectionBox = ({ title, description, className }: SectionBoxProps) => {
  return <div className={`relative w-full h-[300px] overflow-hidden bg-cover bg-center group ${className}`}>
    <div className="absolute top-0 left-0 w-full h-full bg-primary text-action flex flex-col items-center justify-center gap-4 p-8 text-center group-hover:top-[-100%] duration-500">
      <h3 className="text-2xl font-[Canela-Regular]">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
};
