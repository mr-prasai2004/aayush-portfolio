import React, { useState } from 'react';

// Components
import { Navigation, Footer } from './components/layout';
import {
  HeroSection,
  StatsSection,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
  ContactSection
} from './components/sections';
import { ProjectModal } from './components/ui';
import { GlobalStyles } from './components/common';

// Hooks
import { useScrollSpy, useIntersectionObserver } from './hooks';

// Utils
import { scrollToSection } from './utils';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Custom hooks
  const activeSection = useScrollSpy(['home', 'about', 'experience', 'skills', 'projects', 'contact']);
  const { isVisible } = useIntersectionObserver();

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      <GlobalStyles />
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
      <StatsSection isVisible={isVisible} />
      <AboutSection isVisible={isVisible} />
      <ExperienceSection isVisible={isVisible} />
      <SkillsSection isVisible={isVisible} />
      <ProjectsSection isVisible={isVisible} openProjectModal={openProjectModal} />
      <ProjectModal 
        isModalOpen={isModalOpen} 
        selectedProject={selectedProject} 
        closeProjectModal={closeProjectModal} 
      />
      <ContactSection isVisible={isVisible} />
      <Footer />
    </div>
  );
};

export default Portfolio;