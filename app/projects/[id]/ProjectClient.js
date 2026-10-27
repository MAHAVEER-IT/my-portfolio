"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  ShieldAlert,
  Cpu,
  Sparkles,
  Database,
  Layers,
  Download,
} from "lucide-react";
import { Github } from "@/components/Icons";
import { motion } from "framer-motion";
import CherryBlossomPetals from "@/components/hero/CherryBlossomPetals";

export default function ProjectClient({ project, id }) {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#17191F] relative pb-28 font-sans overflow-hidden">
      {/* 1. Full-Width Background: Chinese Village Lantern Festival Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu will-change-transform backface-hidden [contain:paint]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/chinese-village-lantern-festival.webp"
          alt="Traditional Chinese festival village background"
          className="h-full w-full object-cover object-center transform-gpu backface-hidden opacity-60"
          fetchPriority="high"
          decoding="async"
        />

        {/* Soft Porcelain Readability Diffuse Vignette */}
        <div
          className="
            absolute inset-0
            bg-[#FFFDF9]/65
            md:bg-[radial-gradient(ellipse_at_center,_rgba(255,253,249,0.72)_0%,_rgba(255,253,249,0.52)_55%,_rgba(255,253,249,0.82)_100%)]
          "
          aria-hidden="true"
        />

        {/* Top & Bottom Soft Feathering */}
        <div
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FFFDF9]/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FFFDF9] via-[#FFFDF9]/80 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* 2. Seamless Falling Sakura Petals Drift */}
      <CherryBlossomPetals />

      {/* 3. Sticky Top Header Navigation */}
      <header className="sticky top-0 z-30 w-full py-4 border-b border-[#17191F]/8 bg-[#FFFDF9]/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B7280] hover:text-[#E03131] transition-colors cursor-pointer group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Projects</span>
          </Link>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF0F0] text-[#E03131] border border-[#FEE2E2] shadow-2xs">
            <Layers size={12} className="text-[#E03131]" />
            Case Study
          </span>
        </div>
      </header>

      {/* 4. Main Case Study Content Container */}
      <main className="max-w-5xl mx-auto px-6 pt-10 sm:pt-14 relative z-10">
        {/* Project Intro Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-left"
        >
          {/* Category Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFF0F0] text-[#E03131] border border-[#FEE2E2] mb-3 shadow-2xs">
            <Layers size={13} className="text-[#E03131]" />
            <span>{project.category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#17191F] font-heading mt-2 mb-3 leading-[1.12]">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl text-[#E03131] font-semibold max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </motion.div>

        {/* Project Cover Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/90 bg-white/90 shadow-[0_16px_50px_rgba(0,0,0,0.08)] mb-12 sm:mb-16"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column (8 cols): Deep Technical Overview */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* The Challenge */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/90 bg-white/92 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#17191F] font-heading flex items-center gap-2.5 mb-3.5">
                <ShieldAlert size={22} className="text-[#E03131]" />
                The Challenge
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed font-medium">
                {project.challenge}
              </p>
            </motion.section>

            {/* Engineering Solution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/90 bg-white/92 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#17191F] font-heading flex items-center gap-2.5 mb-3.5">
                <Cpu size={22} className="text-[#E03131]" />
                Engineering Solution
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed font-medium">
                {project.solution}
              </p>
            </motion.section>

            {/* Key Product Capabilities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/90 bg-white/92 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#17191F] font-heading flex items-center gap-2.5 mb-4">
                <Sparkles size={22} className="text-[#E03131]" />
                Key Product Capabilities
              </h2>
              <div className="flex flex-col gap-3">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl border border-[#17191F]/6 bg-white/70"
                  >
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-lg text-xs font-bold bg-[#FFF0F0] text-[#E03131] border border-[#FEE2E2] shrink-0">
                      0{i + 1}
                    </span>
                    <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-medium">
                      {h}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Code Implementation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/90 bg-white/92 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#17191F] font-heading flex items-center gap-2.5 mb-4">
                <Code2 size={22} className="text-[#E03131]" />
                Code Implementation
              </h2>

              <div className="rounded-2xl border border-[#17191F]/10 overflow-hidden shadow-xs">
                {/* File Header */}
                <div className="px-5 py-2.5 border-b border-[#17191F]/8 bg-[#F4F4F5] flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-[#6B7280]">
                    implementation_module.js
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#E03131] bg-[#FFF0F0] px-2 py-0.5 rounded border border-[#FEE2E2]">
                    {id === "sow-grow" || id === "bank-inishit"
                      ? "dart"
                      : "javascript"}
                  </span>
                </div>

                {/* Code Body */}
                <pre className="p-5 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-[#F4F4F5] leading-relaxed bg-[#18181B] no-scrollbar">
                  <code>{project.code}</code>
                </pre>
              </div>
            </motion.section>
          </div>

          {/* Right Column (4 cols): Meta details & System architecture */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Project metadata */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-[24px] sm:rounded-[32px] border border-white/90 bg-white/92 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.05)] flex flex-col gap-6"
            >
              <div>
                <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#374151] border border-[#17191F]/8 shadow-2xs hover:border-[#E03131]/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#17191F]/8 pt-6">
                <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3.5">
                  Direct Actions
                </h4>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-[#FFFDF9] bg-[#E03131] hover:bg-[#C92A2A] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    Open Live App
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-[#17191F] bg-white/95 hover:bg-white hover:text-[#E03131] border border-[#17191F]/10 hover:border-[#E03131]/30 transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer"
                  >
                    View Source Code
                    <Github size={15} />
                  </a>

                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-semibold text-[#E03131] bg-[#FFF0F0] hover:bg-[#FFE3E3] border border-[#FEE2E2] transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer"
                    >
                      Download Release APK (120 MB)
                      <Download size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.section>

            {/* Architecture breakdown */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 rounded-[24px] sm:rounded-[32px] border border-white/90 bg-white/92 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-lg font-bold text-[#17191F] font-heading flex items-center gap-2 mb-4">
                <Database size={18} className="text-[#E03131]" />
                Architecture Stack
              </h3>

              <div className="flex flex-col gap-4">
                {project.architecture.map((layer, idx) => (
                  <div key={layer.name} className="relative flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#17191F]">
                      <span className="w-5 h-5 rounded-md bg-[#FFF0F0] text-[#E03131] border border-[#FEE2E2] text-xs flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{layer.name}</span>
                    </div>
                    <p className="text-xs text-[#6B7280] leading-relaxed pl-7 font-medium">
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
