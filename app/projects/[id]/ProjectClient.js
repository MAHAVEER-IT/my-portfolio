"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2, ShieldAlert, Cpu, Sparkles, Database } from "lucide-react";
import { Github } from "@/components/Icons";
import { motion } from "framer-motion";

export default function ProjectClient({ project, id }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Sync theme class
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg transition-colors duration-300 relative pb-24">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-primary/5 via-accent/3 to-transparent pointer-events-none" />

      {/* Header back bar */}
      <header className="sticky top-0 z-30 w-full py-4 border-b border-brand-border/40 bg-brand-bg/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-text-muted hover:text-primary transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:translate-x-[-2px] transition-transform" />
            Back to projects
          </Link>

          <span className="text-xs font-bold uppercase tracking-wider text-brand-text-muted">
            Case Study
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 pt-12 relative z-10">
        
        {/* Project Intro */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-left"
        >
          <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
            {project.category}
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-brand-text font-heading mt-2 mb-4 leading-tight">
            {project.name}
          </h1>
          <p className="text-xl sm:text-2xl text-brand-text-muted max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full aspect-[16/9] md:aspect-[16/8] rounded-[28px] overflow-hidden border border-brand-border bg-brand-card shadow-brand mb-12 sm:mb-16"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          
          {/* Left Area (8 cols): Body content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* The Challenge */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl border border-brand-border bg-brand-card shadow-brand"
            >
              <h2 className="text-2xl font-bold text-brand-text font-heading flex items-center gap-2 mb-4">
                <ShieldAlert size={20} className="text-red-500" />
                The Challenge
              </h2>
              <p className="text-base sm:text-lg text-brand-text-muted leading-relaxed">
                {project.challenge}
              </p>
            </motion.section>

            {/* The Solution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl border border-brand-border bg-brand-card shadow-brand"
            >
              <h2 className="text-2xl font-bold text-brand-text font-heading flex items-center gap-2 mb-4">
                <Cpu size={20} className="text-primary" />
                Engineering Solution
              </h2>
              <p className="text-base sm:text-lg text-brand-text-muted leading-relaxed">
                {project.solution}
              </p>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-2xl font-bold text-brand-text font-heading flex items-center gap-2 mb-2">
                <Sparkles size={20} className="text-primary" />
                Key Product Capabilities
              </h2>
              <div className="flex flex-col gap-3">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-2xl border border-brand-border/60 bg-brand-card">
                    <span className="text-primary font-bold text-sm">0{i+1}.</span>
                    <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed">{h}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Code Implementation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-2xl font-bold text-brand-text font-heading flex items-center gap-2 mb-2">
                <Code2 size={20} className="text-primary" />
                Code Implementation
              </h2>
              
              <div className="rounded-2xl border border-brand-border bg-brand-card overflow-hidden shadow-brand">
                {/* File Header */}
                <div className="px-6 py-3 border-b border-brand-border bg-brand-bg flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-text-muted">implementation_module.js</span>
                  <span className="text-[10px] uppercase font-bold text-brand-text-muted/60">
                    {id === "sow-grow" || id === "bank-inishit" ? "dart" : "javascript"}
                  </span>
                </div>
                
                {/* Code Body */}
                <pre className="p-6 overflow-x-auto text-xs sm:text-sm font-mono text-[#0F172A] dark:text-[#E2E8F0] leading-relaxed bg-[#F8FAFC] dark:bg-[#0D1322] no-scrollbar">
                  <code>{project.code}</code>
                </pre>
              </div>
            </motion.section>

          </div>

          {/* Right Area (4 cols): Meta details & System architecture */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Project metadata */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl border border-brand-border bg-brand-card shadow-brand flex flex-col gap-6"
            >
              <div>
                <h4 className="text-xs font-bold text-brand-text-muted uppercase tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-brand-bg text-brand-text border border-brand-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-brand-border/60 pt-6">
                <h4 className="text-xs font-bold text-brand-text-muted uppercase tracking-wider mb-4">Direct Actions</h4>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-white bg-primary hover:bg-primary/95 transition-all shadow-md shadow-primary/10 cursor-pointer"
                  >
                    Open Live App
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-brand-text bg-brand-card hover:bg-brand-border/40 border border-brand-border transition-all cursor-pointer"
                  >
                    View Source Code
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.section>

            {/* Architecture breakdown */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl border border-brand-border bg-brand-card shadow-brand"
            >
              <h3 className="text-lg font-bold text-brand-text font-heading flex items-center gap-2 mb-4">
                <Database size={16} className="text-primary" />
                Architecture Stack
              </h3>
              
              <div className="flex flex-col gap-4">
                {project.architecture.map((layer, idx) => (
                  <div key={layer.name} className="relative flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm font-bold text-brand-text">
                      <span className="w-5 h-5 rounded bg-primary/10 dark:bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span>{layer.name}</span>
                    </div>
                    <p className="text-xs text-brand-text-muted leading-relaxed pl-7">
                      {layer.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

        </div>

      </main>
    </div>
  );
}
