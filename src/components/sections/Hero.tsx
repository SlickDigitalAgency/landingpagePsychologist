import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeIn } from '../../utils/animations/variants';

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transform Your Life With
            <span className="text-orange-500"> Professional Guidance</span>
          </motion.h1>
          
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Discover your path to mental wellness with expert psychological support
            tailored to your unique journey.
          </motion.p>
          
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-md font-semibold flex items-center justify-center transition-colors">
              Book Your Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-md font-semibold transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;