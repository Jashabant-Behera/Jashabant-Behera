import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 hover:text-indigo-600"
        >
          YourName
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-indigo-600">
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-600 hover:text-indigo-600"
          >
            Projects
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-indigo-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-indigo-600">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 p-2"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-gray-500 hover:text-blue-600 p-2"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:you@example.com"
            className="text-gray-500 hover:text-red-500 p-2"
          >
            <Mail size={20} />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
