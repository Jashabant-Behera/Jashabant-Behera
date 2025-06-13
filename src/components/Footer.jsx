import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">© {new Date().getFullYear()} JB.</p>

        <div className="footer-social-links">
          <a
            href="https://github.com/Jashabant-Behera"
            target="_blank"
            className="social-link github-icon"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jashabant-behera-34bbb4b6/"
            target="_blank"
            className="social-link linkedin-icon"
          >
            <Linkedin size={18} />
          </a>
          <a href="mailto:jeetbehera143@gmail.com" className="social-link email-icon">
            <Mail size={18} />
          </a>
        </div>

        <Link href="#" className="back-to-top">
          Back to Top ↑
        </Link>
      </div>
    </footer>
  );
}
