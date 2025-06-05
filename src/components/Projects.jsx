"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import projects from "@/data/projects";
import "../styles/Projects.css";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (id) => {
    setExpandedProject(id);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setExpandedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev + 1) %
        projects.find((p) => p.id === expandedProject).images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev -
          1 +
          projects.find((p) => p.id === expandedProject).images.length) %
        projects.find((p) => p.id === expandedProject).images.length
    );
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="projects-title"
        >
          Technical Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="project-card"
            >
              <div
                className="project-image-container"
                onClick={() => openProject(project.id)}
              >
                <img
                  src={project.images ? project.images[0] : project.image}
                  alt={project.title}
                  className="project-image"
                />
                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
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
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn flex items-center text-sm hover:underline"
                    >
                      <SiGithub className="mr-1 h-4 w-4" />
                      View Source code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn flex items-center text-sm hover:underline"
                    >
                      Live Demo
                      <ExternalLink className="ml-1 h-4 w-4" />
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
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="project-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeProject}
                  className="project-modal-close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {projects.find((p) => p.id === expandedProject).images && (
                  <div className="project-modal-image-container">
                    <img
                      src={
                        projects.find((p) => p.id === expandedProject).images[
                          currentImageIndex
                        ]
                      }
                      alt={projects.find((p) => p.id === expandedProject).title}
                      className="project-modal-image"
                    />

                    {projects.find((p) => p.id === expandedProject).images
                      .length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="image-nav-button image-nav-prev"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="image-nav-button image-nav-next"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                        <div className="image-dots">
                          {projects
                            .find((p) => p.id === expandedProject)
                            .images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(idx);
                                }}
                                className={`image-dot ${
                                  currentImageIndex === idx ? "active" : ""
                                }`}
                              />
                            ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="project-modal-content">
                  <h3 className="project-modal-title">
                    {projects.find((p) => p.id === expandedProject).title}
                  </h3>
                  <p className="project-modal-description">
                    {projects.find((p) => p.id === expandedProject).description}
                  </p>

                  <div className="mb-6">
                    <h4 className="project-modal-tech-title">
                      Technologies Used:
                    </h4>
                    <div className="project-tags">
                      {projects
                        .find((p) => p.id === expandedProject)
                        .tags.map((tag) => (
                          <span
                            key={tag}
                            className="project-tag"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="project-modal-buttons">
                    {projects.find((p) => p.id === expandedProject).github && (
                      <a
                        href={
                          projects.find((p) => p.id === expandedProject).github
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-modal-button project-modal-button-code"
                      >
                        <SiGithub className="mr-2 h-5 w-5" />
                        View source code
                      </a>
                    )}
                    {projects.find((p) => p.id === expandedProject).demo && (
                      <a
                        href={
                          projects.find((p) => p.id === expandedProject).demo
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-modal-button project-modal-button-demo"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
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