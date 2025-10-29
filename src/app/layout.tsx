// src/app/layout.tsx
'use client';

import './globals.css';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const isDark = saved === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
        <title>Patriciah Mbua</title>
      </head>
      <body className="bg-brand-cream dark:bg-gray-900 text-brand-gray dark:text-gray-100 min-h-screen flex flex-col font-body">
        
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-brand-blue/20 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-brand-blue dark:text-brand-sky font-montserrat">
              Patriciah Mbua
            </Link>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-brand-coral dark:text-gray-300 dark:hover:text-brand-sky transition"
                >
                  {item}
                </Link>
              ))}
            </div>
            <button onClick={toggle} className="p-2 rounded-full bg-brand-cream dark:bg-gray-800 border">
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-brand-blue" />}
            </button>
          </div>
        </nav>

        <main className="flex-1 pt-20">{children}</main>

        <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Patriciah Mbua
        </footer>
      </body>
    </html>
  );
}