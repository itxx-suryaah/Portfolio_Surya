"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplashCursor from "@/components/SplashCursor";
import { AboutSection } from "../app/components/about-section";
import { ContactSection } from "../app/components/contact-section";
import { ProjectsSection } from "../app/components/projects-section";
import { ToolsSection } from "../app/components/tools-section";
import { WelcomeSection } from "../app/components/welcome-section";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Welcome (fade-up)
    gsap.from("#welcome", {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#welcome",
        start: "top 85%",
      },
    });

    // About (slide from left)
    gsap.from("#about", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 85%",
      },
    });

    // Tools (slide from right)
    gsap.from("#tools", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#tools",
        start: "top 85%",
      },
    });

    // Projects (zoom-in)
    gsap.from("#projects", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 85%",
      },
    });

    // Contact (fade-up with slight delay)
    gsap.from("#contact", {
      opacity: 0,
      y: 60,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <>
      <SplashCursor />

      <section id="welcome">
        <WelcomeSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="tools">
        <ToolsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
