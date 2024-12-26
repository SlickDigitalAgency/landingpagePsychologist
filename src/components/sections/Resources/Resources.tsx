import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { staggerContainer } from '../../../utils/animations/variants';
import ResourceCard from './ResourceCard';

const resources = [
  {
    title: "Stress Management Guide",
    description: "Learn effective techniques for managing daily stress and anxiety.",
    downloadUrl: "#"
  },
  {
    title: "Mindfulness Exercises",
    description: "Simple mindfulness practices you can incorporate into your daily routine.",
    downloadUrl: "#"
  },
  {
    title: "Sleep Hygiene Checklist",
    description: "Improve your sleep quality with these evidence-based recommendations.",
    downloadUrl: "#"
  }
];

const Resources = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-24 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FileText className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Free Resources</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Download these helpful resources to support your mental health journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Resources;