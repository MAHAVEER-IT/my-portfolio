'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    { 
      title: 'Sow & Grow 🌱', 
      desc: 'Mobile app for farmers with AI-driven crop disease detection, voice assistance, vet communication, and vaccination alerts with local language support', 
      tech: 'Flutter | Firebase | AI | Google Maps',
      liveLink: 'https://www.canva.com/design/DAGrAd4CWMI/JwQ19kPFiNsjxFi0YFJ9_A/watch?utm_content=DAGrAd4CWMI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0409f5f144',
      githubLink: 'https://github.com/MAHAVEER-IT/Sow-Grow.git',
      image: 'https://res.cloudinary.com/dkn3it92b/image/upload/v1754154244/mhef6jixumwfyltnjukn.png',
      color: 'from-green-400 to-emerald-600'
    },
    { 
      title: 'Note Mate 🧠', 
      desc: 'AI-powered productivity web app with intelligent note-taking, speech-to-text, movable sticky notes, and AI-generated daily schedules', 
      tech: 'MERN Stack | OpenAI API | Vercel | Render',
      liveLink: 'https://note-mate-sage.vercel.app/',
      githubLink: 'https://github.com/MAHAVEER-IT/Note-Mate.git',
      image: 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg',
      color: 'from-blue-400 to-purple-600'
    },
    { 
      title: 'Visitor Parking Management 🚗', 
      desc: 'Web app for managing visitor parking with Google Auth, vehicle slot booking, and real-time data storage with premium/standard/economy options', 
      tech: 'Next.js | Firebase | Tailwind CSS | React Hook Form',
      liveLink: 'https://visitor-parking-tracker.vercel.app/',
      githubLink: 'https://github.com/MAHAVEER-IT/visitor-parking-tracker.git',
      image: 'https://res.cloudinary.com/dkn3it92b/image/upload/v1755081124/dzjmgglyft3hdqwnecwq.png',
      color: 'from-orange-400 to-red-600'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-16">Building impactful solutions with modern technologies</p>
        
        {/* Interactive Showcase */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* Main Project Display */}
          <div className="lg:w-2/3 relative">
            <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-lg shadow-2xl border border-white/40">
              {/* Project Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${projects[activeProject].color} opacity-20`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                  Project {activeProject + 1} of {projects.length}
                </div>
              </div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-4xl font-bold mb-3 drop-shadow-lg">{projects[activeProject].title}</h3>
                <p className="text-white/90 mb-4 text-sm drop-shadow-md max-w-2xl">{projects[activeProject].desc}</p>
                <p className="text-white/80 text-sm font-semibold mb-6 drop-shadow-md">{projects[activeProject].tech}</p>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={projects[activeProject].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={projects[activeProject].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-900/80 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveProject(activeProject === 0 ? projects.length - 1 : activeProject - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous project"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveProject(activeProject === projects.length - 1 ? 0 : activeProject + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next project"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Project Thumbnails Sidebar */}
          <div className="lg:w-1/3 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 w-full lg:max-h-[500px]">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`relative flex-shrink-0 w-64 lg:w-full h-32 rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeProject === index 
                    ? 'ring-4 ring-blue-500 scale-105 shadow-2xl' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105 shadow-lg'
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="256px"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-40`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-bold text-sm drop-shadow-lg">{project.title}</h4>
                  <p className="text-white/80 text-xs mt-1 drop-shadow-md line-clamp-1">{project.tech}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`transition-all duration-300 rounded-full ${
                activeProject === index 
                  ? 'w-8 h-2 bg-gradient-to-r from-blue-600 to-purple-600' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
