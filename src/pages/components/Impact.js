// ImpactSection.js
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] } }
};
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } }
};
const glass =
  "backdrop-blur-[6px] bg-white/60 dark:bg-white/10 border border-white/20 dark:border-white/10 shadow-lg shadow-gray-100/15 dark:shadow-black/50 transition-transform";

const stats = [
  { value: "7,000+", label: "Youths Reached" },
  { value: "150+", label: "Workshops Held" },
  { value: "25+", label: "Community Partners" },
  { value: "85%", label: "Recovery Rate" }
];

const Impact = () => (
  <section className="relative py-24 bg-gradient-to-br from-red-600 via-orange-600 to-red-500 dark:from-red-900 dark:to-orange-900 text-white overflow-hidden">
    {/* Subtle blurred accent */}
    <div className="pointer-events-none absolute inset-0 -z-1">
      <motion.div
        initial={{ opacity: 0.13, scale: 0.95 }}
        animate={{ opacity: [0.13, 0.18, 0.13], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "loop" }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[48vw] h-[48vw] bg-gradient-to-br from-white/30 via-orange-200/20 to-red-200/20 dark:from-white/10 dark:to-orange-900/10 rounded-full blur-3xl"
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
      <motion.div
        className="text-center mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-orange-100 to-orange-200 dark:from-white dark:via-orange-300 dark:to-orange-500 bg-clip-text text-transparent">
          Our Impact
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-light text-white/80 dark:text-orange-100/90">
          Significant progress in combating substance abuse since 2015.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl ${glass} p-8 flex flex-col items-center min-h-[160px] hover:scale-[1.03] hover:shadow-2xl transition-all`}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            tabIndex={0}
            aria-label={stat.label}
            role="region"
          >
            <div className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-1 tracking-tight">{stat.value}</div>
            <div className="text-base md:text-lg font-medium text-white/90 dark:text-orange-100/90">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Impact;