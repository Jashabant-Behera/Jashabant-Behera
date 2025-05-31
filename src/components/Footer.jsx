import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} YourName. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com/yourusername" target="_blank" className="text-gray-500 hover:text-gray-900">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-gray-500 hover:text-blue-600">
              <Linkedin size={18} />
            </a>
            <a href="mailto:you@example.com" className="text-gray-500 hover:text-red-500">
              <Mail size={18} />
            </a>
          </div>

          {/* Optional: Back to Top */}
          <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm mt-4 md:mt-0">
            Back to Top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}