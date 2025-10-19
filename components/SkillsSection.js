'use client';

export default function SkillsSection() {
  const skills = [
    'Flutter',
    'React.js',
    'Node.js',
    'Next.js',
    'Firebase',
    'MongoDB',
    'MySQL',
    'DSA',
    'REST APIs',
    'BLoC Pattern',
    'Git & GitHub',
    'OpenAI API',
    'Tailwind CSS',
    'JavaScript',
    'TypeScript',
    'Express.js'
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 mb-16">Tools I work with</p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="group px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-white/20 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <h4 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {skill}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
