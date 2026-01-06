import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-greenDark text-cream py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Betty Mbua</h3>
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="mailto:sparksltns@gmail.com" 
            className="flex items-center gap-2 hover:text-greenLight transition"
          >
            <Mail size={20} />
            your-real-email@example.com
          </a>
          <a
            href="https://www.linkedin.com/in/betty-m-a1b457201?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBLDPVOxvTAatRvEpiUrxEw%3D%3D" // ← Replace with real LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-greenLight transition"
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
        </div>
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Betty Mbua. All rights reserved.
        </p>
      </div>
    </footer>
  );
}