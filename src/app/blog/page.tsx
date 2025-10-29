// src/app/blog/page.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const posts = [
  {
    id: '1',
    title: 'Positive Living During Hard Times: What It Means to Me Right Now',
    desc: 'A heartfelt reflection on finding calm, purpose, and gratitude when life feels uncertain.',
    url: 'https://www.linkedin.com/posts/patriciah-mbua-ba7095241_mentalhealth-positiveliving-resilience-activity-7351498399034097665-Aw9x?utm_source=share&utm_medium=member_desktop&rcm=ACoAADv9kW8BxblFpzz_39nKB_thBeG8aQoGT1U', // ← YOUR REAL POST URL
  },
  {
    id: '2',
    title: 'Working, Studying, and Surviving Your 20s',
    desc: 'An honest look at the chaos and growth in your 20s.',
    url: 'https://www.linkedin.com/posts/patriciah-mbua-ba7095241_workingwhilestudying-lifeinyour20s-activity-7318503534256128001-frla?utm_source=share&utm_medium=member_desktop&rcm=ACoAADv9kW8BxblFpzz_39nKB_thBeG8aQoGT1U',
  },
  {
    id: '3',
    title: 'The New Inbox Obsession',
    desc: 'What constant checking is doing to our peace of mind.',
    url: 'https://www.linkedin.com/posts/patriciah-mbua-ba7095241_i-finally-hit-publish-on-this-one-i-wrote-activity-7359150064440619009-EF66?utm_source=share&utm_medium=member_desktop&rcm=ACoAADv9kW8BxblFpzz_39nKB_thBeG8aQoGT1U',
  },
  {
    id: '4',
    title: 'Job hunting while still a student',
    desc: 'Lessons from lectures, labs, and late nights.',
    url: 'https://www.linkedin.com/posts/patriciah-mbua-ba7095241_what-im-learning-about-job-hunting-internships-activity-7388446862149775361-h107?utm_source=share&utm_medium=member_desktop&rcm=ACoAADv9kW8BxblFpzz_39nKB_thBeG8aQoGT1U',
  },
];

export default function Blog() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-brand-cream to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center text-brand-blue dark:text-brand-sky mb-16 font-heading"
      >
        Blog & Thoughts
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-10">
        {posts.map((post, i) => (
          <motion.a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="block group"
          >
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-md border border-brand-cream/50 dark:border-gray-700 hover:shadow-xl hover:border-brand-coral/50 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-brand-blue dark:text-brand-sky mb-3 group-hover:text-brand-coral transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
                    {post.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand-coral font-medium text-sm">
                    Read on LinkedIn
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </span>
                </div>
                <div className="ml-4 text-brand-coral/70">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.a>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.linkedin.com/in/patriciah-mbua-ba7095241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBNSmY0iORd6Ou3iib%2FNXAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-coral text-white rounded-xl font-medium hover:bg-brand-blue transition shadow-md"
          >
            View All Posts on LinkedIn
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}