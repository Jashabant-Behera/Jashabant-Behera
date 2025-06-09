"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";
import "../styles/Contact.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const contactItemsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return;

    // Section animation
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Card animation
    gsap.from(cardRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      delay: 0.2,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });

    // Contact items animation
    contactItemsRef.current.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

    // Button animation
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.6,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addContactItemToRefs = (el) => {
    if (el && !contactItemsRef.current.includes(el)) {
      contactItemsRef.current.push(el);
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>

        <div className="contact-card" ref={cardRef}>
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>

            <ul>
              <li className="contact-item" ref={addContactItemToRefs}>
                <FaPhone className="contact-icon phone" />
                <div>
                  <h4>Phone</h4>
                  <p>8118006481 / 7735872336</p>
                </div>
              </li>

              <li className="contact-item" ref={addContactItemToRefs}>
                <FaWhatsapp className="contact-icon whatsapp" />
                <div>
                  <h4>WhatsApp</h4>
                  <p>8118006481</p>
                </div>
              </li>

              <li className="contact-item" ref={addContactItemToRefs}>
                <FaEnvelope className="contact-icon email" />
                <div>
                  <h4>Email</h4>
                  <p>jeetbehera143@gmail.com</p>
                </div>
              </li>

              <li className="contact-item" ref={addContactItemToRefs}>
                <FaMapMarkerAlt className="contact-icon address" />
                <div>
                  <h4>Address</h4>
                  <p>Amin Line, Koraput, Odisha 764020</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="connect-section">
            <a
              ref={buttonRef}
              href="https://linkedin.com/in/jashabant-behera-34bbb4b6"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}