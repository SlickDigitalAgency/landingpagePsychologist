import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { staggerContainer } from '../../../utils/animations/variants';
import BookingForm from './BookingForm';

const Booking = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-24 bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Calendar className="h-12 w-12 text-orange-500 mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Schedule Your Session</h2>
            <p className="text-gray-300 mb-8">
              Take the first step towards positive change. Choose a convenient time for your session, and we'll confirm your appointment within 24 hours.
            </p>
            <div className="space-y-4 text-gray-300">
              <p>✓ 50-minute sessions</p>
              <p>✓ Flexible scheduling</p>
              <p>✓ Online or in-person options</p>
              <p>✓ Insurance accepted</p>
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
    </motion.section>
  );
};

export default Booking;