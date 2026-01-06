'use client';

import { motion } from 'framer-motion';

const staggerVariant = {  // Stagger for lists
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const childVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto bg-cream/50 rounded-xl shadow-inner">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-center text-greenDark"
      >
        About Me
      </motion.h2>

      <div className="space-y-8 text-lg leading-relaxed text-greenDark/80">
        {/* ... your existing paragraphs ... */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-greenLight/10 p-8 rounded-xl shadow-md my-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-greenDark">My Media Buying Philosophy</h3>
          {/* ... philosophy text ... */}
        </motion.div>

        <h3 className="text-2xl font-semibold mb-4 text-greenDark">My Process: Three Pillars</h3>
        <motion.ol
          variants={staggerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="list-decimal list-inside space-y-4"
        >
          <motion.li variants={childVariant}><strong>Structure</strong> – ...</motion.li>
          <motion.li variants={childVariant}><strong>Testing</strong> – ...</motion.li>
          <motion.li variants={childVariant}><strong>Scaling</strong> – ...</motion.li>
        </motion.ol>

        {/* ... rest, add stagger to the ul list too if you want */}
      </div>
    </section>
  );
}