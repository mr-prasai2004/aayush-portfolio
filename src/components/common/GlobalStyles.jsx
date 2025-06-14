import React from 'react';

const GlobalStyles = () => (
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
);

export default GlobalStyles;