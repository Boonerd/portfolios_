'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Target, BarChart3, Users, ArrowRight, Mail, Linkedin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const services = [
    { icon: Target, title: "Paid Media Strategy", desc: "Performance campaigns that convert across Google Ads, Meta, and LinkedIn" },
    { icon: TrendingUp, title: "Growth Marketing", desc: "Data-driven scaling strategies with ROI at the core" },
    { icon: BarChart3, title: "Analytics & Insights", desc: "Deep-dive reporting and actionable optimization recommendations" },
    { icon: Users, title: "Audience Targeting", desc: "Precision targeting to reach your ideal customers at scale" },
  ];

  const portfolio = [
    { brand: "E-commerce Fashion", metric: "340% ROAS", platform: "Meta Ads", color: "from-emerald-400 to-teal-600" },
    { brand: "SaaS Platform", metric: "58% ↓ CPA", platform: "Google Ads", color: "from-green-400 to-emerald-600" },
    { brand: "Wellness Brand", metric: "2.1M Reach", platform: "Multi-channel", color: "from-lime-400 to-green-600" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-cream pt-20"> {/* pt-20 to offset fixed navbar */}

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-20 left-10 w-72 h-72 bg-greenLight/30 rounded-full blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-96 h-96 bg-greenDark/20 rounded-full blur-3xl"
              animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.div style={{ opacity, scale }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mb-8"
            >
              <div className="w-40 h-40 mx-auto rounded-full bg-linear-to-br from-greenLight to-greenDark p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-cream flex items-center justify-center text-6xl font-bold text-greenDark">
                  BM
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-greenDark via-greenLight to-greenDark bg-clip-text text-transparent"
            >
              Betty Mbua
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-greenDark font-medium mb-4"
            >
              Media Buyer & Digital Marketing Strategist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-greenDark/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Transforming ad spend into revenue through strategic campaigns that scale. 
              Specializing in performance marketing that delivers measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-20"
            >
              <a href="#contact" className="group px-8 py-4 bg-greenDark text-cream rounded-full font-semibold hover:bg-greenLight hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2">
                Let’s Talk Growth
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a href="#portfolio" className="px-8 py-4 bg-cream border-2 border-greenDark text-greenDark rounded-full font-semibold hover:bg-greenDark hover:text-cream hover:scale-105 transition-all duration-300">
                View Results
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                { num: "5+", label: "Years Experience" },
                { num: "$2M+", label: "Ad Spend Managed" },
                { num: "50+", label: "Campaigns Launched" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-greenDark">{stat.num}</div>
                  <div className="text-sm text-greenDark/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-greenDark rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-greenDark rounded-full" />
            </div>
          </motion.div>
        </section>

  
        <Footer />
      </main>
    </>
  );
}