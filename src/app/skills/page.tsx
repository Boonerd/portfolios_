// src/app/skills/page.tsx
'use client';

import { motion } from 'framer-motion';

const skills = [
  ['React.js', 'Next.js'],
  ['TypeScript', 'Node.js'],
  ['Python', 'PostgreSQL'],
  ['AWS', 'GCP'],
  ['Git', 'Docker'],
  ['Django', 'Kotlin'],
  ['Flutter', 'Java'],
  ['SQL', 'MySQL'],
];

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-center text-brand-blue dark:text-brand-sky font-heading mb-12"
      >
        Technical Skills
      </motion.h2>

      <div className="max-w-2xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {skills.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-brand-blue/10 dark:border-brand-sky/20"
              >
                <td className="py-3 px-4 text-brand-gray dark:text-dark-text text-left">{row[0]}</td>
                <td className="py-3 px-4 text-brand-gray dark:text-dark-text text-right">{row[1]}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}