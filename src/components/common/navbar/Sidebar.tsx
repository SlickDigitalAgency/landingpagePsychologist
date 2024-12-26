import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="fixed top-0 right-0 w-full max-w-sm h-full bg-gray-900 shadow-lg z-50"
        >
          <div className="p-5">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            
            <nav className="mt-16">
              <div className="flex flex-col space-y-4">
                <NavLink href="#home" onClick={onClose}>Home</NavLink>
                <NavLink href="#services" onClick={onClose}>Services</NavLink>
                <NavLink href="#about" onClick={onClose}>About</NavLink>
                <NavLink href="#testimonials" onClick={onClose}>Testimonials</NavLink>
                <button className="w-full px-4 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors">
                  Book Session
                </button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors"
  >
    {children}
  </a>
);

export default Sidebar;