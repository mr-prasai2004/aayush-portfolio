import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { projects } from '../../data';

const ProjectsSection = ({ isVisible, openProjectModal }) => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          data-animate="projects-header"
          className={`text-center mb-12 ${
            isVisible('projects-header') ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Some of my recent work and projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-animate={`project-${index}`}
              className={`bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                isVisible(`project-${index}`) ? `animate-slide-in-up delay-${(index + 1) * 200}` : 'opacity-0'
              }`}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group">
                <Code className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs hover:bg-blue-200 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => openProjectModal(project)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 hover:scale-105 transform"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;