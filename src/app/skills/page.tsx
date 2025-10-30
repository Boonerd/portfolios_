'use client';

import { motion } from 'framer-motion';

const techSkills = [
  ['React.js', 'Next.js'],
  ['TypeScript', 'JavaScript'],
  ['Python', 'Flutter'],
  ['Git', 'GitHub'],
  ['Tailwind CSS', 'Figma'],
  ['HTML/CSS', 'REST APIs'],
];

const softSkills = [
  'Problem-Solving',
  'Team Collaboration',
  'Clear Communication',
  'Fast Learner',
  'Attention to Detail',
  'Time Management',
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-brand-cream to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center text-brand-blue dark:text-brand-sky mb-16 font-heading"
      >
        Skills & Tools
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Tech Skills */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-brand-coral mb-6 text-center">Technical</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techSkills.flat().map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-sm border border-brand-cream/50 dark:border-gray-700 text-center text-sm font-medium text-brand-blue dark:text-brand-sky"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-brand-coral mb-6 text-center">Soft Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-coral/10 dark:bg-brand-coral/20 px-5 py-3 rounded-xl text-center text-sm font-medium text-brand-coral"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}