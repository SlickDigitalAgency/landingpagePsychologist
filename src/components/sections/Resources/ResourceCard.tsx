import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { fadeIn } from '../../../utils/animations/variants';

interface ResourceCardProps {
  title: string;
  description: string;
  downloadUrl: string;
}

const ResourceCard = ({ title, description, downloadUrl }: ResourceCardProps) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-colors"
    >
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <a
        href={downloadUrl}
        className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors"
      >
        <Download className="h-5 w-5 mr-2" />
        Download PDF
      </a>
    </motion.div>
  );
};

export default ResourceCard;