'use client';
import Image from 'next/image';

export default function HeroSection({ isVisible }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="inline-block">
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full animate-bounce-slow">
              👋 Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Mahaveer.K
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A passionate <span className="font-semibold text-purple-600">Software Developer</span> pursuing B.Tech in IT. 
            I build impactful, scalable, and user-focused applications that blend creativity with clean architecture. 
            I build beautiful, functional applications that make a difference.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get In Touch
            </a>
          </div>
          <div className="flex gap-6 pt-4">
            <a href="https://github.com/MAHAVEER-IT" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/mahaveer-k" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:mahaveerk.dev@gmail.com" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110" aria-label="Email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>
        
        <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Animated rings */}
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping-slow"></div>
            <div className="absolute inset-4 border-4 border-purple-200 rounded-full animate-ping-slower"></div>
            <div className="absolute inset-8 border-4 border-pink-200 rounded-full animate-ping-slowest"></div>
            
            {/* Professional Image */}
            <div className="absolute inset-12 rounded-full overflow-hidden shadow-2xl animate-float ring-4 ring-white">
              <Image
                src="/mahaveer_hero.png"
                alt="Mahaveer K - Software Developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
