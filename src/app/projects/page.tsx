// src/app/projects/page.tsx
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Pixabay Dashboard',
    tech: 'Flutter • Dart • API',
    desc: 'Beautiful image search dashboard with filters & favorites.',
    live: '#',
    code: 'https://github.com/Boonerd/pixabay_dashboard',
  },
  {
    title: 'React Dev Portfolio',
    tech: 'React • Tailwind • Framer',
    desc: 'This site! Animated, responsive, dark mode.',
    live: 'https://boonerd.github.io/dev-portfolio-projects/',
    code: 'https://github.com/Boonerd/dev-portfolio-projects',
  },
  {
    title: 'Mental Health Triage',
    tech: 'Python • Flask • ML',
    desc: 'Web tool to assess mental health risk via questionnaire.',
    live: '#',
    code: 'https://github.com/PattyMbua/mental-health-triage-system',
  },
  {
    title: 'AI Text Summarizer',
    tech: 'Python • NLP • Streamlit',
    desc: 'Summarizes long articles in seconds.',
    live: '#',
    code: 'https://github.com/Boonerd/ai-text-summarizer',
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-brand-blue mb-12">Projects</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-brand-cream shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-brand-blue mb-2">{p.title}</h3>
            <p className="text-sm text-brand-coral mb-3">{p.tech}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
            <div className="flex gap-4">
              <a href={p.live} className="flex items-center gap-1 text-brand-blue hover:text-brand-coral">
                <ExternalLink className="w-4 h-4" /> Live
              </a>
              <a href={p.code} className="flex items-center gap-1 text-brand-blue hover:text-brand-coral">
                <Github className="w-4 h-4" /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}