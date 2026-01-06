import { motion } from 'framer-motion';
import { Search, Instagram, BarChart3, Target, Funnel, Gauge } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <Target size={48} />, title: 'Media Buying & Campaign Management', desc: 'Full-funnel strategies across Google Ads (Performance Max, Search), Meta Ads, and TikTok. Budgets $5K–$100K/mo.' },
    { icon: <Funnel size={48} />, title: 'Full-Funnel Optimization', desc: 'Building acquisition systems with retargeting, CRM integration, and email/SMS flows for sustainable growth.' },
    { icon: <BarChart3 size={48} />, title: 'Analytics & Reporting', desc: 'Custom GA4 and Looker Studio dashboards connecting ad spend to real business outcomes.' },
    { icon: <Search size={48} />, title: 'Testing & Iteration', desc: 'Creative, audience, and bid testing to rapidly identify winners and scale efficiently.' },
    { icon: <Gauge size={48} />, title: 'Performance Scaling', desc: 'Lowering CPAs, boosting ROAS, and maintaining margins while increasing volume.' },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-greenDark/5">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold mb-12 text-center">
        Services
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-cream rounded-xl shadow-lg text-center hover:shadow-xl transition"
          >
            <div className="text-greenDark mb-6 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-lg">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}