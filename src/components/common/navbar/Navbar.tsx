import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Menu } from 'lucide-react';
import { fadeIn } from '../../../utils/animations/variants';
import { NavLink } from './NavLink';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/">
                <div className="flex items-center">
                  <Brain className="h-8 w-8 text-orange-500" />
                  <span className="ml-2 text-xl font-bold text-white">Dr. Smith</span>
                </div>
              </NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/#services">Services</NavLink>
              <NavLink to="/#about">About</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/#testimonials">Testimonials</NavLink>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
              >
                Book Session
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;