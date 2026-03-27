'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [viewMode, setViewMode] = useState('showcase');
  
  const projects = [
    {
      title: 'Geo-Guardian',
      desc: 'Real-time geospatial safety system for tourists with danger-zone monitoring, live admin notifications, and proactive in-app alerts powered by geofencing',
      tech: 'React Dashboard | Node.js | MongoDB | Flutter | Socket.IO | GeoJSON',
      challenge: 'Tourists often enter risky zones without context-aware warning systems.',
      innovation: 'Built a geospatial ecosystem where admins draw danger polygons and tourists get instant app alerts with live Socket.IO events.',
      outcome: 'Enabled proactive, real-time safety monitoring with fast geospatial queries and map-first operations.',
      highlights: ['Leaflet polygon zone editor', '2dsphere GeoJSON indexing', 'Live alert pipeline', 'Mobile + dashboard ecosystem'],
      liveLink: 'https://geo-guardian.netlify.app/',
      githubLink: 'https://github.com/MAHAVEER-IT/Geo-Guardian.git',
      image: 'https://res.cloudinary.com/dkn3it92b/image/upload/v1774594784/kt7jaerusvaixykgiemp.png',
      color: 'from-cyan-400 to-teal-600'
    },
    { 
      title: 'Sow & Grow', 
      desc: 'Mobile app for farmers with AI-driven crop disease detection, voice assistance, vet communication, and vaccination alerts with local language support', 
      tech: 'Flutter | Firebase | AI | Google Maps',
      challenge: 'Farmers need low-literacy, low-bandwidth guidance for crop and livestock decisions.',
      innovation: 'Designed a voice-friendly assistant with AI diagnosis, multilingual support, disease heatmaps, and livestock care workflows.',
      outcome: 'Unified diagnosis, advisory, reminders, and community support into one practical mobile companion.',
      highlights: ['Gemini-powered farm assistant', 'Voice-first UX', 'Disease heatmap + GPS', 'Vaccination reminder suite'],
      liveLink: 'https://www.canva.com/design/DAGrAd4CWMI/JwQ19kPFiNsjxFi0YFJ9_A/watch?utm_content=DAGrAd4CWMI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0409f5f144',
      githubLink: 'https://github.com/MAHAVEER-IT/Sow-Grow.git',
      image: 'https://res.cloudinary.com/dkn3it92b/image/upload/v1754154244/mhef6jixumwfyltnjukn.png',
      color: 'from-green-400 to-emerald-600'
    },
    { 
      title: 'Note Mate', 
      desc: 'AI-powered productivity web app with intelligent note-taking, speech-to-text, movable sticky notes, and AI-generated daily schedules', 
      tech: 'MERN Stack | OpenAI API | Vercel | Render',
      challenge: 'Students and professionals juggle fragmented note, reminder, and planning tools.',
      innovation: 'Combined note CRUD, draggable sticky notes, reminders, and AI-generated study planning in one stack.',
      outcome: 'Created a central productivity workspace with secure auth and AI-assisted planning loops.',
      highlights: ['AI study planner', 'Draggable sticky notes', 'Reminder workflow', 'JWT auth + protected routes'],
      liveLink: 'https://note-mate-sage.vercel.app/',
      githubLink: 'https://github.com/MAHAVEER-IT/Note-Mate.git',
      image: 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg',
      color: 'from-blue-400 to-purple-600'
    },
    { 
      title: 'Visitor Parking Management', 
      desc: 'Web app for managing visitor parking with Google Auth, vehicle slot booking, and real-time data storage with premium/standard/economy options', 
      tech: 'Next.js | Firebase | Tailwind CSS | React Hook Form',
      challenge: 'Manual visitor parking processes cause slot conflicts and poor visibility.',
      innovation: 'Built an authenticated booking flow with slot types, cost logic, and operational dashboards.',
      outcome: 'Improved booking clarity and day-to-day parking operations with a responsive web interface.',
      highlights: ['Google sign-in auth', 'Slot availability tracking', 'Booking history controls', 'Form-first validation UX'],
      liveLink: 'https://visitor-parking-tracker.vercel.app/',
      githubLink: 'https://github.com/MAHAVEER-IT/visitor-parking-tracker.git',
      image: 'https://res.cloudinary.com/dkn3it92b/image/upload/v1755081124/dzjmgglyft3hdqwnecwq.png',
      color: 'from-orange-400 to-red-600'
    },
    { 
      title: 'MyTravelLog', 
      desc: 'A full-stack Next.js travel blog application that allows users to explore destinations, search locations, and engage with content while providing admin capabilities for content management', 
      tech: 'Next.js | React | MongoDB | Mongoose | TailwindCSS | NextAuth.js | Cloudinary',
      challenge: 'Travel content is often scattered and hard to curate for regional explorers.',
      innovation: 'Created a searchable destination platform with comments, media-rich listings, and role-based admin publishing.',
      outcome: 'Delivered a scalable travel discovery system with strong content management and responsive UX.',
      highlights: ['Destination search + filters', 'GitHub OAuth authentication', 'Admin content pipeline', 'Cloudinary media handling'],
      liveLink: 'https://my-travel-log-sooty.vercel.app/',
      githubLink: 'https://github.com/MAHAVEER-IT/MyTravelLog.git',
      image: 'https://res.cloudinary.com/dkn3it92b/image/upload/v1754153224/wqpj5fehcsyvymrl74ou.png',
      color: 'from-cyan-400 to-blue-600'
    },
    { 
      title: 'Bank Insight', 
      desc: 'An all-in-one banking app that offers features such as balance check, mini statements, ATM blocking, customer support, loan calculators, nearby ATM/bank locator, currency converter, and expense tracker', 
      tech: 'Flutter | Firebase | Currency Converter API | Google Maps API',
      challenge: 'Users of multiple banks need one quick-access app for frequent utility actions.',
      innovation: 'Consolidated critical banking utilities, locator services, and financial helpers into one secure mobile shell.',
      outcome: 'Reduced friction for daily banking actions across multiple institutions from a single app.',
      highlights: ['Multi-bank utility flows', 'Card block and support access', 'ATM and branch locator', 'Currency and expense tools'],
      liveLink: 'https://drive.google.com/drive/folders/13j3pnF7rVRWrvD1OvyUghWhdSVP8HYQR',
      githubLink: 'https://github.com/MAHAVEER-IT/bank_inish.git',
      image: 'https://res.cloudinary.com/dkn3it92b/image/upload/v1751300070/ajzfnv0p6bweq3amnlbi.png',
      color: 'from-indigo-400 to-purple-600'
    },
    { 
      title: 'Blog App', 
      desc: 'A simple blog app demonstrating clean architecture and BLoC pattern in Flutter with Firebase integration for authentication and data storage', 
      tech: 'Flutter | Firebase Firestore | Firebase Auth | Hive | BLoC Pattern | Clean Architecture',
      challenge: 'Many learning projects skip architecture quality and become hard to scale.',
      innovation: 'Implemented clean architecture with BLoC, layered separation, real-time Firestore updates, and local session persistence.',
      outcome: 'Produced a maintainable Flutter blueprint for content apps with solid state and data flow patterns.',
      highlights: ['Clean architecture layers', 'BLoC state orchestration', 'Realtime Firestore sync', 'Hive one-time login'],
      liveLink: 'https://drive.google.com/drive/folders/1gO-ueeL_Biz7fTrmLjLf0Ol9jJhG76Io',
      githubLink: 'https://github.com/MAHAVEER-IT/Blog_Flutter.git',
      image: 'https://res.cloudinary.com/dkn3it92b/image/upload/v1751316254/wiujsd62cscl3wwvq2c2.png',
      color: 'from-pink-400 to-rose-600'
    }
  ];
  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 md:mb-16 text-sm sm:text-base">Building impactful solutions with modern technologies</p>

        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex rounded-full p-1 bg-white/70 border border-white/50 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setViewMode('showcase')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                viewMode === 'showcase' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'text-gray-700 hover:bg-white/70'
              }`}
            >
              Visual Showcase
            </button>
            <button
              onClick={() => setViewMode('case-study')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                viewMode === 'case-study' ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-white/70'
              }`}
            >
              Case Study Mode
            </button>
          </div>
        </div>
        
        {/* Interactive Showcase */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
          
          {/* Main Project Display */}
          <div className="w-full lg:w-2/3 relative">
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/65 backdrop-blur-xl shadow-2xl border border-white/50 transition-all duration-300 hover:shadow-blue-200/60">
              {/* Project Image */}
              <div className="relative h-64 sm:h-80 md:h-[27rem] overflow-hidden">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentProject.color} opacity-20`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-black/35 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white/90 border border-white/20">
                  Now Viewing
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-800 shadow-lg">
                  {activeProject + 1}/{projects.length}
                </div>
              </div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 drop-shadow-lg">{currentProject.title}</h3>
                <p className="text-white/90 mb-2 sm:mb-4 text-xs sm:text-sm drop-shadow-md max-w-2xl line-clamp-2 sm:line-clamp-3">{currentProject.desc}</p>
                <p className="inline-flex items-center text-white/90 text-[11px] sm:text-sm font-semibold mb-4 sm:mb-6 drop-shadow-md px-3 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm">{currentProject.tech}</p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  <a 
                    href={currentProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-white text-gray-900 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-1 sm:gap-2 shadow-lg"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="hidden xs:inline">Live Demo</span>
                    <span className="xs:hidden">Demo</span>
                  </a>
                  <a 
                    href={currentProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-gray-900/80 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-1 sm:gap-2 shadow-lg"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

              {viewMode === 'case-study' && (
                <div
                  key={`case-study-${activeProject}`}
                  className="relative z-10 mx-4 sm:mx-6 md:mx-8 mb-4 sm:mb-6 p-4 sm:p-5 rounded-2xl bg-white/88 border border-white/70 shadow-xl backdrop-blur-md"
                >
                  <div className="grid md:grid-cols-3 gap-4 text-gray-800">
                    <div className="animate-fade-in" style={{ animationDelay: '40ms' }}>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-cyan-700 mb-1">Problem</p>
                      <p className="text-xs sm:text-sm leading-relaxed">{currentProject.challenge}</p>
                    </div>
                    <div className="animate-fade-in" style={{ animationDelay: '120ms' }}>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-blue-700 mb-1">Build Approach</p>
                      <p className="text-xs sm:text-sm leading-relaxed">{currentProject.innovation}</p>
                    </div>
                    <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-teal-700 mb-1">Impact</p>
                      <p className="text-xs sm:text-sm leading-relaxed">{currentProject.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {currentProject.highlights.map((item, index) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 text-cyan-800 animate-fade-in"
                        style={{ animationDelay: `${280 + index * 60}ms` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 h-1.5 w-full rounded-full bg-white/70 overflow-hidden border border-white/50">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transition-all duration-500"
                style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }}
              ></div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveProject(activeProject === 0 ? projects.length - 1 : activeProject - 1)}
              className="absolute left-0 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/70 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 z-20"
              aria-label="Previous project"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveProject(activeProject === projects.length - 1 ? 0 : activeProject + 1)}
              className="absolute right-0 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/70 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 z-20"
              aria-label="Next project"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Project Thumbnails Sidebar */}
          <div className="w-full lg:w-1/3 rounded-2xl bg-white/45 backdrop-blur-md border border-white/50 shadow-lg flex lg:flex-col gap-3 sm:gap-4 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto pb-4 lg:pb-0 lg:max-h-[500px] lg:pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-2 sm:px-4 py-3 sm:py-5">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`relative flex-shrink-0 w-48 sm:w-56 lg:w-full h-24 sm:h-28 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeProject === index 
                    ? 'ring-2 sm:ring-4 ring-cyan-500 scale-[1.03] shadow-2xl opacity-100' 
                    : 'opacity-70 hover:opacity-100 hover:scale-[1.02] shadow-lg'
                }`}
                aria-pressed={activeProject === index}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-40`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4">
                  <h4 className="text-white font-bold text-xs sm:text-sm drop-shadow-lg line-clamp-1">{project.title}</h4>
                  <p className="text-white/80 text-[10px] sm:text-xs mt-0.5 sm:mt-1 drop-shadow-md line-clamp-1">{project.tech}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`transition-all duration-300 rounded-full ${
                activeProject === index 
                  ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-purple-600' 
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
