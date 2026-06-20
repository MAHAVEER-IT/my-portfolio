"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Better Tomorrow",
    role: "Full Stack Developer Intern",
    period: "Feb 2025 – Mar 2025",
    location: "Remote / Hybrid",
    description: "Developed and shipped AI-integrated products, focusing on MERN stack architecture, modern React frontends, and API performance.",
    highlights: [
      {
        title: "Built AI-Powered NoteMate",
        desc: "Designed and engineered NoteMate, an intelligent, note-taking app that automatically structures meeting logs and generates actionable follow-ups.",
      },
      {
        title: "OpenAI Integration",
        desc: "Integrated OpenAI's GPT models via streaming APIs to execute semantic search and produce context-aware summarizations.",
      },
      {
        title: "MERN Stack Development",
        desc: "Refactored Express.js routes and MongoDB schemas to reduce query latency by 20% and establish robust model relationships.",
      },
      {
        title: "Deployment & Infrastructure",
        desc: "Set up CI/CD pipelines to build and deploy frontend assets on Vercel and background services on Render, securing 99.9% uptime.",
      },
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Vercel", "Render", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Grid Mesh & Light Effects */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Professional Path</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text font-heading">
            Experience Timeline
          </h2>
          <p className="text-base md:text-lg text-brand-text-muted mt-3 max-w-xl">
            Hands-on software development internship building production applications and AI integrations.
          </p>
        </div>

        {/* Experience Timeline Layout */}
        <div className="relative">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative p-6 sm:p-10 rounded-3xl border border-brand-border bg-brand-card shadow-brand hover:shadow-brand-hover hover:border-primary/20 transition-all duration-300"
            >
              {/* Top Banner Area */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-brand-border/60 pb-6 mb-8 w-full">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text font-heading">{exp.company}</h3>
                  </div>
                  <h4 className="text-lg font-medium text-primary mt-1">{exp.role}</h4>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-2 text-sm text-brand-text-muted">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Calendar size={14} className="text-primary" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Main Content Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Summary & Tech Stack */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div>
                    <h5 className="text-xs font-bold tracking-wider text-brand-text-muted uppercase mb-2">Scope</h5>
                    <p className="text-sm md:text-base text-brand-text-muted leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold tracking-wider text-brand-text-muted uppercase mb-3">Technologies Deployed</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-brand-border/40 text-brand-text border border-brand-border/40 hover:border-primary/20 hover:bg-brand-card transition-colors duration-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Detailed Bullet Highlight Panels */}
                <div className="lg:col-span-8 flex flex-col gap-5">
                  <h5 className="text-xs font-bold tracking-wider text-brand-text-muted uppercase mb-1">Key Outcomes</h5>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {exp.highlights.map((hl, hIdx) => (
                      <div
                        key={hl.title}
                        className="p-5 rounded-2xl border border-brand-border/60 bg-brand-bg/50 hover:bg-brand-card hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                          <CheckCircle2 size={16} />
                          <span>{hl.title}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                          {hl.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
