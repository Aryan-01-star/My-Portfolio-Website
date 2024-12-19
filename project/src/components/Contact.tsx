import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and interesting projects.
          Let's work together to create something amazing.
        </p>
        <div className="flex justify-center space-x-6">
          {/* GitHub Link */}
          <a 
            href="https://github.com/Aryan-01-star" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Github className="text-purple-500" size={24} />
          </a>

          {/* LinkedIn Link */}
          <a 
            href="https://www.linkedin.com/in/aryan-kumar-p-7b4089253" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Linkedin className="text-purple-500" size={24} />
          </a>

          {/* Twitter (X) Link */}
          <a 
            href="https://x.com/Aryankp01" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Twitter className="text-purple-500" size={24} />
          </a>

          {/* Email Link */}
          <a 
            href="mailto:aryanpandey35247@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Mail className="text-purple-500" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
