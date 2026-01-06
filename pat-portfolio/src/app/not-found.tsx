// src/app/not-found.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-brand-cream to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-brand-blue dark:text-brand-sky mb-4">
          404
        </h1>
        <p className="text-xl text-brand-gray dark:text-gray-300 mb-8">
          Oops! Page not found.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-coral text-white rounded-xl font-medium hover:bg-brand-blue transition shadow-md"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}