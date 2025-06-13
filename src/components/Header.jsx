"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import "../styles/Header.css";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      const bar = document.getElementById("scroll-progress-bar");
      if (bar) {
        bar.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          JB.
        </Link>

        <nav className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#projects" className="nav-link">
            Projects
          </Link>

          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <div className="social-icons">
          <a
            href="https://github.com/Jashabant-Behera"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github-icon"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jashabant-behera-34bbb4b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin-icon"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:jeetbehera143@gmail.com"
            className="social-icon email-icon"
          >
            <FaEnvelope size={20} />
          </a>
          <ThemeToggle />
        </div>
      </div>
      <div className="scroll-progress-wrapper">
        <div id="scroll-progress-bar" className="scroll-progress-bar" />
      </div>
    </header>
  );
}
