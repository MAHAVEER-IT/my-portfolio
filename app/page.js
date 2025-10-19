'use client';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackgroundEffects from '@/components/BackgroundEffects';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay initial animation to prevent layout shift
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Optimize scroll performance
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <BackgroundEffects />
      <Navigation isVisible={isVisible} />
      <HeroSection isVisible={isVisible} />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
