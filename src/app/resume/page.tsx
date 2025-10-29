'use client';

export default function Resume() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold text-sky-700 mb-8">Resume</h1>
      <a
        href="/Patriciah_Mbua_Resume.pdf"
        download
        className="inline-block px-8 py-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition"
      >
        Download CV (PDF)
      </a>
      <p className="text-sm text-gray-500 mt-4">Last updated: April 2025</p>
    </section>
  );
}