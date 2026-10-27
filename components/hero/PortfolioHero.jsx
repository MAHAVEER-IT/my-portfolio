"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight, Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CherryBlossomPetals from './CherryBlossomPetals';

// Dynamically import Three.js Canvas with SSR disabled to prevent window/WebGL hydration errors
const ChineseLanternCanvas = dynamic(() => import('./ChineseLanternCanvas'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-12 w-12 animate-pulse rounded-full bg-[#E03131]/20" />
    </div>
  ),
});

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const PortfolioHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
    
    let ticking = false;
    const updateScrollState = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          setScrolled(scrollY > 20);

          // If scrolled to bottom of page, activate contact
          if (window.innerHeight + Math.round(scrollY) >= document.documentElement.scrollHeight - 80) {
            setActiveSection('contact');
            ticking = false;
            return;
          }

          // Search from bottom up for the section currently in viewport
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 240) {
                setActiveSection(sections[i]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#FFFDF9] text-[#17191F] select-none md:select-auto font-sans"
    >
      {/* 1. Full-Width Background Chinese Village Festival Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu will-change-transform backface-hidden [contain:paint]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/chinese-village-lantern-festival.webp"
          alt="Traditional Chinese village festival illustration with cherry blossoms, canal, stone bridge, and red lanterns"
          className="h-full w-full object-cover object-center lg:object-right-top transform-gpu backface-hidden"
          fetchPriority="high"
          decoding="async"
        />

        {/* Soft Left-Side Readability Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b from-[#FFFDF9]/90 via-[#FFFDF9]/75 to-[#FFFDF9]/40
            md:bg-gradient-to-r md:from-[#FFFDF9]/95 md:via-[#FFFDF9]/75 md:to-transparent
            lg:w-[68%]
          "
          aria-hidden="true"
        />

        {/* Subtle Top Vignette for Navbar Contrast */}
        <div
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FFFDF9]/65 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Cinematic Cherry Blossom Petals Drift */}
      <CherryBlossomPetals />

      {/* 2. Responsive Animated Navigation Bar */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFFDF9]/85 backdrop-blur-md shadow-xs border-b border-[#17191F]/8 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center text-2xl font-bold tracking-tight text-[#17191F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E03131] rounded-md font-heading transition-transform duration-200 hover:scale-[1.02]"
          >
            MK<span className="text-[#E03131] transition-transform duration-200 group-hover:scale-125 inline-block">.</span>
          </a>

          {/* Desktop Pill Navigation with Spring Sliding Indicator */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 rounded-full bg-[#FFFDF9]/85 p-1 backdrop-blur-md shadow-xs ring-1 ring-[#17191F]/8"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative rounded-full px-3 lg:px-4 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E03131] ${
                    isActive
                      ? 'text-[#17191F] font-semibold'
                      : 'text-[#17191F]/70 hover:text-[#17191F]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-white shadow-xs -z-10"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Download Resume Button */}
          <div className="hidden md:block">
            <a
              href="/Mahaveer_K_Resume.pdf"
              download="Mahaveer_K_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-[#17191F] px-5 py-2.5 text-xs lg:text-sm font-medium text-[#FFFDF9] shadow-md transition-all duration-200 hover:bg-[#E03131] hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E03131] focus-visible:ring-offset-2 cursor-pointer"
            >
              <span>Download Resume</span>
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Hamburger Button with Rotation Morph */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex md:hidden items-center justify-center rounded-full bg-[#FFFDF9]/85 p-2.5 text-[#17191F] shadow-sm ring-1 ring-[#17191F]/10 backdrop-blur-md transition-all duration-200 hover:bg-white active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F04444]"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Dropdown Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mx-4 mt-2 overflow-hidden rounded-2xl bg-[#FFFDF9]/95 p-5 shadow-xl ring-1 ring-[#17191F]/10 backdrop-blur-xl md:hidden"
            >
              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1.5">
                {NAV_LINKS.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.035, duration: 0.2 }}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`rounded-xl px-4 py-2.5 text-base font-medium transition-all duration-150 ${
                        isActive
                          ? 'bg-[#E03131]/10 text-[#E03131] font-semibold translate-x-1'
                          : 'text-[#17191F] hover:bg-[#17191F]/5'
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
                <div className="pt-3 border-t border-[#17191F]/10">
                  <a
                    href="/Mahaveer_K_Resume.pdf"
                    download="Mahaveer_K_Resume.pdf"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#17191F] px-5 py-3 text-sm font-medium text-[#FFFDF9] shadow-sm transition-all duration-200 active:scale-[0.99]"
                  >
                    <span>Download Resume</span>
                    <Download className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. Interactive 3D Lantern Canvas Layer (Transparent WebGL) */}
      <div
        className="
          relative z-10 mx-auto
          h-[320px] w-full
          sm:h-[380px]
          lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[52%]
          pointer-events-none
        "
      >
        <ChineseLanternCanvas />
      </div>

      {/* 4. Main Hero Two-Column Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1440px] items-center px-6 pb-16 pt-24 sm:px-10 lg:px-16 lg:py-0 pointer-events-none">
        <div className="w-full max-w-xl lg:max-w-[560px] pointer-events-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFFDF9]/85 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#17191F] shadow-sm ring-1 ring-[#17191F]/10 backdrop-blur-md">
            <span className="font-mono text-[#F04444] font-bold">&lt;/&gt;</span>
            <span>SDE · Full-Stack Developer</span>
          </div>

          {/* Main Heading */}
          <h1
            className="mt-6 text-4xl font-bold tracking-tight text-[#17191F] sm:text-5xl lg:text-[56px] lg:leading-[1.12] font-heading"
          >
            Hi, I’m{' '}
            <span className="text-[#F04444]">Mahaveer K.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base leading-relaxed text-[#667085] sm:text-lg sm:leading-relaxed max-w-[480px] font-medium">
            A final year IT student passionate about building useful, scalable and AI-powered applications for the real world.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#17191F] px-6 py-3.5 text-sm sm:text-base font-medium text-[#FFFDF9] shadow-md transition-all duration-200 hover:bg-[#17191F]/90 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F04444] focus-visible:ring-offset-2"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/MAHAVEER-IT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#FFFDF9]/85 px-6 py-3.5 text-sm sm:text-base font-medium text-[#17191F] shadow-sm ring-1 ring-[#17191F]/15 backdrop-blur-md transition-all duration-200 hover:bg-[#FFFDF9] hover:ring-[#17191F]/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F04444] focus-visible:ring-offset-2"
            >
              {/* GitHub Octocat SVG */}
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
