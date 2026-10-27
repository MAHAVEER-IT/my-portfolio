"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, ArrowUpRight } from "lucide-react";
import CherryBlossomPetals from "@/components/hero/CherryBlossomPetals";

/* ==========================================================================
   AUTHENTIC VECTOR BRAND SVG ICONS (NO RASTER / NO CUT & PASTE)
   ========================================================================== */

function MongoDbLeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
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

function AwsLogoIcon() {
  return (
    <svg viewBox="0 0 52 34" className="w-10 h-7" fill="none">
      <text
        x="26"
        y="17"
        textAnchor="middle"
        fill="#232F3E"
        fontSize="16"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.6"
      >
        aws
      </text>
      <path
        d="M11 23C18 28 34 28 41 23"
        stroke="#FF9900"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M37.5 21.5L42 23L40 25.5"
        fill="#FF9900"
        stroke="#FF9900"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HackerRankIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
      <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#1BA94C" />
      <path
        d="M12 10V22H14.5V17H17.5V22H20V10H17.5V14.8H14.5V10H12Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/* ==========================================================================
   LAUREL WREATH & CERTIFIED BADGES
   ========================================================================== */

function LaurelWreathBadge({ text = "2nd Place" }) {
  return (
    <div className="flex items-center justify-center gap-1.5 text-[#E03131] py-1 select-none">
      {/* Left Laurel Branch */}
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor">
        <path d="M14 27c-4.5-2.2-7.5-6.8-7.5-12.2 0-3.5 1.3-6.8 3.5-9.3l1.1 1c-1.9 2.2-3 5-3 8.3 0 4.6 2.6 8.6 6.5 10.6l-.6 1.6z" />
        <path d="M8.2 8.5c-.8-1.5-2.2-2.3-3.8-2.1.2 1.6 1.2 2.8 2.7 3.3l1.1-1.2z" />
        <path d="M6 13.5c-1.2-1.2-2.8-1.5-4.2-.9.7 1.5 2 2.3 3.6 2.2l.6-1.3z" />
        <path d="M6.2 19c-1.5-.7-3.2-.4-4.3.8 1.2 1.1 2.8 1.3 4.2.6l.1-1.4z" />
        <path d="M9 24c-1.6 0-3.1.9-3.7 2.4 1.5.7 3.1.3 4.1-.9l-.4-1.5z" />
        <path d="M12.5 6.5c-.2-1.7-1.3-3-2.9-3.3-.4 1.6.2 3.1 1.6 4l1.3-.7z" />
      </svg>

      <span className="text-sm sm:text-base font-bold tracking-tight text-[#E03131]">
        {text}
      </span>

      {/* Right Laurel Branch (Mirrored) */}
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 scale-x-[-1]"
        fill="currentColor"
      >
        <path d="M14 27c-4.5-2.2-7.5-6.8-7.5-12.2 0-3.5 1.3-6.8 3.5-9.3l1.1 1c-1.9 2.2-3 5-3 8.3 0 4.6 2.6 8.6 6.5 10.6l-.6 1.6z" />
        <path d="M8.2 8.5c-.8-1.5-2.2-2.3-3.8-2.1.2 1.6 1.2 2.8 2.7 3.3l1.1-1.2z" />
        <path d="M6 13.5c-1.2-1.2-2.8-1.5-4.2-.9.7 1.5 2 2.3 3.6 2.2l.6-1.3z" />
        <path d="M6.2 19c-1.5-.7-3.2-.4-4.3.8 1.2 1.1 2.8 1.3 4.2.6l.1-1.4z" />
        <path d="M9 24c-1.6 0-3.1.9-3.7 2.4 1.5.7 3.1.3 4.1-.9l-.4-1.5z" />
        <path d="M12.5 6.5c-.2-1.7-1.3-3-2.9-3.3-.4 1.6.2 3.1 1.6 4l1.3-.7z" />
      </svg>
    </div>
  );
}

function CertifiedPill({ color = "green" }) {
  const isAmber = color === "amber";
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border shadow-2xs self-start ${
        isAmber
          ? "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]"
          : "bg-[#EDFAF1] text-[#16A34A] border-[#DCFCE7]"
      }`}
    >
      <span
        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-white text-[9px] font-bold ${
          isAmber ? "bg-[#D97706]" : "bg-[#16A34A]"
        }`}
      >
        ✓
      </span>
      <span>Certified</span>
    </div>
  );
}

/* ==========================================================================
   ACHIEVEMENTS DATA (CONSOLIDATED 4 MILESTONES)
   ========================================================================== */

const ACHIEVEMENTS_CARDS = [
  {
    id: "hackastrom",
    title: "Hackastrom'25",
    description: "Secured 2nd Place in a 36-hour national-level hackathon.",
    iconBg: "bg-[#FFF0ED]",
    icon: (
      <Trophy className="w-7 h-7 text-[#E03131]" strokeWidth={2.2} />
    ),
    badgeType: "wreath",
    url: "https://github.com/MAHAVEER-IT",
  },
  {
    id: "mongodb",
    title: "MongoDB Associate Developer",
    description: "Professional certification in NoSQL database management.",
    iconBg: "bg-[#EDFAF1]",
    icon: <MongoDbLeafIcon />,
    badgeType: "certified-green",
    url: "https://www.credly.com/badges/743fc448-d8eb-46a8-8438-7bc7ff250a26/public_url",
  },
  {
    id: "aws",
    title: "AWS Cloud Practitioner",
    description:
      "Professional certification in AWS cloud computing fundamentals.",
    iconBg: "bg-[#FFFBEB]",
    icon: <AwsLogoIcon />,
    badgeType: "certified-amber",
    url: "https://www.credly.com/badges/00e10b5e-8c1c-4a42-ac61-906250ffeeeb/public_url",
  },
  {
    id: "hackerrank",
    title: "HackerRank SQL Certification",
    description: "Validated expertise in complex query optimization.",
    iconBg: "bg-[#EDFAF1]",
    icon: <HackerRankIcon />,
    badgeType: "certified-green",
    url: "https://www.hackerrank.com/certificates/6bb4eb723ca5",
  },
];

/* ==========================================================================
   ACHIEVEMENTS COMPONENT
   ========================================================================== */

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
      className="relative w-full overflow-hidden bg-[#FFFDF9] text-[#17191F] select-none md:select-auto font-sans scroll-mt-20 pt-16 sm:pt-20 pb-24 md:pb-32 px-6 md:px-12"
    >
      {/* 1. Full-Width Background: Cherry Blossom Valley Village Panorama Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu will-change-transform backface-hidden [contain:paint]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/cherry-blossom-valley-panorama.webp"
          alt="Traditional Cherry Blossom Valley Village Panorama with mountain pagodas, valley rooftops, stone bridge and blooming sakura"
          className="h-full w-full object-cover object-center transform-gpu backface-hidden opacity-85"
          fetchPriority="high"
          decoding="async"
        />

        {/* Soft Porcelain Diffuse Vignette for pristine text & card contrast */}
        <div
          className="
            absolute inset-0
            bg-[#FFFDF9]/40
            md:bg-[radial-gradient(ellipse_at_center,_rgba(255,253,249,0.55)_0%,_rgba(255,253,249,0.30)_55%,_rgba(255,253,249,0.65)_100%)]
          "
          aria-hidden="true"
        />

        {/* Top & Bottom Soft Feathering to blend with neighboring sections */}
        <div
          className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FFFDF9]/70 via-[#FFFDF9]/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FFFDF9] via-[#FFFDF9]/80 to-transparent pointer-events-none"
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
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F0] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#E03131] border border-[#FEE2E2] shadow-xs">
            <Trophy className="h-4 w-4 text-[#E03131]" />
            <span>Achievements</span>
          </div>

          {/* Main Heading */}
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#17191F] font-heading leading-[1.12]">
            My <span className="text-[#E03131]">Achievements</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto font-medium leading-relaxed">
            A few milestones that reflect my learning, building, and
            problem-solving journey.
          </p>
        </motion.div>

        {/* 4. The 4 Milestone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {ACHIEVEMENTS_CARDS.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="
                  group relative flex flex-col justify-between
                  p-6 sm:p-7 rounded-[28px] sm:rounded-[32px]
                  bg-white/92 backdrop-blur-md
                  border border-white/90
                  shadow-[0_12px_40px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                  hover:border-[#E03131]/30
                  transition-all duration-300
                  min-h-[320px] text-left
                "
              >
                {/* Top Row: Icon Container + Arrow Link */}
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`
                      w-14 h-14 rounded-2xl
                      flex items-center justify-center
                      shrink-0 transition-transform duration-300
                      group-hover:scale-105
                      ${card.iconBg}
                    `}
                  >
                    {card.icon}
                  </div>

                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-9 h-9 rounded-full
                      bg-white/80 border border-[#17191F]/6
                      flex items-center justify-center
                      text-[#9CA3AF] group-hover:text-[#E03131] group-hover:border-[#E03131]/30
                      transition-all duration-200 cursor-pointer
                    "
                    title={`View ${card.title} credential`}
                  >
                    <ArrowUpRight size={17} />
                  </a>
                </div>

                {/* Content: Title & Description */}
                <div className="my-5 flex-1 flex flex-col justify-start">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#17191F] font-heading leading-snug mb-2 group-hover:text-[#E03131] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Badge */}
                <div className="pt-2 border-t border-[#17191F]/5 w-full">
                  {card.badgeType === "wreath" ? (
                    <LaurelWreathBadge text="2nd Place" />
                  ) : card.badgeType === "certified-amber" ? (
                    <CertifiedPill color="amber" />
                  ) : (
                    <CertifiedPill color="green" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
