import React from 'react';
import { Link } from 'react-scroll';

export const NavLogo: React.FC = () => {
  return (
    <Link
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="text-purple-500 text-2xl font-bold cursor-pointer"
    >
      AKP
    </Link>
  );
};