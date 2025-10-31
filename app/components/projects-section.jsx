"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

// Animation CSS (Tailwind + custom for fade/slide)
const animationStyles = `
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-60px);}
  to { opacity: 1; transform: translateX(0);}
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(60px);}
  to { opacity: 1; transform: translateX(0);}
}
.animate-fade-in-left {
  animation: fadeInLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.animate-fade-in-right {
  animation: fadeInRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
}
`;

const projects = [
  {
    id: 1,
    title: "Moment by Mithu Varsan",
    description: "Developed a responsive Photoshop portfolio website using Next.js as the frontend framework. The design was converted from a Photoshop mockup into clean, production-ready code. I implemented Tailwind CSS for utility-first styling and ensured the layout was fully responsive across all devices. Integrated Material UI (MUI) components to build an interactive image gallery with hover effects and smooth transitions. The site structure is optimized for performance, scalability, and user experience.",
    imageUrl: "/moments.jpeg",
    imageHint: "photoshop portfolio",
    tags: ["Web", "React", "Tailwind CSS", "Material UI"],
    link: "https://moment-by-mithu-varsan.vercel.app/",
  },
  {
    id: 2,
    title: "School Website",
    description: "Built a full-featured school website using React with Tailwind CSS for responsive UI. The project includes a separate admin dashboard and public-facing website, each with dedicated routing and navigation. Integrated RESTful APIs for dynamic data management (e.g., students, teachers, schedules). The frontend is component-based for reusability and scalability. Implemented AI-powered features such as automated suggestions, smart search, or chatbot assistance to enhance user experience. Ensured mobile responsiveness and clean user interface with Tailwind and modern React architecture.",
    imageUrl: "/image.png",
    imageHint: "school website",
    tags: ["Web", "React", "Tailwind CSS", "Material UI", "Next.js","react-icons","API integration"
      ,"ChatGPT","AI","router"
    ],
    link: "https://school-website-surya.vercel.app/",
  },
  {
    id: 3,
    title: "Screenshot-DOCX",
    description: "Screenshot-DOCX is a Next.js-based web application that allows users to capture, edit, and export screenshots directly into a Word-compatible (.docx) format. The project blends features inspired by MS Paint, MS Word, and Canva, providing an all-in-one creative and documentation tool.Users can take or upload screenshots, annotate them with drawing tools, add text or shapes, and instantly export the edited visuals into a structured DOCX file — perfect for creating reports, user guides, or documentation snapshots.",
    imageUrl: "/Screenshot.png",
    imageHint: "Screenshot-DOCX",
    tags: ["Web", "Next.js", "Tailwind CSS", "TypeScript", "React", "Redux", "React Icons", "API Integration", "DOCX Export", "Mixed Mode"],
    link: "https://screenshot-docx-surya.vercel.app/",
  },
  {
    id: 4,
    title: "Job Portal",
    description: "Avangard Job Portal is a multilingual job search and management platform built with Next.js (TypeScript) and Tailwind CSS. It provides a fully responsive and accessible frontend interface designed for Ukrainian, Polish, and Spanish audiences — intentionally excluding English to focus on targeted regional usability.The platform allows users to browse job listings, apply for positions, and manage recruitment workflows through a clean, modern interface. An integrated admin dashboard enables administrators to create, edit, and manage job postings seamlessly.The project emphasizes frontend architecture, internationalization (i18n), and responsive UI design, demonstrating strong capabilities in creating scalable, multilingual web applications with Next.js.",
    imageUrl: "/JobPortal.png",
    imageHint: "Job Portal",
    tags: ["Web", "typescript", "Tailwind CSS", "Next.js","API integration","i18n","reduce","admin dashboard"],
    link: "https://job-portal-surya.vercel.app/",
  }

];

// Helper hook for intersection observer to trigger animation on scroll
function useInViewAnimation(count) {
  const refs = useRef([]);
  const [visible, setVisible] = useState(Array(count).fill(false));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [count]);

  return [refs, visible];
}

export function ProjectsSection() {
    const [visibleProjects, setVisibleProjects] = useState(2);
    const [refs, visible] = useInViewAnimation(visibleProjects);

    const showMoreProjects = () => {
        setVisibleProjects(projects.length);
    };

    // Add animation styles to the page (only once)
    useEffect(() => {
      if (typeof window === "undefined") return;
      if (!document.getElementById("project-animations")) {
        const style = document.createElement("style");
        style.id = "project-animations";
        style.innerHTML = animationStyles;
        document.head.appendChild(style);
      }
    }, []);

    return (
        <section id="projects" className="py-20 md:py-32 bg-card/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                     <h2 className="font-headline text-4xl md:text-5xl font-bold">My Projects</h2>
                     <p className="text-lg max-w-3xl mx-auto text-foreground/80 mt-4">
                        Here are some of the projects I'm proud to have worked on.
                    </p>
                </div>
                <div className="space-y-24 md:space-y-32">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <div
                            key={project.id}
                            ref={el => refs.current[index] = el}
                            data-idx={index}
                            className={cn(
                              "group grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16",
                              // No animation on SSR, animate only when visible
                              visible[index]
                                ? (index % 2 === 0
                                    ? "animate-fade-in-left"
                                    : "animate-fade-in-right")
                                : "opacity-0"
                            )}
                            style={{ minHeight: "1px" }}
                        >
                            <div className={cn("relative", index % 2 === 1 ? "md:order-last" : "")}>
                                <div className="relative p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl">
                                    <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 shadow-2xl shadow-primary/10 overflow-hidden">
                                      <div className="w-[600px] h-[300px] mx-auto overflow-hidden rounded-lg">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            width={400}
                                            height={400}
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                            data-ai-hint={project.imageHint}
                                        />
                                      </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={cn("space-y-6 text-center md:text-left", index % 2 === 1 ? "md:order-first" : "")}>
                                <p className="text-primary font-bold tracking-wider uppercase">Featured Project</p>
                                <h3 className="font-headline text-4xl md:text-5xl font-bold transition-colors duration-300 group-hover:text-primary">{project.title}</h3>
                                <div className="p-6 rounded-lg bg-background/20 border border-border">
                                    <p className="text-foreground/80 text-lg">{project.description}</p>
                                </div>
                                <div className="flex items-center gap-6 justify-center md:justify-start">
                                    <div className="flex gap-2 text-primary">
                                        <Sparkles className="h-6 w-6 transition-transform duration-300 group-hover:rotate-180" />
                                    </div>
                                    <Button asChild variant="link" className="p-0 h-auto text-base text-primary hover:text-primary/90">
                                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                            View Project
                                            <ArrowUpRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleProjects < projects.length && (
                    <div className="text-center mt-24">
                        <Button onClick={showMoreProjects} size="lg">
                            Show More
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
