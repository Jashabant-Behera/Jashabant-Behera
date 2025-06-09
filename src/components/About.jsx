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

  return (
    <section id="about" className="about">
      <h2 className="about-title" ref={titleRef}>
        About Me
      </h2>
      <div className="about-section" ref={sectionRef}>
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
          <p className="about-description" ref={descriptionRef}>
            Hey! I'm <span className="name-highlight">Jashabant Behera</span>, a
            passionate full-stack developer with a love for building intuitive
            and scalable web apps. I specialize in creating seamless user
            experiences using <span className="react-highlight">React.js</span>,{" "}
            <span className="next-highlight">Next.js</span>, and{" "}
            <span className="node-highlight">Node.js</span>.
          </p>
          <p className="about-subtext" ref={subtextRef}>
            With a strong foundation in frontend and backend development, I
            enjoy tackling real-world problems, exploring emerging technologies,
            and crafting code that's clean and impactful. When I'm not coding,
            I'm likely exploring new travel destinations or sketching out my
            next big idea.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
