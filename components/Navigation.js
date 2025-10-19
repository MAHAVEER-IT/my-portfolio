'use client';

export default function Navigation({ isVisible }) {
  return (
    <nav className={`fixed top-0 w-full z-40 backdrop-blur-md bg-white/30 border-b border-white/20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </div>
        <ul className="flex gap-8 text-sm font-medium">
          <li><a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a></li>
          <li><a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
