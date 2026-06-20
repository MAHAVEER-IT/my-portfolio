"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border/40 bg-brand-bg py-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-brand-text-muted">
            &copy; {currentYear === 2027 ? "2027" : `2025 - ${currentYear}`} Mahaveer K. All rights reserved.
          </p>
          <p className="text-xs text-brand-text-muted/70 flex items-center gap-1">
            Engineered with <Heart size={10} className="text-red-500 fill-red-500" /> in Coimbatore, TN.
          </p>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-right">
          <p className="text-xs text-brand-text-muted">
            Built using <span className="font-semibold text-brand-text">Next.js</span>,{" "}
            <span className="font-semibold text-brand-text">JavaScript</span>,{" "}
            <span className="font-semibold text-brand-text">Tailwind CSS</span> and{" "}
            <span className="font-semibold text-brand-text">Framer Motion</span>.
          </p>
          <p className="text-[10px] text-brand-text-muted/50 mt-1">
            Optimized for 120Hz smooth scrolling with Lenis.
          </p>
        </div>
      </div>
    </footer>
  );
}
