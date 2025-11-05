"use client";

import { Award, Briefcase, FileText, Download, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const stats = [
  {
    icon: <Award className="h-10 w-10 text-white" />,
    value: "6 Months",
    label: "Experience",
    color: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    icon: <Award className="h-10 w-10 text-white" />,
    value: "3 Months",
    label: "Internship",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-white" />,
    value: "4+",
    label: "Projects Completed",
    color: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    value: "6 Months",
    label: "Course Duration",
    color: "from-blue-500 via-sky-500 to-indigo-500",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-32  transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-16 leading-relaxed">
            Hi, I'm <span className="font-semibold text-primary">Surya</span>, a{" "}
            <span className="font-semibold">Frontend &amp; Full Stack MERN Developer</span>.  
            I’ve completed a 6-month Full Stack Development course and a 3-month internship, gaining practical experience with
            <span className="font-medium text-primary"> React, Node.js, MongoDB, Express, and Tailwind CSS</span>.  
            I’m passionate about building modern, responsive, and user-friendly web applications that combine performance with design excellence.
          </p>

          {/* Modern Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-2xl shadow-lg border border-white/10
                            bg-gradient-to-br ${stat.color} text-white p-[1px] transition-all duration-500
                            hover:scale-[1.03] hover:shadow-2xl hover:border-transparent`}
              >
                <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-6 h-full flex flex-col items-center justify-center text-center transition-all">
                  <div className="p-3 rounded-full bg-white/20 mb-4">{stat.icon}</div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm mt-2 tracking-wide uppercase opacity-90">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Download CV */}
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white border-0 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/Surya T Resume (1).pdf" download rel="noopener noreferrer">
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            {/* Course Certificate */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Link href="/course-certificate.jpg" target="_blank" rel="noopener noreferrer">
                Course Certificate
                <FileText className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            {/* Internship Certificate */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-2 border-teal-500 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Link href="/InternCertificate.pdf" target="_blank" rel="noopener noreferrer">
                Internship Certificate
                <FileText className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            {/* Experience Certificate */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-2 border-pink-500 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Link href="/workExperainceCertificate.pdf" target="_blank" rel="noopener noreferrer">
                Experience Certificate
                <FileText className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
