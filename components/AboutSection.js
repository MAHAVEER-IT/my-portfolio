'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story');

  const timeline = [
    { year: '2023', event: 'Started B.Tech IT at Sri Eshwar College', icon: '🎓' },
    { year: '2024', event: 'Built Sow & Grow - AI farming solution', icon: '🌱' },
    { year: '2025', event: 'Software Intern at Better Tomorrow', icon: '💼' },
    { year: '2027', event: 'Ready to innovate & lead', icon: '🚀' }
  ];

  const quickStats = [
    { value: '7+', label: 'Featured Projects' },
    { value: '400+', label: 'Coding Problems Solved' },
    { value: '1', label: 'Industry Internship' }
  ];

  const tabs = [
    { id: 'story', label: 'My Story', shortLabel: 'Story', icon: '📖' },
    { id: 'journey', label: 'Journey', shortLabel: 'Path', icon: '🗓️' },
    { id: 'passion', label: 'Passion', shortLabel: 'Drive', icon: '❤️' }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-8">Software Developer focused on building useful, scalable products with clean architecture.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/50 bg-white/75 backdrop-blur-md py-4 px-4 shadow-lg">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="grid grid-cols-3 border-b border-gray-200/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 sm:px-6 py-3 sm:py-4 text-center font-semibold transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50/50'
                }`}
              >
                <span className="block text-lg sm:text-xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden text-xs">{tab.shortLabel}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div key={activeTab} className="p-8 md:p-12 animate-fade-in">
            {activeTab === 'story' && (
              <div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Professional Image */}
                  <div className="md:w-1/3">
                    <div className="relative w-56 h-56 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse-slow"></div>
                      <div className="absolute inset-2 bg-white rounded-full overflow-hidden shadow-xl">
                        <Image
                          src="/mahaveer_hero.png"
                          alt="Mahaveer K - Software Developer"
                          fill
                          className="object-cover"
                          sizes="224px"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Side */}
                  <div className="md:w-2/3 space-y-4">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Hi, I'm Mahaveer! 👋</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I'm a passionate <span className="font-semibold text-blue-600">Software Developer</span> pursuing B.Tech in Information Technology at
                      <span className="font-semibold"> Sri Eshwar College of Engineering</span> (2023-2027), focused on product-thinking and practical problem solving.
                    </p>

                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 mt-1">▹</span>
                        <span>Builds <span className="font-semibold text-purple-600">impactful, scalable, user-focused apps</span> with clean architecture.</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 mt-1">▹</span>
                        <span>Hands-on with <span className="font-semibold">MERN, Flutter, and Next.js</span> across web and mobile products.</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 mt-1">▹</span>
                        <span>Strong DSA foundation with <span className="font-semibold text-green-600">400+ coding problems solved</span>.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'journey' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Timeline</h3>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-8">
                    {timeline.map((item, i) => (
                      <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="text-sm font-bold text-blue-600 mb-2">{item.year}</div>
                            <div className="text-lg text-gray-800 font-medium">{item.event}</div>
                          </div>
                        </div>
                        
                        {/* Center Icon */}
                        <div className="relative z-10">
                          <div className="w-16 h-16 bg-white rounded-full border-4 border-purple-500 flex items-center justify-center shadow-lg">
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                        </div>
                        
                        <div className="flex-1"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'passion' && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Drives Me</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-4">🏆</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Competitive Spirit</h4>
                    <p className="text-gray-700">
                      Participated in multiple hackathons, earning top positions for innovation and execution. 
                      I thrive in challenging environments that push me to think creatively.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-4">🎯</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Learning by Building</h4>
                    <p className="text-gray-700">
                      I believe the best way to learn is by creating. Every project is an opportunity to 
                      experiment with new technologies and solve real-world problems.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-4">🤝</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Team Collaboration</h4>
                    <p className="text-gray-700">
                      Great products are built by great teams. I enjoy collaborating with others, 
                      sharing knowledge, and building something bigger than myself.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl mb-4">💡</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Innovation Mindset</h4>
                    <p className="text-gray-700">
                      From AI-powered farming apps to smart parking systems, I'm always exploring 
                      how technology can make a meaningful impact in people's lives.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
