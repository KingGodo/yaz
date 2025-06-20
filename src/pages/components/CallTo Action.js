import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CallToAction = () => {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Mission for a Drug-Free Future</h2>
          <p className="text-xl mb-8">
            Together, we can empower youth to make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#volunteer" className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
              Volunteer With Us
            </a>
            <a href="#donate" className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900">
              Make a Donation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;