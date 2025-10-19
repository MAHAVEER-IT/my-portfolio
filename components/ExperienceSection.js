'use client';

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-transparent to-white/30">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="text-center text-gray-600 mb-16">My professional journey</p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>
          
          {/* Experience Card */}
          <div className="relative ml-0 md:ml-20 mb-12">
            {/* Timeline dot */}
            <div className="absolute -left-12 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
            
            <div className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Development Intern</h3>
                  <p className="text-lg text-blue-600 font-semibold">Better Tomorrow</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Feb 2025 – Mar 2025
                  </span>
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold ml-2">
                    Remote
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">▹</span>
                  <span>Developed an <strong>AI-powered intelligent note-taking web application</strong> using the MERN stack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">▹</span>
                  <span>Integrated <strong>OpenAI APIs</strong> for real-time note summarization and dynamic schedule generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">▹</span>
                  <span>Implemented user authentication, note management, and personalized productivity tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">▹</span>
                  <span>Deployed the frontend on <strong>Vercel</strong> and backend on <strong>Render</strong>, ensuring smooth scalability and performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">▹</span>
                  <span>Collaborated with a cross-functional team to enhance UI/UX and maintain clean, modular code practices</span>
                </li>
              </ul>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {['MERN Stack', 'OpenAI API', 'Vercel', 'Render', 'REST APIs'].map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-lg text-sm font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Achievements */}
          <div className="relative ml-0 md:ml-20">
            <div className="absolute -left-12 top-8 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
            
            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🏆</span>
                Achievements & Activities
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span><strong>400+ coding problems</strong> solved across LeetCode, CodeChef, SkillRack, and HackerRank</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span>Participated in multiple <strong>hackathons</strong>, earning top positions for innovation and execution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span>Active contributor in open-source projects and technical communities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
