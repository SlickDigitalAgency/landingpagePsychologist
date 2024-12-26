import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { staggerContainer } from '../../../utils/animations/variants';
import QuizCard from './QuizCard';

const questions = [
  {
    question: "How often do you feel overwhelmed by daily tasks?",
    options: ["Rarely", "Sometimes", "Often", "Almost Always"]
  },
  {
    question: "How would you rate your current stress level?",
    options: ["Low", "Moderate", "High", "Very High"]
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (option: string) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-24 bg-gray-900"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Brain className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Mental Health Assessment</h2>
          <p className="text-gray-400">Take our quick assessment to understand your needs better</p>
        </div>

        {!showResults ? (
          <QuizCard
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onSelect={handleAnswer}
          />
        ) : (
          <motion.div
            variants={staggerContainer}
            className="bg-gray-800/50 p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Thank you for completing the assessment</h3>
            <p className="text-gray-300 mb-6">Based on your responses, we recommend scheduling a consultation.</p>
            <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-md font-semibold transition-colors text-white">
              Schedule Consultation
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Quiz;