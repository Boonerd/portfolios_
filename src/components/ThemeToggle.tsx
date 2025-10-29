// components/ThemeToggle.tsx
'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-3 rounded-full bg-brand-cream dark:bg-brand-gray/20 
                 backdrop-blur-md border border-brand-blue/20 dark:border-brand-sky/30
                 shadow-glass hover:scale-110 transition-all z-50"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-brand-gold" />
      ) : (
        <Moon className="w-5 h-5 text-brand-blue" />
      )}
    </button>
  );
}