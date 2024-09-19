import React from 'react';
import { motion } from 'framer-motion'; // For animations

const Services = () => {
  return (
    <div className="text-center mt-10">
      {/* Section Header */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Services
      </motion.h1>

      {/* Introduction Text */}
      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        As a dedicated frontend engineer and software developer, I offer a range
        of services designed to meet your digital needs. Whether you're looking
        to build a new website, develop a mobile app, or improve user
        experiences, I can help you achieve your goals with precision and
        creativity.
      </motion.p>

      {/* Services Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Web Development */}
        <motion.div
          className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Web Development
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            I create responsive and high-performance websites using modern
            technologies. From static sites to complex web applications, I
            ensure an optimal user experience across all devices.
          </p>
        </motion.div>

        {/* Mobile App Development */}
        <motion.div
          className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Mobile App Development
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            I develop intuitive and feature-rich mobile applications for both
            iOS and Android platforms. My apps are designed to deliver seamless
            performance and engaging user experiences.
          </p>
        </motion.div>

        {/* UX/UI Design */}
        <motion.div
          className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            UX/UI Design
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            I offer comprehensive UX/UI design services to create user-centered
            designs that are both visually appealing and functionally efficient.
            My designs aim to enhance usability and user satisfaction.
          </p>
        </motion.div>
      </div>

      {/* Contact Button */}
      <motion.a
        href="#contact"
        className="mt-12 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Get In Touch
      </motion.a>
    </div>
  );
};

export default Services;
