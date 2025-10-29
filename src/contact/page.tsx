'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // Use Formspree (free, no backend)
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Sent! I’ll reply soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Error. Try again.');
    }
  };

  return (
    <section className="py-20 bg-linear-to-b from-white to-sky/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Get in Touch</h1>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-card border border-light/50">
          <div className="mb-6">
            <label className="block text-sm font-medium text-primary mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-light rounded-xl focus:outline-none focus:border-secondary"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-primary mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-light rounded-xl focus:outline-none focus:border-secondary"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-primary mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-light rounded-xl focus:outline-none focus:border-secondary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-secondary text-white rounded-xl hover:bg-secondary/90 transition font-medium"
          >
            Send Message
          </button>

          {status && <p className="mt-4 text-center text-sm text-primary">{status}</p>}
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Or email me at: <a href="mailto:patriciah@example.com" className="text-secondary hover:underline">patriciah@example.com</a>
        </p>
      </motion.div>
    </section>
  );
}