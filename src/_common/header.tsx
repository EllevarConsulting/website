interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className = "" }: HeaderProps) => {
  return <h1 className={`text-5xl font-bold font-[Canela-Regular] ${className}`}>{children}</h1>
}