import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  children,
  icon,
  className = ''
}) => {
  const baseStyles = "px-6 py-2 rounded-full transition-colors flex items-center space-x-2";
  const variantStyles = {
    primary: "bg-purple-500 text-white hover:bg-purple-600",
    secondary: "border border-gray-600 text-white hover:bg-gray-800"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {icon && icon}
      <span>{children}</span>
    </motion.button>
  );
};