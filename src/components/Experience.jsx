"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import experience from "@/data/experience";
import { Lightbulb, Code2, UserCheck, Flame } from "lucide-react";
import "../styles/Experience.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const experienceItemsRef = useRef([]);
  const growthCardsRef = useRef([]);
  const collageContainerRef = useRef(null);
  const icons = [<Lightbulb />, <Code2 />, <UserCheck />, <Flame />];

  useEffect(() => {
    // Animation for experience items
    experienceItemsRef.current.forEach((item) => {
      const techTags = item.querySelectorAll(".technology-tag");
      gsap.from(techTags, {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.05,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animation for growth cards
    growthCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        x: index % 2 ? 50 : -50,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animation for image collage
    if (collageContainerRef.current) {
      const images =
        collageContainerRef.current.querySelectorAll(".collage-box");
      gsap.from(images, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: collageContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // Section header animation
    gsap.from(sectionRef.current.querySelectorAll(".section-header"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => ScrollTrigger.getAll().forEach((instance) => instance.kill());
  }, []);

  const addExperienceToRefs = (el) => {
    if (el && !experienceItemsRef.current.includes(el)) {
      experienceItemsRef.current.push(el);
    }
  };

  const addGrowthCardToRefs = (el) => {
    if (el && !growthCardsRef.current.includes(el)) {
      growthCardsRef.current.push(el);
    }
  };

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Roles I've held, skills I honed, and challenges I conquered.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="experience-card"
              ref={addExperienceToRefs}
            >
              {/* Pinterest-style Image Collage */}
              {exp.images && exp.work && (
                <div className="collage-wrapper">
                  <div className="collage-container" ref={collageContainerRef}>
                    {exp.images.map((img, index) => (
                      <div key={index} className="collage-box">
                        <div className="image-container">
                          <img
                            src={img}
                            alt={`Work experience ${index + 1}`}
                            className="collage-image"
                          />
                          {exp.work[index] && (
                            <div className="image-caption">
                              <span className="caption-divider">|</span>
                              <span className="caption-text">{exp.work[index]}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="experience-card-inner">
                <div className="experience-content">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>

                  <div className="achievements-list">
                    <ul>
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="achievement-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.technologies && (
                    <div className="technologies-container">
                      <h5 className="technologies-title">
                        Hands On Experience
                      </h5>
                      <div className="technologies-list">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="technology-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="growth-section">
          <div className="section-header">
            <h2 className="section-title">Professional Growth</h2>
          </div>

          <div className="growth-grid">
            <div className="growth-column">
              <div className="growth-card" ref={addGrowthCardToRefs}>
                <p>
                  <span className="icon">{icons[0]}</span>
                  Though my early career was in a non-IT field, this experience
                  gave me
                  <span className="highlight-text">
                    {" "}
                    valuable leadership skills
                  </span>{" "}
                  - managing teams, coordinating projects, and solving problems
                  under pressure.
                </p>
              </div>
              <div className="growth-card" ref={addGrowthCardToRefs}>
                <p>
                  I never stopped learning tech independently, completing
                  certifications in
                  <span className="highlight-text">
                    {" "}
                    full-stack development
                  </span>{" "}
                  and building projects with React, Node.js, and MongoDB.
                </p>
              </div>
            </div>

            <div className="growth-column">
              <div className="growth-card" ref={addGrowthCardToRefs}>
                <p>
                  My internship at <span className="highlight-text">TULIP</span>{" "}
                  proved my ability to transition into tech, where I contributed
                  to real-time applications and AI-driven solutions.
                </p>
              </div>
              <div className="highlight-card" ref={addGrowthCardToRefs}>
                <p>
                  What some might see as a career gap was actually my
                  <span className="highlight-text-bold">
                    {" "}
                    self-driven tech immersion
                  </span>{" "}
                  - building, breaking, and rebuilding with purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}