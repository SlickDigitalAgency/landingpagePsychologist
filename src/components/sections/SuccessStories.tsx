import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeIn, staggerContainer } from '../../utils/animations/variants';

const stories = [
  {
    id: 1,
    title: "Overcoming Anxiety",
    description: "After years of struggling with social anxiety, I learned valuable coping mechanisms that transformed my life.",
    outcome: "Now confidently pursuing career goals and maintaining healthy relationships."
  },
  {
    id: 2,
    title: "Depression Recovery",
    description: "Through cognitive behavioral therapy, I gained tools to manage depressive episodes effectively.",
    outcome: "Rediscovered joy in daily activities and rebuilt meaningful connections."
  }
];

const SuccessStories = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-24 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-gray-400">Real transformations from our therapy sessions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              variants={fadeIn}
              className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-gray-700"
            >
              <Star className="h-8 w-8 text-orange-500 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{story.title}</h3>
              <p className="text-gray-400 mb-4">{story.description}</p>
              <p className="text-orange-500 font-medium">{story.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SuccessStories;