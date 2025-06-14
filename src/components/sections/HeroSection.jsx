import React from 'react';
import { Download, Code, User } from 'lucide-react';

const HeroSection = ({ isVisible, scrollToSection }) => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 
              data-animate="hero-title"
              className={`text-5xl lg:text-6xl font-bold text-gray-800 mb-6 ${
                isVisible('hero-title') ? 'animate-fade-in-left' : 'opacity-0'
              }`}
            >
              I AM <span className="text-blue-600">AAYUSH PRASAI</span>
            </h1>
            <p 
              data-animate="hero-description"
              className={`text-lg text-gray-600 leading-relaxed mb-8 ${
                isVisible('hero-description') ? 'animate-fade-in-left delay-200' : 'opacity-0'
              }`}
            >
              A passionate full-stack developer and UI/UX designer with expertise in modern web technologies. 
              I specialize in creating user-friendly applications using React.js, Node.js, Django, and Java. 
              With extensive experience in software design and development, I am highly interested in learning 
              and implementing new technologies to develop applications that benefit people.
            </p>
            <div 
              data-animate="hero-buttons"
              className={`flex flex-col sm:flex-row gap-4 ${
                isVisible('hero-buttons') ? 'animate-fade-in-left delay-400' : 'opacity-0'
              }`}
            >
              <a 
                href="/cv/Aayush Prasai___CV.pdf" 
                download="Aayush Prasai___CV.pdf"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 hover:scale-105 transform"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 transform"
              >
                View Portfolio
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div 
              data-animate="hero-image"
              className={`relative ${
                isVisible('hero-image') ? 'animate-scale-in delay-300' : 'opacity-0'
              }`}
            >
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/images/aayush.png" 
                  alt="Aayush Prasai" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <User className="w-32 h-32 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                <Code className="w-8 h-8 text-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;