import React from 'react';

const Navigation = ({ activeSection, scrollToSection }) => {
  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            Aayush Prasai
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors duration-300 ${
                  activeSection === item.toLowerCase() 
                    ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;