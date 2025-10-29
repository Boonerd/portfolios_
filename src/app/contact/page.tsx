// src/app/contact/page.tsx
'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    // Save to localStorage
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    submissions.push({ ...data, date: new Date().toLocaleString() });
    localStorage.setItem('submissions', JSON.stringify(submissions));

    setStatus('Message saved! (Check browser storage)');
    form.reset();
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl font-bold text-center text-brand-blue mb-12">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="name" placeholder="Name" required className="w-full p-4 rounded-xl border border-brand-blue/30 bg-white" />
          <input name="email" type="email" placeholder="Email" required className="w-full p-4 rounded-xl border border-brand-blue/30 bg-white" />
          <textarea name="message" placeholder="Message" rows={5} required className="w-full p-4 rounded-xl border border-brand-blue/30 bg-white"></textarea>
          <button type="submit" className="w-full py-4 bg-brand-coral text-white rounded-xl font-medium hover:bg-brand-blue transition">
            Send Message
          </button>
          {status && <p className="text-center text-brand-coral">{status}</p>}
        </form>
      </div>
    </section>
  );
}