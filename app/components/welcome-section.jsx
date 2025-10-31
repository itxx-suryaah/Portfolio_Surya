'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download, Github, Linkedin, Instagram, Mail, Eye } from "lucide-react";
import TypingAnimation from "./typing-animation";

export function WelcomeSection() {
    return (
        <section id="home" className="py-10 md:py-10 flex items-center bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Text Content */}
                    <div className="text-center md:text-left animate-in fade-in slide-in-from-left-12 duration-500">
                        <p className="text-xl text-primary font-medium mb-2">Hello, I'm</p>
                        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4 text-foreground">
                            Surya
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6">
                            <span className="inline-block">
                                <TypingAnimation
                                    texts={[
                                        "I'm a Web Developer!",
                                        "I'm a Full-Stack Engineer!",
                                        "I'm a Frontend Developer!",
                                        "I'm a Problem Solver!"
                                    ]}
                                    speed={70}
                                    eraseSpeed={40}
                                    delay={1200}
                                />
                            </span>
                        </h2>
                        <p className="max-w-xl mx-auto md:mx-0 text-2xl font-semibold mb-8 bg-gradient-to-r from-primary via-pink-500 to-purple-500 bg-clip-text text-transparent leading-snug">
                            Building Scalable Modern <br />
                            Websites for the Future
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                            <Button
                                asChild
                                size="lg"
                                className="transition-transform duration-300 hover:scale-105 focus:scale-105"
                            >
                                <Link href="/Surya%20T%20Resume.pdf" target="_blank" rel="noopener noreferrer">
                                    View CV
                                    <Eye className="ml-2 h-5 w-5 animate-bounce" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="transition-transform duration-300 hover:scale-105 focus:scale-105"
                            >
                                <Link href="#contact">
                                    Contact
                                    <Mail className="ml-2 h-5 w-5 animate-pulse" />
                                </Link>
                            </Button>
                        </div>

                        <div className="flex justify-center md:justify-start gap-6">
                            <Link
                                href="mailto:surya232043@gmail.com"
                                aria-label="Email"
                                className="group text-foreground/60 hover:text-yellow-500 transition-colors"
                            >
                                <span className="relative flex items-center justify-center">
                                    <Mail className="h-6 w-6 transition-transform duration-300 hover:scale-125 hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.7)] group-hover:text-yellow-500" />
                                    <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-sm" style={{boxShadow: '0 0 16px 4px #ffe066'}}></span>
                                </span>
                            </Link>
                            <Link
                                href="https://github.com/itxx-suryaah"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="group text-foreground/60 hover:text-blue-500 transition-colors"
                            >
                                <span className="relative flex items-center justify-center">
                                    <Github className="h-6 w-6 transition-transform duration-300 hover:scale-125 hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] group-hover:text-blue-500" />
                                    <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-sm" style={{boxShadow: '0 0 16px 4px #3b82f6'}}></span>
                                </span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/surya-b-com-ca-6b73b1292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="group text-foreground/60 hover:text-sky-600 transition-colors"
                            >
                                <span className="relative flex items-center justify-center">
                                    <Linkedin className="h-6 w-6 transition-transform duration-300 hover:scale-125 hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_rgba(2,132,199,0.7)] group-hover:text-sky-600" />
                                    <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-sm" style={{boxShadow: '0 0 16px 4px #0284c7'}}></span>
                                </span>
                            </Link>
                            <Link
                                href="https://www.instagram.com/itxx_suryaah?igsh=ZXc1azh2MXk5bmtq"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="group text-foreground/60 hover:text-pink-500 transition-colors"
                            >
                                <span className="relative flex items-center justify-center">
                                    <Instagram className="h-6 w-6 transition-transform duration-300 hover:scale-125 hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.7)] group-hover:text-pink-500" />
                                    <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-sm" style={{boxShadow: '0 0 16px 4px #ec4899'}}></span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Image in a Box */}
                    <div className="group relative animate-in fade-in slide-in-from-right-12 duration-500 hidden md:flex justify-center items-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-80 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                            {/* Animated background and border */}
                            <div className="absolute inset-0 bg-card/80 dark:bg-background/80 rounded-xl transform -rotate-6 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105"></div>
                            <div className="absolute inset-0 border-2 border-primary rounded-xl transform rotate-6 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105"></div>
                            <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-primary/30">
                                <Image
                                    src="/WhatsApp Image 2025-07-01 at 16.29.08_c5a71e8c.jpg"
                                    alt="Surya's Profile Picture"
                                    width={400}
                                    height={400}
                                    className="object-cover  scale-100 group-hover:scale-110 transition-transform duration-700"
                                    data-ai-hint="man portrait"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

