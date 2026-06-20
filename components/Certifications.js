"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, ExternalLink, ArrowRight, Calendar, Bookmark } from "lucide-react";

const certifications = [
  {
    title: "MongoDB Certified Associate Developer",
    issuer: "MongoDB",
    date: "2025",
    credentialId: "www.credly.com/go/o1RjgrXd",
    url: "https://www.credly.com/badges/743fc448-d8eb-46a8-8438-7bc7ff250a26/public_url",
    badgeColor: "hover:border-green-500/30",
    glowColor: "rgba(16, 185, 129, 0.08)",
    image: "/images/mongodb.png",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    credentialId: "fa46a4996e424f92a0357334e9cab1c3",
    url: "https://www.credly.com/badges/00e10b5e-8c1c-4a42-ac61-906250ffeeeb/public_url",
    badgeColor: "hover:border-orange-500/30",
    glowColor: "rgba(249, 115, 22, 0.08)",
    image: "/images/aws.png",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Udemy (Abdul Bari)",
    date: "2024",
    credentialId: "UC-2a09c594-7240-4b22-8fed-a37b3ec96fOf",
    url: "https://drive.google.com/file/d/1hNaqWsmg33o9NrRHP1lUBnj1I618PPf8/view?usp=drive_link",
    badgeColor: "hover:border-purple-500/30",
    glowColor: "rgba(168, 85, 247, 0.08)",
    image: null,
  },
];

// Inner Spotlight Card component for performance and coordinate tracking
function CertificationCard({ cert, index }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative p-8 rounded-[32px] border border-brand-border bg-brand-card shadow-brand hover:shadow-brand-hover transition-all duration-500 flex flex-col justify-between overflow-hidden min-h-[380px] ${cert.badgeColor}`}
      style={{
        "--glow-color": cert.glowColor,
      }}
    >
      {/* Spotlight Hover Glow Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, var(--glow-color), transparent 80%)`,
        }}
      />

      {/* Decorative Card Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none z-0" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col gap-6 items-start text-left w-full">
        {/* Badge Wrapper */}
        <div className="relative w-20 h-20 rounded-2xl bg-brand-bg border border-brand-border/60 flex items-center justify-center shadow-sm overflow-hidden group-hover:border-primary/20 transition-colors">
          {cert.image ? (
            <div className="relative w-14 h-14">
              <Image
                src={cert.image}
                alt={`${cert.title} badge`}
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
          ) : (
            // Custom Algorithms Network Graphic for Udemy DSA
            <div className="relative w-full h-full flex items-center justify-center p-3 text-primary">
              <svg viewBox="0 0 40 40" className="w-full h-full stroke-primary fill-none opacity-80 group-hover:scale-105 transition-transform duration-500">
                <circle cx="20" cy="20" r="4" fill="currentColor" />
                <circle cx="8" cy="10" r="3" />
                <circle cx="32" cy="10" r="3" />
                <circle cx="10" cy="30" r="3" />
                <circle cx="30" cy="30" r="3" />
                <line x1="20" y1="20" x2="8" y2="10" strokeWidth="1.5" strokeDasharray="2 1" />
                <line x1="20" y1="20" x2="32" y2="10" strokeWidth="1.5" />
                <line x1="20" y1="20" x2="10" y2="30" strokeWidth="1.5" />
                <line x1="20" y1="20" x2="30" y2="30" strokeWidth="1.5" strokeDasharray="2 1" />
              </svg>
            </div>
          )}
        </div>

        {/* Text Details */}
        <div className="w-full">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-text font-heading leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
            {cert.title}
          </h3>
          <p className="text-base font-semibold text-brand-text-muted mb-4">
            {cert.issuer}
          </p>

          {/* Metadata Table */}
          <div className="flex flex-col gap-2 border-t border-brand-border/60 pt-4 w-full text-xs font-medium text-brand-text-muted">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-primary" />
              <span>Issued: {cert.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Bookmark size={14} className="text-primary" />
              <span className="truncate max-w-[220px]" title={cert.credentialId}>
                ID: {cert.credentialId}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Verification CTA Link */}
      <div className="relative z-10 w-full pt-6">
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-full justify-center py-3 rounded-2xl text-xs font-bold text-brand-text bg-brand-bg hover:bg-primary hover:text-white border border-brand-border/80 hover:border-primary transition-all duration-300 shadow-sm cursor-pointer group/btn"
        >
          Verify Certificate
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certificates"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Gradients */}
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Qualifications</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text font-heading">
            Certifications
          </h2>
          <p className="text-base md:text-lg text-brand-text-muted mt-3 max-w-xl">
            Industry credentials and coursework validating expertise in database systems, cloud infrastructure, and algorithms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
