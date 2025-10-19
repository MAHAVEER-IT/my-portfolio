'use client';
import { useState, useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Use requestAnimationFrame to throttle updates
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          setMousePosition({ x: targetX, y: targetY });
          rafId.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Animated background orbs - hardware accelerated */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float will-change-transform"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float-delayed will-change-transform"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse-slow will-change-transform"></div>

      {/* Optimized cursor follower with GPU acceleration */}
      <div 
        className="pointer-events-none fixed w-6 h-6 bg-blue-400/20 rounded-full blur-xl z-50 will-change-transform"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
          transform: 'scale(2) translateZ(0)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      ></div>
    </>
  );
}
