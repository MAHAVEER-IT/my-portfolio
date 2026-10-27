"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import CherryBlossomPetals from "./hero/CherryBlossomPetals";

/* ==========================================================================
   AUTHENTIC TECH BRAND SVG ICONS (NO RASTER / NO CUT & PASTE)
   ========================================================================== */

function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8" fill="none">
      <circle cx="0" cy="0" r="2.1" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1.15" fill="none">
        <ellipse rx="10.8" ry="4.2" />
        <ellipse rx="10.8" ry="4.2" transform="rotate(60)" />
        <ellipse rx="10.8" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
      <path
        d="M4 4.5H7.2V14.2L16.8 4.5H20V19.5H16.8V9.8L7.2 19.5H4V4.5Z"
        fill="#111827"
      />
    </svg>
  );
}

function MongoDbIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
      <path
        d="M12 2C11.5 2.5 7.5 7.8 7.5 13.5C7.5 17.5 9.8 21.2 12 22V2Z"
        fill="#13AA52"
      />
      <path
        d="M12 2C12.5 2.5 16.5 7.8 16.5 13.5C16.5 17.5 14.2 21.2 12 22V2Z"
        fill="#119245"
      />
      <path
        d="M12 3V21"
        stroke="#0E7838"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MySqlIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <path
        d="M26.5 8.2c-2.4.6-4.6 2-6.1 4-1 1.3-1.6 2.8-2 4.3-.8-.1-1.6 0-2.4.3-1.8.7-3.1 2.2-3.8 4-.5 1.2-.5 2.5-.2 3.7.3 1.1.9 2.1 1.8 2.8-.5-.7-.8-1.5-.8-2.4 0-1.1.4-2.2 1.1-3 .8-.9 2-1.5 3.2-1.6.8 0 1.6.2 2.4.5.7-.9 1.5-1.8 2.4-2.4 1.5-1 3.2-1.4 5-1.4 1.6 0 3.2.4 4.6 1.2-.7-1.8-1.9-3.3-3.5-4.4-1.4-.8-3-1.3-4.7-1.3zM7.2 21.5c-.7.4-1.2 1.1-1.5 1.9-.4 1.1-.3 2.3.3 3.3.6 1 1.4 1.7 2.4 2.1-.3-.7-.4-1.4-.3-2.2 0-.8.3-1.6.8-2.3.4-.6 1-.9 1.6-1.2-1-.6-2.2-1-3.3-1.6z"
        fill="#0284C7"
      />
    </svg>
  );
}

function AiAgentsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7"
      fill="none"
      stroke="#7C3AED"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="10" width="18" height="11" rx="3" />
      <circle cx="12" cy="4.5" r="1.8" />
      <path d="M12 6.3V10" />
      <circle cx="8.5" cy="15.5" r="1.2" fill="#7C3AED" />
      <circle cx="15.5" cy="15.5" r="1.2" fill="#7C3AED" />
      <path d="M1 15.5h2" />
      <path d="M21 15.5h2" />
    </svg>
  );
}

function RagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7"
      fill="none"
      stroke="#6366F1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  );
}

/* ==========================================================================
   FEATURED SKILLS (EXACT 6 DISPLAYED IN UI REFERENCE)
   ========================================================================== */

const FEATURED_SKILLS = [
  {
    id: "react",
    name: "React",
    iconBg: "bg-[#E0F7FA]",
    IconComponent: ReactIcon,
  },
  {
    id: "nextjs",
    name: "NextJS",
    iconBg: "bg-[#F1F3F5]",
    IconComponent: NextJsIcon,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    iconBg: "bg-[#EDFAF1]",
    IconComponent: MongoDbIcon,
  },
  {
    id: "mysql",
    name: "MySQL",
    iconBg: "bg-[#EDF5FF]",
    IconComponent: MySqlIcon,
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    iconBg: "bg-[#F3E8FF]",
    IconComponent: AiAgentsIcon,
  },
  {
    id: "rag",
    name: "RAG",
    iconBg: "bg-[#EEF2FF]",
    IconComponent: RagIcon,
  },
];

/* ==========================================================================
   SKILLS SECTION COMPONENT
   ========================================================================== */

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}
      className="relative w-full overflow-hidden bg-[#FFFDF9] text-[#17191F] select-none md:select-auto font-sans scroll-mt-20 flex flex-col justify-center pt-16 sm:pt-20 pb-10 sm:pb-14"
    >
      {/* 1. Full-Width Background: Sunlit Kung Fu Courtyard by the River */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu will-change-transform backface-hidden [contain:paint]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/sunlit-kung-fu-courtyard.webp"
          alt="Sunlit Kung Fu Courtyard by the River with blooming sakura, traditional Chinese pagodas, and martial training pavilion"
          className="h-full w-full object-cover object-center transform-gpu backface-hidden"
          fetchPriority="high"
          decoding="async"
        />

        {/* Subtle Center Porcelain Glow for pristine text readability without washing out edges */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b from-transparent via-[#FFFDF9]/40 to-transparent
            md:bg-[radial-gradient(ellipse_at_center,_rgba(255,253,249,0.68)_0%,_rgba(255,253,249,0.20)_55%,_transparent_85%)]
          "
          aria-hidden="true"
        />

        {/* Extremely Subtle Edge Feathering */}
        <div
          className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#FFFDF9]/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FFFDF9]/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* 2. Seamless Falling Sakura Petals Drift across the Courtyard */}
      <CherryBlossomPetals />

      {/* 3. Main Centered Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F0] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#E03131] border border-[#FEE2E2] shadow-xs">
            <Layers className="h-4 w-4 text-[#E03131]" />
            <span>My Skills</span>
          </div>

          {/* Section Main Heading */}
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#17191F] font-heading leading-[1.12]">
            Skills & <span className="text-[#E03131]">Technologies</span>
          </h2>

          {/* Subtitle Description */}
          <p className="mt-3 text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto font-medium leading-relaxed">
            Tools and technologies I use to build scalable, intelligent, and real-world applications.
          </p>

          {/* 4. Grid of Skill Cards (Exact 2-row × 3-column reference design) */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full max-w-4xl">
            {FEATURED_SKILLS.map((card, index) => {
              const IconComponent = card.IconComponent;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group relative flex items-center gap-4 sm:gap-5
                    p-4 sm:p-5 rounded-2xl sm:rounded-3xl
                    bg-white/92 backdrop-blur-md
                    border border-white/80
                    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                    hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                    hover:-translate-y-1
                    transition-all duration-300
                    cursor-default select-none text-left
                  "
                >
                  {/* Icon Box with Soft Tinted Brand Background */}
                  <div
                    className={`
                      w-14 h-14 sm:w-16 sm:h-16
                      rounded-2xl
                      flex items-center justify-center
                      shrink-0
                      transition-transform duration-300
                      group-hover:scale-105
                      ${card.iconBg}
                    `}
                  >
                    <IconComponent />
                  </div>

                  {/* Skill Name */}
                  <div className="flex flex-col min-w-0">
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-[#17191F] font-heading truncate">
                      {card.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
