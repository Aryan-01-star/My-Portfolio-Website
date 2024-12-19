import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  navItems: Array<{ id: string; label: string; }>;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeSection,
  navItems,
  onClose
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-black/95 backdrop-blur-lg"
    >
      <div className="px-4 pt-2 pb-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            {...item}
            isActive={activeSection === item.id}
            isMobile={true}
            onClick={onClose}
          />
        ))}
      </div>
    </motion.div>
  );
};
