// src/app/skills/page.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const techSkills = [
  { name: 'React.js', link: 'https://boonerd.github.io/dev-portfolio-projects/' },
  { name: 'Next.js', link: 'https://patriciah-portfolio.vercel.app/' },
  { name: 'TypeScript', link: 'https://github.com/yourusername/ts-playground' },
  { name: 'JavaScript', link: 'https://github.com/yourusername/js-challenges' },
  { name: 'Python', link: 'https://frontend-summarizer.vercel.app/' },
  { name: 'Flutter', link: 'https://github.com/yourusername/flutter-pixabay' },
  { name: 'Git', link: 'https://github.com/Boonerd' },
  { name: 'GitHub', link: 'https://github.com/Boonerd' },
  { name: 'Tailwind CSS', link: 'https://patriciah-portfolio.vercel.app/' },
  { name: 'Flask', link: 'https://frontend-summarizer.vercel.app/' },
  { name: 'HTML/CSS', link: 'https://github.com/yourusername/html-css-projects' },
  { name: 'REST APIs', link: 'https://boonerd.github.io/pixabay_dashboard/#/dashboard' },
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
            {techSkills.map((skill, i) => (
              <motion.a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-sm border border-brand-cream/50 dark:border-gray-700 text-center text-sm font-medium text-brand-blue dark:text-brand-sky flex items-center justify-center gap-1 hover:shadow-md hover:border-brand-coral transition-all"
              >
                {skill.name}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
              </motion.a>
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