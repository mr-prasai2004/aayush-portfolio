import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

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
  );
};

export default ContactSection;