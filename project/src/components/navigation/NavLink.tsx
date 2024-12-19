import React from 'react';
import { Link } from 'react-scroll';

interface NavLinkProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  id, 
  label, 
  isActive, 
  onClick,
  isMobile = false 
}) => {
  const baseStyles = "cursor-pointer transition-colors duration-300";
  const mobileStyles = "block py-2 px-4 rounded-lg";
  const desktopStyles = "inline-block";
  const activeStyles = isMobile 
    ? "text-purple-500 bg-purple-500/10" 
    : "text-purple-500";
  const inactiveStyles = isMobile
    ? "text-gray-300 hover:bg-gray-800"
    : "text-gray-300 hover:text-white";

  return (
    <Link
      to={id}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={`
        ${baseStyles}
        ${isMobile ? mobileStyles : desktopStyles}
        ${isActive ? activeStyles : inactiveStyles}
      `}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};