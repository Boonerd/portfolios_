// src/app/contact/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    setIsSuccess(false);

    const res = await fetch('https://formspree.io/f/mdkpllry', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Sent! I’ll reply soon.');
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setStatus('Error. Try again.');
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-brand-cream to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-brand-blue dark:text-brand-sky mb-12 font-heading">
          Let’s Connect
        </h1>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-brand-cream/50 dark:border-gray-700 space-y-6">
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
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-5 py-3 rounded-xl border border-brand-cream/50 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-brand-coral transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
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
                Sent!
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>

          {status && !isSuccess && (
            <p className="text-center text-sm text-red-500">{status}</p>
          )}
        </form>

        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
          * No spam. I reply within 24 hours.
        </p>
      </motion.div>
    </section>
  );
}