import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Download, ExternalLink, Code, Palette, Server, User, GraduationCap, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set(prev).add(entry.target.dataset.animate));
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const isVisible = (elementId) => visibleElements.has(elementId);

  const stats = [
    { number: '2+', label: 'Years of experience' },
    { number: '15+', label: 'Completed Projects' },
    { number: '10+', label: 'Happy Clients' },
    { number: '3+', label: 'Awards Won' }
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: '2023 - Present',
      description: 'Developing modern web applications using React.js, Node.js, and Django. Working on e-commerce platforms and business management systems.',
      icon: Code
    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      duration: '2022 - 2023',
      description: 'Designed user interfaces for mobile and web applications. Created wireframes, prototypes, and conducted user research.',
      icon: Palette
    },
    {
      title: 'Backend Developer',
      company: 'StartUp Ventures',
      duration: '2021 - 2022',
      description: 'Built scalable backend systems using Python Django and Java. Implemented RESTful APIs and database management.',
      icon: Server
    }
  ];

  const skills = [
    { name: 'UI/UX Design', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Django', percentage: 85 },
    { name: 'Java', percentage: 75 },
    { name: 'Python', percentage: 80 }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard. Built with modern web technologies to provide seamless shopping experience.',
      fullDescription: 'This comprehensive e-commerce platform includes user registration and authentication, product catalog with search and filtering, shopping cart functionality, secure payment processing, order management system, admin dashboard for inventory management, real-time notifications, and responsive design for all devices. The platform is built with scalability in mind and can handle thousands of concurrent users.',
      tech: ['React.js', 'Django', 'PostgreSQL', 'Stripe API', 'Redis'],
      githubLink: 'https://github.com/aayushprasai/ecommerce-platform',
      liveLink: 'https://ecommerce-demo.vercel.app',
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Real-time Updates', 'Responsive Design']
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team communication.',
      fullDescription: 'A comprehensive task management system designed for teams to collaborate effectively. Features include project creation and management, task assignment with deadlines, real-time chat and notifications, file sharing and document management, progress tracking with visual dashboards, team member role management, and integration with popular tools like Slack and Google Drive.',
      tech: ['Node.js', 'React.js', 'MongoDB', 'Socket.io', 'Express.js'],
      githubLink: 'https://github.com/aayushprasai/task-management',
      liveLink: 'https://taskmanager-demo.vercel.app',
      features: ['Real-time Collaboration', 'File Sharing', 'Progress Tracking', 'Team Chat', 'Calendar Integration']
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform for online courses with video streaming, quizzes, and progress tracking.',
      fullDescription: 'An advanced learning management system that provides a complete online education experience. The platform includes course creation tools for instructors, video streaming with adaptive quality, interactive quizzes and assignments, student progress analytics, discussion forums, certificate generation, mobile-responsive design, and integration with video conferencing tools for live classes.',
      tech: ['Django', 'React.js', 'MySQL', 'AWS S3', 'WebRTC'],
      githubLink: 'https://github.com/aayushprasai/lms-platform',
      liveLink: 'https://lms-demo.vercel.app',
      features: ['Video Streaming', 'Interactive Quizzes', 'Progress Analytics', 'Discussion Forums', 'Certificate System']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes skillProgress {
          from {
            width: 0%;
          }
          to {
            width: var(--progress-width);
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          opacity: 0;
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-slide-in-up {
          opacity: 0;
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          opacity: 0;
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-skill-bar {
          animation: skillProgress 1.5s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">
              Aayush Prasai
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
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

      {/* Hero Section */}
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                data-animate={`stat-${index}`}
                className={`text-center ${
                  isVisible(`stat-${index}`) ? `animate-slide-in-up delay-${(index + 1) * 100}` : 'opacity-0'
                }`}
              >
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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
                <span>Kathmandu, Nepal</span>
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

      {/* Experience Section */}
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

      {/* Skills Section */}
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

      {/* Projects Section */}
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

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeProjectModal}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
              <button 
                onClick={closeProjectModal}
                className="text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image/Icon */}
              <div className="h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-24 h-24 text-white" />
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">About This Project</h4>
                <p className="text-gray-600 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Technologies Used */}
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

              {/* Features */}
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

              {/* Action Buttons */}
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
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            data-animate="contact-header"
            className={`text-center mb-12 ${
              isVisible('contact-header') ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              You can contact me at any time. I'm always open to discuss new opportunities and projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div 
              data-animate="contact-info"
              className={`space-y-6 ${
                isVisible('contact-info') ? 'animate-fade-in-left' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">aayushprasai001@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">9742305599</p>
                </div>
              </div>
              <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-12">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-12">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div 
              data-animate="contact-form"
              className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${
                isVisible('contact-form') ? 'animate-fade-in-right' : 'opacity-0'
              }`}
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Aayush Prasai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;