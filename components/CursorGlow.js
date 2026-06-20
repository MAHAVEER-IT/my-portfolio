"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e) => {
      // Update motion values for custom cursor ring
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      // Update CSS variables on document for high-performance background mesh glow
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive") ||
        target.getAttribute("role") === "button";
        
      setHovered(!!isInteractive);
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  return (
    <>
      {/* Interactive Cursor Ring - visible only on desktop */}
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-50 w-8 h-8 rounded-full border border-primary/40 mix-blend-difference hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          animate={{
            scale: hovered ? 1.5 : 1,
            backgroundColor: hovered ? "rgba(37, 99, 235, 0.08)" : "rgba(37, 99, 235, 0)",
            borderColor: hovered ? "rgba(37, 99, 235, 0.8)" : "rgba(37, 99, 235, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
        />
      )}

      {/* Global Background Glow Mask */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-60 dark:opacity-80"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), var(--cursor-color), transparent 80%)`,
        }}
      />
    </>
  );
}
