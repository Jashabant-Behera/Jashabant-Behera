"use client";

import React, { useRef, useEffect } from "react";
import "../styles/About.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const circleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const subtextRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.set(
      [
        imageRef.current,
        circleRef.current,
        titleRef.current,
        descriptionRef.current,
        subtextRef.current,
        skillsRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const velocity = self.getVelocity();
        gsap.to(imageRef.current, {
          x:
            self.direction === 1
              ? -50 * self.progress
              : 50 * (1 - self.progress),
          opacity: 1 - Math.abs(self.progress - 0.5) * 2,
          duration: 0.5,
        });
      },
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        gsap.to(circleRef.current, {
          y: -100 * self.progress,
          scale: 0.8 + self.progress * 0.4,
          opacity: 1 - Math.abs(self.progress - 0.5) * 2,
          duration: 0.5,
        });
      },
    });

    const textElements = [
      titleRef.current,
      descriptionRef.current,
      subtextRef.current,
      skillsRef.current,
    ];

    textElements.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(el, {
            y: 50,
            opacity: 0,
            duration: 0.5,
          });
        },
      });
    });

    const skillTags = gsap.utils.toArray(".skill-tag");
    skillTags.forEach((tag, i) => {
      ScrollTrigger.create({
        trigger: tag,
        start: "top 90%",
        onEnter: () => {
          gsap.fromTo(
            tag,
            { x: i % 2 ? 50 : -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, delay: i * 0.1 }
          );
        },
        onLeaveBack: () => {
          gsap.to(tag, { x: i % 2 ? 50 : -50, opacity: 0, duration: 0.4 });
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="image-wrapper">
        <div className="red-circle" ref={circleRef}></div>
        <div ref={imageRef}>
          <Image
            src="/about/about.png"
            alt="about JB"
            width={500}
            height={500}
            className="about-img"
            priority
          />
        </div>
      </div>
      <div className="about-container">
        <h2 className="about-title" ref={titleRef}>
          About Me
        </h2>
        <p className="about-description" ref={descriptionRef}>
          Hey! I'm <span className="name-highlight">Jashabant Behera</span>, a
          passionate full-stack developer with a love for building intuitive and
          scalable web apps. I specialize in creating seamless user experiences
          using <span className="react-highlight">React.js</span>,{" "}
          <span className="next-highlight">Next.js</span>, and{" "}
          <span className="node-highlight">Node.js</span>.
        </p>
        <p className="about-subtext" ref={subtextRef}>
          With a strong foundation in frontend and backend development, I enjoy
          tackling real-world problems, exploring emerging technologies, and
          crafting code that's clean and impactful. When I'm not coding, I'm
          likely exploring new travel destinations or sketching out my next big
          idea.
        </p>

        <div className="skills-container" ref={skillsRef}>
          <span className="skill-tag react-tag">React.js</span>
          <span className="skill-tag node-tag">Node.js</span>
          <span className="skill-tag mongo-tag">MongoDB</span>
          <span className="skill-tag tailwind-tag">Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
};

export default About;
