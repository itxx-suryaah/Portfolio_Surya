"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with a custom CMS, payment gateway integration, and a responsive user interface.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["Web", "React", "Node.js"],
    link: "#",
  },
  {
    id,
    title: "AI-Powered Chatbot",
    description: "A natural language processing chatbot for customer service, built using modern AI frameworks and integrated with existing CRM systems.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "robot chat",
    tags: ["AI", "Python", "NLP"],
    link: "#",
  },
  {
    id,
    title: "Mobile Banking App",
    description: "A secure and user-friendly mobile banking application for iOS and Android, featuring biometric authentication and real-time transaction updates.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile banking",
    tags: ["Mobile", "React Native", "Security"],
    link: "#",
  },
  {
    id,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets, allowing users to discover trends and insights through dynamic charts and graphs.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "charts graphs",
    tags: ["Web", "Data"],
    link: "#",
  },
    {
    id,
    title: "Project Management Tool",
    description: "A collaborative project management tool that helps teams organize tasks, track progress, and communicate effectively.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "team collaboration",
    tags: ["Web", "React", "Firebase"],
    link: "#",
  },
  {
    id,
    title: "Smart Home Controller",
    description: "An IoT application that allows users to control smart home devices from a central mobile app, with support for voice commands.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "smart home",
    tags: ["Mobile", "IoT", "AI"],
    link: "#",
  }
];

export function ProjectShowcase() {
    const [visibleProjects, setVisibleProjects] = useState(2);

    const showMoreProjects = () => {
        setVisibleProjects(projects.length);
    };

    return (
        <section id="projects" className="py-20 md-32 bg-background">
            <div className="container mx-auto px-4 sm-6 lg-8">
                <div className="space-y-24 md-y-32">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <div key={project.id} className="group grid grid-cols-1 md-cols-2 items-center gap-8 md-16">
                            <div className={cn("relative", index % 2 === 1 ? "md-last" : "")}>
                                <div className="relative p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl">
                                    <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 shadow-2xl shadow-primary/10">
                                      <Image
                                          src={project.imageUrl}
                                          alt={project.title}
                                          width={1200}
                                          height={800}
                                          className="rounded-lg object-cover w-full h-full"
                                          data-ai-hint={project.imageHint}
                                      />
                                    </div>
                                </div>
                            </div>
                            
                            <div className={cn("space-y-6 text-center md-left", index % 2 === 1 ? "md-first" : "")}>
                                <p className="text-primary font-bold tracking-wider uppercase">Featured Project</p>
                                <h3 className="font-headline text-4xl md-5xl font-bold">{project.title}</h3>
                                <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
                                    <p className="text-foreground/80 text-lg">{project.description}</p>
                                </div>
                                <div className="flex gap-2 text-primary justify-center md-start">
                                    <Sparkles className="h-6 w-6" />
                                    <Sparkles className="h-6 w-6" />
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
