import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';
import { fadeIn } from '../../utils/animations/variants';

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-24 bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Dr. Smith</h2>
            <p className="text-gray-300 mb-6">
              With over 15 years of experience in clinical psychology, Dr. Smith specializes in helping individuals overcome life's challenges through evidence-based therapeutic approaches.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-orange-500 mr-3" />
                <span className="text-gray-300">Licensed Clinical Psychologist</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-orange-500 mr-3" />
                <span className="text-gray-300">PhD in Clinical Psychology</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-orange-500 mr-3" />
                <span className="text-gray-300">Helped 1000+ Clients</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
              alt="Dr. Smith"
              className="rounded-lg object-cover h-[600px] w-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;