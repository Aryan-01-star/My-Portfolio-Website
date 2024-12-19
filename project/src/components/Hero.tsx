import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Eye } from 'lucide-react';
import { Button } from './common/Button';

const Hero: React.FC = () => {
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success',
  });

  return (
    <section id="home" className="min-h-screen bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 ml-[60px] lg:ml-0 lg:w-1/2 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-500"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl font-bold text-white"
          >
            Aryan
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-gray-400"
          >
            UI/UX Designer & Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 max-w-lg mx-auto lg:mx-0"
          >
            I create beautiful, functional, and user-centered digital
            experiences. With expertise in both design and development, I bridge
            the gap between aesthetics and functionality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex space-x-4 justify-center lg:justify-start"
          >
            <a 
              href="https://docs.google.com/document/d/1gMnUHeOG27TNqk4KWcqK6wWGmPzQkp_mKOTZQOEUzUs/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button icon={<Eye size={20} />}>Resume</Button>
            </a>
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <Button variant="secondary">View Projects</Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative lg:w-1/10 w-full h-[70vh] lg:h-[100vh] flex justify-center mt-4 lg:mt-16"
        >
          <iframe
            src="https://my.spline.design/nexbotrobotcharacterconcept-7ac9710361452b7cb1d909afbfff982a/"
            frameBorder="0"
            width="100%"
            height="78%"
            style={{
              pointerEvents: 'all',
              border: 'none',
            }}
            title="3D Robot Animation"
          />
        </motion.div>
      </div>

      {/* Inline Notification */}
      {notification.show && (
        <div
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md text-white ${
            notification.type === 'success'
              ? 'bg-green-600'
              : 'bg-red-600'
          }`}
        >
          {notification.message}
        </div>
      )}
    </section>
  );
};

export default Hero;
