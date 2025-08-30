interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button 
      className={`p-3 rounded-md text-text-primary hover:bg-primary duration-200 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}