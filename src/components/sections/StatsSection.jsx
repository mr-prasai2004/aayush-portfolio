import React from 'react';
import { stats } from '../../data';

const StatsSection = ({ isVisible }) => {
  return (
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
  );
};

export default StatsSection;