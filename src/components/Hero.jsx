"use client";

import React, { useEffect, useRef } from "react";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const nameRef = useRef(null);
  const buttonRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const titleChars = gsap.utils.toArray(".char");

    gsap.set(titleChars, {
      y: 100,
      opacity: 0,
      rotate: 15,
    });

    gsap.set([imageRef.current, subtitleRef.current, nameRef.current], {
      opacity: 0,
    });

    const master = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    master.to(titleChars, {
      y: 0,
      opacity: 1,
      rotate: 0,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.05,
    });

    master.fromTo(
      imageRef.current,
      {
        opacity: 0,
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      },
      {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "power4.out",
      },
      "-=0.8"
    );

    master.fromTo(
      [nameRef.current, subtitleRef.current],
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
      },
      "-=1"
    );

    const taglineText = "Full Stack Developer";
    taglineRef.current.textContent = "";
    taglineText.split("").forEach((char, i) => {
      master.to(
        taglineRef.current,
        {
          duration: 0.02,
          onStart: () => {
            taglineRef.current.textContent += char;
          },
        },
        `+=${i * 0.01}`
      );
    });

    gsap.to(".portfolio-title", {
      textShadow: "12px 12px 0px rgba(0,0,0,0.15)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      master.kill();
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-background-text">
        <h1 className="portfolio-title" ref={titleRef}>
          {Array.from("PORTFOLIO").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </h1>
        <h3 className="portfolio-subtitle" ref={subtitleRef}>
          & RESUME
        </h3>
      </div>

      <div className="hero-image-container" ref={imageRef}>
        <Image
          src="/hero/profile.png"
          alt="Jashabant Behera"
          fill
          className="hero-image"
          priority
        />
      </div>

      <a
        href="/Jashabant_Behera_Resume.pdf"
        download="Jashabant_Behera_Resume.pdf"
        className="download-btn"
        ref={buttonRef}
        style={{ opacity: 1 }}
      >
        <DownloadIcon size={16} />
        Download Resume
      </a>
      <h2 className="hero-name" ref={nameRef}>
        Jashabant Behera
      </h2>
      <p className="hero-tagline" ref={taglineRef}></p>
    </section>
  );
}
