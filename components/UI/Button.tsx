import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-5 py-3 bg-[#0070F3] text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
