'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface PortfolioItem {
  img: string;
  title: string;
  desc: string;
}

export default function Portfolio() {
  const projects: PortfolioItem[] = [
    {
      img: '/case1.jpg', // Add real images to public/
      title: 'DTC Fashion Brand – Meta Ads Scale',
      desc: 'Scaled spend from $10K to $80K/mo while improving ROAS from 2.1x to 4.8x',
    },
    {
      img: '/case2.jpg',
      title: 'eCommerce TikTok Launch',
      desc: 'Launched product with $0 → $60K/mo in 90 days. Dropped CPA 52%.',
    },
    {
      img: '/dashboard.jpg',
      title: 'Custom GA4 + Looker Dashboard',
      desc: 'Real-time reporting tying ad performance to revenue.',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-greenDark/5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center text-greenDark"
      >
        Portfolio & Case Studies
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Fixed: proper hover object
            className="bg-cream rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="relative h-64">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-greenDark mb-2">{project.title}</h3>
              <p className="text-greenDark/80">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}