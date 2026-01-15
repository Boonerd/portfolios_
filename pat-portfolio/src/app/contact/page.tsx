'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-brand-cream to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue dark:text-brand-sky mb-8">
          Let&apos;s Connect
        </h1>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          Open to opportunities • Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          <a
            href="mailto:your.email@example.com"
            className="flex flex-col items-center gap-3 text-brand-coral hover:text-brand-blue transition group"
          >
            <Mail className="w-10 h-10 md:w-12 md:h-12" />
            <span className="text-lg font-medium group-hover:underline">Email</span>
          </a>

          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 text-brand-blue hover:text-brand-sky transition group"
          >
            <Linkedin className="w-10 h-10 md:w-12 md:h-12" />
            <span className="text-lg font-medium group-hover:underline">LinkedIn</span>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-brand-coral transition group"
          >
            <Github className="w-10 h-10 md:w-12 md:h-12" />
            <span className="text-lg font-medium group-hover:underline">GitHub</span>
          </a>
        </div>

        <p className="mt-16 text-sm text-gray-500 dark:text-gray-400">
          Usually reply within 24–48 hours
        </p>
      </motion.div>
    </section>
  );
}