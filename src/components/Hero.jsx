import React from "react";
import { DownloadIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[80vh] bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jashabant Behera
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Project Coordinator & Web Developer
          </h2>
          <p className="text-gray-700 mb-8">
            Bridging operational excellence with technical solutions.
            Experienced in field operations and full-stack development.
          </p>
          <div className="flex gap-4">
            <a href="#" className="btn-primary">
              Contact Me
            </a>
            <a href="#" className="btn-secondary">
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Jashabant_Behera_Resume.pdf"
              className="btn-secondary flex items-center gap-2"
            >
              <DownloadIcon size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
