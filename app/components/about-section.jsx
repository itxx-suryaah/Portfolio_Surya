import { Award, Briefcase, Download, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const stats = [
    { icon: <Award className="h-8 w-8 text-primary" />, value: "Fresher", label: "Experience" },
    { icon: <Briefcase className="h-8 w-8 text-primary" />, value: "2+", label: "Projects Completed" },
];

export function AboutSection() {
    return (
        <section id="about" className="py-20 md-32 bg-card/10">
            <div className="container mx-auto px-4 sm-6 lg-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="animate-in fade-in slide-in-from-bottom-12 duration-500">
                        <h2 className="font-headline text-4xl md-5xl font-bold mb-6">About Me</h2>
                        <p className="text-lg text-foreground/80 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                            Hi, I'm <span className="font-semibold text-primary">Surya</span>, a passionate <span className="font-semibold">Frontend &amp; Full Stack MERN Developer</span>.<br />
                            <span className="inline-block">
                                I've completed a Full Stack Development course with hands-on projects.
                                Skilled in React, Node.js, MongoDB, Express, and Tailwind CSS.
                                I build responsive, user-friendly websites and web apps.
                                I'm looking for a fresher-level developer role to grow and contribute.
                            </span>
                        </p>
                        
                    <div className="grid grid-cols-2 gap-8 mb-12">
  {stats.map((stat) => (
    <div
      key={stat.label}
      className="relative text-center p-6 rounded-2xl shadow-lg border border-gray-200/40 
                 bg-gradient-to-tr from-white/70 via-gray-100/50 to-white/70
                 backdrop-blur-xl overflow-hidden group transition-transform 
                 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Animated liquid gradient overlay (light tones) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] 
                      from-primary/10 via-blue-200/20 to-transparent 
                      opacity-80 blur-2xl animate-pulse"></div>

      {/* Icon + Text */}
      {stat.icon}
      <p className="text-3xl font-bold mt-3 text-gray-900">{stat.value}</p>
      <p className="text-gray-600">{stat.label}</p>

      {/* Subtle shimmer effect */}
      <span className="absolute top-0 left-[-100%] w-full h-full 
                       bg-gradient-to-r from-transparent via-white/40 to-transparent 
                       transform skew-x-12 group-hover:animate-slide"></span>
    </div>
  ))}
</div>

<div className="flex justify-center items-center gap-4">
  <Button
    asChild
    size="lg"
    className="transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
  >
    <Link href="/Surya%20T%20Resume.pdf" download rel="noopener noreferrer">
      Download CV
      <Download className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  </Button>

  <Button
    asChild
    size="lg"
    variant="outline"
    className="transition-transform duration-300 hover:scale-105 hover:shadow-md hover:shadow-gray-400/40"
  >
    <Link 
      href="/course-certificate.jpg" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Certificate
      <FileText className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
    </Link>
  </Button>
</div>

                    </div>
                </div>
            </div>
        </section>
    );
}



