import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeIn, staggerContainer } from '../../utils/animations/variants';

const articles = [
  {
    id: 1,
    title: "Understanding Anxiety in Modern Life",
    excerpt: "Learn about the common triggers and effective coping strategies...",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "The Power of Mindfulness",
    excerpt: "Discover how mindfulness practices can transform your mental well-being...",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Building Healthy Relationships",
    excerpt: "Explore the key elements of maintaining strong, positive relationships...",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
  }
];

const Blog = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-24 bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-400">Expert articles on mental health and well-being</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={fadeIn}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <button className="text-orange-500 font-medium flex items-center hover:text-orange-400 transition-colors">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;