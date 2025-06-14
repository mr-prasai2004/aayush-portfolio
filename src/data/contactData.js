// src/data/contactData.js
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

export const contactInfo = {
  email: {
    label: 'Email',
    value: 'aayushprasai001@gmail.com',
    link: 'mailto:aayushprasai001@gmail.com'
  },
  phone: {
    label: 'Phone',
    value: '+977 9742305599',
    link: 'tel:+9779742305599'
  },
  location: {
    label: 'Location',
    value: 'Sundarharaincha-8, Morang'
  }
};

export const socialLinks = [
  {
    icon: Github,
    url: 'https://github.com/mr-prasai2004',
    label: 'GitHub',
    bgColor: 'bg-gray-800',
    hoverColor: 'hover:bg-gray-700'
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/aayushprasai2004/',
    label: 'LinkedIn',
    bgColor: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700'
  },
  {
    icon: Facebook,
    url: 'https://www.facebook.com/AnonyFlag',
    label: 'Facebook',
    bgColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600'
  },
  {
    icon: Instagram,
    url: 'https://instagram.com/mr_prasain',
    label: 'Instagram',
    bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
    hoverColor: 'hover:from-purple-600 hover:to-pink-600'
  }
];

export const sectionContent = {
  title: 'Get In Touch',
  subtitle: 'You can contact me at any time. I\'m always open to discuss new opportunities and projects.',
  socialMessage: 'Follow me on social media for updates and tech insights!',
  formLabels: {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    submit: 'Send Message'
  },
  placeholders: {
    name: 'Your Name',
    email: 'Your Email',
    subject: 'Subject',
    message: 'Your Message'
  }
};