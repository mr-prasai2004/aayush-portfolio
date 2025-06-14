import React from 'react';
import { experiences } from '../../data';

const ExperienceSection = ({ isVisible }) => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          data-animate="experience-header"
          className={`text-center mb-12 ${
            isVisible('experience-header') ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and key experiences in software development
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              data-animate={`experience-${index}`}
              className={`flex flex-col md:flex-row gap-6 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-[1.02] ${
                isVisible(`experience-${index}`) ? `animate-slide-in-up delay-${(index + 1) * 200}` : 'opacity-0'
              }`}
            >
              <div className="md:w-1/4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                    <exp.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm text-blue-600 font-medium">{exp.duration}</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;