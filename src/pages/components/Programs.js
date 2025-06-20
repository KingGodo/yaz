// Programs.js
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] } }
};
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.14 } }
};
const glass =
  "backdrop-blur-[6px] bg-white/80 dark:bg-white/10 border border-white/40 dark:border-white/10 shadow-2xl shadow-gray-100/15 dark:shadow-black/40 transition-transform";

const programs = [
  {
    title: "School Awareness Programs",
    description: "Educating students about the dangers of substance abuse.",
    icon: "🏫",
  },
  {
    title: "Peer Educator Training",
    description: "Training youth leaders to advocate against substance abuse.",
    icon: "👥",
  },
  {
    title: "Family Support Groups",
    description: "Support networks for families affected by youth substance abuse.",
    icon: "👪",
  },
  {
    title: "Rehabilitation Referrals",
    description: "Connecting youth with rehabilitation services.",
    icon: "🏥",
  }
];

const Programs = () => (
  <section
    id="programs"
    className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden z-10"
  >
    {/* Animated Blobs & Subtle Noise */}
    <div className="pointer-events-none absolute inset-0 -z-1">
      <motion.div
        initial={{ opacity: 0.32, scale: 0.96 }}
        animate={{ opacity: [0.32, 0.42, 0.32], scale: [0.96, 1.05, 0.96] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "loop" }}
        className="absolute -top-32 -left-24 w-[32vw] h-[32vw] bg-gradient-to-br from-orange-200/60 via-red-100/40 to-purple-100/30 dark:from-orange-900/30 dark:to-purple-900/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.19, scale: 1.09 }}
        animate={{ opacity: [0.19, 0.26, 0.19], scale: [1.09, 1.15, 1.09] }}
        transition={{ duration: 13, repeat: Infinity, repeatType: "loop", delay: 1.5 }}
        className="absolute bottom-0 right-0 w-[27vw] h-[27vw] bg-gradient-to-tr from-red-100/30 via-orange-200/20 to-purple-100/20 dark:from-red-900/15 dark:to-orange-900/10 rounded-full blur-2xl"
      />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/symphony.png")',
          backgroundRepeat: "repeat"
        }}
      />
    </div>

    <div className="relative max-w-6xl mx-auto px-4 md:px-10 z-10">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <span className="inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-orange-100/80 to-red-50/80 dark:from-orange-900/40 dark:to-red-900/40 text-xs font-bold uppercase tracking-wide text-orange-700 dark:text-orange-300 shadow shadow-orange-100/40">
          Programs
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight bg-gradient-to-r from-gray-900 via-orange-600 to-red-500 dark:from-white dark:via-orange-300 dark:to-orange-500 bg-clip-text text-transparent">
          Our Programs
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-200 mx-auto max-w-2xl font-light">
          Innovative programs designed to educate and empower youth.
        </p>
      </motion.div>

      {/* Programs Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {programs.map((program, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className={`relative group p-6 rounded-2xl flex flex-col items-start justify-between min-h-[250px] cursor-pointer select-none ${glass} hover:scale-[1.025] hover:shadow-2xl hover:border-orange-200 dark:hover:border-orange-600/30 transition-all`}
            whileHover={{ y: -4, boxShadow: "0 8px 32px 0 rgba(253,88,0,0.10)" }}
            tabIndex={0}
            aria-label={program.title}
            role="region"
          >
            <span
              className="inline-flex items-center justify-center text-4xl md:text-5xl drop-shadow-sm mb-4"
              aria-hidden="true"
            >
              {program.icon}
            </span>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {program.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-light">
              {program.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-14 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <a
          href="#contact"
          className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-600 text-white px-7 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-red-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
        >
          Bring Programs to Your School
          <ArrowRight size={22} className="ml-2" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Programs;