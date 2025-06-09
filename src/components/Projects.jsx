"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "@/data/projects";
import "@/styles/Projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectsRef = useRef(null);
  const projectCardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Section title animation
    gsap.from(".projects-title", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Project cards animation
    projectCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const openProject = (id) => {
    setExpandedProject(id);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setExpandedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      (prev + 1) % projects.find(p => p.id === expandedProject).images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      (prev - 1 + projects.find(p => p.id === expandedProject).images.length) % 
      projects.find(p => p.id === expandedProject).images.length
    );
  };

  const addToRefs = (el) => {
    if (el && !projectCardsRef.current.includes(el)) {
      projectCardsRef.current.push(el);
    }
  };

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="projects-container">
        <h2 className="projects-title">Technical Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              ref={addToRefs}
              whileHover={{ y: -5 }}
              className="project-card"
            >
              <div 
                className="project-image-container"
                onClick={() => openProject(project.id)}
              >
                <img
                  src={project.images?.[0] || project.image}
                  alt={project.title}
                  className="project-image"
                />
                {project.images?.length > 1 && (
                  <div className="image-count-badge">
                    +{project.images.length - 1} more
                  </div>
                )}
              </div>

              <div className="project-meta">
                <h3 
                  className="project-name"
                  onClick={() => openProject(project.id)}
                >
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <SiGithub className="icon" />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink className="icon" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {expandedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="project-modal-overlay"
              onClick={closeProject}
            >
              <motion.div
                className="project-modal"
                onClick={e => e.stopPropagation()}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                <button 
                  onClick={closeProject}
                  className="project-modal-close"
                >
                  &times;
                </button>

                {projects.find(p => p.id === expandedProject).images && (
                  <div className="project-modal-image-container">
                    <img
                      src={projects.find(p => p.id === expandedProject).images[currentImageIndex]}
                      alt={projects.find(p => p.id === expandedProject).title}
                      className="project-modal-image"
                    />

                    {projects.find(p => p.id === expandedProject).images.length > 1 && (
                      <>
                        <button 
                          onClick={e => { e.stopPropagation(); prevImage(); }}
                          className="image-nav-button image-nav-prev"
                        >
                          <ChevronLeft />
                        </button>
                        <button 
                          onClick={e => { e.stopPropagation(); nextImage(); }}
                          className="image-nav-button image-nav-next"
                        >
                          <ChevronRight />
                        </button>
                        <div className="image-dots">
                          {projects.find(p => p.id === expandedProject).images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={e => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                              className={`image-dot ${currentImageIndex === idx ? 'active' : ''}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="project-modal-content">
                  <h3 className="project-modal-title">
                    {projects.find(p => p.id === expandedProject).title}
                  </h3>
                  <p className="project-modal-description">
                    {projects.find(p => p.id === expandedProject).description}
                  </p>

                  <div className="project-modal-tech">
                    <h4 className="project-modal-tech-title">Technologies Used:</h4>
                    <div className="project-tags">
                      {projects.find(p => p.id === expandedProject).tags.map(tag => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-modal-buttons">
                    {projects.find(p => p.id === expandedProject).github && (
                      <a
                        href={projects.find(p => p.id === expandedProject).github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-modal-button code"
                      >
                        <SiGithub className="icon" />
                        View Code
                      </a>
                    )}
                    {projects.find(p => p.id === expandedProject).demo && (
                      <a
                        href={projects.find(p => p.id === expandedProject).demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-modal-button demo"
                      >
                        <ExternalLink className="icon" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}