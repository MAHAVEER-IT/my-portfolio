"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const initialTheme = localStorage.getItem("theme") || "light";
    
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Observer options for section highlight
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-4 bg-brand-bg/85 dark:bg-brand-bg/85 backdrop-blur-md border-b border-brand-border/40 shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight text-brand-text font-heading cursor-pointer">
          MAHAVEER <span className="text-primary font-light">K</span>
        </a>

        {/* Desktop Navbar */}
        <nav className={`hidden lg:flex items-center gap-1 p-1 bg-brand-card/65 dark:bg-brand-card/45 backdrop-blur-md rounded-full border border-brand-border/60 shadow-brand transition-all duration-300`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:text-primary ${
                  isActive ? "text-primary" : "text-brand-text-muted"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-primary/8 dark:bg-primary/20 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA & Theme */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-brand-border/80 bg-brand-card hover:bg-brand-border/30 text-brand-text-muted hover:text-brand-text transition-all duration-200 cursor-pointer"
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <a
            href="https://drive.google.com/file/d/1qLrF_P4qrPCr9tN_aykdFe7yUi11Kkzm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-brand-text bg-brand-card hover:bg-brand-border/40 border border-brand-border hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer"
          >
            Resume
          </a>
          
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-white bg-primary hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            Contact Me
          </a>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-full border border-brand-border/80 bg-brand-card text-brand-text-muted hover:text-brand-text transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 glass mx-6 mt-2 rounded-2xl border border-brand-border shadow-lg p-6 flex flex-col gap-4 lg:hidden"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-brand-text-muted hover:bg-brand-border/40"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href="https://drive.google.com/file/d/1qLrF_P4qrPCr9tN_aykdFe7yUi11Kkzm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl text-base font-medium text-brand-text bg-brand-card hover:bg-brand-border/40 border border-brand-border transition-colors cursor-pointer"
            >
              View Resume
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl text-base font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
