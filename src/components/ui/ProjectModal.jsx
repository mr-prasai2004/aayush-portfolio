import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectModal = ({ isModalOpen, selectedProject, closeProjectModal }) => {
  if (!isModalOpen || !selectedProject) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={closeProjectModal}
    >
      <div 
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
          <button 
            onClick={closeProjectModal}
            className="text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
            <Code className="w-24 h-24 text-white" />
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">About This Project</h4>
            <p className="text-gray-600 leading-relaxed">{selectedProject.fullDescription}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedProject.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;