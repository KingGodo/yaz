import React from 'react';
import { motion } from 'framer-motion';
import king from '../assets/king.jpg';

const teamMembers = [
  {
    name: "King T. Godo",
    role: "Executive Director",
    bio: "With 3 years of experience in youth counseling and public health.",
    image: king
  },
  {
    name: "Gaily Chikwavava",
    role: "Education Program Manager",
    bio: "Developing educational curriculum and training facilitators.",
    image: king
  },
  {
    name: "Hillary Mashava",
    role: "Youth Outreach Coordinator",
    bio: "Connecting with young people through community engagement.",
    image: king
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const TeamSection = () => {
  return (
    <section id="team" className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated professionals behind Youth Aware Zimbabwe.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={fadeInUp}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-red-600 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;