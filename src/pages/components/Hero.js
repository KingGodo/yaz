import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Brain, Heart, TrendingUp } from 'lucide-react';
import hero from '../assets/hero.jpg';

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative px-8 min-h-screen bg-[#fafafa] dark:bg-gray-900 overflow-hidden">
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-red-100/20 to-orange-100/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-red-100/20 to-purple-100/20 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-red-600 dark:text-red-400">Youth Aware Zimbabwe</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-tight">
              Breaking the Cycle of Addiction Through
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mt-1">
                Digital Innovation & Education
              </span>
            </h1>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Leveraging technology to create a movement of informed, empowered youth who stand strong against substance abuse. Join our digital platform for real-time support, education, and community building.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white text-sm font-medium inline-flex items-center gap-2 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transition-all"
              >
                Download App
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <a href="#learn-more" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                Learn more →
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { icon: <Shield className="w-4 h-4" />, label: 'Safe Space' },
                { icon: <Brain className="w-4 h-4" />, label: 'Smart Recovery' },
                { icon: <Heart className="w-4 h-4" />, label: 'Community Support' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <div className="p-1.5 bg-red-50 dark:bg-red-900/30 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-red-100 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl" />
              <img 
                src={hero} 
                alt="Youth Support App Interface" 
                className="rounded-xl shadow-2xl"
              />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-50 dark:bg-red-900/30 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Recovery Rate</div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">+85%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;