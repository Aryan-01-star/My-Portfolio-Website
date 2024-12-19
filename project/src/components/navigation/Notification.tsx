import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NotificationProps {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

export const Notification: React.FC<NotificationProps> = ({ show, message, type }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-4 right-4 ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white px-6 py-3 rounded-lg shadow-lg z-50`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};