"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Award, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 md:mb-20">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Milestones</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text font-heading leading-tight">
            Key Achievements
          </h2>
          <p className="text-base md:text-lg text-brand-text-muted mt-3 max-w-xl text-left">
            Honors, hackathon placements, and technical metrics presented in a modern bento layout.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Hackastrom'25 (2 Columns Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="md:col-span-2 group relative p-8 sm:p-10 rounded-[32px] border border-brand-border bg-brand-card shadow-brand hover:shadow-brand-hover hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[350px]"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 w-full">
              {/* Card Details (8 Cols on desktop) */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Award size={22} />
                  </div>
                  <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20">
                    Rank #2
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-brand-text font-heading leading-tight mb-2">
                  Hackastrom'25
                </h3>
                <p className="text-sm font-semibold text-primary mb-4">
                  2nd Place Winner & AI Optimization Lead
                </p>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  Competed in a rigorous 36-hour sprint to build a fully-functional AI-driven energy optimization platform. Engineered predictive models forecasting grid utilization and load balancing.
                </p>
              </div>

              {/* Graphic Mockup (5 Cols on desktop) */}
              <div className="lg:col-span-5 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[240px] p-4 rounded-2xl border border-brand-border/60 bg-brand-bg/50 flex flex-col gap-3 relative overflow-hidden group-hover:border-primary/20 transition-colors">
                  <div className="flex justify-between items-center text-[10px] font-mono text-brand-text-muted">
                    <span>GRID LOAD OPTIMIZATION</span>
                    <span className="text-green-500 font-bold">+28% EFF</span>
                  </div>
                  
                  {/* Dynamic SVG Trend Line graph */}
                  <svg viewBox="0 0 100 40" className="w-full h-16 overflow-visible">
                    <defs>
                      <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 35 Q 20 20, 40 28 T 80 10 T 100 5"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2"
                      className="path-animate"
                      style={{
                        strokeDasharray: 120,
                        strokeDashoffset: 0,
                      }}
                    />
                    <path
                      d="M0 35 Q 20 20, 40 28 T 80 10 T 100 5 L 100 40 L 0 40 Z"
                      fill="url(#chart-glow)"
                    />
                    <circle cx="100" cy="5" r="3" fill="#06B6D4" className="animate-ping" />
                    <circle cx="100" cy="5" r="2" fill="#2563EB" />
                  </svg>

                  <div className="flex justify-between items-center text-xs font-bold text-brand-text">
                    <span>Cash Prize</span>
                    <span className="text-primary font-heading">Rs. 15,000</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: LeetCode (1 Column Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative p-8 sm:p-10 rounded-[32px] border border-brand-border bg-brand-card shadow-brand hover:shadow-brand-hover hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[350px]"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <Code2 size={22} />
                </div>
                <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20">
                  200+ Solved
                </span>
              </div>

              <div className="text-left flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-brand-text font-heading leading-tight mb-2">
                  LeetCode Proficiency
                </h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  Consistently practicing core data structures & algorithm puzzles to secure optimal query latency and memory allocation models.
                </p>
              </div>

              {/* Graphic Mockup (Progress Wheel) */}
              <div className="flex items-center gap-4 border-t border-brand-border/60 pt-4">
                <svg width="40" height="40" viewBox="0 0 36 36" className="overflow-visible">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="var(--card-border)" strokeWidth="3" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3.5"
                    strokeDasharray="72 28"
                    strokeDashoffset="25"
                    strokeLinecap="round"
                  />
                  <text x="18" y="21.5" className="text-[8px] font-bold font-mono text-center" textAnchor="middle" fill="var(--text-primary)">
                    72%
                  </text>
                </svg>
                <div className="flex flex-col text-left text-xs font-mono text-brand-text-muted">
                  <span className="text-brand-text font-bold">Medium / Hard</span>
                  <span>Accuracy Rate</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Freshothon (1 Column Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="group relative p-8 sm:p-10 rounded-[32px] border border-brand-border bg-brand-card shadow-brand hover:shadow-brand-hover hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[350px]"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <Trophy size={22} />
                </div>
                <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20">
                  Rank #3
                </span>
              </div>

              <div className="text-left flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-brand-text font-heading leading-tight mb-2">
                  Freshothon
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">
                  3rd Place Hackathon Winner
                </p>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  Competed with over 150+ student teams to conceptualize and build a smart civic safety mapping solution in a 24-hour hackathon.
                </p>
              </div>

              {/* Graphic: 24h Timeline Pulse */}
              <div className="flex items-center gap-3 border-t border-brand-border/60 pt-4">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
                </span>
                <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider">
                  24h Speed sprint completed
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Project Expo (2 Columns Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -6 }}
            className="md:col-span-2 group relative p-8 sm:p-10 rounded-[32px] border border-brand-border bg-brand-card shadow-brand hover:shadow-brand-hover hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[350px]"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 w-full">
              {/* Card Details (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Sparkles size={22} />
                  </div>
                  <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20">
                    Rank #3
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-brand-text font-heading leading-tight mb-2">
                  Sri Eshwar Project Expo
                </h3>
                <p className="text-sm font-semibold text-primary mb-4">
                  3rd Place Winner & Social Impact Award
                </p>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  Presented our AI agricultural assistant **Sow & Grow** to a panel of corporate judges. Evaluated on user design, engineering scalability, and local-first offline image classifications.
                </p>
              </div>

              {/* Graphic Mockup: Scores Breakdown (5 Cols) */}
              <div className="lg:col-span-5 w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[240px] p-5 rounded-2xl border border-brand-border/60 bg-brand-bg/50 flex flex-col gap-3 group-hover:border-primary/20 transition-colors">
                  <span className="text-[10px] font-mono text-brand-text-muted">EXHIBITION CRITERIA SCORE</span>
                  
                  <div className="flex flex-col gap-2">
                    {/* Item 1 */}
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[11px] font-bold text-brand-text">
                        <span>Viability</span>
                        <span>9.5/10</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-brand-border overflow-hidden">
                        <motion.div 
                          className="h-full bg-green-500 rounded-full" 
                          initial={{ width: 0 }}
                          whileInView={{ width: "95%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[11px] font-bold text-brand-text">
                        <span>UX Execution</span>
                        <span>9.0/10</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-brand-border overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary rounded-full" 
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[11px] font-bold text-brand-text">
                        <span>Architecture</span>
                        <span>8.8/10</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-brand-border overflow-hidden">
                        <motion.div 
                          className="h-full bg-cyan-500 rounded-full" 
                          initial={{ width: 0 }}
                          whileInView={{ width: "88%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
