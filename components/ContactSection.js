'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct mailto URL with form data
    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open Gmail (or default email client) with pre-filled data
    window.location.href = `mailto:mahaveerk.dev@gmail.com?subject=${subject}&body=${body}`;
    
    // Optional: Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'mahaveerk.dev@gmail.com', link: 'mailto:mahaveerk.dev@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'mahaveer-k', link: 'https://linkedin.com/in/mahaveer-k' },
    { icon: '💻', label: 'GitHub', value: 'MAHAVEER-IT', link: 'https://github.com/MAHAVEER-IT' }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">Have a project in mind? Let's create something amazing together!</p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info Cards - Left Side */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 bg-white/70 backdrop-blur-lg rounded-2xl border border-white/40 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500">{info.label}</div>
                    <div className="text-gray-800 font-medium">{info.value}</div>
                  </div>
                </div>
              </a>
            ))}
            
            {/* Additional Info Card */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
              <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span>⚡</span> Quick Response
              </h4>
              <p className="text-sm text-gray-600">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>

          {/* Contact Form - Right Side with Animated Border */}
          <div className="lg:col-span-3">
            <div className="contact-card-wrapper group">
              <div className="contact-card-border"></div>
              <div className="contact-card-content">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all duration-300 bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all duration-300 bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows="6" 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all duration-300 bg-white resize-none"
                      placeholder="Tell me about your project, timeline, and requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
