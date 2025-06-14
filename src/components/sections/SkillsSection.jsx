import React from 'react';
import { skills } from '../../data';

const SkillsSection = ({ isVisible }) => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          data-animate="skills-header"
          className={`text-center mb-12 ${
            isVisible('skills-header') ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              data-animate={`skill-${index}`}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${
                isVisible(`skill-${index}`) ? `animate-fade-in-up delay-${(index + 1) * 100}` : 'opacity-0'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                <span className="text-blue-600 font-medium">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full ${
                    isVisible(`skill-${index}`) ? 'animate-skill-bar' : 'w-0'
                  }`}
                  style={{ '--progress-width': `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;