import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeIn } from '../../utils/animations/variants';

const VideoIntro = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-24 bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Discover Our Approach</h2>
          <p className="text-gray-400">Watch Dr. Smith explain her therapeutic philosophy and methods</p>
        </div>
        
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/your-video-id"
            title="Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoIntro;