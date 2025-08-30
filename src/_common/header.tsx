interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className = "" }: HeaderProps) => {
  return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>
}