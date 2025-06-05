import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Name with custom font */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-bebas tracking-wide"
        >
          JB
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8">
          <Link 
            href="/" 
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:you@example.com"
            className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all"
          >
            <FaEnvelope size={20} />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}