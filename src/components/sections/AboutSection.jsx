import React from 'react';
import { MapPin, GraduationCap, Award } from 'lucide-react';

const AboutSection = ({ isVisible }) => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          data-animate="about-header"
          className={`text-center mb-12 ${
            isVisible('about-header') ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn more about my background, education, and journey in software development
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            data-animate="about-content"
            className={`${
              isVisible('about-content') ? 'animate-fade-in-left' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">My Journey</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I am a dedicated software developer with a strong foundation in both frontend and backend technologies. 
              My journey began with learning Java programming, and since then, I have expanded my expertise to include 
              modern web frameworks and design principles.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              I believe in continuous learning and staying updated with the latest technologies. My goal is to create 
              applications that not only solve real-world problems but also provide exceptional user experiences.
            </p>
            <div className="flex items-center gap-4 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>Morang, Nepal</span>
            </div>
          </div>
          <div 
            data-animate="about-cards"
            className={`space-y-6 ${
              isVisible('about-cards') ? 'animate-fade-in-right' : 'opacity-0'
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 transform">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Education</h4>
                  <p className="text-sm text-gray-600">SLC & Bachelor's Degree</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm space-y-2">
                <p><strong>SLC:</strong> Bright Future (2008-2023)</p>
                <p><strong>Bachelor:</strong> Itahari International College (2023-Present)</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 transform">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Achievements</h4>
                  <p className="text-sm text-gray-600">Recognition & Certifications</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Received multiple awards for academic excellence and project implementations during my studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;