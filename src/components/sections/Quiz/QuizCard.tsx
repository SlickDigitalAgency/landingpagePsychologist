import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/animations/variants';

interface QuizCardProps {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
}

const QuizCard = ({ question, options, onSelect }: QuizCardProps) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-gray-700"
    >
      <h3 className="text-xl font-semibold text-white mb-6">{question}</h3>
      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className="w-full text-left p-4 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-orange-500/20 hover:text-white transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizCard;