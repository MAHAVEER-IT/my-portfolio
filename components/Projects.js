"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Layers, Briefcase } from "lucide-react";
import { Github } from "@/components/Icons";
import CherryBlossomPetals from "@/components/hero/CherryBlossomPetals";

// Projects Data
const projects = [
  {
    id: "pandivo-tv",
    name: "Pandivo TV",
    tagline: "AI music & continuous DJ experience for TV",
    description:
      "A 10-foot living room music experience featuring an autonomous Continuous AI DJ, on-device offline voice search via Whistle AI, and USB plug-and-play playback for Fire TV & Android TV.",
    image: "/images/pandivo_tv.jpg",
    tech: [
      "React Native TV",
      "AWS Bedrock",
      "Gemini AI",
      "Whistle AI",
      "DynamoDB",
      "SQLite",
    ],
    category: "AI",
    liveUrl: "https://github.com/MAHAVEER-IT/pandivo-tv/releases/tag/v1.0.0",
    githubUrl: "https://github.com/MAHAVEER-IT/pandivo-tv",
  },
  {
    id: "geo-guardian",
    name: "Geo-Guardian",
    tagline: "Real-time danger zone management platform",
    description:
      "A geospatial safety system designed to monitor, create, and manage danger zones in real-time. Features an interactive Leaflet control panel for administrators to draw boundary maps and receive instant connection alerts from mobile clients.",
    image: "/images/geo_guardian.jpg",
    tech: [
      "React",
      "Vite",
      "Leaflet",
      "Socket.io Client",
      "Axios",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
    ],
    category: "Full Stack",
    liveUrl: "https://geo-guardian.netlify.app/",
    githubUrl: "https://github.com/MAHAVEER-IT/Geo-Guardian",
  },
  {
    id: "note-mate",
    name: "NoteMate",
    tagline: "AI study planner & productivity dashboard",
    description:
      "An intelligent workspace featuring draggable sticky notes, note categorization, JWT session credentials, and an AI study planner powered by the NVIDIA API to generate customized academic schedules.",
    image: "/images/note_mate.jpg",
    tech: [
      "React",
      "Vite",
      "NVIDIA API",
      "React Router",
      "Context API",
      "React Draggable",
      "Tailwind CSS",
      "MongoDB",
    ],
    category: "AI",
    liveUrl: "https://note-mate-sage.vercel.app/",
    githubUrl: "https://github.com/MAHAVEER-IT/Note-Mate",
  },
  {
    id: "pdf-flow",
    name: "PDF Flow",
    tagline: "Elegant browser-based document converter",
    description:
      "A zero-clutter, high-performance web utility that converts DOCX, PPT, XLSX, and images directly to PDF format, or merges multiple PDFs in the browser using client-side document compilers.",
    image: "/images/pdf_flow.jpg",
    tech: ["Next.js 15", "React 19", "Tailwind CSS 4", "pdf-lib", "SWC Compiler"],
    category: "Utility",
    liveUrl: "https://pdf-flow-smoky.vercel.app/",
    githubUrl: "https://github.com/MAHAVEER-IT/PDF_FLOW.git",
  },
];

const categories = ["All", "Full Stack", "AI", "Utility"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
      className="relative w-full overflow-hidden bg-[#FFFDF9] text-[#17191F] select-none md:select-auto font-sans scroll-mt-20 pt-16 sm:pt-20 pb-24 md:pb-32 px-6 md:px-12"
    >
      {/* 1. Full-Width Background: Chinese Village Lantern Festival Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu will-change-transform backface-hidden [contain:paint]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/chinese-village-lantern-festival.webp"
          alt="Traditional Chinese festival village with glowing lanterns, pagodas, stone bridges and cherry blossoms"
          className="h-full w-full object-cover object-center transform-gpu backface-hidden opacity-75"
          fetchPriority="high"
          decoding="async"
        />

        {/* Balanced Porcelain Veil - Keeps festival village visible as an atmospheric backdrop while spotlighting projects */}
        <div
          className="
            absolute inset-0
            bg-[#FFFDF9]/50
            md:bg-[radial-gradient(ellipse_at_center,_rgba(255,253,249,0.58)_0%,_rgba(255,253,249,0.42)_55%,_rgba(255,253,249,0.65)_100%)]
          "
          aria-hidden="true"
        />

        {/* Soft transition feathering at section edges */}
        <div
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FFFDF9]/70 via-[#FFFDF9]/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FFFDF9]/70 via-[#FFFDF9]/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* 2. Seamless Falling Sakura Petals Drift */}
      <CherryBlossomPetals />

      {/* 3. Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F0] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#E03131] border border-[#FEE2E2] shadow-xs">
            <Briefcase className="h-4 w-4 text-[#E03131]" />
            <span>My Work</span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#17191F] font-heading leading-[1.12]">
            Featured <span className="text-[#E03131]">Projects</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto font-medium leading-relaxed">
            Each project represents a production-ready application solving actual user issues with high-quality tech.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex justify-center flex-wrap gap-2 p-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/90 shadow-xs max-w-fit mx-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#E03131]"
                      : "text-[#6B7280] hover:text-[#17191F]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProjectCategory"
                      className="absolute inset-0 rounded-full bg-[#FFF0F0] border border-[#FEE2E2] shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Alternating Stack */}
        <div className="flex flex-col gap-20 md:gap-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  {/* Project Banner Image (Alternating sides) */}
                  <div
                    className={`lg:col-span-7 relative ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      className="group block cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/90 bg-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] group-hover:border-[#E03131]/30 transition-all duration-500 aspect-[16/9]">
                        {/* Hover glow highlight */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#E03131]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          priority={index === 0}
                          className="object-cover scale-[1.01] group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                          sizes="(max-width: 1024px) 100vw, 750px"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Project Details Card */}
                  <div
                    className={`lg:col-span-5 flex flex-col items-start p-6 sm:p-7 rounded-[24px] sm:rounded-[28px] bg-white/90 backdrop-blur-md border border-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_45px_rgba(0,0,0,0.09)] transition-all duration-300 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Category Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-[#FFF0F0] text-[#E03131] border border-[#FEE2E2] mb-2.5 shadow-2xs">
                      <Layers size={12} className="text-[#E03131]" />
                      <span>{project.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17191F] font-heading leading-tight mb-1.5">
                      <Link
                        href={`/projects/${project.id}`}
                        className="hover:text-[#E03131] transition-colors"
                      >
                        {project.name}
                      </Link>
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm sm:text-base font-semibold text-[#E03131] mb-2.5">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-4 font-medium">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#374151] border border-[#17191F]/8 shadow-2xs hover:border-[#E03131]/30 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#FFFDF9] bg-[#17191F] hover:bg-[#E03131] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                      >
                        Read Case Study
                        <ArrowRight size={16} />
                      </Link>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full border border-white/90 bg-white/90 text-[#17191F] hover:text-[#E03131] hover:border-[#E03131]/30 hover:scale-105 shadow-xs transition-all duration-200 cursor-pointer"
                          title="View GitHub Repository"
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full border border-white/90 bg-white/90 text-[#17191F] hover:text-[#E03131] hover:border-[#E03131]/30 hover:scale-105 shadow-xs transition-all duration-200 cursor-pointer"
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
