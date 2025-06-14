// src/components/sections/ContactSection.jsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, socialLinks, sectionContent } from '../../data/contactData';

const ContactSection = ({ isVisible }) => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          data-animate="contact-header"
          className={`text-center mb-12 ${
            isVisible('contact-header') ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {sectionContent.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {sectionContent.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            data-animate="contact-info"
            className={`space-y-6 ${
              isVisible('contact-info') ? 'animate-fade-in-left' : 'opacity-0'
            }`}
          >
            {/* Email */}
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{contactInfo.email.label}</h4>
                <a 
                  href={contactInfo.email.link}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {contactInfo.email.value}
                </a>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{contactInfo.phone.label}</h4>
                <a 
                  href={contactInfo.phone.link}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {contactInfo.phone.value}
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{contactInfo.location.label}</h4>
                <p className="text-gray-600">{contactInfo.location.value}</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="font-semibold text-gray-800 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.bgColor} rounded-lg flex items-center justify-center ${social.hoverColor} transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-12 group`}
                      title={social.label}
                    >
                      <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-3">
                {sectionContent.socialMessage}
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            data-animate="contact-form"
            className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${
              isVisible('contact-form') ? 'animate-fade-in-right' : 'opacity-0'
            }`}
          >
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {sectionContent.formLabels.name}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder={sectionContent.placeholders.name}
                  required
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {sectionContent.formLabels.email}
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder={sectionContent.placeholders.email}
                  required
                />
              </div>
              
              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {sectionContent.formLabels.subject}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder={sectionContent.placeholders.subject}
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {sectionContent.formLabels.message}
                </label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 resize-vertical"
                  placeholder={sectionContent.placeholders.message}
                  required
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform font-medium"
              >
                {sectionContent.formLabels.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;