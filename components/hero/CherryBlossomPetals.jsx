"use client";

import React, { useRef, useState, useEffect } from 'react';

// Curated lightweight petals: staggered timing, balanced spread, zero 3D matrix overhead
const PETALS = [
  // Left side petals
  { id: 1, left: 7, size: 16, duration: 12.0, delay: -2.4, anim: 'petalDriftA', opacity: 0.85, shape: 0, mobile: true },
  { id: 2, left: 22, size: 13, duration: 14.5, delay: -7.5, anim: 'petalDriftB', opacity: 0.75, shape: 1, mobile: true },
  
  // Center petals
  { id: 3, left: 40, size: 15, duration: 13.0, delay: -4.8, anim: 'petalDriftC', opacity: 0.80, shape: 2, mobile: true },
  { id: 4, left: 58, size: 12, duration: 15.5, delay: -9.2, anim: 'petalDriftA', opacity: 0.65, shape: 0, mobile: true },
  
  // Right side petals (desktop)
  { id: 5, left: 74, size: 17, duration: 11.5, delay: -3.5, anim: 'petalDriftB', opacity: 0.82, shape: 1, mobile: false },
  { id: 6, left: 88, size: 14, duration: 14.0, delay: -11.0, anim: 'petalDriftC', opacity: 0.70, shape: 2, mobile: false },
  
  // Distant depth petals (desktop)
  { id: 7, left: 32, size: 10, duration: 17.0, delay: -6.0, anim: 'petalDriftA', opacity: 0.50, shape: 0, mobile: false },
  { id: 8, left: 82, size: 11, duration: 16.5, delay: -13.5, anim: 'petalDriftB', opacity: 0.55, shape: 1, mobile: false },
];

export const CherryBlossomPetals = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;

    // Pause CSS animation completely when section is not in viewport (saves 100% GPU compute)
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "150px 0px", threshold: 0.01 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="cherry-blossom-layer absolute inset-0 pointer-events-none overflow-hidden z-[15] transform-gpu [contain:strict]"
      style={{
        display: isVisible ? 'block' : 'none',
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes petalDriftA {
          0% {
            transform: translate3d(0, -40px, 0) rotate(0deg) scaleX(1);
            opacity: 0;
          }
          10% {
            opacity: var(--petal-opacity, 0.75);
          }
          35% {
            transform: translate3d(35px, 35vh, 0) rotate(55deg) scaleX(0.4);
          }
          65% {
            transform: translate3d(15px, 68vh, 0) rotate(140deg) scaleX(0.9);
          }
          88% {
            opacity: var(--petal-opacity, 0.75);
          }
          100% {
            transform: translate3d(55px, 105vh, 0) rotate(220deg) scaleX(0.3);
            opacity: 0;
          }
        }

        @keyframes petalDriftB {
          0% {
            transform: translate3d(0, -40px, 0) rotate(-20deg) scaleX(0.6);
            opacity: 0;
          }
          12% {
            opacity: var(--petal-opacity, 0.7);
          }
          40% {
            transform: translate3d(-25px, 38vh, 0) rotate(40deg) scaleX(1);
          }
          70% {
            transform: translate3d(30px, 72vh, 0) rotate(115deg) scaleX(0.5);
          }
          88% {
            opacity: var(--petal-opacity, 0.7);
          }
          100% {
            transform: translate3d(15px, 105vh, 0) rotate(180deg) scaleX(0.8);
            opacity: 0;
          }
        }

        @keyframes petalDriftC {
          0% {
            transform: translate3d(0, -40px, 0) rotate(30deg) scaleX(0.8);
            opacity: 0;
          }
          10% {
            opacity: var(--petal-opacity, 0.8);
          }
          45% {
            transform: translate3d(50px, 44vh, 0) rotate(120deg) scaleX(0.35);
          }
          75% {
            transform: translate3d(85px, 76vh, 0) rotate(190deg) scaleX(0.95);
          }
          90% {
            opacity: var(--petal-opacity, 0.8);
          }
          100% {
            transform: translate3d(110px, 105vh, 0) rotate(260deg) scaleX(0.5);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cherry-blossom-layer {
            display: none !important;
          }
        }
      `}</style>

      {/* Reusable SVG Definitions for Subtle Gradients */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id="sakuraGrad0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFAAA6" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#FFC2D1" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFE5EC" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="sakuraGrad1" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FF9EAA" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#FFB3C6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFF0F5" stopOpacity="0.70" />
          </linearGradient>
          <linearGradient id="sakuraGrad2" x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#FCAEAE" stopOpacity="0.90" />
            <stop offset="60%" stopColor="#FFCCD5" stopOpacity="0.80" />
            <stop offset="100%" stopColor="#FFF5F7" stopOpacity="0.75" />
          </linearGradient>
        </defs>
      </svg>

      {/* Render Lightweight Individual Petals */}
      {PETALS.map((petal) => (
        <span
          key={petal.id}
          className={`absolute top-0 transform-gpu backface-hidden ${
            petal.mobile ? 'block' : 'hidden md:block'
          }`}
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.25}px`,
            animationName: petal.anim,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            animationPlayState: isVisible ? 'running' : 'paused',
            '--petal-opacity': petal.opacity,
          }}
        >
          <svg viewBox="0 0 24 30" className="w-full h-full" fill="none">
            {petal.shape === 0 && (
              <path
                d="M12 2 C8.5 0.5 4 4 4 11 C4 18 8.5 24 12 27 C15.5 24 20 18 20 11 C20 4 15.5 0.5 12 2 Z"
                fill="url(#sakuraGrad0)"
              />
            )}
            {petal.shape === 1 && (
              <path
                d="M11 2 C6.5 1 2.5 6 3 13 C3.8 20 8.8 25 13 27 C17.2 24.5 21 17 20 10 C19.2 4.5 15.2 2 11 2 Z"
                fill="url(#sakuraGrad1)"
              />
            )}
            {petal.shape === 2 && (
              <path
                d="M12 1.5 C7.5 1.5 3 6.5 3.5 13.5 C4.2 20 8.8 24.5 12 27.5 C15.2 24.5 19.8 20 20.5 13.5 C21 6.5 16.5 1.5 12 1.5 Z"
                fill="url(#sakuraGrad2)"
              />
            )}
          </svg>
        </span>
      ))}
    </div>
  );
};

export default CherryBlossomPetals;
