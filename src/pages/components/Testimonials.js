import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import king from '../assets/king.jpg';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };
  
  const testimonials = [
    {
      quote: "The innovative approach to substance awareness has transformed our perspective on youth education and support.",
      author: "Tatenda M.",
       role: "Student",
      image: king
    },
    {
      quote: "Witnessing the profound impact on our students has reinforced our commitment to this transformative initiative.",
      author: "Mr. Dube",
      role: "Education Director",
      image: king
    },
    {
      quote: "The digital platform's accessibility and support network have created lasting positive change in our community.",
      author: "Farai N.",
      role: "Community Leader",
      image: king
    },
    {
      quote: "An exemplary model of how technology can be leveraged for social impact and youth empowerment.",
      author: "Sarah R.",
      role: "Healthcare Professional",
      image: king
    },
    {
      quote: "The program's holistic approach to prevention and support has set new standards in youth advocacy.",
      author: "Michael C.",
      role: "Policy Advisor",
      image: king
    },
    {
      quote: "Innovative solutions that truly understand and address the complexities of youth substance awareness.",
      author: "Lisa M.",
      role: "Research Analyst",
      image: king
    }
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className="py-24 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
                         className="text-center mb-12"
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.2 }}
                         variants={fadeInUp}
                       >
                         <h2 className="text-3xl font-bold mb-4">What People Say</h2>
                         <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                           Hear from those impacted by our programs.
                         </p>
                       </motion.div>
           
          </div>

          <div className="relative">
            <AnimatePresence mode='wait'>
              <motion.div 
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {currentTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-white"
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div className="relative p-6 bg-gray-50 rounded-2xl">
                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        <blockquote className="mt-8">
                          <p className="text-base text-gray-700 leading-relaxed">
                            {testimonial.quote}
                          </p>
                        </blockquote>
                      </div>
                      
                      <div className="mt-6 flex items-center space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full border-2 border-gray-100">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="h-10 w-10 object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'bg-red-500 w-4' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute bottom-0 right-0 p-2 text-sm text-gray-500 hover:text-gray-700"
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;