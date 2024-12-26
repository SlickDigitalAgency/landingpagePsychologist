import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed right-0 top-0 h-full w-64 bg-gray-900 border-l border-gray-800 p-6 z-50"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X className="h-6 w-6" />
            </button>
            
            <nav className="mt-8 flex flex-col space-y-4">
              <NavLink href="#home" onClick={onClose}>Home</NavLink>
              <NavLink href="#services" onClick={onClose}>Services</NavLink>
              <NavLink href="#about" onClick={onClose}>About</NavLink>
              <NavLink href="#testimonials" onClick={onClose}>Testimonials</NavLink>
              <button className="w-full px-4 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors">
                Book Session
              </button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;