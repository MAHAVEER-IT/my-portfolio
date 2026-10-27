"use client";

import React from 'react';
import { User, Cpu, Sprout, GraduationCap, MapPin, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import CherryBlossomPetals from './hero/CherryBlossomPetals';

export default function About() {
  return (
    <section
      id="about"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
      className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF9] text-[#17191F] select-none md:select-auto font-sans scroll-mt-20"
    >
      {/* 1. Full-Width Background: Cherry Blossom Canal Village */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu will-change-transform backface-hidden [contain:paint]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/cherry-blossom-canal-village.webp"
          alt="Cherry blossom canal village in traditional Chinese style with bridge, pagoda and blooming sakura"
          className="h-full w-full object-cover object-left md:object-center transform-gpu backface-hidden"
          fetchPriority="high"
          decoding="async"
        />

        {/* Soft Right-Side Porcelain Readability Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-[#FFFDF9] via-[#FFFDF9]/85 to-[#FFFDF9]/40
            lg:bg-gradient-to-r lg:from-transparent lg:via-[#FFFDF9]/85 lg:to-[#FFFDF9]
            lg:left-[35%]
          "
          aria-hidden="true"
        />

        {/* Top & Bottom Soft Feathering to blend with neighboring sections */}
        <div
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FFFDF9]/60 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFDF9] to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* 2. Seamless Cherry Blossom Petals Drift across About section */}
      <CherryBlossomPetals />

      {/* 3. Main Content Container: Framed on the Right Column */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1440px] items-center justify-end px-6 py-20 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-xl lg:max-w-[560px]"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F0] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#E03131] border border-[#FEE2E2] shadow-xs">
            <User className="h-4 w-4 text-[#E03131]" />
            <span>About Me</span>
          </div>

          {/* Section Main Heading */}
          <h2
            className="mt-5 text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#17191F] font-heading leading-[1.12]"
          >
            A bit <span className="text-[#E03131]">about me</span>
          </h2>

          {/* Personal Bio Paragraph */}
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4B5563] font-medium">
            I’m Mahaveer K., a final-year IT student who enjoys building useful, scalable, and AI-powered applications that solve real-world problems.
          </p>

          {/* Three Feature Cards Row */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 grid grid-cols-3 gap-3 sm:gap-4"
          >
            {/* Developer */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#FFF0ED] border border-[#FFDCD4]/50 py-4 px-3 sm:py-5 sm:px-4 text-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#E03131] leading-none select-none">
                &lt;/&gt;
              </span>
              <span className="mt-3 text-xs sm:text-sm font-semibold text-[#17191F]">Developer</span>
            </div>

            {/* AI Enthusiast */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#EDF5FF] border border-[#DBEAFE]/50 py-4 px-3 sm:py-5 sm:px-4 text-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs">
              <Cpu className="h-6 w-6 text-[#2563EB]" strokeWidth={2.2} />
              <span className="mt-3 text-xs sm:text-sm font-semibold text-[#17191F]">AI Enthusiast</span>
            </div>

            {/* Lifelong Learner */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#EDFAF1] border border-[#DCFCE7]/50 py-4 px-3 sm:py-5 sm:px-4 text-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs">
              <Sprout className="h-6 w-6 text-[#16A34A]" strokeWidth={2.2} />
              <span className="mt-3 text-xs sm:text-sm font-semibold text-[#17191F]">Lifelong Learner</span>
            </div>
          </motion.div>

          {/* Information & Credentials List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 space-y-3.5 text-sm sm:text-base text-[#374151]"
          >
            {/* Education */}
            <div className="flex items-center gap-3.5 pb-3.5 border-b border-[#17191F]/8">
              <GraduationCap className="h-5 w-5 text-[#6B7280] shrink-0" />
              <span className="font-medium text-[#17191F]/90">
                B.Tech IT <span className="text-[#9CA3AF] mx-1">·</span> Sri Eshwar College of Engineering
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3.5 pb-3.5 border-b border-[#17191F]/8">
              <MapPin className="h-5 w-5 text-[#6B7280] shrink-0" />
              <span className="font-medium text-[#17191F]/90">Coimbatore, Tamil Nadu</span>
            </div>

            {/* Passions */}
            <div className="flex items-center gap-3.5 pt-0.5">
              <Heart className="h-5 w-5 text-[#6B7280] shrink-0" />
              <span className="font-medium text-[#17191F]/90">
                Passionate about <span className="text-[#9CA3AF] mx-1">·</span> Building <span className="text-[#9CA3AF] mx-1">·</span> Learning <span className="text-[#9CA3AF] mx-1">·</span> Creating
              </span>
            </div>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#17191F] px-7 py-3.5 text-sm sm:text-base font-medium text-[#FFFDF9] shadow-md transition-all duration-200 hover:bg-[#17191F]/90 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E03131] focus-visible:ring-offset-2"
            >
              <span>View My Work</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
