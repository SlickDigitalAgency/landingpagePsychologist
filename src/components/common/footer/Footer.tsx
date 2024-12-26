import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';
import { fadeIn } from '../../../utils/animations/variants';

const Footer = () => {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-gray-900 text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-white">Dr. Smith</span>
            </div>
            <p className="mt-4 text-sm">
              Dedicated to helping you achieve mental wellness and personal growth through professional psychological services.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-500" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-500" />
                <span>contact@drsmith.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                <span>123 Therapy St, Suite 100</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Office Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9AM - 7PM</li>
              <li>Saturday: 10AM - 4PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Smith Psychology. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;