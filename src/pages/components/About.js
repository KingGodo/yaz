import React from 'react';
import { motion } from "framer-motion";
import { Users, Target, Eye, Activity, GraduationCap, Handshake, Sparkle } from "lucide-react";
import about from '../assets/about.jpg';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19,1,0.22,1] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.19,1,0.22,1] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.19,1,0.22,1] } }
};

const glass = "backdrop-blur-[6px] bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/10 shadow-2xl shadow-gray-100/15 dark:shadow-black/40";

// About Section
const About = () => (
  <section
    id="about"
    className="relative px8 py-24 bg-[#f6f7fb] dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 overflow-clip z-10"
    style={{ minHeight: "85vh" }}
  >
    {/* Soft, animated background blobs & noise */}
    <div className="pointer-events-none absolute inset-0 z-0">
      <motion.div
        initial={{ scale: 0.95, opacity: 0.4 }}
        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.4, 0.5, 0.4] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
        className="absolute -top-44 left-0 w-[36vw] h-[36vw] bg-gradient-to-br from-red-200/60 via-orange-200/50 to-purple-200/40 dark:from-red-900/20 dark:to-purple-900/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.35, 0.3] }}
        transition={{ duration: 13, repeat: Infinity, repeatType: "loop", delay: 2 }}
        className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-gradient-to-tr from-orange-300/30 via-red-200/40 to-purple-200/30 dark:from-orange-800/10 dark:to-purple-900/10 rounded-full blur-2xl"
      />
      {/* Subtle animated noise overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/symphony.png")',
          backgroundRepeat: "repeat"
        }}
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10">
      {/* Title & Intro */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-red-100/80 to-orange-100/80 dark:from-red-900/40 dark:to-orange-900/40 shadow shadow-red-100/40 mb-4">
          <Sparkle className="w-5 h-5 text-red-500 dark:text-orange-400 animate-pulse" />
          <span className="uppercase tracking-wide text-xs font-semibold text-red-600 dark:text-orange-200">About Us</span>
        </div>
        <h2 className="text-4xl mb-2 md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight bg-gradient-to-r from-gray-900 via-red-600 to-orange-500 dark:from-white dark:via-orange-300 dark:to-orange-500 bg-clip-text text-transparent">
          Empowering Youth. Inspiring Change.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-200 mx-auto max-w-2xl font-light">
          Since 2015, Youth Aware Zimbabwe has dedicated itself to breaking the cycle of substance abuse by harnessing the power of community, technology, and education.
        </p>
      </motion.div>

      {/* Main Content Row */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image with animated badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInLeft}
          className="relative"
        >
          <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${glass}`}>
            <img
              src={about}
              alt="Team working with students"
              className="rounded-3xl aspect-video object-cover object-center w-full h-full"
              loading="lazy"
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 180 }}
              className="absolute top-6 left-6"
            >
              <div className="flex items-center gap-2 bg-gradient-to-r from-white/90 to-orange-50/80 dark:from-black/70 dark:to-orange-900/60 px-4 py-2 rounded-2xl shadow-xl backdrop-blur-[4px] border border-white/60 dark:border-white/10">
                <Users className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                <span className="text-sm font-semibold text-orange-800 dark:text-orange-100 tracking-tight">7,000+ Youth Reached</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Mission/Vision/Approach */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInRight}
          className="space-y-10"
        >
          {/* Mission */}
          <div className={`p-6 rounded-2xl ${glass} flex items-start gap-4 hover:shadow-red-100/40 dark:hover:shadow-orange-900/40 transition-shadow group`}>
            <span className="inline-block p-2 bg-gradient-to-tr from-red-200 via-orange-100 to-orange-50 dark:from-red-900/50 dark:to-orange-900/20 rounded-xl shadow group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <Target className="w-6 h-6 text-red-500 dark:text-orange-400" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Empowering Zimbabwean youth to make informed, positive choices about substance use, through innovation and compassion.
              </p>
            </div>
          </div>
          {/* Vision */}
          <div className={`p-6 rounded-2xl ${glass} flex items-start gap-4 hover:shadow-orange-100/40 dark:hover:shadow-orange-900/40 transition-shadow group`}>
            <span className="inline-block p-2 bg-gradient-to-tr from-orange-200 via-red-100 to-purple-50 dark:from-orange-900/40 dark:to-purple-900/20 rounded-xl shadow group-hover:scale-110 group-hover:-rotate-3 transition-transform">
              <Eye className="w-6 h-6 text-orange-500 dark:text-orange-400" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                A Zimbabwe where every young person is equipped to thrive, free from the harms of substance abuse.
              </p>
            </div>
          </div>
          {/* Approach: Timeline */}
          <div className={`p-6 rounded-2xl ${glass} hover:shadow-purple-100/40 dark:hover:shadow-purple-900/40 transition-shadow`}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-500 dark:text-purple-300" />
              Our Approach
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-orange-200 via-red-200 to-purple-200 dark:from-orange-900/30 dark:to-purple-900/20 shadow">
                  <GraduationCap className="w-4 h-4 text-orange-500 dark:text-orange-200" />
                </span>
                <span className="text-gray-700 dark:text-gray-300">Evidence-based education programs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-red-100 via-orange-100 to-purple-100 dark:from-red-900/30 dark:to-orange-900/10 shadow">
                  <Users className="w-4 h-4 text-red-500 dark:text-orange-300" />
                </span>
                <span className="text-gray-700 dark:text-gray-300">Peer-to-peer learning networks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-purple-100 via-orange-100 to-red-100 dark:from-purple-900/30 dark:to-orange-900/10 shadow">
                  <Handshake className="w-4 h-4 text-purple-500 dark:text-orange-200" />
                </span>
                <span className="text-gray-700 dark:text-gray-300">Community engagement</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-red-200 via-orange-100 to-purple-100 dark:from-red-900/30 dark:to-orange-900/10 shadow">
                  <Sparkle className="w-4 h-4 text-orange-500 dark:text-orange-200" />
                </span>
                <span className="text-gray-700 dark:text-gray-300">Partnerships with schools & agencies</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Animated Stats Row */}
      <motion.div
        className="relative z-20 grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        {[
          {
            icon: <Users className="w-6 h-6 text-red-500 dark:text-orange-300" />,
            label: "Youths Reached",
            value: "7,000+"
          },
          {
            icon: <Activity className="w-6 h-6 text-orange-500 dark:text-orange-300" />,
            label: "Workshops Held",
            value: "150+"
          },
          {
            icon: <Handshake className="w-6 h-6 text-purple-500 dark:text-orange-200" />,
            label: "Community Partners",
            value: "25+"
          }
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.7, type: "spring" }}
            className={`rounded-2xl ${glass} flex flex-col items-center py-8 px-6 shadow-xl hover:scale-105 transition-transform`}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 via-red-100 to-purple-100 dark:from-orange-900/30 dark:to-purple-900/10 shadow mb-4">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;