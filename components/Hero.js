"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

// Orbiting Tech Badges Configuration
const techBadges = [
  { name: "React", icon: "⚛️", orbit: 1, position: "top" },
  { name: "Next.js", icon: "▲", orbit: 1, position: "bottom" },
  { name: "Node.js", icon: "🟢", orbit: 2, position: "left" },
  { name: "Firebase", icon: "🔥", orbit: 2, position: "right" },
  { name: "Flutter", icon: "💙", orbit: 3, position: "top-left" },
  { name: "MongoDB", icon: "🍃", orbit: 3, position: "bottom-right" },
];

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle parallax shift variables
  // (No complex spring transforms needed for clean organic float)

  // Mouse move tracker for parallax/grid effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Background Interactive Grid/Particles Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.baseSpeedX = Math.random() * 0.4 - 0.2;
        this.baseSpeedY = Math.random() * 0.4 - 0.2;
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
      }

      update(mouseNormalizedX, mouseNormalizedY) {
        // Particles drift slightly based on mouse
        this.speedX = this.baseSpeedX + mouseNormalizedX * 0.3;
        this.speedY = this.baseSpeedY + mouseNormalizedY * 0.3;
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around borders
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = document.documentElement.classList.contains("dark")
          ? "rgba(6, 182, 212, 0.15)"
          : "rgba(37, 99, 235, 0.12)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particlesCount = Math.min(60, Math.floor((width * height) / 15000));
    const particles = Array.from({ length: particlesCount }, () => new Particle());

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle moving grid that reacts to mouse
      ctx.strokeStyle = document.documentElement.classList.contains("dark")
        ? "rgba(255, 255, 255, 0.015)"
        : "rgba(148, 163, 184, 0.05)";
      ctx.lineWidth = 1;

      const gridSize = 50;
      const offsetX = mousePos.x * 15;
      const offsetY = mousePos.y * 15;

      for (let x = offsetX % gridSize; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = offsetY % gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw and connect particles
      particles.forEach((particle) => {
        particle.update(mousePos.x, mousePos.y);
        particle.draw();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = document.documentElement.classList.contains("dark")
              ? `rgba(6, 182, 212, ${alpha})`
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 bg-brand-bg bg-grid-pattern/30 overflow-hidden"
    >
      {/* Dynamic Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow z-0" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left: Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border bg-brand-card/80 text-primary text-xs font-semibold tracking-wide uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for Opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg font-medium text-brand-text-muted mb-2"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-text font-heading leading-[0.95] mb-4"
          >
            MAHAVEER K
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg md:text-xl text-brand-text-muted leading-relaxed max-w-xl mb-8"
          >
            Building Modern Web Applications, Mobile Experiences, AI-Powered Products, and Scalable Digital Solutions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#projects"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-primary hover:bg-primary/95 transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://drive.google.com/file/d/1qLrF_P4qrPCr9tN_aykdFe7yUi11Kkzm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-brand-text bg-brand-card hover:bg-brand-border/40 border border-brand-border transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              View Resume
              <FileText size={18} className="text-primary" />
            </a>
            
            <a
              href="#contact"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-brand-text bg-brand-card hover:bg-brand-border/40 border border-brand-border transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Socials & Resume */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-6 border-t border-brand-border/60 pt-6 w-full max-w-md"
          >
            <span className="text-xs font-semibold tracking-wider text-brand-text-muted uppercase">Follow me:</span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/MAHAVEER-IT"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-brand-border bg-brand-card hover:text-primary transition-all duration-200"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/mahaveer-k"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-brand-border bg-brand-card hover:text-primary transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#portfolio"
                className="p-2.5 rounded-full border border-brand-border bg-brand-card hover:text-primary transition-all duration-200"
                title="Portfolio"
              >
                <Code size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Circular Profile with Orbiting Badges */}
        <div className="lg:col-span-5 flex justify-center relative py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.3 }}
            className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] select-none"
            style={{
              x: mousePos.x * -12,
              y: mousePos.y * -12,
            }}
          >
            {/* Organic Floating Wrapper */}
            <motion.div
              className="w-full h-full relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Background Glow Sphere (Shadow) */}
              <div className="absolute inset-4 rounded-full bg-primary/8 dark:bg-primary/15 blur-[50px] -z-10" />

              {/* Dynamic Concentric Orbits & Badges */}
              {[1, 2, 3].map((orbitNum) => {
                const isDashed = orbitNum !== 2;
                const borderClass = isDashed 
                  ? "border-dashed border-primary/20 dark:border-primary/10" 
                  : "border-solid border-brand-border/40 dark:border-brand-border/20";
                
                // Outer ring sizing (responsive offsets)
                const insetClass = orbitNum === 1 
                  ? "inset-[-6%]" 
                  : orbitNum === 2 
                  ? "inset-[-20%]" 
                  : "inset-[-34%]";
                
                const speed = orbitNum === 1 ? 25 : orbitNum === 2 ? 35 : 45;
                const direction = orbitNum === 2 ? -1 : 1;
                
                const badgesInOrbit = techBadges.filter(b => b.orbit === orbitNum);

                return (
                  <motion.div
                    key={orbitNum}
                    className={`absolute ${insetClass} rounded-full border pointer-events-none z-0 ${borderClass}`}
                    animate={{ rotate: direction * 360 }}
                    transition={{
                      duration: speed,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {badgesInOrbit.map((badge) => {
                      let positionClass = "";
                      if (badge.position === "top") positionClass = "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2";
                      else if (badge.position === "bottom") positionClass = "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2";
                      else if (badge.position === "left") positionClass = "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2";
                      else if (badge.position === "right") positionClass = "top-1/2 right-0 translate-x-1/2 -translate-y-1/2";
                      else if (badge.position === "top-left") positionClass = "top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2";
                      else if (badge.position === "bottom-right") positionClass = "top-[85.4%] left-[85.4%] -translate-x-1/2 -translate-y-1/2";

                      return (
                        <div key={badge.name} className={`absolute ${positionClass} pointer-events-auto`}>
                          <motion.div
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-border glass shadow-brand cursor-default text-xs sm:text-sm font-medium text-brand-text"
                            animate={{ rotate: -direction * 360 }}
                            transition={{
                              duration: speed,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            whileHover={{ scale: 1.06, borderColor: "rgba(37, 99, 235, 0.4)" }}
                          >
                            <span>{badge.icon}</span>
                            <span>{badge.name}</span>
                          </motion.div>
                        </div>
                      );
                    })}
                  </motion.div>
                );
              })}
              
              {/* Center Image Container */}
              <div className="w-full h-full rounded-full border-4 border-white dark:border-[#111827] shadow-2xl overflow-hidden relative z-10 bg-brand-card hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/MAHAVEER.png"
                  alt="Mahaveer K"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
