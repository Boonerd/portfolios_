// src/app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    setIsSuccess(false);

    const res = await fetch('https://formspree.io/f/mdkpllry', {  // ← REPLACE
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Sent! I’ll email your CV in 24h.');
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setStatus('Error. Try again.');
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Who I Am */}
<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
  <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-sky mb-4">Who I Am</h2>
  <p className="text-gray-700 dark:text-white leading-relaxed">
    I’m a motivated Junior Developer and Business Information Technology student at Strathmore University with a passion for technology that drives real-world change.
  </p>
</motion.div>

{/* What I Do */}
<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
  <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-sky mb-4">What I Do</h2>
  <ul className="space-y-2 text-gray-700 dark:text-white">
    <li><strong>Frontend:</strong> React, JavaScript</li>
    <li><strong>Backend:</strong> Python, Django REST</li>
    <li><strong>Mobile:</strong> Flutter (basics)</li>
    <li><strong>Database:</strong> MySQL, PostgreSQL</li>
  </ul>
</motion.div>

{/* Skills Table */}
<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
  <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-sky mb-4">Core Skills & Strengths</h2>
  <table className="w-full border-collapse text-gray-700 dark:text-white">
    <thead>
      <tr className="border-b border-gray-300 dark:border-gray-600">
        <th className="text-left py-2 text-brand-blue dark:text-brand-sky">Technical</th>
        <th className="text-left py-2 text-brand-blue dark:text-brand-sky">Soft Skills</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-300 dark:border-gray-600">
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

        {/* CV REQUEST FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-brand-cream/50 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-sky mb-6 text-center">
            Request My Full Resume
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border border-brand-cream/50 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-brand-coral transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email (to receive CV)"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border border-brand-cream/50 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-brand-coral transition"
            />
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border border-brand-cream/50 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-brand-coral transition resize-none"
            />

            <button
              type="submit"
              disabled={status === 'Sending...'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-coral text-white rounded-xl font-medium hover:bg-brand-blue transition shadow-md disabled:opacity-70"
            >
              {isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Request Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send CV Request
                </>
              )}
            </button>

            {status && !isSuccess && (
              <p className="text-center text-sm text-red-500">{status}</p>
            )}
          </form>

          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
            * Your info is private. Full CV sent securely via email.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-xl font-medium hover:bg-brand-coral transition shadow-md"
          >
            <Mail className="w-5 h-5" />
            Let’s Work Together
          </Link>
        </motion.div>
      </div>
    </section>
  );
}