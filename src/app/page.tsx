// src/app/page.tsx
'use client';

import Link from 'next/link';
import { Code2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Home page – Hero section of Patriciah Mbua's portfolio
 * Clean, warm, and unmistakably human (no AI-copy-paste vibes)
 *wink*)
 */

export default function Home() {
  // Things that are true about me right now – change them whenever you want!
  const currentlyItems = [
    'Sipping Kenyan AA coffee (black, no sugar)',
    'Building a agri-business mock website',
    'Reading for my exams',
    'Looking to learn how to create animations on blender',
    'Looking for work',
    'Learning Javascript and its variations',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate the "Currently" text every 6.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentlyItems.length);
    }, 6500);

    return () => clearInterval(interval); // cleanup on unmount
  }, [currentlyItems.length]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-4xl mx-auto">
        {/* Little badge at the top */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-coral/10 border border-brand-coral/30 mb-8">
          <Sparkles className="w-4 h-4 text-brand-coral" />
          <span className="text-sm font-medium text-brand-coral">
            Junior Dev • Open to Work
          </span>
        </div>

        {/* Big friendly greeting */}
        <h1 className="text-5xl md:text-7xl font-bold text-brand-blue mb-6 leading-tight">
          Hey, I&apos;m <span className="text-brand-coral">Patriciah</span>
        </h1>

        <p className="text-xl text-gray-700 mb-6">
          BBIT student • Full-stack dev • Creator of{' '}
          <strong>smart, warm digital tools</strong>
        </p>

        <p className="text-base text-brand-blue font-medium mb-10">
          Python • React • Flutter | Turning ideas into simple, impactful experiences.
        </p>

        {/* === Currently section – the part that feels alive === */}
        <div className="mt-12 mb-12">
          <p className="text-sm font-medium text-gray-600 mb-3">Right now I&apos;m...</p>
          
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl text-brand-coral">●</span>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-lg font-medium text-gray-800"
              >
                {currentlyItems[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/projects"
            className="px-8 py-3 bg-brand-blue text-white rounded-xl font-medium hover:bg-brand-sky transition flex items-center justify-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            View My Work
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-brand-coral text-brand-coral rounded-xl font-medium hover:bg-brand-coral hover:text-white transition"
          >
            Say hi 🙃
          </Link>
        </div>
      </div>
    </section>
  );
}