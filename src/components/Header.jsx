import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import "../styles/Header.css"; // Adjust the path as necessary

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          JB
        </Link>

        <nav className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="#projects" className="nav-link">
            Projects
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <div className="social-icons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github-icon"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin-icon"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:you@example.com"
            className="social-icon email-icon"
          >
            <FaEnvelope size={20} />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
