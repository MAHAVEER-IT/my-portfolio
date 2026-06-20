"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles, Code2, Cpu, Globe } from "lucide-react";

// Timeline Milestones
const timelineData = [
  {
    year: "2023",
    title: "Started Engineering",
    description: "B.Tech in Information Technology at Sri Eshwar College of Engineering. Commenced journey into algorithms, computer systems, and full-stack development foundations.",
    icon: GraduationCap,
    category: "education",
  },
  {
    year: "2025",
    title: "Internship at Better Tomorrow",
    description: "Joined as a Full Stack Developer Intern. Spearheaded AI integration projects and developed production-ready Next.js & MERN products.",
    icon: Briefcase,
    category: "work",
  },
  {
    year: "2025",
    title: "Built Multiple Real-world Products",
    description: "Authored & launched scalable apps (Geo-Guardian, NoteMate, Sow & Grow) resolving concrete real-world pain points.",
    icon: Sparkles,
    category: "project",
  },
  {
    year: "2027",
    title: "Graduation",
    description: "Completed B.Tech. Embarking on full-time engineering career to deploy scalable AI systems and high-fidelity interfaces.",
    icon: GraduationCap,
    category: "education",
  },
];

// Specializations
const specializations = [
  { name: "MERN Stack Development", icon: Code2, desc: "Building full-stack web architectures with React, Node, Express, and MongoDB." },
  { name: "Next.js & App Router", icon: Globe, desc: "Structuring highly optimized, server-rendered web applications with premium transitions." },
  { name: "Mobile Development (Flutter)", icon: Cpu, desc: "Crafting compiled native iOS and Android apps using single-codebase Flutter framework." },
  { name: "AI Integration & Product Design", icon: Sparkles, desc: "Embedding LLMs, vector search engines, and prompt engineering paradigms into core services." },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Gradients */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 md:mb-20">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text font-heading leading-tight">
            Who Am I?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Story & Specializations */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-2xl font-bold text-brand-text font-heading">
                A passionate software engineer blending design and performance.
              </h3>
              
              <p className="text-base md:text-lg text-brand-text-muted leading-relaxed">
                I am a final-year B.Tech Information Technology student at Sri Eshwar College of Engineering. I possess a deep passion for building scalable software systems, modern web applications, AI-integrated workflows, and high-fidelity mobile experiences.
              </p>
              
              <p className="text-base md:text-lg text-brand-text-muted leading-relaxed">
                I focus on writing clean, clean code, optimizing backend systems, and crafting responsive user interfaces that deliver delightful digital stories. My approach is centered on "Elegant Simplicity"—stripping away clutter to emphasize performance and value.
              </p>
            </motion.div>

            {/* Specializations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {specializations.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <motion.div
                    key={spec.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 rounded-2xl border border-brand-border bg-brand-card hover:border-primary/30 transition-all shadow-brand hover:shadow-brand-hover hover:scale-[1.01]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-brand-text mb-1.5">{spec.name}</h4>
                    <p className="text-xs text-brand-text-muted leading-relaxed">{spec.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Animated Vertical Timeline */}
          <div className="lg:col-span-6 relative pl-6 sm:pl-8">
            
            {/* Timeline Vertical Track Line */}
            <div className="absolute left-[27px] sm:left-[35px] top-4 bottom-4 w-[2px] bg-brand-border dark:bg-brand-border/40" />
            
            {/* Timeline Nodes */}
            <div className="flex flex-col gap-10 relative">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={`${item.year}-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex gap-6 relative"
                  >
                    {/* Floating Node Icon Indicator */}
                    <div className="relative z-10 flex items-center justify-center w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] rounded-full bg-brand-card border-2 border-primary text-primary shadow-sm mt-1 transform translate-x-[-12px] sm:translate-x-[-16px]">
                      <Icon size={12} className="sm:w-3.5 sm:h-3.5" />
                    </div>

                    {/* Timeline Text Card */}
                    <div className="flex-1 p-6 rounded-2xl border border-brand-border bg-brand-card shadow-brand hover:border-brand-border/80 transition-all">
                      <div className="flex flex-wrap items-baseline gap-2 mb-2">
                        <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/8 dark:bg-primary/20">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-bold text-brand-text font-heading">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm text-brand-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
