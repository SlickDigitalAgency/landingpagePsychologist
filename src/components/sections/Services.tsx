import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Brain } from 'lucide-react';
import { services } from '../../data/content';
import { fadeIn, staggerContainer } from '../../utils/animations/variants';

const iconMap = {
  Heart,
  Users,
  Brain,
};

const Services = () => {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-24 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional psychological services tailored to your individual needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-colors"
              >
                <Icon className="h-12 w-12 text-orange-500 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;