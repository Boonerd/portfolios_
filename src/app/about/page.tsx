// src/app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Who I Am */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-sky mb-4">Who I Am</h2>
          <p className="text-brand-gray dark:text-dark-text leading-relaxed">
            I’m a motivated Junior Developer and Business Information Technology student at Strathmore University with a passion for technology that drives real-world change.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-sky mb-4">What I Do</h2>
          <ul className="space-y-2 text-brand-gray dark:text-dark-text">
            <li><strong>Frontend:</strong> React, JavaScript</li>
            <li><strong>Backend:</strong> Python, Django REST</li>
            <li><strong>Mobile:</strong> Flutter (basics)</li>
            <li><strong>Database:</strong> MySQL, PostgreSQL</li>
          </ul>
        </motion.div>

        {/* Skills Table */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-sky mb-4">Core Skills & Strengths</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-brand-blue dark:text-brand-sky">Technical</th>
                <th className="text-left py-2 text-brand-blue dark:text-brand-sky">Soft Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Python, React, Flutter</td>
                <td className="py-2">Communication, Adaptability</td>
              </tr>
              <tr>
                <td className="py-2">Git, VS Code</td>
                <td className="py-2">Leadership, Teamwork</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-6 py-3 bg-brand-blue text-white rounded-xl flex items-center gap-2 justify-center">
              <Mail className="w-5 h-5" /> Get in Touch
            </Link>
            <a href="/cv.pdf" download className="px-6 py-3 border-2 border-brand-blue text-brand-blue rounded-xl flex items-center gap-2 justify-center">
              <Download className="w-5 h-5" /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}