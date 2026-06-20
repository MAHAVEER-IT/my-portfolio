"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Layers } from "lucide-react";
import { Github } from "@/components/Icons";

// Projects Data
const projects = [
  {
    id: "geo-guardian",
    name: "Geo-Guardian",
    tagline: "Real-time danger zone management platform",
    description: "A geospatial safety system designed to monitor, create, and manage danger zones in real-time. Features an interactive Leaflet control panel for administrators to draw boundary maps and receive instant connection alerts from mobile clients.",
    image: "/images/geo_guardian.png",
    tech: ["React", "Vite", "Leaflet", "Socket.io Client", "Axios", "Tailwind CSS", "Express.js", "MongoDB"],
    category: "Full Stack",
    liveUrl: "https://geo-guardian.netlify.app/",
    githubUrl: "https://github.com/MAHAVEER-IT/Geo-Guardian",
  },
  {
    id: "note-mate",
    name: "NoteMate",
    tagline: "AI study planner & productivity dashboard",
    description: "An intelligent workspace featuring draggable sticky notes, note categorization, JWT session credentials, and an AI study planner powered by the NVIDIA API to generate customized academic schedules.",
    image: "/images/note_mate.png",
    tech: ["React", "Vite", "NVIDIA API", "React Router", "Context API", "React Draggable", "Tailwind CSS", "MongoDB"],
    category: "AI",
    liveUrl: "https://note-mate-sage.vercel.app/",
    githubUrl: "https://github.com/MAHAVEER-IT/Note-Mate",
  },
  {
    id: "sow-grow",
    name: "Sow & Grow",
    tagline: "Voice-first AI farm companion app",
    description: "A Material 3 mobile assistant for farmers, featuring Gemini Flash 2.0 conversational chat, speech-to-text, weather calendars, livestock vaccination tracking, and dynamic disease heatmaps using OpenStreetMap.",
    image: "/images/sow_grow.png",
    tech: ["Flutter", "Dart", "Provider", "Gemini AI", "Firebase", "Flutter Map", "OpenStreetMap"],
    category: "Mobile",
    liveUrl: "https://www.canva.com/design/DAGrAd4CWMI/JwQ19kPFiNsjxFi0YFJ9_A/watch?utm_content=DAGrAd4CWMI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0409f5f144",
    githubUrl: "https://github.com/MAHAVEER-IT/Sow-Grow",
  },
  {
    id: "pdf-flow",
    name: "PDF Flow",
    tagline: "Elegant browser-based document converter",
    description: "A zero-clutter, high-performance web utility that converts DOCX, PPT, XLSX, and images directly to PDF format, or merges multiple PDFs in the browser using client-side document compilers.",
    image: "/images/pdf_flow.png",
    tech: ["Next.js 15", "React 19", "Tailwind CSS 4", "pdf-lib", "SWC Compiler"],
    category: "Utility",
    liveUrl: "https://pdf-flow-smoky.vercel.app/",
    githubUrl: "https://github.com/MAHAVEER-IT/PDF_FLOW.git",
  },
  {
    id: "parking-tracker",
    name: "Visitor Parking Tracker",
    tagline: "Smart parking slots registration portal",
    description: "A premium booking and registration dashboard for commercial and residential facilities, featuring vehicle categorization, duration calculators, Google Sign-In, and live Firestore slot occupancy tracking.",
    image: "/images/parking_management.png",
    tech: ["Next.js 15", "React 19", "Tailwind CSS", "React Hook Form", "Firebase Auth", "Firestore"],
    category: "Full Stack",
    liveUrl: "https://visitor-parking-tracker.vercel.app/",
    githubUrl: "https://github.com/MAHAVEER-IT/visitor-parking-tracker",
  },
  {
    id: "bank-inishit",
    name: "Bank Inishit",
    tagline: "Unified multi-bank utility app",
    description: "A secure banking dashboard consolidating key operations for SBI, Indian Bank, Union Bank, and KVB. Provides toll-free dial shortcuts, branch/ATM locators using Google Maps, gold/personal loan calculators, and expense trackers.",
    image: "/images/banking_application.png",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "Currency API"],
    category: "Mobile",
    liveUrl: "https://drive.google.com/drive/folders/13j3pnF7rVRWrvD1OvyUghWhdSVP8HYQR",
    githubUrl: "https://github.com/MAHAVEER-IT/bank_inish",
  },
];

const categories = ["All", "Full Stack", "AI", "Mobile", "Utility"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Gradient Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text font-heading">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-brand-text-muted mt-3 max-w-xl">
            Each project represents a production-ready application solving actual user issues with high-quality tech.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "bg-brand-card text-brand-text-muted hover:text-brand-text border border-brand-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Alternating Stack */}
        <div className="flex flex-col gap-24 md:gap-36">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                >
                  
                  {/* Project Banner Image (Alternating sides) */}
                  <div className={`lg:col-span-7 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <Link href={`/projects/${project.id}`} className="group block cursor-pointer">
                      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-brand-border bg-brand-card shadow-brand group-hover:shadow-brand-hover group-hover:border-primary/20 transition-all duration-500 aspect-[16/10]">
                        
                        {/* Hover glow highlight */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover scale-[1.01] group-hover:scale-[1.05] transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 750px"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Project Details */}
                  <div className={`lg:col-span-5 flex flex-col items-start ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 dark:bg-primary/20 text-primary mb-4">
                      <Layers size={12} />
                      <span>{project.category}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text font-heading leading-tight mb-2">
                      {project.name}
                    </h3>
                    
                    <p className="text-base font-semibold text-brand-text-muted mb-4">
                      {project.tagline}
                    </p>

                    <p className="text-base text-brand-text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-brand-card text-brand-text border border-brand-border/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary/95 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        Read Case Study
                        <ArrowRight size={16} />
                      </Link>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full border border-brand-border bg-brand-card hover:text-primary transition-all hover:scale-[1.04] cursor-pointer"
                          title="View GitHub Repository"
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full border border-brand-border bg-brand-card hover:text-primary transition-all hover:scale-[1.04] cursor-pointer"
                          title="Open Live Demonstration"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
