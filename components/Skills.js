"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Server, Smartphone, Database, Wrench, BrainCircuit, ChevronRight } from "lucide-react";

// Skills Data
const skillsData = [
  {
    id: "frontend",
    category: "Frontend",
    icon: Layout,
    color: "from-blue-500/20 to-indigo-500/20",
    skills: [
      { name: "React", level: "Expert", status: "expert" },
      { name: "Next.js", level: "Expert", status: "expert" },
      { name: "HTML5 & CSS3", level: "Expert", status: "expert" },
      { name: "Tailwind CSS", level: "Expert", status: "expert" },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    icon: Server,
    color: "from-emerald-500/20 to-teal-500/20",
    skills: [
      { name: "Node.js", level: "Expert", status: "expert" },
      { name: "Express.js", level: "Expert", status: "expert" },
      { name: "REST APIs", level: "Expert", status: "expert" },
    ],
  },
  {
    id: "mobile",
    category: "Mobile",
    icon: Smartphone,
    color: "from-cyan-500/20 to-blue-500/20",
    skills: [
      { name: "Flutter", level: "Advanced", status: "advanced" },
      { name: "Dart", level: "Advanced", status: "advanced" },
    ],
  },
  {
    id: "database",
    category: "Database",
    icon: Database,
    color: "from-green-500/20 to-emerald-500/20",
    skills: [
      { name: "MongoDB", level: "Expert", status: "expert" },
      { name: "Firebase", level: "Expert", status: "expert" },
    ],
  },
  {
    id: "tools",
    category: "Tools & DevOps",
    icon: Wrench,
    color: "from-orange-500/20 to-red-500/20",
    skills: [
      { name: "Git & GitHub", level: "Advanced", status: "advanced" },
      { name: "Postman", level: "Expert", status: "expert" },
      { name: "Docker", level: "Intermediate", status: "intermediate" },
      { name: "VS Code", level: "Expert", status: "expert" },
    ],
  },
  {
    id: "core",
    category: "Core",
    icon: BrainCircuit,
    color: "from-purple-500/20 to-pink-500/20",
    skills: [
      { name: "Data Structures", level: "Advanced", status: "advanced" },
      { name: "Algorithms", level: "Advanced", status: "advanced" },
      { name: "DBMS Core", level: "Advanced", status: "advanced" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillsData[0].id);

  const activeCategory = skillsData.find((item) => item.id === activeTab);

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 bg-brand-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Technical Proficiency</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text font-heading">
            Skills Showcase
          </h2>
        </div>

        {/* Dashboard Console Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch border border-brand-border bg-brand-card shadow-brand p-6 sm:p-8 rounded-[32px] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />

          {/* Left Column: Category Tabs (Sidebar) */}
          <div className="md:col-span-4 flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 border-b md:border-b-0 md:border-r border-brand-border/60 pr-0 md:pr-6 no-scrollbar relative z-10">
            {skillsData.map((item) => {
              const TabIcon = item.icon;
              const isActive = item.id === activeTab;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-semibold text-left transition-all duration-300 relative cursor-pointer whitespace-nowrap min-w-max md:min-w-0 w-full group ${
                    isActive ? "text-primary" : "text-brand-text-muted hover:text-brand-text"
                  }`}
                >
                  {/* Sliding active capsule background */}
                  {isActive && (
                    <motion.span
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-primary/8 dark:bg-primary/20 rounded-2xl -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <TabIcon size={18} className="shrink-0" />
                  <span className="flex-1">{item.category}</span>
                  <ChevronRight size={14} className="hidden md:block opacity-0 group-hover:opacity-40 transition-opacity" />
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Stage */}
          <div className="md:col-span-8 flex flex-col justify-center pl-0 md:pl-8 pt-4 md:pt-0 min-h-[220px] relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="w-full text-left"
              >
                <div className="flex flex-col gap-1 mb-6">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                    ACTIVE ENVIRONMENT
                  </span>
                  <h4 className="text-xl font-bold text-brand-text font-heading">
                    {activeCategory.category} Stack
                  </h4>
                </div>

                {/* Grid of skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeCategory.skills.map((skill) => {
                    const dotColor =
                      skill.status === "expert"
                        ? "bg-green-500 shadow-green-500/40"
                        : skill.status === "advanced"
                        ? "bg-blue-500 shadow-blue-500/40"
                        : "bg-amber-500 shadow-amber-500/40";

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3.5 rounded-2xl border border-brand-border bg-brand-bg/50 hover:bg-brand-card hover:border-primary/10 hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shadow-[0_0_8px_var(--tw-shadow-color)] animate-pulse`} />
                          <span className="text-sm font-semibold text-brand-text">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold font-mono text-brand-text-muted/65 uppercase tracking-wider">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
