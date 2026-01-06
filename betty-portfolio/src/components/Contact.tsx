import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  // Replace these with Betty's real details
  const email = 'betty.mbua@example.com'; // ← Put her real email here
  const phone = '+254 700 000 000';       // ← Her real phone (Kenyan format or whichever)
  const address = 'Nairobi, Kenya';       // ← More specific if she wants (e.g. Westlands, Nairobi)

  return (
    <section id="contact" className="py-20 px-4 bg-greenDark/5">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {/* Email */}
        <motion.a
          href={`mailto:${email}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="group bg-cream p-8 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
        >
          <div className="text-greenDark mb-4">
            <Mail size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">bettymbua45@gmail.com</h3>
          <p className="text-greenDark/80 mb-4 break-words">{email}</p>
          <span className="text-greenLight font-medium flex items-center gap-2">
            Send an email
            <ArrowRight className="group-hover:translate-x-2 transition" size={20} />
          </span>
        </motion.a>

        {/* Phone */}
        <motion.a
          href={`tel:${phone.replace(/\s/g, '')}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="group bg-cream p-8 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
        >
          <div className="text-greenDark mb-4">
            <Phone size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-greenDark/80 mb-4">{phone}</p>
          <span className="text-greenLight font-medium flex items-center gap-2">
            Call directly
            <ArrowRight className="group-hover:translate-x-2 transition" size={20} />
          </span>
        </motion.a>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-cream p-8 rounded-xl shadow-lg flex flex-col items-center"
        >
          <div className="text-greenDark mb-4">
            <MapPin size={48} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Nairobi, Kenya</h3>
          <p className="text-greenDark/80 mb-4">{address}</p>
          <span className="text-greenLight font-medium">Based in Kenya</span>
        </motion.div>
      </div>

      {/* Optional: Keep a simple form below for longer messages */}
      <div className="max-w-3xl mx-auto mt-20 text-center">
        <p className="text-xl mb-8">
          Prefer to send a detailed message? Feel free to use the form below.
        </p>
        {/* You can keep the Formspree form here if you want, or remove it entirely */}
        {/* For now, I'll leave a minimal version */}
        <form
          action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || 'your-id'}`}
          method="POST"
          className="grid md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 border border-greenDark rounded-lg focus:outline-none focus:border-greenLight"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 border border-greenDark rounded-lg focus:outline-none focus:border-greenLight"
          />
          <textarea
            name="message"
            placeholder="Your Message (project details, budget, timeline...)"
            required
            rows={6}
            className="md:col-span-2 p-4 border border-greenDark rounded-lg focus:outline-none focus:border-greenLight"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-greenDark text-cream py-4 rounded-lg hover:bg-greenLight transition text-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}