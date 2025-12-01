// src/app/page.tsx
'use client';

import Link from 'next/link';
import { Code2, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-coral/10 border border-brand-coral/30 mb-6">
          <Sparkles className="w-4 h-4 text-brand-coral" />
          <span className="text-sm font-medium text-brand-coral">Junior Dev • Open to Work</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-brand-blue mb-6">
          Hey, I&apos;m <span className="text-brand-coral">Patriciah</span>
        </h1>

        <p className="text-xl text-gray-700 mb-6">
          BBIT student • Full-stack dev • Creator of <strong>smart, warm digital tools</strong>
        </p>

        <p className="text-base text-brand-blue font-medium mb-10">
          Python • React • Flutter | Turning ideas into simple, impactful experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects" className="px-8 py-3 bg-brand-blue text-white rounded-xl font-medium hover:bg-brand-sky transition flex items-center gap-2">
            <Code2 className="w-5 h-5" /> View My Work
          </Link>
          <Link href="/contact" className="px-8 py-3 border-2 border-brand-coral text-brand-coral rounded-xl font-medium hover:bg-brand-coral hover:text-white transition">
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
}